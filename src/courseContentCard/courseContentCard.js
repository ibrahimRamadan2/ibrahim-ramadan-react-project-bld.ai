import React, { useEffect, useState } from "react";
import classes from "./courseContentCard.module.css";
import CourseContentItem from "../courseContentItem/courseContentItem"
function CourseContentCard(props) { // props.expand
  let [open , setopen] = useState(0);
  let [expandAll , setexpandAll] = useState(0);
  let data = props.data ;  
  let hours= parseInt(data.content_length_text.substring(0,2));
  let minute = parseInt(data.content_length_text.substring(3,5));
  function updateOpen(){
    setopen((prev)=>1-prev);
    console.log(props.expand + " - " + open);
  }
  useEffect(()=>{
    setexpandAll(props.expand);
      setopen(expandAll);
    
  } ,[props.expand]);
  
  return (
    <div className="main-div" >
      <div className={classes["summary"]}>
        <div className={`${classes["left"]}  ${classes["cnt"]}`}>
          <div className={classes["icon"]} onClick={updateOpen} style={{transform:`${(open)===0 ? "rotate(90deg)":"rotate(-90deg)"}` }}>
          <i className="fa-solid fa-angle-right "></i>
          </div>
          <div className="cardContent">
            <div className="name">
              {" "}
              <p style={{fontSize:"16px"}}>{data.title}</p>
            </div>
            <div className="data"></div>
          </div>
        </div>
        <div className={`${classes["right"]}  ${classes["cnt"]}`}>
          <div className="data" style={{ fontSize: "14px" }}>
            {data.lecture_count} lec • {hours}h {minute} m
          </div>
        </div>
      </div>
      <div className={classes["details"]} style={{display:`${open ? "":"none"}`}}>
         {data.items.map((item)=><CourseContentItem data ={item} />)}
         
        
          
      </div>
    </div>
  );
}

export default CourseContentCard;
