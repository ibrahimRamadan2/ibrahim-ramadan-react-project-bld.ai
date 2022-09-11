import React, { useState } from "react";

import classes from "./CommentFeedback.module.css";
const CommentFeedback = () => {
  const [likedState, setLikedState] = useState("");

  const buttonClickHandler = (state) => {
    setLikedState((currentState) => (currentState === state ? "" : state));
  };
 

  return (
    <div className={classes.feedbackContainer}>
      <small>
        {likedState
          ? "Thank you for your feedback"
          : "Was this review helpful?"}
      </small>
      <div className={classes.feedback}>
        <div>
          <button
            onClick={buttonClickHandler.bind(this, "liked")}
            style={{
              backgroundColor: likedState === "liked" ? "#000" : "transparent",
              color: likedState === "liked" ? "#fff" : "#000",
            }}
          >
            <i className="fa-regular fa-thumbs-up" />
          </button>

          <button
            onClick={buttonClickHandler.bind(this, "unLiked")}
            style={{
              backgroundColor:
                likedState === "unLiked" ? "#000" : "transparent",
              color: likedState === "unLiked" ? "#fff" : "#000",
            }}
          >
            <i className="fa-regular fa-thumbs-down" />
          </button>
        </div>
        <a href="https://udemy.com/report">Report</a>
      </div>
    </div>
  );
};

export default CommentFeedback;
