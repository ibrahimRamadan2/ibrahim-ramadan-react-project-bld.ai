import React, { useEffect, useState } from "react";
import { Link , link} from "react-router-dom";
import Card from "../card/Card";
import classes from './CardsSection.module.css'


function CardsSection(props) {
  let searchWord = props.searchStr ; 
  
  let coursesData=props.coursesData.filter((course)=>(course.title.toLowerCase().includes(searchWord.toLowerCase()))) ;
    if(coursesData===undefined){
      return (<div>loading ....</div>);
    }
    return (
    <div className={classes["courses"]}>
      <h2>{props.title}</h2>
      <div className={classes["courses-header"]}>
        <p>{props.decription}</p>
      </div>
      <button className={classes["btn"]}>Explore {props.buttonText}</button>
      <div className={classes["Cards"]}>
        {
          coursesData.map((course, index) => {
          
          return <Link to={`/details/${course.id}`} style={{ textDecoration: 'none' }} >
            <Card key={index} courseData={course} />
            </Link>;
         // return <div>{course.title}</div>;
        })} 
      </div>
    </div>
  );
}

export default CardsSection;
