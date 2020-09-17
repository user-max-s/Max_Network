import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import App from "./App";
import { Provider } from "react-redux";

const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

serviceWorker.unregister();
