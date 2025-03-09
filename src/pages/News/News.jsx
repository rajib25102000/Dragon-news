import React from "react";
import Header from "../Shered/Header/Header";
import RightSideNav from "../Shered/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";
import Navbar from "../Shered/Navbar/Navbar";

const News = () => {
    const {id}=useParams()
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-6 mt-6">
        <div className="col-span-3 border-2">
          <h2>News details</h2>
          <p>{id}</p>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
