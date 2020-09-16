const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE";

export let addMessageCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export let updateMessageTextCreator = (message) => {
  return {
    type: UPDATE_TEXT_MESSAGE,
    newMessage: message,
  };
};

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 1,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      return state;
    case UPDATE_TEXT_MESSAGE:
      state.newMessageText = action.newMessage;
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;
