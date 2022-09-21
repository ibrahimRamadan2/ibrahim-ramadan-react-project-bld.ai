import React from 'react'
import classes from "./courseContentItem.module.css"
function CourseContentItem({data} ) {
   
  let hours= parseInt(data.content_summary.substring(0,2));
  let minute = parseInt(data.content_summary.substring(3,5));
  return (
    <div className={classes["main-div"]}>
        <div className={classes['left']}>
            <div className='icon me-4'>
            <i className="fa-solid fa-circle-play"></i>
            </div>
            <div className='data'>
                {data.title}
            </div>
        </div>
        <div className='right' style={{fontSize:"15px"}}>
            {hours}h • {minute} m
        </div>
    </div>
  )
}

export default CourseContentItem