import classes from "./Container.module.css";
import Header from "../header/Header";
import CourseContainer from "../mainContainer/courseContainer";

function Container({searchBarValue}) {
  return (
    <div className={classes.container}>
      <Header />
      <CourseContainer searchBarValue={searchBarValue} />
    </div>
  );
}

export default Container;
