import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import state, { subscribe, addPost, updateNewPostText } from "./redux/state";
import App from "./App";

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        appState={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        newPostText={state.newPostText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

serviceWorker.unregister();
