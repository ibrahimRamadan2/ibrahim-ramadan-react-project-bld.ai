import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CourseCard from "../../../UI/courseCard/CourseCard"
import classes from "./cardContainer.module.css"
function CardContainer({courseData}) { 
  let [courseSummary, setcourseSummary] = useState();
  let [courseDetails, setcourseDetails] = useState();
  let [courseReviews, setcourseReviews] = useState();
   
  
  const { data,  allCourses, review } = useSelector(
    (state) => state.courses
  );
  useEffect(() => {
    function getCouseDataById(courseID) {
      let arr = undefined;
      for (let item in data) {
        if (data[item].id.toString() === courseID.toString()) {
          arr = data[item];
          break;
        }
      }
      setcourseDetails(arr);
    }
    function getCourseSummaryById(courseID) {
      let arr2;
      for (let item in allCourses) {
        if (allCourses[item].id.toString() === courseID.toString()) {
          arr2 = allCourses[item];
          break;
        }
      }
      setcourseSummary(arr2);
    }

    function getCourseReviewById(courseID) {
      let arr;
      for (let item in review) {
        if (review[item].id.toString() === courseID.toString()) {
          arr = review[item];
          break;
        }
      } 
      setcourseReviews(arr);
    }
    // should send the id yasta ...
    getCouseDataById(courseData.id);
    getCourseSummaryById(courseData.id);
    getCourseReviewById(courseData.id);
  }, [allCourses, courseData.id, data, review]);

  if (
    courseReviews === undefined ||
    courseDetails === undefined ||
    courseSummary === undefined
  ) {
    return <div>loading.....</div>;
  } 
  return (
    <div className={classes['container']}>
      <CourseCard courseData = {courseData}/>
    </div>
  )
}

export default CardContainer