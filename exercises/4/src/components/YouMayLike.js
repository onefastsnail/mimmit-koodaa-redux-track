import React, { Component } from "react";
import {
  setQuery,
  setCategory,
  fetchRequest,
  receivedRequest
} from "../storeBranches/youMayLike";

const API_KEY = "324255-testing-TYA5V2TQ"; // If not valid go here https://tastedive.com/account/api_access

class YouMayLike extends Component {
  constructor(props) {
    super(props);
  }

  handleQueryChange = event => {
    this.props.dispatch(setQuery(event.target.value));
  };

  handleSubmit = event => {
    event.preventDefault(); // Prevent the form from refreshing the page
    Promise.resolve()
      .then(() => this.props.dispatch(fetchRequest()))
      .then(() =>
        fetch(
          `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${
            this.props.query
          }&type=${this.props.selectedCategory}&k=${API_KEY}`
        )
          .then(response => response.json())
          .then(response =>
            this.props.dispatch(receivedRequest(response.Similar.Results))
          )
      );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.props.query}
            onChange={this.handleQueryChange}
            placeholder={`I like...`}
            required
            autoFocus
          />
          <button type="submit">Find more</button>
        </form>

        <div className="l-grid">
          <div className="l-grid__column">{/* Results here */}</div>
          <div className="l-grid__column">
            <pre>
              <code>{JSON.stringify(this.props, null, 2)}</code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default YouMayLike;
