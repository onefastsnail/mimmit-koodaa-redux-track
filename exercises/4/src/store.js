import { createStore } from "redux";
import youMayLikeReducer from "./storeBranches/youMayLike";

/*
  Create a Redux store that holds the complete state tree of our app
  We can have multiple reducers, each reducer manages that branch of the state tree
  For now we only have one reducer
*/
export default () => createStore(youMayLikeReducer);
