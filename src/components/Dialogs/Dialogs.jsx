import React from "react";
import "./Dialogs.scss";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {
  addMessageCreator,
  updateMessageTextCreator,
} from "./../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <Dialog name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message id={m.id} message={m.message} />
  ));

  const addMessage = () => {
    props.dispatch(addMessageCreator());
  };

  const updateMessageText = (e) => {
    let currentMessage = e.target.value;
    props.dispatch(updateMessageTextCreator(currentMessage));
  };

  return (
    <div className="dialogs_container">
      <div className="dialogs">{dialogsElements}</div>
      <div className="messages">
        {messagesElements}
        <textarea
          className="messages__textarea"
          value={props.newMessageText}
          onChange={updateMessageText}
        ></textarea>
        <button className="messages__btn" onClick={addMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
