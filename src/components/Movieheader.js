import React, { Component } from "react";

class MoviesHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="title-wrapper">
        <h1 className="card-title" id="gradient-text"><u>Movies</u></h1>
      </div>
    );
  }
}

export default MoviesHeader;
