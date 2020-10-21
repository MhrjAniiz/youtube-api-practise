import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

export default class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  handleInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleFormSubmit(this.state.input);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="standard-basic"
            label="Search"
            className="searchbar__bar"
            type="text"
            placeholder="enter what you want to see"
            value={this.state.input}
            onChange={this.handleInput}
          />

          <Button
            disabled={!this.state.input}
            variant="contained"
            color="secondary"
            type="submit"
          >
            {" "}
            Search
          </Button>
        </form>
      </div>
    );
  }
}
