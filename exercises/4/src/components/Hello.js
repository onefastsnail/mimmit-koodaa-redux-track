import React from "react";
import { connect } from "react-redux";

/*
  A functional component
  Our component doesnt require state but is simply passed its data via props
  For now we dump the store to the page to see what is going on
*/
const Hello = props => {
  return (
    <div>
      <img src={props.url} alt="Giphy" />
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
  );
};

// Map all the store state to props of the component
const mapStateToProps = state => state;

/*
  Connect our component to state using a higher order component
  A higher order component is a component the returns a new component
*/
export default connect(mapStateToProps)(Hello);
