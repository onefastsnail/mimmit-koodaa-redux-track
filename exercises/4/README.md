# Exercise 4

In this exercise we will create a React Redux application which will query an API to get related suggestions on related movies, music, books and games.

[A final demo]() can be found here.

## Goals

- To learn how to connect Redux with React
- To apply the concepts of Redux to React components
- Learn about functional components

## Usage

`npm run exercise4`

## Tasks

### 1. Connect our application to state

In `src/index.js` we create an instance of our store on line 9, just like what we did from [exercise 3](exercises/3/README.md). But now in React land we have to somehow connect our the store to our React application. There is a useful library [React Redux](https://github.com/reduxjs/react-redux) that gives us official React bindings for Redux which will help us connect our store.

We start by replacing our `React.Fragment` component with a `Provider` component found in the React Redux library. This `Provider` component makes the Redux store available to our components that have been called using the `connect()`. We will touch on this function shortly.

We also pass the store as a prop to the provider so itself can subscribe to the store changes and act accordingly.

```javascript
<Provider store={store}>
  <YouMayLike />
</Provider>
```

### 2. Connect our component to the Redux store

Now that we have provided the Redux store to our application, we can now connect our components to it. It is maybe good to note that not all our components need to connect to our store.

**Coach** Explain presentational vs container components.

To connect our components to our store we use the [`connect()`](https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connect). Connect is a higher order component which simply means it is a function that takes a component and returns a new component. So in this case the new component returned will have the Redux state passed to it via props.

So we now want to replace our `export default YouMayLike;` line with the `connect()` approach.

First we need to import this function.

```javascript
import { connect } from "react-redux";
```

Then we can call it...

```javascript
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YouMayLike);
```

At this point you may be wondering what the hell `mapStateToProps` and `mapDispatchToProps` are!? Both are functions that need to return an object, whose keys will then be passed on as the props of the component they are connected to.

So below we map our entire Redux state to our component, meaning all store properties will be available on our components props.

```javascript
const mapStateToProps = state => state;
```

**Coach** Explain arrow functions

Remember the `dispatch()` used in [exercises/3/README.md](exercise 3), React Redux allows us to map this function to our components props, allowing our component to dispatch actions to our store.

```javascript
const mapDispatchToProps = dispatch => ({ dispatch });
```

Great so now we should have our application and component connected to state! And in your browser you should see.... something!

### 3. Use the Redux state to store form categories

In this task we will create and store our categories in our Redux store.

First we add some initial state to our branch of state in `src/storeBranches/youMayLike.js`. We have an array of categories to populate our dropdown. We have also added a property to store the current selected category.

**Coach** Explain state branches

```javascript
  categories: ["music", "movies", "books", "games"],
  selectedCategory: "movies",
```

Then we create an action type for our action creator and reducer to use.

```javascript
export const SET_CATEGORY = "SET_CATEGORY";
```

Up next is to create an action creator. Action creators are exactly that, functions that create actions. Actions are payloads of information that send data from your application to our store. This makes them portable and easy to test. We send them to the store using `dispatch()`.

So first lets create our action creator.

```javascript
export const setCategory = category => {
  return { type: SET_CATEGORY, category };
};
```

Now we need to add a case for our reducer to be able to act upon this new action being received in the store.

**Coach** Explain about mutation here and the spread operator.

```javascript
case SET_CATEGORY: {
      return { ...state, selectedCategory: action.category };
    }
```

Ok, so we now have our Redux store with initial values and actions to manage our categories. Up next is to add our select dropdown to our `src/components/YouMayLike.js` render output.

```javascript
<select
  onChange={this.handleCategoryChange}
  value={this.props.selectedCategory}
>
  {this.props.categories.map(category => (
    <option key={category} value={category}>
      {category}
    </option>
  ))}
</select>
```

Now that we have our select dropdown, we need to implement our on change event handlers like in [exercise 1](exercises/1/README.md).

```javascript
handleCategoryChange = event => {
  // Dispatch an action to our store
};
```

We want our event handler to do something, so within this method we want to dispatch an action to our store with the category selected by the user. Remember how our `mapDispatchToProps` function would help us provide the `dispatch()` to our components props, well here we want to call it and pass it our action creator with the selected category from the dropdown.

**Coach** Explain the event object

```javascript
this.props.dispatch(setCategory(event.target.value));
```

**Coach** Explain the `handleSubmit` method, and dispatching `fetchRequest` first then `receivedRequest` with the response.

### 4. Display the results with a loading component

** @TODO: This could be broken down more ie the results component **

Great, we now have results but we cant see them! We have created `Loading` and `Results` components to help.

First we import our components.

```javascript
import Loading from "./Loading";
import Results from "./Results";
```

We only want to show the `Loading` component if our store says we are fetching.

**Coach** Recap the promise chain in the `handleSubmit` dispatching multiple actions

```
{this.props.isFetching && <Loading />}
```

Now we want to pass the store `results` value to our `Results` component to render.

```javascript
<Results data={this.props.results} />
```

Awesome! We should now see results!

## Further development ideas

Hungry for more?

- Paginate your results
- Make a "save for later" list of results you like
- Save state to local storage to allow page refreshes
- Create another branch in the state tree
