import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
