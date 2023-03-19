import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { db } from "../../../firebase/initFirebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import trashIcon from "../../icons/trash.png";
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
        const q = query(collectionRef, orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
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

  //ref
  // const inputRef = useRef();
  // useEffect(() => {
  //   const checkIfClickedOutside = (e) => {
  //     if (!inputRef.current.contains(e.target)) {
  //       console.log("outside input");
  //       setWriteContents({
  //         title: "",
  //         type: "",
  //         skills: "",
  //         overview: "",
  //         content_one: "",
  //         content_two: "",
  //       });
  //     } else {
  //       console.log("inside input area");
  //     }
  //   };
  //   document.addEventListener("mousedown", checkIfClickedOutside);
  //   return () => {
  //     document.removeEventListener("mousdown", checkIfClickedOutside);
  //   };
  // }, []);

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
            <label htmlFor="" name="title">
              Title
            </label>
            <textarea
              name="title"
              label="title"
              placeholder="title"
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
              placeholder="type"
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
              placeholder="skills"
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
              placeholder="overview"
              value={writeContents.overview}
              onChange={(e) =>
                setWriteContents({ ...writeContents, overview: e.target.value })
              }
              cols="30"
              rows="10"
            ></textarea>{" "}
            <textarea
              name="content_one"
              label="content_one"
              placeholder="content_one"
              value={writeContents.content_one}
              onChange={(e) =>
                setWriteContents({
                  ...writeContents,
                  content_one: e.target.value,
                })
              }
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              name="content_two"
              label="content_two"
              placeholder="content_two"
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
              <div key={content.id} className="eachContent">
                <div>{content.title}</div>
                <div>{content.type}</div>
                <div>{content.skills}</div>
                <div>{content.overview}</div>
                <div>{content.content_one}</div>
                <div>{content.content_two}</div>
              </div>
            ))}
          </section>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default adminWorks;
