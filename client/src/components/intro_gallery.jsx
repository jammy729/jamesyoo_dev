import React from "react";

const intro_gallery = ({
  image,
  name,
  role,
  intro,
  primary_btn,
  primary_link,
  secondary_btn,
  secondary_link,
}) => {
  return (
    <section id="introduction" className="container-fluid">
      <div className="introduction_image">
        <img src={image} alt="" className="img-responsive" />
      </div>
      <div className="intro_name">
        <h2>{name}</h2>
      </div>
      <div className="intro_role">{role}</div>
      <div className="intro_about" id="p_style">
        {intro}
      </div>
      <a className="btn primary" href={primary_link}>
        {primary_btn}
      </a>
      <a className="btn secondary" href={secondary_link}>
        {secondary_btn}
      </a>
    </section>
  );
};

export default intro_gallery;
