import React from 'react'
import classes from "./CourseImage.module.css"
function CourseImage({imagePath}) {
  return (
    <div className={`${classes["img-div"]}`}>
        <img className={`${classes["course-img"]}`} src={imagePath} alt=""></img>
    </div>
  )
}

export default CourseImage