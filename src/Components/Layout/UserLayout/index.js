import { React, useState, useEffect } from "react";
import { Header } from "../Header";
 
import { Footer } from "../Footer";

export const UserLayout = (props) => {
 
  return (
    <>
      <Header   />
      {/* <Sidebar sideclassName={sideBarClass} /> */}
      <div className="mainApp">
        {props.children}
      </div>
      <Footer   />
    </>
  );
};
