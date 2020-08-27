import React from 'react';
import './Info.scss';

const Info = (props) => {
    return (
        <div className="profile">
            <img className="profile__ava" src="data:image/jpeg;base64,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" />
            <div className="profile__description">
                <h2>Dmitriy K.</h2>
                <p>Date of Birth: 2 january</p>
                <p>City: Minsk</p>
                <p>Education: BSU*11</p>
                <p>Web Site: https//:google.com</p>
                <p>Web Site: https//:yandex.ru</p>
            </div>
        </div>
    )
}

export default Info;