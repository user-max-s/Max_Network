const state = {
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
  },
};

window.state = state;

let rerenderEntireTree;

export const addPost = () => {
  let newPost = { id: 3, message: state.profilePage.newPostText };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
