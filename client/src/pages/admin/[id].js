import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { db } from "../../../firebase/initFirebase";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";

const adminWorks = () => {
  const router = useRouter();
  let { id } = router.query;
  const [content, setContent] = useState({
    title: "",
    heading_one: "",
  });
  const onSubmit = async () => {
    const collectionRef = collection(db, `${id}`);
    const docRef = await addDoc(collectionRef, {
      ...content,
      timestamp: serverTimestamp(),
    });
    setContent({ title: "", detail: "" });
    alert(`todo with id ${docRef.id} is added successfully`);
  };

  return (
    <React.Fragment>
      <pre>{JSON.stringify(content)}</pre>
      <textarea
        name="title"
        label="title"
        value={content.title}
        onChange={(e) => setContent({ ...content, title: e.target.value })}
        cols="30"
        rows="10"
      ></textarea>
      <textarea
        name="heading_one"
        label="heading_one"
        value={content.heading_one}
        onChange={(e) =>
          setContent({ ...content, heading_one: e.target.value })
        }
        cols="30"
        rows="10"
      ></textarea>
      <input type="text" onClick={onSubmit} />
    </React.Fragment>
  );
};

export default adminWorks;
