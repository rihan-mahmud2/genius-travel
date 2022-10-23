import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Pages/Footer/Footer";
import Header from "../Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
