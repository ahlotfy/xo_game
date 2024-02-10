"use client";
import React from "react";
import Footer from "@/components/footer/Footer";
import { Provider } from "react-redux";
import storageRedux from "../redux/Storage";
import Nav from "./Nav";
const page = () => {
  return (
    <Provider store={storageRedux}>
      <div className="container">
        <Nav />
        <Footer />
      </div>
    </Provider>
  );
};

export default page;
