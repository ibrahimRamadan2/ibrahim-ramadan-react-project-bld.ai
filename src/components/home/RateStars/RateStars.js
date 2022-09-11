import React from "react";
import { useEffect, useState } from "react";
import FullStarIcon from "../fullStarIcon/FullStarIcon";
import HalfStarIcon from "../halfStarIcon/HalfStarIcon";
import EmptyStarIcon from "../emptyStarIcon/EmptyStarIcon";
import classes from "./RateStars.module.css";
import { getarrayOfStars } from "../../../helper/helper";
function RateStars(props) {
  let [listofStart, setListofStar] = useState([]);

  useEffect(() => {
    setListofStar(getarrayOfStars(props.rateNumber));
  }, []);
  
  return (
    <div className={`${classes["star-row"]}`}>
      {listofStart.map(function (value, index) {
        if (value === 1) return <FullStarIcon key={index} />;
        else if (value === 0.5) return <HalfStarIcon key={index} />;
        else return <EmptyStarIcon key={index} />;
      })}
    </div>
  );
}

export default RateStars;
