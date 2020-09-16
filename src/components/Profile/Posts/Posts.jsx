import React from "react";
import Post from "./Post/Post";
import "./Posts.scss";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "./../../../redux/profile-reducer";

const Posts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostCreator());
  };

  let PostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextCreator(text));
  };

  return (
    <div className="posts">
      <div className="post-add">
        <h2>My posts</h2>
        <textarea
          className="textarea"
          placeholder="Your text"
          ref={newPostElement}
          onChange={PostChange}
          value={props.newPostText}
        />
        <button className="btn" type="button" onClick={addPost}>
          Add post
        </button>
      </div>
      {postElements}
    </div>
  );
};

export default Posts;
