# Exercise 4

In this exercise we will create a React Redux application to query an API to get related suggestions on related movies, music, books and games.

## Goals

- To learn how to connect Redux with React
- Learn about functional components
- To create multiple reducers to represent branches in the state tree

## Usage

`npm run exercise4`

## Tasks

### 1. Connect our application to state

In `src/index.js` we have an instance of our store on line 9, just like what we did from [exercise 3](exercises/3/README.md). But now in React land we have to somehow connect our the store to our React application. There is a useful library [React Redux](https://github.com/reduxjs/react-redux) that gives us official React bindings for Redux which will help us connect our store.

We start by replacing our `React.Fragment` component with a `Provider` component provided by the React Redux library. This `Provider` component makes the Redux store available to any nested components that have been wrapped in the connect() function. We will touch on this connect function soon.

We also pass the store as a prop to the provider so it can subscribe to the store changes and act accordingly.

```javascript
<Provider store={store}>
  <YouMayLike />
</Provider>
```

### 2. Connect our component to the Redux store

Now that we have provided the Redux store to our application, we can now connect our components to it. To do this we use the [`connect()`](https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connect). Connect is a higher order component which simply means it is a function that takes a component and returns a new component. So in this case the new component returned will have the Redux state passed to it via props.

So we now want to replace our `export default YouMayLike;` with the connect approach.

```javascript
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YouMayLike);
```

At this point you may be wondering what the hell `mapStateToProps` and `mapDispatchToProps` are?! These are functions that are passed to `connect()`. Both are functions that need to return an object, whose keys will then be passed on as the props of the component they are connected to.

So below we map our entire Redux state to our component, meaning all store properties will be available on the components props value.

```javascript
const mapStateToProps = state => state;
```

Remember the `dispatch()` used in [exercises/3/README.md](exercise 3), React Redux allows us to map this function also to our components props, allowing our component to dispatch actions for our store to then react upon.

```javascript
const mapDispatchToProps = dispatch => ({ dispatch });
```

Great so now we should have our application and component connected to state! And in your browser you should see an output.

### 3. Use the Redux state to store form categories

In this task we want to create and store our categories in our Redux store.

First we add some initial state to our branch of state in `src/storeBranches/youMayLike.js`. We have an array of categories to populate our dropdown. We have also added a property to store the current selected category.

```javascript
  categories: ["music", "movies", "books", "games"],
  selectedCategory: "movies",
```

Then we add an action type for our action creator and reducer to both use.

```javascript
export const SET_CATEGORY = "SET_CATEGORY";
```

Up next is to create an action creator. Action creators are exactly that—functions that create actions. Actions are payloads of information that send data from your application to our store. This makes them portable and easy to test. We send them to the store using `dispatch()`.

```javascript
export const setCategory = category => {
  return { type: SET_CATEGORY, category };
};
```

Now we need to add a case for our reducer to be able to act upon this new action being received.

**Coach** Explain about mutation here and the spread operator

```javascript
case SET_CATEGORY: {
      return { ...state, selectedCategory: action.category };
    }
```

Ok, so we now have our Redux store with initial values and actions to manage our category. Up next is to add our select dropdown to our `src/components/YouMayLike.js` render.

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

Our event handler must now do thing, so within this method we want to dispatch an action to our store. Remember how our `mapDispatchToProps` function would help us map the `dispatch()` to our components props, well now we then call it, and pass this function our action creator with the selected category from the dropdown.

```javascript
this.props.dispatch(setCategory(event.target.value));
```

```
{this.props.isFetching && <Loading />}
<Results data={this.props.results} />
```

## Further development ideas

- Make a save list of results you like
