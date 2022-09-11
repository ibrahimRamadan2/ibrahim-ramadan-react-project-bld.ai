import React, { useEffect, useState } from "react";
import classes from "./Container.module.css";
import TxtContainer from "./TxtContainer/TxtContainer";
import CardContainer from "./CardContainer/CardContainer";
 
function Container(props) {
  return (
    <div className={`${classes["main-container"]}`}>
      <TxtContainer  courseId = {props.courseData.id}/>
      <CardContainer courseData = {props.courseData}/>
      
    </div>
  );
}
 
export default Container;
