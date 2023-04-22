import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

const navbarItems = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/work", name: "Work" },
  { path: "/contact", name: "Contact" },
];

const header = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <Head>
        <title>Hi, My name is James Yoo</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <div id="navbar" style={{ maxWidth: "100%", padding: "20px" }}>
          <div className="navbar_logo">
            <Link href="/">
              <span id="h1_style">James Yoo</span>
            </Link>
          </div>
          <div className="navbar_menu">
            {navbarItems.map((data, index) => (
              <Link href={data.path} key={index}>
                <div className="navbar_items">{data.name}</div>
              </Link>
            ))}
          </div>
          <div className="mobile_menu" onClick={() => setShow(!show)}>
            <div
              className={"hamburger_menu " + (show ? "white" : "white")}
            ></div>
            <div
              className={"hamburger_menu " + (show ? "white" : "white")}
            ></div>
            <div
              className={"hamburger_menu " + (show ? "white" : "white")}
            ></div>
          </div>
          {show && (
            <div className="mobile_drawer">
              {navbarItems.map((data, mobileIndex) => (
                <div className="mobile_items">
                  <Link href={data.path} key={mobileIndex}>
                    <div className="navbar_items">
                      <h2>{data.name}</h2>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </header>
    </React.Fragment>
  );
};

export default header;
