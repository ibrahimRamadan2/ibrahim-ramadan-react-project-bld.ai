import React from "react";
import CardButton from "../CardButton/CardButton";
import classes from "./CourseCard.module.css";
import CourseGoalitem from "../../details/container/TxtContainer/courseGoals/CourseGoalItem/CourseGoalitem";
function CourseCard({ courseData }) {
  return (
    <>
      <div className={`${classes["img-div"]}`}>
        <img src={courseData.image_750x422} alt=""></img>
      </div>
      <div className={`${classes["main-div"]}`}>
        <div className={classes["main-content-div"]}>
          <div className={`${classes["content-div"]}`}>
            <div className={classes["price-div"]}>
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "28px",
                  fontWeight: "bold",
                }}
              >
                E£{courseData.price.list_price.amount}
              </p>
            </div>
            <CardButton
              data={"Add to card"}
              backgroundColor="rgb(135, 16, 216)"
              color="white"
            />
            <CardButton
              data={"Buy now"}
              backgroundColor="transparent"
              color="black"
            />
            <div style={{ textAlign: "center" }}>
              <p className={`${classes["btns-txt"]}`}>
                30-Day Money-Back Guarantee
              </p>
            </div>
            <div className={classes["CourseDetails"]}>
              <div>
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                  This course includes:
                </p>
              </div>
              <ul style={{ listStyleType: "none" }}>
                <div className={classes["goal-item"]}>
                  {" "}
                  <CourseGoalitem
                    className={classes["courseGoal"]}
                    iconName={"fa-solid fa-tv"}
                    data={"14 hours on-demand video"}
                  />
                </div>
                <div className={classes["goal-item"]}>
                  {" "}
                  <CourseGoalitem
                    iconName={"fa-regular fa-file"}
                    data={"1 article"}
                  />
                </div>
                <div className={classes["goal-item"]}>
                  {" "}
                  <CourseGoalitem
                    iconName={"fa-regular fa-folder"}
                    data={"3 downloadable resources"}
                  />
                </div>
                <div className={classes["goal-item"]}>
                  {" "}
                  <CourseGoalitem
                    iconName={"fa-solid fa-infinity"}
                    data={"Full lifetime access"}
                  />
                </div>
                <div className={classes["goal-item"]}>
                  {" "}
                  <CourseGoalitem
                    iconName={"fa-solid fa-mobile-screen-button"}
                    data={"Access on mobile and TV"}
                  />
                </div>
                <div className={classes["goal-item"]}>
                  {" "}
                  <CourseGoalitem
                    iconName={"fa-solid fa-trophy"}
                    data={"Certificate of completion"}
                  />
                </div>
              </ul>
            </div>
            <div className={classes["course-links"]}>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <a style={{ fontSize: "14" }} href="1">
                    Share
                  </a>
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

          <hr className="solid"></hr>
          <div className={classes["last-div"]}>
            <h3>Training 5 or more people?</h3>
            <p>
              Get your team access to 17,000+ top Udemy courses anytime,
              anywhere.
            </p>
            <CardButton
              data={"Add to card"}
              color="black"
              backgroundColor="transparent"
            ></CardButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
