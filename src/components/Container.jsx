/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
import React from "react";

const Container = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Container;
