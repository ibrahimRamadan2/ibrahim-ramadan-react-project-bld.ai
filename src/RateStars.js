import React from "react";
import { useEffect, useState } from "react";
import FullStarIcon from "./FullStarIcon";
import HalfStarIcon from "./HalfStarIcon";
import EmptyStarIcon from "./EmptyStarIcon";
function RateStars(props) {
  function getarrayOfStars() {
    let arr = [0, 0, 0, 0, 0];
    let rateNumber = props.rateNumber;
    let rateNum = rateNumber.split(".");
    let FullStarNum = parseInt(rateNum[0]);
    let halfStarNum = parseInt(rateNum[1]);
    let emptySrarNum = 5 - FullStarNum;
    if (halfStarNum >= 5) {
      emptySrarNum--;
      halfStarNum = 1;
    } else halfStarNum = 0;
    let cnt = 0;
    for (let i = 0; i < FullStarNum; i++) arr[cnt++] = 1;
    for (let i = 0; i < halfStarNum; i++) arr[cnt++] = 0.5;
    return arr;
  }
  let [listofStart, setListofStar] = useState([]);

  useEffect(() => {
    setListofStar(getarrayOfStars());
  }, []);

  return (
    <div>
      {
      listofStart.map(function (value) {
        if (value === 1) return <FullStarIcon />;
        else if (value === 0.5) return <HalfStarIcon />;
        else return <EmptyStarIcon />;
      })
      }
    </div>
  );
}

export default RateStars;
