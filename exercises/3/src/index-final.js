import { createStore } from "redux";

/*
  Our action types
  We use these in action creators and the reducer to match the actions trying to change state
*/
const SET_GIPHY_URL = "SET_GIPHY_URL";
const MOUSE_CLICK = "MOUSE_CLICK";

/*
    Our action creator
    Just a function that return plain JavaScript object
    We dispatch this when wanting to make changes to our store
*/
const setGiphyUrl = value => {
  return { type: SET_GIPHY_URL, value };
};

const mouseClick = value => {
  return { type: MOUSE_CLICK, value };
};

/*
    Our reducer
    Reducers specify how the application's state changes in response to actions sent to the store
    We use a switch statement to give us flexibility to handle more different actions
*/
const reducer = (state, action) => {
  switch (action.type) {
    case SET_GIPHY_URL: {
      return { ...state, url: action.value };
    }
    case MOUSE_CLICK: {
      return { ...state, clickCoordinates: action.value };
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
  const { url, clickCoordinates } = store.getState();
  document.body.style.backgroundImage = `url(${url})`;
  document.querySelector(".coordinates").innerHTML =
    clickCoordinates && clickCoordinates.join(", ");
});

/*
  Lets add an onclick listener to a button
  And when the button is clicked we dispatch an action to our store
  This is the only way to trigger a state change, by dispatching actions
*/
const button = document.querySelector("button");
button.addEventListener("click", () => {
  fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=seYUer2bPoJZHvH7soSy12u5ynQXIYbT&rating=G&tag=pandas"
  )
    .then(response => response.json())
    .then(({ data }) => store.dispatch(setGiphyUrl(data.image_url)));
});

window.addEventListener("click", event => {
  store.dispatch(mouseClick([event.pageX, event.pageY]));
});
