import { createStore } from "redux";
import postsReducer from "./storeBranches/posts";

/*
  Create a Redux store that holds the complete state tree of our app
  We can have multiple reducers, each reducer manages that branch of the state tree
  For now we only have one reducer
*/
export default () => createStore(postsReducer);
