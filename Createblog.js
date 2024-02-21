import { useContext, useState } from "react";
import { StoringValue } from "./Mainfile";
import { useNavigate } from "react-router-dom";

const Createblog = () => {
  const { data, setData } = useContext(StoringValue);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const navigate=useNavigate()
  console.log(data)

  return (
    <>
      <div
        className="div1"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <label>Heading:</label>
        <input
          type="text"
          placeholder="Type something"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div
        className="div2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label>Content:</label>
        <textarea
          type="text"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
       <button onClick={()=>setData([...data,{heading:text,Content:text1,id:data.length}])}>create</button>
      <button onClick={()=>navigate('/Blogs')}>blogs</button>
      </div>
    </>
  );
};

export default Createblog;
