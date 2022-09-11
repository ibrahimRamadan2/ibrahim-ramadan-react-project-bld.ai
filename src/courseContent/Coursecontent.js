import React, { useState } from 'react'
import classes from "./CourseContent.module.css"
import CourseContentCard from "../courseContentCard/courseContentCard"
import CardButton from "../components/UI/CardButton/CardButton"
function Coursecontent(props) {
   let [expandAll , setexpandAll] =  useState(0);
   function UpdateExpandAll(){
    setexpandAll((prev)=>1-prev);
   }
    
   // props.courseID
   let data =props.data ;
   let time = data.curriculum_context.data.estimated_content_length_text ;
   let sections=(data.curriculum_context.data.sections);
   
   //03:02:38
   let hours = parseInt(time.substring(0,2));
   let minute =parseInt(time.substring(3,5)) ;
  return (
    <div className='main-div'>
        <div className={classes["title"]}>
            <h3>Course content</h3>
        </div>
        <div className={classes['up-line']}>
            <div className='course-details'>
                <p>{sections.length} sections • {`${data.curriculum_context.data.num_of_published_lectures} `} 
                 lectures • {hours}h {minute}m total length</p>
            </div>
            <div className={classes["expand"]}>
                <p  href='' onClick={UpdateExpandAll}>Expand all sections</p>
            </div>
        </div>
        {/* courseContentCard */}
        {sections.map((section)=><CourseContentCard data={section} expand = {expandAll}/>)}
        
        
    </div>  
  )
}

export default Coursecontent
{/*         <CardButton
              color="black"
              backgroundColor="transparent"
            ></CardButton> */}