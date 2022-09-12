import React, { useEffect, useState } from "react";
import HeadTitle from "../../components/details/headTitle/HeadTitle";
import Footer from "../../components/UI/Footer/Footer";
import Container from "../../components/details/container/Container";
import StickyNavBar from "../../components/details/StickyNavBar/StickyNavBar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function DetailsPage() {
  let [courseSummary, setcourseSummary] = useState();
  let [courseDetails, setcourseDetails] = useState();
  let [courseReviews, setcourseReviews] = useState();
  const { id } = useParams();
  const { data, allCourses, review } = useSelector((state) => state.courses);
  useEffect(() => {
    function getCouseDataById(courseID) {
      let arr = undefined;
      for (let item in data) {
        if (data[item].id === courseID) {
          arr = data[item];
          break;
        }
      }
      setcourseDetails(arr);
    }

    function getCourseSummaryById(courseID) {
      let arr2;
      for (let item in allCourses) {
        if (allCourses[item].id.toString() === courseID) {
          arr2 = allCourses[item];
          break;
        }
      }
      setcourseSummary(arr2);
    }

    function getCourseReviewById(courseID) {
      let arr;
      for (let item in review) {
        if (review[item].id === courseID) {
          arr = review[item];
          break;
        }
      }
      setcourseReviews(arr);
    }
    // should send the id yasta ...
    getCouseDataById(id);
    getCourseSummaryById(id);
    getCourseReviewById(id);
  }, [allCourses, data, id, review]);

  if (
    courseReviews === undefined ||
    courseDetails === undefined ||
    courseSummary === undefined
  ) {
    return <div>loading.....</div>;
  }

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <StickyNavBar data={courseSummary} />

      <HeadTitle courseData={courseSummary} />
      <Container courseData={courseSummary} />
      <Footer />
    </div>
  );
}

export default DetailsPage;
