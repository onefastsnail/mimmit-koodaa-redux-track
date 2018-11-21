import React, { Component } from "react";
import { giphyUrl } from "../utils";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: null,
      count: 0
    };
  }

  componentDidMount() {
    this.setState({
      imageUrl: "https://media.giphy.com/media/LIdIMWPUYl6cE/giphy.gif"
    });
  }

  handleClick = () => {
    fetch(giphyUrl)
      .then(response => response.json())
      .then(({ data }) => {
        this.setState(previousState => {
          return {
            imageUrl: data.image_url,
            count: previousState.count + 1
          };
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.imageUrl && <img src={this.state.imageUrl} alt="Giphy" />}
        <p>
          <button onClick={this.handleClick}>Get Random Giphy</button>
        </p>
        <p>{this.state.count} Giphys requested!</p>
      </div>
    );
  }
}
