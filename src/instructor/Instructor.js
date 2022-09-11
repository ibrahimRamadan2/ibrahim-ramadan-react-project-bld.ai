import React from "react";
import classes from "./instructor.module.css";
import CourseGoalitem from "../components/details/container/TxtContainer/courseGoals/CourseGoalItem/CourseGoalitem";
import Description from "../components/details/container/TxtContainer/Description/Description";
function Instructor(props) {
  let data = props.data;

  return (
    <div className={`${classes["main-div"]}`}>
      <div className={`${classes["head-info"]}  `}>
        <div className="instructorLine">
          <a href="" style={{ color: "#8710D8" }}>
            {data.display_name}
          </a>
        </div>
        <div className={`${classes["instructor-info"]}`}>{data.job_title}</div>
      </div>
      <div className={`${classes["img-and-data"]}`}>
        <div className="img-card">
          <div className="img-div">
            <img className={``} src={data.image_100x100}></img>
          </div>
        </div>
        <div className={`${classes["info-list"]}`}>
          <ul>
            <li>
              <CourseGoalitem
                iconName="fa-solid  fa-sharp fa-star"
                data={`${data.Instructor_Rating} Instructor Rating`}
                requirements={0}
              />
            </li>
            <li>
              <CourseGoalitem     
                iconName="fa-solid fa-award"
                data={`${data.Reviews} Reviews`}
                requirements={0}
              />
            </li>
            <li>
              <CourseGoalitem
                iconName="fa-solid  fa-user-group"
                data={`${data.Students} Students`}
                
                requirements={0}
              />
            </li>
            <li>
              <CourseGoalitem  
                iconName="fa-solid fa-circle-play"
                data={`${data.Courses} Courses`}
                 
                requirements={0}
              />
            </li>
          </ul>
        </div>
      </div>
      <Description title="" data={data.description} />
    </div>
  );
}

export default Instructor;
