import React from "react";
import "./ProfileInfo.scss";
import ava from "./../../../assets/img/profile__ava.jpg";

const ProfileInfo = (props) => {
  return (
    <div className="profile">
      <img className="profile__ava" src={ava} />
      <div className="profile__description">
        <h2>Dmitriy K.</h2>
        <p>Date of Birth: 2 january</p>
        <p>City: Minsk</p>
        <p>Education: BSU*11</p>
        <p>Web Site: https//:google.com</p>
        <p>Web Site: https//:yandex.ru</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
