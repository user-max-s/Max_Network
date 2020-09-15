import React from "react";
import "./Post.scss";
import ava from "./../../../../assets/img/profile__ava.jpg";

const Post = (props) => {
  return (
    <div className="post">
      <img className="post__logo" src={ava} />
      <p className="post__text">{props.message}</p>
    </div>
  );
};

export default Post;
