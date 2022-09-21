import React, { useState } from "react";

function Description({data,title}) {
  let [clicked, setclicked] = useState(0);
  function updateClick() {
    setclicked((prev) => 1 - prev);
  }
  
  let text = data;
  let titlee = title; 
  let len = Math.min(300, text.length);
  return (
    // here you will take data from  data.course.details.description .. (just a string ).
    <div>
      <div
        style={{
          display: `${!titlee.length ? "none" : ""}`,
          marginTop: "30px",
          marginBottom: "20px",
        }}
      >
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>Description</p>
      </div>
      <div>
        <p style={{ fontSize: "18px" }}>
          {clicked ? text : text.substring(0, len)}
        </p>
      </div>
      <div  style={{display:`${text.length <=len ? "none":""}`}} onClick={updateClick}>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#8710D8",
            cursor: "pointer",
          }}
        >
          {clicked ? "Show Less" : "Show More"}
        </p>
      </div>
    </div>
  );
}

export default Description;
