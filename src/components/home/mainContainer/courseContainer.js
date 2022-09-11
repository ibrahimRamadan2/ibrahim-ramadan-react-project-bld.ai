import { useEffect, useState } from "react";
import classes from "./mainContainer.module.css";
import CardsSection from "../coursesSection/CardsSection";
import {getApiData} from "../../../helper/helper" ;
import { useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

function CourseContainer(props) {
  let [coursesData, setCoursesData] = useState();
  let [coursesList, setCoursesList] = useState([]);
  let [searchWord , setSeachWord] = useState("");
  
  const { summary, isLoading, allCourses } = useSelector(
    (state) => state.courses
  );
  // [0].title;
  // [0].header;
  // [0].description;
  useEffect(()=>{
    setCoursesData(summary);
    
    setCoursesList(allCourses) ;
  } ,[isLoading]);
 
  
  useEffect(()=>{
    setSeachWord(props.searchBarValue);
  },[props.searchBarValue]);

  
  if (coursesData === undefined || coursesData === null) {
    return <p> loading .....</p>;
  }
  return (
    <div className= {classes["container"]}>
      <div className={classes["main-courses"]}>
        <h1>A broad selection of courses</h1>
        <p>
          Choose from 185,000 online video courses with new additions published
          every month
        </p>
        <div className={classes["course-list"]}>
          <div className={`${classes["list-items"]} ${classes["apython"]}`}>Python</div>
          <div className={`${classes["list-items"]} ${classes["aexcel"]}`}>Excel</div>
          <div className={`${classes["list-items"]} ${classes["aweb-dev"]}`}>Web Development</div>
          <div className={`${classes["list-items"]} ${classes["ajavascript"]}`}>JavaScript</div>
          <div className={`${classes["list-items"]} ${classes["adatascience"]}`}>DataScience</div>
          <div className={`${classes["list-items"]} ${classes["aaws-certification"]}`}>AWS Certification</div>
          <div className={`${classes["list-items"]} ${classes["adrawing"]}`}>Drawing</div>
        </div>
        {/* course cards section */}
        
         <CardsSection   searchStr={searchWord}
          title={coursesData[0].header}
          decription={coursesData[0].description}
          buttonText={coursesData[0].title}
          coursesData={coursesList}
        /> 
      </div>
    </div>
  );
}
export default CourseContainer;
