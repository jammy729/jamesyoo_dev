import React from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Hi, My name is James Yoo</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Layout;
