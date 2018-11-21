import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, searchPosts } from "../branches/posts";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(repsonse => {
        this.props.dispatch(fetchPosts(repsonse));
      });
  }

  handleSearch = event => {
    this.props.dispatch(searchPosts(event.target.value));
  };

  filterPosts = () => {
    const byTitle = post =>
      post.title.toLowerCase().indexOf(this.props.query.toLowerCase()) > -1;

    const byBody = post =>
      post.body.toLowerCase().indexOf(this.props.query.toLowerCase()) > -1;

    return this.props.posts.reduce((posts, post) => {
      if (byTitle(post) || byBody(post)) posts.push(post);
      return posts;
    }, []);
  };

  render() {
    const posts = this.filterPosts();

    return (
      <div>
        <input
          type="text"
          value={this.props.query}
          onChange={this.handleSearch}
          placeholder={`Search ${this.props.posts.length} posts`}
          autoFocus
        />

        {posts.map(item => (
          <Post key={item.id} data={item} />
        ))}
      </div>
    );
  }
}

// Map all the store state to props of the component
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

/*
  Connect our component to state using a higher order component
  A higher order component is a component the returns a new component
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
