import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Counter extends React.Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>{counter}</h2>
        <button onClick={() => this.props.dispatch(increment())}> + </button>
        <button onClick={() => this.props.dispatch(decrement())}> - </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state };
}

export default connect(mapStateToProps)(Counter);
