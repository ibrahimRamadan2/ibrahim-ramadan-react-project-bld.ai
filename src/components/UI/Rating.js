import React from "react";
import StarRatings from "react-star-ratings";
// import StarRatings from "./react-star-ratings";

const Rating = ({ rating }) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="#E59819"
      starSpacing="0"
      starDimension="13px"
      numberOfStars={5}
      name="rating"
    />
  );
};

export default Rating;
