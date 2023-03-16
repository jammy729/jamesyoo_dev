import React from "react";
import { useState } from "react";
const brixwork = () => {
  const [content, setContent] = useState({
    title: "",
    heading_one: "",
  });
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
    </React.Fragment>
  );
};

export default brixwork;
