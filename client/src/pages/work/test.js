import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../../../firebase/initFirebase";
import { useEffect, useState } from "react";

const workPages = () => {
  const [contents, setContents] = useState([]);

  const router = useRouter();
  //return router parameter
  let { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      try {
        const collectionRef = collection(db, `${id}`);
        const q = query(collectionRef, orderBy("timestamp", "asc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
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
        <div className="work_layout">
          <div>
            {contents?.map((content) => (
              <div key={content.id}>
                <img src={content.cover_image} alt="" />
                <p>{content}</p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default workPages;
