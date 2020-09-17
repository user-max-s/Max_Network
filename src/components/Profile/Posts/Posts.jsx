import React from "react";
import Post from "./Post/Post";
import "./Posts.scss";

const Posts = (props) => {
  let postElements = props.profilePage.posts.map((p) => (
    <Post id={p.id} message={p.message} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.PostChange(text);
  };

  return (
    <div className="posts">
      <div className="post-add">
        <h2>My posts</h2>
        <textarea
          className="textarea"
          ref={newPostElement}
          onChange={onPostChange}
          value={props.profilePage.newPostText}
        />
        <button className="btn" type="button" onClick={onAddPost}>
          Add post
        </button>
      </div>
      {postElements}
    </div>
  );
};

export default Posts;
