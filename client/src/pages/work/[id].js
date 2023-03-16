import React from "react";
import Layout from "@/components/layout";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../../../firebase/initFirebase";
import { useEffect, useState } from "react";

const workPages = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "content");
    // const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
      return unsubscribe;
    });
  }, []);
  return (
    <React.Fragment>
      <Layout>
        <h1>
          {todos.map((content) => (
            <div key={content.id}>{content.title}</div>
          ))}
        </h1>
        hello
      </Layout>
    </React.Fragment>
  );
};

export default workPages;
