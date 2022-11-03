import Head from "next/head";
import React from "react";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"next.js" + keywords} />
        <title>Главная страница</title>
      </Head>

      <div className="navbar">
        <A href={"/"} text="Home Page" />
        <A href={"/categories"} text="Categories" />
      </div>

      <div>{children}</div>

      <style jsx>
        {`
          .navbar {
            background: rgb(13, 18, 27, 0.1);
            padding: 15px;
            position: fixed;
            width: 100vw;
            z-index: 3;
            display: flex;
            justify-content: flex-end;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
