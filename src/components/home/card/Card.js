import RateStars from "../RateStars/RateStars";
import { useState, useEffect } from "react";
import { convertIntRate } from "../../../helper/helper";
import classes from "./Card.module.css";
function Card(props) {
  let [courseData, setCourseData] = useState();
  useEffect(() => {
    setCourseData(props.courseData);
  }, [props.courseData]);
  if (courseData === undefined) {
    return <div>loading ..... </div>;
  }
  return (
    <div className={classes["course-card"]}>
      <div className={classes["course-img-div"]}>
        <img
          className={classes["course-img"]}
          src={courseData.image_750x422}
          alt={"course Img"}
        />
      </div>

      <div className={classes["text-div"]}>
        <h3 style={{color:"black"}}>{courseData.title}</h3>
        <p className={classes["author-name"]}>
          {courseData.visible_instructors[0].title}
        </p>
        <div className={classes["rate"]}>
          <p className={classes["rate-precent"]}>
            {convertIntRate(courseData.rating)}
          </p>  
          <RateStars rateNumber={courseData.rating} />
          <p className={classes["student-num"]}>({courseData.num_subscribers})</p>
        </div>
        <p style={{color:"black"}} className={classes["Price"]}>E£ {courseData.price.list_price.amount}</p>
      </div>
      <div className={classes["best-seller"]}>
        <p style={{color:"black"}}>Bestseller</p>
      </div>
    </div>
  );
}
export default Card;
