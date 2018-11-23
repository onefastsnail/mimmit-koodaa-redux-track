import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setQuery,
  setCategory,
  fetchRequest,
  receivedRequest
} from "../storeBranches/youMayLike";
import Loading from "./Loading";
import Results from "./Results";

const API_KEY = "324255-testing-TYA5V2TQ"; // If not valid go here https://tastedive.com/account/api_access

class YouMayLike extends Component {
  constructor(props) {
    super(props);
  }

  handleQueryChange = event => {
    this.props.dispatch(setQuery(event.target.value));
  };

  handleCategoryChange = event => {
    this.props.dispatch(setCategory(event.target.value));
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
          Find
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
          that are similar to
          <input
            type="text"
            value={this.props.query}
            onChange={this.handleQueryChange}
            placeholder={`... Harry Potter`}
            required
            autoFocus
          />
          <button type="submit">Go!</button>
        </form>

        <div className="l-grid">
          <div className="l-grid__column">
            {this.props.isFetching && <Loading />}

            <Results data={this.props.results} />
          </div>
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

// Map all the store state to props of the component
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ dispatch });

/*
  Connect our component to state using a higher order component
  A higher order component is a component the returns a new component
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YouMayLike);
