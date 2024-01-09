import React, { props } from "react";

export default class SampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    //call api
  }

  render() {
    return (
      <div>
        <h1>Component using Class</h1>
        <p>Props - {this.props.name}</p>
        <p>State - {this.state.count}</p>
        <button onClick={() => this.handleClick()}>Increment</button>
      </div>
    );
  }
}
