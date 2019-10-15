import React, { Component } from 'react'


class CounterButton extends Component {
  state = {
    counter: 0,
  }
  // handleClick = () => {
  //   this.setState(prevState => ({ counter: prevState.counter + 1}))
  // }
  handleClick = () => {
    this.setState(({ counter }) => ({ counter: counter + 1}))
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <div>{ counter }</div>
        {/* destructuring this.state.counter */}
        <button onClick={ this.handleClick }>+1</button>
      </div>
    )
  }
}

export default CounterButton;
