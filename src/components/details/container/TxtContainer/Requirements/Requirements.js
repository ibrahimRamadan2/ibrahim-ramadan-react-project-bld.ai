import React from "react"; 
function Requirements({data}) {
  return (
    
    <div >
      <div style={{ margin: "30px 0px" }}>
        <p style={{ fontSize: "30px", fontWeight: "700" }}>Requirements</p>
      </div>
      <div>
        <ul>
          {data.map((text, index) => (
            <li 
              key ={index} style={{ marginBottom: "10px" }}>
              {text}
            </li>
          ))} 
        </ul>
      </div>
    </div>
  );
}

export default Requirements;
