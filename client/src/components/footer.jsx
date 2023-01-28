import React from "react";

const footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return <footer>&copy;{year} James Yoo</footer>;
};

export default footer;
