// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";

// export default function ID() {
//   const router = useRouter();
//   const id = router.query.id;
//   const comment = router.query.comment;

//   return (
//     <>
//       <h1>Post: {id}</h1>
//       <h1>Comment: {comment}</h1>
//     </>
//   );\
// }

import React from "react";

export const getStaticProps = async (ctx) => {
  // ctx will contain request parameters
  const { params } = ctx;

  // We will destructure id from the parameters
  const userId = params.id;

  // Fetching user data
  const res = await fetch(`http://localhost:3000/api/${userId}`);
  const userData = await res.json();

  // Sending data to the page via props
  return {
    props: {
      user: userData,
    },
  };
};

export const getStaticPaths = () => {
  // Specifying all the routes to be
  // pre-rendered by next js
  return {
    paths: [
      { params: { id: "brixwork" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  };
};

const User = ({ user }) => {
  return (
    <>
      <h1>User {user.id}</h1>
      <h2>Name : {user.name}</h2>
      <h2>Email : {user.email}</h2>
    </>
  );
};

export default User;
