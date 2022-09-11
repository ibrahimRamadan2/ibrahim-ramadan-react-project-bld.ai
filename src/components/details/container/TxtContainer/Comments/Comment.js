import React from "react";
import Rating from "../../../../UI/Rating";
import RoundedImage from "../../../../UI/RoundedImage";
import Description from "../Description/Description"
import classes from "./Comment.module.css";
import CommentFeedback from "./CommentFeedback";

const Comment = (props) => {
  let comment = props.data ; 
   
  return (
    <div style={{marginTop:"30px"}} className={classes.comment}>
      <RoundedImage src={comment.user.image_50x50} radius={50} />
      <div className={classes.comment__content}>
        <h4>{comment.user.title}</h4>
        <div className={classes.comment__rating}>
          <Rating rating={comment.rating} />
          <small>{comment.created.substring(0,10)}</small>
        </div>
        <Description title="" data={comment.content} />
        <CommentFeedback />
      </div>
    </div>
  );
};

export default Comment;
