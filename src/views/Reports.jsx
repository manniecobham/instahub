import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Reports = () => {
  return (
    <React.Fragment>
      <Sidebar id="left" />
      <div
        id="right"
        style={{ width: "100vw", height: "100vh", background: "blue" }}
      ></div>
    </React.Fragment>
  );
};

export default Reports;
