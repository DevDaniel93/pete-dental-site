import { React, useState, useEffect } from "react";
import { Header } from "../Header";
 
import { Footer } from "../Footer";

export const UserLayout = (props) => {
 
  return (
    <>
      <Header   />
      {/* <Sidebar sideClass={sideBarClass} /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div >{props.children}</div>
          </div>
        </div>
      </div>
      <Footer   />
    </>
  );
};
