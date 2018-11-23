# Exercise 1

Lets implement a component that renders an image from the state url property.

## Goals

- To create a stateful component
- Understand the `setState` method
- Providing an updater function to `setState` and the why

## Usage

1. `npm install`
2. `npm run exercise1`

Or want to work from [Codesandbox](https://codesandbox.io/s/8kxkj5987l) 😈?

## Tasks

### 1. Set state when the component mounts

When the component mounts into the DOM, let update the component state with a URL

Here we would want to make use of the [`componentDidMount`](https://reactjs.org/docs/react-component.html#componentdidmount) component life cycle method. This method is called when a component is mounted into the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

So lets add the following class method to our [`src/components/Giphy.js`](src/components/Giphy.js) component.

```javascript
componentDidMount() {
  // Call setState here
}
```

Now that we have our class method that will execute when our component mounts, we now need to set our component state. The only way to update the state of a React component is to call [`setState`](https://reactjs.org/docs/react-component.html#setstate) which will then trigger a series of actions that will make our component "React" to such changes.

We can pass an object to `setState` with only the properties of state we want to update. So lets set our `imageUrl` to a random [Giphy](http://giphy.com).

```javascript
this.setState({
  imageUrl: "https://media.giphy.com/media/LIdIMWPUYl6cE/giphy.gif"
});
```

### 2. Render the image

Now we have our state populated with an image url, we need to now render the image to the page.

Lets add our image to the render return, inside the `div`.

```javascipt
{<img src={this.state.imageUrl} alt="Giphy" />}
```

**Bonus** Try to only show the image when `imageUrl` has a value.

### 3. Add a button

Lets now add a button so when clicked it will fetch a new Giphy and update the state `imageUrl` property when received. This update to state will then show our image, which means we now have state changes from user events!

Lets add our button in the `render()`. Below we are saying that when a user clicks this button we call the `handleClick` method in our component class.

```javascript
<button onClick={this.handleClick}>Get Random Giphy</button>
```

Now lets hook up our button event handler to a class method.

**Coach:** Explain the use of the arrow function here and why

```javascript
handleClick = () => {
  // Insert fetch Giphy function here
};
```

Finally we can implement our function to fetch from the Giphy API. For this we can use the native browser [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) function. This function returns a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Promises are good for handling operations that dont return immediately, for example a call to an API where the response will come back sometime in the future. The `then` method is saying once we have the data from our call we `then` do this with the returned data, if any provided. In our `fetch` we have an additional `then` call to parse our API response to JSON format so we can use it.

**Coach:** Can explain promises

```javascript
fetch(giphyUrl)
  .then(response => response.json())
  .then(({ data }) => {
    // Here we can update state with our image url
    // To help see what our API returns lets inspect it in the console, ask the coach!
    console.log(data);
  });
```

Now that we have our image url available, we can update the component state to trigger the re render and therefore show our image.

We make a similar call like we did in `componentDidMount` but passing our new image url from the API response.

```javascript
this.setState({
  imageUrl: data.image_url
});
```

### 4. Add a request counter

Lets add a counter to keep track of how many Giphys we have requested.

Firstly we need to add a new state property, lets call it `count`.

```javascript
this.state = {
  imageUrl: null,
  count: 0
};
```

Then we could add a new paragraph to the component `render()` to display the count value.

```javascript
<p>{this.state.count} Giphys requested!</p>
```

Great so we should now see the default value of 0.

Lets now update our `setState` call within our `fetch`. The first approach some may go to would be to simply add the count property to the object fed to the `setState` call:

```javascript
count: this.state.count + 1;
```

However has a problem where `setState` is asynchronous, which means it will enqueue your change requests to the component state for better performance.

So in the example above if we make multiple simultaneous calls to `setState` each referring to the current value of `this.state.count` at the time we make the call then we may not get the correct value of count when incrementing.

Previously we passed an object to the `setState` method, but we can also pass a function. This [function](https://reactjs.org/docs/react-component.html#setstate) is then called by React with the current state and props. This means we can accurately get the current state count value and increment that value regardless of this call in queue.

```javascript
this.setState(previousState => {
  return {
    imageUrl: data.image_url,
    count: previousState.count + 1
  };
});
```

## Need some help?

The final result can be found in [src/components/Giphy-final.js](src/components/Giphy-final.js)
