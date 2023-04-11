import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/layout";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../../../firebase/initFirebase";
import { useEffect, useState } from "react";

const workPages = () => {
  const [contents, setContents] = useState([]);

  //   const router = useRouter();
  //   //return router parameter
  //   let { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      try {
        const collectionRef = collection(db, "brixwork");
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
        {contents?.map((content) => (
          <div key={content.id} className="container-layout">
            <h3>Works &gt; {content.title}</h3>
            <img src={content.cover_image} alt={content.title} />
            <div id="badge">
              <p>Type: {content.type}</p>
              <p>Technical/Design Skills: {content.skills}</p>
              <p>
                Source:
                <Link href={content.source}>Leslie McConnell Website</Link>
              </p>
            </div>
            <div className="work_content">
              <h3>Overview</h3>
              <p>{content.overview}</p>
            </div>
          </div>
        ))}
      </Layout>
    </React.Fragment>
  );
};

export default workPages;
