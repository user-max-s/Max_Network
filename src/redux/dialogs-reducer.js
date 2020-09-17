const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Max" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Dasha" },
    { id: 4, name: "Igor" },
    { id: 5, name: "Vlad" },
    { id: 6, name: "Valera" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 1, message: "How is your ..." },
    { id: 1, message: "Everything is OK!" },
  ],
  newMessageText: "Your message",
};

const dialogsReducer = (state = initialState, action) => {
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

export default dialogsReducer;
