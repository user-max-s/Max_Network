import React from 'react';

const Main = (props) => {
    return (
        <main className="main">
            <img src="https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg" />
            <div className="main__profile-info">
                <img src="" />
                <div className="">
                    <h2>Dmitriy K.</h2>
                    <p>Date of Birth: 2 january</p>
                    <p>City: Minsk</p>
                    <p>Education: BSU*11</p>
                    <p>Web Site: https//:google.com</p>
                </div>
                <div className="main__posts">
                    <div className="add-post">
                        <h2>My posts</h2>
                        <textarea></textarea>
                        <button>Send</button>
                    </div>
                    <div className="post">
                        <img src="" />
                        <p>Hey why nobody love me?</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;