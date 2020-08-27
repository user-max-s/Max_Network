import React from 'react';
import './Dialogs.scss';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <Dialog name={d.name} id={d.id} />)

    let messagesElements = props.dialogsPage.messages
        .map(m => <Message id={m.id} message={m.message} />)

    return (
        <div className="dialogs_container">
            <div className="dialogs">
                { dialogsElements }
            </div>
            <div className="messages">
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;