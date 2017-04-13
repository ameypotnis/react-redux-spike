import React, {Component} from 'react';

export default class Counter extends Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <section>
        <div id="counter">{value}</div>
        <button id="inc" onClick={onIncrement}>+</button>
        <button id="dec" onClick={onDecrement}>-</button>
      </section>
    )
  }
}
