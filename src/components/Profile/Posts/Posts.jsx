import React from "react";
import Post from "./Post/Post";
import "./Posts.scss";

const Posts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  let PostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
