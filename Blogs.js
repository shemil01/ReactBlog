import React, { useContext } from "react";
import { StoringValue } from "./Mainfile";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const { data, setData } = useContext(StoringValue);
  const found=useNavigate()

  console.log(data);
  return (
    <>
      {data.map((item,ind) => (
        <div key={item.id}>
          <h1>{item.heading}</h1>
          {/* <p>{item.Content}</p> */}
          <button onClick={()=>found(`/Blogid/${ind}`)}>learn more...</button>
        </div>
        
      ))}
    </>
  );
}

export default Blogs;
