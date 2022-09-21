 
import classes from "./HeadTitle.module.css";
import RateStars from "../../home/RateStars/RateStars";
import { convertIntRate } from "../../../helper/helper";
import CourseImage from "../../details/courseImage/CourseImage";
import CardButton from "../../UI/CardButton/CardButton";
function HeadTitle({courseData}) {
   
  
   
  if (courseData === undefined) {
    return <div>Loading ....</div>;
  }
  return (
    <div className={`${classes["main-page"]}`}>
      <div className={`${classes.container}`}>
        <div className={`${classes["txt-container"]}`}>
          <div className={`${classes["course-mid-img"]}`}>
            <CourseImage imagePath={courseData.image_750x422} />
          </div>

          <h1 className={classes.title}> {courseData.title}</h1>
          <div className={classes.headline}> {courseData.headline}</div>

          <div className={`${classes.rate}`}>
            <div className={`${classes.rateNumber} ${classes.spc}`}>
              {convertIntRate(courseData.rating)}
            </div>

            <div className={`${classes.spc}`}>
              <RateStars rateNumber={courseData.rating} />
            </div>

            <a className={` ${classes.spc}`} href="1">
              ( {courseData.num_reviews} ratings)
            </a>

            <p>{courseData.num_subscribers} students</p>
          </div>

          {/*  */}

          <div className={`${classes["authon-line"]}`}>
            Created by <a href="1">{courseData.visible_instructors[0].title}</a>
          </div>
          <div className={`${classes["last-update-line"]} ${classes.flx}`}>
            <div className={`${classes.date} ${classes.flx}`}>
              <i className={`${classes.spc2} fa-regular fa-calendar-days`}></i>
              <div> Last updated {courseData.last_update_date} </div>
            </div>

            <div className={` ${classes.flx}`}>
              <i className={`${classes.spc2} fa-solid fa-globe`}></i>
              <div>{courseData.locale.simple_english_title}</div>
            </div>
            <div className={` ${classes.flx}`}>
              <i
                className={`${classes.spc2} fa-regular fa-closed-captioning`}
              ></i>
              <div>{courseData.locale.simple_english_title}</div>
            </div>
          </div>

          <div className={classes["innerCard"]}>
            <div className="price">
              <p style={{ fontWeight: "bold", fontSize: "40px" }}>E£123123</p>
            </div>
            <CardButton backgroundColor="rgb(135, 16, 216)" color="white" />

            <div style={{ textAlign: "center" }}>
              <p className={`${classes["btns-txt"]}`}>
                30-Day Money-Back Guarantee
              </p>
            </div>

            <div className={classes["course-links"]}>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <a href="1">Share</a>
                </li>
                <li>
                  <a href="1">Gift this course</a>
                </li>
                <li>
                  <a href="1">Apply Coupon</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadTitle;
