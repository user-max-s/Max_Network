import React from "react";
import StoreContext from "../../StoreContext";
import {
  addMessageCreator,
  updateMessageTextCreator,
} from "./../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        const addMessage = () => {
          store.dispatch(addMessageCreator());
        };

        const updateMessageText = (currentMessage) => {
          store.dispatch(updateMessageTextCreator(currentMessage));
        };
        return (
          <Dialogs
            addMessage={addMessage}
            updateMessageText={updateMessageText}
            dialogsPage={state.dialogsPage}
            newMessageText={state.dialogsPage.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
