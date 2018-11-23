# Redux

This is a simple implementation of [Redux](https://redux.js.org/). The goal here is to show its fundamentals.

## Goals

- To get an understanding of Redux on its own
- To understand dispatching actions, reducing data, and subscribing to a store

## Usage

`npm run exercise3`

## Tasks

**Coach** Explain the Redux concepts

1. Create a new action, action creator, and reducer case to store the coordinates of the last user click on the page

- **Hint** Add a `window` click listener to get the `event` object with `pageX` and `pageY` properties. Uncomment the paragraph in `index.html` to have an DOM element to add the values to, the `div.coordinates`.

1. Modify the code so you fetch a random Giphy each time the button is clicked

- **Hint** Use `fetch` and dispatch an action when you get your API response
- Here is a Giphy URL to get a random image API response `https://api.giphy.com/v1/gifs/random?api_key=seYUer2bPoJZHvH7soSy12u5ynQXIYbT&rating=G`

## Too easy?

1. Create a new action, action creator, and reducer case to store the current time

- Using an `setInterval` to `dispatch` an action with the current timestamp, maybe `Date.now()`?

## Need some help?

The final result can be found in [src/index-final.js](src/index-final.js)
