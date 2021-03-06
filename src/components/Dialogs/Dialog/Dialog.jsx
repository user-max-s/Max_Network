import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialog.scss';

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className="dialog">
            <NavLink className="dialog__item" to={path}>{props.name}</NavLink>
        </div>)
}

export default Dialog;