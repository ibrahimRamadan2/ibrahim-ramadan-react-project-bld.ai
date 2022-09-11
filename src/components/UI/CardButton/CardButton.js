import React from "react";
import classes from "./CardButton.module.css"
function CardButton(props) {
  console.log(props.data);
  return (
    <div className ={classes["card-div"]} style={{backgroundColor:`${props.backgroundColor}` , 
    border :`${props.color==="black" ? "1px solid black":"none"}`}}>
       <p style={{fontWeight:"bold" , color:`${props.color}`}}>{props.data}</p>
    </div>
  );
}

export default CardButton;
