import React, { useEffect, useState } from "react";
import Coursegoals from "./courseGoals/Coursegoals";
import classes from "./txtContainer.module.css";
import Coursecontent from "../../../../courseContent/Coursecontent";
import Requirements from "./Requirements/Requirements";
import Description from "./Description/Description";
import InstructorSection from "../../../../instructorSection/instructorSection";
import Comment from "./Comments/Comment"
import { useSelector } from "react-redux";

function TxtContainer(props) {
  let [courseSummary, setcourseSummary] = useState();
  let [courseDetails, setcourseDetails] = useState();
  let [courseReviews, setcourseReviews] = useState();

  const { data, isLoading, allCourses, review } = useSelector(
    (state) => state.courses
  );
  useEffect(() => {
    function getCouseDataById(courseID) {
      let arr = undefined;
      for (let item in data) {
        if (data[item].id == courseID) {
          arr = data[item];
          break;
        }
      }
      setcourseDetails(arr);
    }
    function getCourseSummaryById(courseID) {
      let arr2;
      for (let item in allCourses) {
        if (allCourses[item].id == courseID) {
          arr2 = allCourses[item];
          break;
        }
      }
      setcourseSummary(arr2);
    }

    function getCourseReviewById(courseID) {
      let arr;
      for (let item in review) {
        if (review[item].id == courseID) {
          arr = review[item];
          break;
        }
      } 
      setcourseReviews(arr);
    }
    // should send the id yasta ...
    getCouseDataById(props.courseId);
    getCourseSummaryById(props.courseId);
    getCourseReviewById(props.courseId);
  }, [allCourses, data, review]);

  if (
    courseReviews === undefined ||
    courseDetails === undefined ||
    courseSummary === undefined
  ) {
    return <div>loading.....</div>;
  }
  //summary.items.courseData.objectives_summary[]
  // data.course.details.Requirements[{array of strings}]
   
  return (
    <div className={`${classes["txt-main-container"]}`}>
      <Coursegoals courseGoals={courseSummary.objectives_summary} />
      <Coursecontent data={courseDetails}/>
      <Requirements data={courseDetails.details.Requirements} />
      <Description title=" decribe" data={courseDetails.details.description} />
      <InstructorSection data={courseSummary.visible_instructors} />
       {courseReviews.results.map((comment)=><Comment data = {comment}/>)}
       
    </div>
  );
}

{
  /* <txt Container > 
                      <Coursegoals  />    ok 
                    <CoutseContent sammry >  ok 
                    requirements    ok 
                    description ok 
                    instructors  ok 
                    student FeedBack 
                    Reviews
    </txt Container > */
}

export default TxtContainer;
