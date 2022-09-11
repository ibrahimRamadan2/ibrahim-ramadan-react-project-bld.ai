import React from "react";
import classes from "./Requirements.module.css";
function Requirements(props) {
  return (
    // here you will take  data.course.details.Requirements[{array of strings}] ..
    // then map this array
    // props.data
    <div >
      <div style={{ margin: "30px 0px" }}>
        <p style={{ fontSize: "30px", fontWeight: "700" }}>Requirements</p>
      </div>
      <div>
        <ul>
          {props.data.map((text, index) => (
            <li 
              key ={index} style={{ marginBottom: "10px" }}>
              {text}
            </li>
          ))}
          {/* map yasta al list of requirements */}
           
        </ul>
      </div>
    </div>
  );
}

export default Requirements;
