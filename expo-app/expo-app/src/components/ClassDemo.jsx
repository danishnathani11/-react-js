import { Component } from "react";

class ClassDemo extends Component {
  constructor() {
    super();
    this.state = { clicks: 0 };
  }

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>Clicks: {this.state.clicks}</p>

        <button onClick={() => this.setState({ clicks: this.state.clicks + 1 })}>
          Add
        </button>
      </div>
    );
  }
}

export default ClassDemo;
