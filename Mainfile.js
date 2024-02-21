import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Controll from "./Controll";
import Createblog from "./Createblog";
import Blogs from "./Blogs";
import Blogid from "./Blogid";

export const StoringValue=createContext()
const Mainfile = () => {
    const [data,setData] =useState([])
    console.log(data)
  return (
    <>
    <StoringValue.Provider value={{data,setData}}>
    <Routes>
       
        <Route path="/" element={<Controll/>} />
        <Route path="/Createblog" element={<Createblog/>} />
        <Route path="/Blogs" element={<Blogs/>} />
        <Route path="/Blogid/:id" element={<Blogid/>} />
    </Routes>
    </StoringValue.Provider>
    </>
  );
};

export default Mainfile;
