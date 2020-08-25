import React from 'react';
import Profile from './Profile/Profile';
import Posts from './Posts/Posts';
import './Content.scss';

const Content = (props) => {
    return (
        <main className="content">
            <img className="content__img" src="https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg" />
            <Profile />
            <Posts />
        </main>
    )
}

export default Content;