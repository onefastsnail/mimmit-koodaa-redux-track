/*
  Our action types
  We use these in action creators and the reducer to match the actions trying to change state
*/
export const SET_QUERY = "SET_QUERY";
export const SET_CATEGORY = "SET_CATEGORY";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

/*
    Our action creators
    Just a regular function that returns plain JavaScript object
    We dispatch these when wanting to make changes to our store
*/
export const setQuery = query => {
  return { type: SET_QUERY, query };
};

export const setCategory = category => {
  return { type: SET_CATEGORY, category };
};

export const fetchRequest = () => ({
  type: FETCH_REQUEST
});

export const receivedRequest = data => ({
  type: FETCH_SUCCESS,
  data
});

/*
    Our store initial state of this branch in the tree
*/
const intialState = {
  query: "",
  categories: ["music", "movies", "books", "games"],
  selectedCategory: "movies",
  isFetching: false,
  results: []
};

/*
    Our reducer
    Reducers specify how the application's state changes in response to actions sent to the store
    We use a switch statement to give us flexibility to handle more different actions
*/
export default (state = intialState, action) => {
  switch (action.type) {
    case SET_QUERY: {
      return { ...state, query: action.query };
    }
    case SET_CATEGORY: {
      return { ...state, selectedCategory: action.category };
    }
    case FETCH_REQUEST: {
      return { ...state, isFetching: true };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        results: [...action.data]
      };
    }
    default:
      return state;
  }
};
