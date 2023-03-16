import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../../../firebase/initFirebase";
import { useEffect, useState } from "react";

const workPages = () => {
  const [todos, setTodos] = useState([]);
  const router = useRouter();
  let { id } = router.query;
  // id = id.substring(1);
  useEffect(() => {
    const collectionRef = collection(db, `${id}`);
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
        <div>
          {todos.map((content) => (
            <div key={content.id}>
              <h1>{content.title}</h1>
              <h2>{content?.heading}</h2>
            </div>
          ))}
        </div>
        {id}
      </Layout>
    </React.Fragment>
  );
};

export default workPages;
