import React from "react";
import classes from "./StickyNavBar.module.css";
import { convertIntRate } from "../../../helper/helper";
import { FullStarIcon } from "../../home/fullStarIcon/FullStarIcon";

function StickyNavBar(props) {
  let courseData = props.data;
  // get course sammry
  return (
    <div className={classes["all-nav"]}>
      <nav className={classes["nav-main"]}>
        <div style={{marginLeft:"10px", display: "flex", flexDirection: "column" }}>
          <div className={classes["nav-content"]}>
            <div className={classes["nav-top"]}>
              <p > learn python</p>
            </div>
          </div>
          <div className={classes["course-info"]} style={{marginLeft:"10px"}}>
            <div style={{  display: "flex" }}>
              <div style={{ marginRight:"5px", color: "#F3CA8C", fontWeight: "bold" }}>
                {convertIntRate(courseData.rating)}
              </div>

              <div style={{ marginRight: "10px" }}>
                <i
                  className={`fa-solid fa-star star-icon`}
                  style={{ color: "#F3CA8C" }}
                ></i>
              </div>
              <a href="" style={{ color: "#CEC0FC" }}>
                ( {courseData.num_reviews} ratings)
              </a>
              <p style={{fontSize:"20px", color: "white" }}>{courseData.num_subscribers} students</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default StickyNavBar;
