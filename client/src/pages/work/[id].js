import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../../../firebase/initFirebase";
import { useEffect, useState } from "react";

const workPages = () => {
  const [contents, setContents] = useState([]);

  const router = useRouter();
  let { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      try {
        const collectionRef = collection(db, `${id}`);
        const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
          setContents(
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
  }, [contents]);

  return (
    <React.Fragment>
      <Layout>
        <div>
          {contents?.map((content) => (
            <div key={content.id}>
              {content.title}
              {content.type}
              {content.type}
              {content.skills}
              {content.overview}
              {content.content_one}
            </div>
          ))}
        </div>
        {id}
      </Layout>
    </React.Fragment>
  );
};

export default workPages;
