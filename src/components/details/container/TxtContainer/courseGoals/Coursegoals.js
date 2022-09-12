import React from "react";
import CourseGoalitem from "./CourseGoalItem/CourseGoalitem";
import classes from "./CourseGoals.module.css";
function Coursegoals({courseGoals,sectionTitle,requirements}) {
  
   

  if (courseGoals === undefined || courseGoals === null) {
    return <div> loading ......</div>;
  }

  return (
    <div className={classes["courseGoal"]}>
      <div className={`${classes["what-you-will-learn"]}`} style={{marginTop:"30"}}>
        <p>What you'll learn</p>
        <p>{sectionTitle}</p>
      </div>

      
      <div className="goals-list">
        <ul
          className={`  ${classes["list"]}`}
          style={{
            listStyleType: requirements ? "inherit" : "none",
          }}
        >
          {courseGoals.map((goal, index) => {
            return (
              <CourseGoalitem
                iconName="fa-solid fa-check"
                key={index}
                data={goal}
                requirements={requirements}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Coursegoals;
