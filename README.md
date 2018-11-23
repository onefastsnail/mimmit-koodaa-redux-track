# State, React and Redux

We will try to go some exercises to help understand state within [React](https://reactjs.org), moving onto [Redux](https://redux.js.org/), and when you could use Redux in your React application.

## The Goals

- To understand state
- To understand state within React
- To understand Redux on its own
- Sharing state across React components and understanding the need for something like Redux
- Functional components that rely on props as a data source

## Getting started

1. Run all `npm` commands from the root project folder
1. `npm install` to install the necessary libraries

## Ok, so what is state?

In essence, state can be defined as a particular condition that something is in at a specific time. It really is as simple as that.

## State with React

State is hugely important in React. In the context of React, state can refer to current condition of a component or even an entire application, which we will see later. Any changes to a components state or props will trigger a re render as your component needs to "React" to the new data.

State can be anything, but it could be easier to think of things like storing the current state of if a modal is open or an array of blog posts.

Being able to store the state of a component or an application allows us to determine how our components and application will render and behave.

Throughout the exercises we will discover two ways to manage state. First we will implement a stateful component, where the component itself will handle its own state and we can pass its state as props to child components. Soon after we will discover when nesting components deeper in our component tree that passing data as props through these levels becomes tedious and difficult to follow. We will then look into sharing state across our application by moving state to a higher location with the help from Redux.

## Redux

Finally we get to Redux! It is maybe good to mention that Redux is not a library specific to React, in fact it can be used with plain old vanilla Javascript. Redux is also not the only option for state management nor is it necessity in every application. We will try to go through a series of exercises to help understand why and when you would want to use some sort of state management such as Redux in your React application.

## Exercises

We have created a series of exercises to help take you on the journey of understanding state in React and its different forms.

### Rules

We have one and only one rule... You must write the code you see, not copy :p. This will help you get more familiar with the code you are using.

1. [Implementing a stateful component](exercises/1/README.md)
1. [Passing state down as props](exercises/2/README.md)
1. [Redux introduction](exercises/3/README.md)
1. [Bringing Redux to React](exercises/4/README.md)
