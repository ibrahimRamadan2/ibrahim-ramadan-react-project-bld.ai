import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./CourseGoalItem.module.css";
function CourseGoalitem({requirements,data,iconName}) {
  return (
    <li  className={`${classes[`col`]} col`}>
      <div className="d-flex align-items-center  ">
        {/* {!props.requirements && <i className={`fa-solid ${props.iconName}  me-4 `}></i>} */}
        <div style={{width:"30px" , textAlign : "center" , marginRight:"10px"}}>
          {!requirements && <i className={` ${iconName} `}></i>}
        </div>
        <p>{data}</p>
      </div>
    </li>
  );
}

export default CourseGoalitem;
