import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import "./Profile.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import background from "./../../assets/img/background.jpg";

const Profile = (props) => {
  return (
    <main className="content">
      <img className="content__img" src={background} />
      <ProfileInfo />
      <PostsContainer />
    </main>
  );
};

export default Profile;
