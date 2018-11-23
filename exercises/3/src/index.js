import { createStore } from "redux";

/*
  Our action types
  We use these in action creators and the reducer to match the actions trying to change state
*/
const SET_GIPHY_URL = "SET_GIPHY_URL";

/*
    Our action creator
    Just a function that return plain JavaScript object
    We dispatch this when wanting to make changes to our store
*/
const setGiphyUrl = url => {
  return { type: SET_GIPHY_URL, url };
};

/*
    Our reducer
    Reducers specify how the application's state changes in response to actions sent to the store
    We use a switch statement to give us flexibility to handle more different actions
*/
const reducer = (state, action) => {
  switch (action.type) {
    case SET_GIPHY_URL: {
      return { ...state, url: action.url };
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
const store = createStore(reducer);

/*
  Essentially this subscription adds a change listener to our state store
  It will be called any time an action is dispatched or the state tree changes
  We extract the url from the store state and set the body background image property
*/
store.subscribe(() => {
  const { url } = store.getState();
  document.body.style.backgroundImage = `url(${url})`;
});

/*
  Lets add an onclick listener to a button
  And when the button is clicked we dispatch an action to our store
  This is the only way to trigger a state change, by dispatching actions
*/
const button = document.querySelector("button");
button.addEventListener("click", () => {
  store.dispatch(
    setGiphyUrl("https://media.giphy.com/media/gU25raLP4pUu4/giphy.gif")
  );

  /* 
    The above is the same as:

    const action = setGiphyUrl("https://media.giphy.com/media/gU25raLP4pUu4/giphy.gif");
    store.dispatch(action);

    or 
    
    store.dispatch({ type: SET_GIPHY_URL, url: "https://media.giphy.com/media/gU25raLP4pUu4/giphy.gif" });

    We use an action creator instead.

    */
});
