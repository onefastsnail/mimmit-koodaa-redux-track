import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import createStore from "./store";
import "./styles.css";
import Hello from "./components/Hello";

// Create an instance of our store
const store = createStore();

/*
  A generic app component for demo
  This Provider component is how Redux connects our app with the store state
  It subscribes to the store and calls setState upon changes which are then passing down the tree of components listening
*/
const App = () => (
  <Provider store={store}>
    <Hello />
  </Provider>
);

render(<App />, document.getElementById("app"));
