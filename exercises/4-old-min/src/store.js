import { createStore } from "redux";

/*
  Our action types
  We use these in action creators and the reducer to match the actions trying to change state
*/
export const SET_GIPHY_URL = "SET_GIPHY_URL";

/*
    Our action creator
    Just a function that return plain JavaScript object
    We dispatch this when wanting to make changes to our store
*/
export const setGiphyUrl = value => {
  return { type: SET_GIPHY_URL, value };
};

/*
    Our store initial state
*/
const intialState = {
  url: "https://media.giphy.com/media/EPcvhM28ER9XW/giphy-downsized.gif"
};

/*
    Our reducer
    Reducers specify how the application's state changes in response to actions sent to the store
    We use a switch statement to give us flexibility to handle more different actions
*/
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_GIPHY_URL: {
      return { ...state, url: action.value };
    }
    default:
      return state;
  }
};

/*
  Create a Redux store that holds the complete state tree of our app
  We can have multiple reducers, each reducer manages that branch of the state tree
  For now we only have one reducer
*/
export default () => createStore(reducer);
