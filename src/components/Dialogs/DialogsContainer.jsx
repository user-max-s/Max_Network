import { connect } from "react-redux";
import {
  addMessageCreator,
  updateMessageTextCreator,
} from "./../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateMessageText: () => {
      dispatch(addMessageCreator());
    },
    addMessage: (currentMessage) => {
      dispatch(updateMessageTextCreator(currentMessage));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
