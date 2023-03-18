import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { db } from "../../../firebase/initFirebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
} from "@firebase/firestore";
import Layout from "@/components/layout";
const adminWorks = () => {
  //router
  const router = useRouter();
  let { id } = router.query;

  //reading
  const [readContents, setReadContents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const collectionRef = collection(db, `${id}`);
        const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
          setReadContents(
            querySnapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
          return unsubscribe;
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [readContents]);

  //writing
  const [writeContents, setWriteContents] = useState({
    title: "",
    type: "",
    skills: "",
    overview: "",
    content_one: "",
    content_two: "",
  });

  const onSubmit = async () => {
    const collectionRef = collection(db, `${id}`);
    const docRef = await addDoc(collectionRef, {
      ...writeContents,
      timestamp: serverTimestamp(),
    });
    setWriteContents({
      title: "",
      type: "",
      skills: "",
      overview: "",
      content_one: "",
      content_two: "",
    });
    alert(`todo with id ${docRef.id} is added successfully`);
  };

  return (
    <React.Fragment>
      <Layout>
        <div className="container-layout">
          <pre>{JSON.stringify(writeContents)}</pre>
          <section className="input_area">
            <textarea
              name="title"
              label="title"
              value={writeContents.title}
              onChange={(e) =>
                setWriteContents({ ...writeContents, title: e.target.value })
              }
              cols="40"
              rows="20"
            ></textarea>
            <textarea
              name="type"
              label="type"
              value={writeContents.type}
              onChange={(e) =>
                setWriteContents({ ...writeContents, type: e.target.value })
              }
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              name="skills"
              label="skills"
              value={writeContents.skills}
              onChange={(e) =>
                setWriteContents({ ...writeContents, skills: e.target.value })
              }
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              name="overview"
              label="overview"
              value={writeContents.overview}
              onChange={(e) =>
                setWriteContents({ ...writeContents, overview: e.target.value })
              }
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              name="content_two"
              label="content_two"
              value={writeContents.content_two}
              onChange={(e) =>
                setWriteContents({
                  ...writeContents,
                  content_two: e.target.value,
                })
              }
              cols="30"
              rows="10"
            ></textarea>
          </section>

          <input type="submit" onClick={onSubmit} />
          <section>
            {readContents?.map((content) => (
              <div key={content.id}>
                {content.title}
                {content.type}
                {content.type}
                {content.skills}
                {content.overview}
                {content.content_one}
              </div>
            ))}
          </section>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default adminWorks;
