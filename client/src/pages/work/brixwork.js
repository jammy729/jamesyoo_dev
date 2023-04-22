import React from "react";
import Link from "next/link";
import Layout from "@/components/layout";
import TwoColumnLayout from "@/components/two_column_layout";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../../../firebase/initFirebase";
import { useEffect, useState } from "react";

const workPages = () => {
  const [contents, setContents] = useState([]);

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
          <React.Fragment>
            <div key={content.id} className="container-layout">
              <h3>Works &gt; {content.title}</h3>
              <img
                src={content.cover_image}
                alt={content.title}
                style={{ border: "1px solid black" }}
              />
              <div id="badge">
                <p>Type: {content.type}</p>
                <p>Technical/Design Skills: {content.skills}</p>
                <p>
                  Source:
                  <Link href={content.source}> Leslie McConnell Website</Link>
                </p>
              </div>
              <div className="work_content" style={{ paddingBottom: "20px" }}>
                <h3>Overview</h3>
                {content.overview}
              </div>
            </div>
            {/* container-layout END */}
            <TwoColumnLayout
              src={content.img_one}
              caption={content.img_one_desc}
              alt={content.img_one_desc}
            >
              <div className="work_content">
                <h3>Main Project</h3>
                {content.main_project}
              </div>
            </TwoColumnLayout>
            <TwoColumnLayout
              src={content.img_two}
              caption={content.img_two_desc}
              alt={content.img_two_desc}
              src_2={content.img_two}
            >
              <div className="work_content">
                <h3>Challenges</h3>
                {content.challenges_1}
              </div>
            </TwoColumnLayout>
          </React.Fragment>
        ))}
      </Layout>
    </React.Fragment>
  );
};

export default workPages;

function renderHeading(str) {
  if (str.split(" ").length > 1) {
    str = str.replace(/^"(.*)"$/, "$1");
  }

  return <p>{str}</p>;
}
