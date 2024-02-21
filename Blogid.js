import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoringValue } from "./Mainfile";

const Blogid = () => {
  const { data } = useContext(StoringValue);
  const { id } = useParams();
  console.log(data)
  const info = data[id]
  console.log(id)
  console.log(info)

  return (
  <div style={{backgroundColor:'blueviolet', width:'100%'}}>
    <h1>{info.heading}</h1>
    <p>{info.Content}</p>

  </div>);
};

export default Blogid;
