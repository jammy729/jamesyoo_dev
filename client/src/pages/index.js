import React from "react";
import Layout from "@/components/ layout";
import Intro from "@/components/intro_gallery";
const index = () => {
  return (
    <>
      <Layout>
        <Intro
          name="Hello, I'm James Yoo"
          role="Front-end Developer | UX Engineer"
          intro="Welcome to my site! I am fifth year undergraduate student at Simon Fraser University (SFU) majoring in BSc Interactive Arts and Technology. I am an user-centered front-end developer mainly working with React/React Native JS framework. I love problem solving and designing with code."
          primary_btn="See Work"
          primary_link="/work"
          secondary_btn="Contact Me"
          secondary_link="/contact"
        />
      </Layout>
    </>
  );
};

export default index;
