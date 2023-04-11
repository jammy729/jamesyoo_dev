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
        const collectionRef = collection(db, "brixwork");
        const q = query(collectionRef, orderBy("timestamp", "asc"));
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

  //writing
  const [writeContents, setWriteContents] = useState({
    cover_image: "",
    title: "",
    type: "",
    skills: "",
    source: "",
    overview: "",
    main_project: "",
    img_one: "",
    img_one_desc: "",
    challenges_1: "",
    img_two: "",
    img_two_desc: "",
    img_three: "",
    img_three_desc: "",
    challenges_2: "",
    reflection: "",
  });

  const onSubmit = async () => {
    const collectionRef = collection(db, "brixwork");
    const docRef = await addDoc(collectionRef, {
      ...writeContents,
      timestamp: serverTimestamp(),
    });
    setWriteContents({
      cover_image: "",
      title: "",
      type: "",
      skills: "",
      source: "",
      overview: "",
      main_project: "",
      img_one: "",
      img_one_desc: "",
      challenges_1: "",
      img_two: "",
      img_two_desc: "",
      img_three: "",
      img_three_desc: "",
      challenges_2: "",
      reflection: "",
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
              name="cover_image"
              label="cover_image"
              placeholder="cover_image"
              value={writeContents.cover_image}
              onChange={(e) =>
                setWriteContents({
                  ...writeContents,
                  cover_image: e.target.value,
                })
              }
              cols="40"
              rows="20"
            ></textarea>
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
              name="source"
              label="source"
              placeholder="source"
              value={writeContents.source}
              onChange={(e) =>
                setWriteContents({ ...writeContents, source: e.target.value })
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
                setWriteContents({
                  ...writeContents,
                  overview: e.target.value,
                })
              }
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              name="main_project"
              label="main_project"
              placeholder="main_project"
              value={writeContents.main_project}
              onChange={(e) =>
                setWriteContents({
                  ...writeContents,
                  main_project: e.target.value,
                })
              }
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              name="img_one"
              label="img_one"
              placeholder="img_one"
              value={writeContents.img_one}
              onChange={(e) =>
                setWriteContents({
                  ...writeContents,
                  img_one: e.target.value,
                })
              }
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              name="img_one_desc"
              label="img_one_desc"
              placeholder="maiimg_one_descn_project"
              value={writeContents.img_one_desc}
              onChange={(e) =>
                setWriteContents({
                  ...writeContents,
                  img_one_desc: e.target.value,
                })
              }
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              name="challenges_1"
              label="challenges_1"
              placeholder="challenges_1"
              value={writeContents.challenges_1}
              onChange={(e) =>
                setWriteContents({
                  ...writeContents,
                  challenges_1: e.target.value,
                })
              }
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              name="img_two"
              label="img_two"
              placeholder="img_two"
              value={writeContents.img_two}
              onChange={(e) =>
                setWriteContents({
                  ...writeContents,
                  img_two: e.target.value,
                })
              }
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              name="img_two_desc"
              label="img_two_desc"
              placeholder="img_two_desc"
              value={writeContents.img_two_desc}
              onChange={(e) =>
                setWriteContents({
                  ...writeContents,
                  img_two_desc: e.target.value,
                })
              }
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              name="img_three"
              label="img_three"
              placeholder="img_three"
              value={writeContents.img_three}
              onChange={(e) =>
                setWriteContents({
                  ...writeContents,
                  img_three: e.target.value,
                })
              }
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              name="img_three_desc"
              label="img_three_desc"
              placeholder="img_three_desc"
              value={writeContents.img_three_desc}
              onChange={(e) =>
                setWriteContents({
                  ...writeContents,
                  img_three_desc: e.target.value,
                })
              }
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              name="challenges_2"
              label="challenges_2"
              placeholder="challenges_2"
              value={writeContents.challenges_2}
              onChange={(e) =>
                setWriteContents({
                  ...writeContents,
                  challenges_2: e.target.value,
                })
              }
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              name="reflection"
              label="reflection"
              placeholder="reflection"
              value={writeContents.reflection}
              onChange={(e) =>
                setWriteContents({
                  ...writeContents,
                  reflection: e.target.value,
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
