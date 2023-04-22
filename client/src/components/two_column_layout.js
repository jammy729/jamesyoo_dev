import React from "react";

const two_column_layout = ({ src, src_2, caption, alt, children }) => {
  return (
    <div className="two_column_layout">
      <div className="left_column">
        <img src={src} alt={alt} />
        <caption>{caption}</caption>
        <img src={src_2} alt={alt} />
        <caption>{caption}</caption>
      </div>
      <div className="right_column">{children}</div>
    </div>
  );
};

export default two_column_layout;
