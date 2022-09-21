import React  from "react";
import classes from "./Container.module.css";
import TxtContainer from "./TxtContainer/TxtContainer";
import CardContainer from "./CardContainer/CardContainer";
 
function Container({courseData}) {
  return (
    <div className={`${classes["main-container"]}`}>
      <TxtContainer  courseId = {courseData.id}/>
      <CardContainer courseData = {courseData}/>
      
    </div>
  );
}
 
export default Container;
