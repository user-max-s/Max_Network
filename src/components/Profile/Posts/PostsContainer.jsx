import Posts from "./Posts";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "./../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator());
    },
    PostChange: (text) => {
      dispatch(updateNewPostTextCreator(text));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
