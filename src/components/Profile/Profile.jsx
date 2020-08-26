import React from 'react';
import Posts from './Posts/Posts';
import './Profile.scss';
import Info from './Info/Info';

const Profile = (props) => {
    return (
        <main className="content">
            <img className="content__img" src="https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg" />
            <Info />
            <Posts />
        </main>
    )
}

export default Profile;