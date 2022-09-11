import React, { useEffect, useState } from 'react'
import classes from "./Container.module.css"
import Header from '../header/Header'
import CourseContainer from '../mainContainer/courseContainer'
import { useSelector } from 'react-redux';
 
function Container(props) {
   console.log(props.searchBarValue); 
  return (
    <div className={classes.container}>
      <Header/>
      <CourseContainer searchBarValue={props.searchBarValue}/>
    </div>
  )
}

export default Container