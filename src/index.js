import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      affordableRent: 0,
      userInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMath = this.handleMath.bind(this);
    this.hndlChange = this.hndlChange.bind(this);
    this.reset = this.reset.bind(this);
  }
  reset() {
    this.setState({
      userInput: ""
    });
  }
  handleMath() {
    this.setState({ affordableRent: this.state.userInput / 40 });
    this.reset();
  }
  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  hndlChange(e) {
    this.setState({ affordableRent: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>Your Max rent is:</h1>
        <div className="App-inner">
          <h1 onChange={this.hndlChange}>
            {this.state.affordableRent}
          </h1>
        </div>
        <input
          placeholder="Input your annual salary"
          value={this.state.userInput}
          onChange={this.handleChange}
          type="text"
        />
        <button onClick={this.handleMath}>Submit</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
