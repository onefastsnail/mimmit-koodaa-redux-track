/*
  Our action types
  We use these in action creators and the reducer to match the actions trying to change state
*/
export const SET_POSTS = "SET_POSTS";
export const SEARCH_POSTS = "SEARCH_POSTS";

/*
    Our action creator
    Just a function that return plain JavaScript object
    We dispatch this when wanting to make changes to our store
*/
export const fetchPosts = posts => {
  return { type: SET_POSTS, posts };
};

export const searchPosts = query => {
  return { type: SEARCH_POSTS, query };
};

/*
    Our store initial state
*/
const intialState = {
  query: "",
  posts: []
};

/*
    Our reducer
    Reducers specify how the application's state changes in response to actions sent to the store
    We use a switch statement to give us flexibility to handle more different actions
*/
export default (state = intialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      return { ...state, posts: action.posts };
    }
    case SEARCH_POSTS: {
      return { ...state, query: action.query };
    }
    default:
      return state;
  }
};
