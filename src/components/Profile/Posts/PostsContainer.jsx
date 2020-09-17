import React from "react";
import Posts from "./Posts";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "./../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const PostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostCreator());
        };

        let PostChange = (text) => {
          store.dispatch(updateNewPostTextCreator(text));
        };
        return (
          <Posts
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            PostChange={PostChange}
            addPost={addPost}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
