import React from "react";

const footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return <footer>&copy;{year} James Yoo</footer>;
};

export default footer;
