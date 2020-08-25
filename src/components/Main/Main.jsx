import React from 'react';
import Profile from './Profile/Profile';
import Posts from './Posts/Posts';

const Main = (props) => {
    return (
        <main className="main">
            <img src="https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg" />
            <Profile />
            <Posts />
        </main>
    )
}

export default Main;