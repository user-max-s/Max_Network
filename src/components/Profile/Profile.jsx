import React from "react";
import Posts from "./Posts/Posts";
import "./Profile.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import background from "./../../assets/img/background.jpg";

const Profile = (props) => {
  return (
    <main className="content">
      <img className="content__img" src={background} />
      <ProfileInfo />
      <Posts
        posts={props.posts}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        newPostText={props.newPostText}
      />
    </main>
  );
};

export default Profile;
