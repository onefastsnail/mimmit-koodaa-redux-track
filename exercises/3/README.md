# Redux

This is a simple implementation of [Redux](https://redux.js.org/). The goal here is to show its fundamentals.

## Goals

* To get an understanding of Redux on its own
* To understand dispatching actions, reducer, and store subscription

## Usage

`npm run exercise3`

## Tasks

1. Add a new action, action creator, and reducer case to store the coordinates of the last click in the page
  * **Hint** Add a `window` click listener to get the `event` `pageX` and `pageY` properties. Uncomment the paragraph in `index.html`
1. Modify the code so you fetch a random Giphy each time the button is clicked
  * **Hint** Use `fetch` and dispatch an action when you get your API response
  * Here is a Giphy URL to get a random image API response `https://api.giphy.com/v1/gifs/random?api_key=seYUer2bPoJZHvH7soSy12u5ynQXIYbT&rating=G`
