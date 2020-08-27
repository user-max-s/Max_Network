import React from 'react';
import './Dialogs.scss';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: "Max" },
        { id: 2, name: "Alex" },
        { id: 3, name: "Dasha" },
        { id: 4, name: "Igor" },
        { id: 5, name: "Vlad" },
        { id: 6, name: "Valera" }]

    let messages = [
        { id: 1, message: "Hi" },
        { id: 1, message: "How is your ..." },
        { id: 1, message: "Everything is OK!" },
    ]

    let dialogsElements = dialogs
        .map(d => <Dialog name={d.name} id={d.id} />)

    let messagesElements = messages
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