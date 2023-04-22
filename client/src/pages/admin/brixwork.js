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
import { GoKebabVertical, GoTrashcan } from "react-icons/go";

const items = [
  "cover_image",
  "title",
  "type",
  "skills",
  "source",
  "overview",
  "main_project",
  "img_one",
  "img_one_desc",
  "challenges_1",
  "img_two",
  "img_two_desc",
  "img_three",
  "img_three_desc",
  "challenges_2",
  "img_four",
  "img_four_desc",
  "reflection",
];

const adminWorks = () => {
  //reading
  const [readContents, setReadContents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const collectionRef = collection(db, "brixwork/");
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

  const initialContents = items.reduce((acc, curr) => {
    acc[curr] = "";
    return acc;
  }, {});
  const [writeContents, setWriteContents] = useState(initialContents);

  const onSubmit = async () => {
    const collectionRef = collection(db, "brixwork");
    const docRef = await addDoc(collectionRef, {
      ...writeContents,
      timestamp: serverTimestamp(),
    });
    const newWriteContents = {};

    items.map((item) => {
      newWriteContents[item] = "";
    });
    setWriteContents(newWriteContents);
    alert(`todo with id ${docRef.id} is added successfully`);
  };

  return (
    <React.Fragment>
      <Layout>
        <div className="container-layout">
          <section className="input_area">
            <label htmlFor="" name="title">
              Title
            </label>
            <div>
              {items?.map((data, itemsIndex) => (
                <div key={itemsIndex}>
                  <textarea
                    name={data}
                    id={data}
                    placeholder={data}
                    onChange={(e) =>
                      setWriteContents({
                        ...writeContents,
                        [data]: e.target.value,
                      })
                    }
                    cols="50"
                    rows="20"
                    value={writeContents[data]}
                  ></textarea>
                </div>
              ))}
            </div>
          </section>

          <input type="submit" onClick={onSubmit} />
          <section>
            {readContents?.map((content) => (
              <div key={content.id}>
                {items?.map((item, itemIndex) => {
                  return (
                    <div key={itemIndex} className="eachContent">
                      <div className="flex_box">
                        <div className="top_row">
                          {renderHeading(item)}
                          <div className="icon">
                            <button>
                              <GoKebabVertical />
                            </button>
                            <button>
                              <GoTrashcan />
                            </button>
                          </div>
                        </div>
                        {renderContent(content[item])}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </section>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default adminWorks;

function renderHeading(heading) {
  const modifiedHeading = heading.replace(/_/g, " ");

  return (
    <div>
      <h3>{modifiedHeading}</h3>
    </div>
  );
}

function renderContent(content) {
  const isImageLink = content.startsWith("http") || content.startsWith("https");
  return (
    <div>
      {isImageLink ? (
        <>
          <p>{content}</p>
          <img src={content} alt="" />
        </>
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
}
