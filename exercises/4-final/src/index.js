import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import createStore from "./store";
import "./styles.scss";
import YouMayLike from "./components/YouMayLike";

// Create an instance of our Redux store
const store = createStore();

/*
  A generic app component to hold our components
  This Provider component is how Redux connects our app to the store state
  The Provider subscribes to the store and calls setState upon changes which are then passing down the tree of components
*/
const App = () => (
  <Provider store={store}>
    <YouMayLike />
  </Provider>
);

render(<App />, document.getElementById("app"));
