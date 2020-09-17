// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello how are you?" },
        { id: 2, message: "It is my first post" },
      ],
      newPostText: "it-kamasutra",
    },
    dialogsPage: {
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
    },
  },

  _callSubscriber() {
    console.log("rerender");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
