import React from 'react'
import classes from "../RateStars/RateStars.module.css"
function EmptyStarIcon() {
  return (
    <i className={`${classes["star-icon"]} fa-regular fa-star star-icon`}></i>
  )
}

export default EmptyStarIcon ;