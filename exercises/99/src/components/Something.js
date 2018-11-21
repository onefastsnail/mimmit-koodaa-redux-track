import React, { Component } from "react";

const IS_TYPING = "IS_TYPING";

const reducer = action => (state, props) => {
  switch (action.type) {
    case IS_TYPING: {
      return {
        value: action.value
      };
    }
    default:
      return null;
  }
};

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "State Reducer Pattern eh"
    };
  }

  handleValueChange = event => {
    this.setState(
      reducer({
        type: IS_TYPING,
        value: event.target.value
      })
    );
  };

  render() {
    return (
      <div>
        <p>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleValueChange}
          />
        </p>
        <p>{this.state.value}</p>
      </div>
    );
  }
}
