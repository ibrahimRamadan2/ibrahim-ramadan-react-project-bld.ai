 
import { Link } from "react-router-dom";
import Card from "../card/Card";
import classes from './CardsSection.module.css'


function CardsSection({coursesData,searchStr,title,decription,buttonText}) {
  let searchWord = searchStr ; 
  
  let coursesData2=coursesData.filter((course)=>(course.title.toLowerCase().includes(searchWord.toLowerCase()))) ;
    if(coursesData===undefined){
      return (<div>loading ....</div>);
    }
    return (
    <div className={classes["courses"]}>
      <h2>{title}</h2>
      <div className={classes["courses-header"]}>
        <p>{decription}</p>
      </div>
      <button className={classes["btn"]}>Explore {buttonText}</button>
      <div className={classes["Cards"]}>
        {
          coursesData2.map((course, ) => {
          
          return <Link to={`/details/${course.id}`} style={{ textDecoration: 'none' }} >
            <Card key={course.id} courseData={course} />
            </Link>; 
        })} 
      </div>
    </div>
  );
}

export default CardsSection;
