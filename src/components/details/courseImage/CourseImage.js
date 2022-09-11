import React from 'react'
import classes from "./CourseImage.module.css"
function CourseImage(props) {
  return (
    <div className={`${classes["img-div"]}`}>
        <img className={`${classes["course-img"]}`} src={props.imagePath}></img>
    </div>
  )
}

export default CourseImage