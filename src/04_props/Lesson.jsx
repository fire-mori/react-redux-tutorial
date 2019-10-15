import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const Counter = (props) => {
//   console.log(props)
//   return <h1>{`Counter Component. Counter value is ${props.counter}`}</h1>
// }

const Counter = ({counter, number, string}) => {
  console.log(counter, number, string)
  return <h1>{`Counter Component. Counter value is ${counter}`}</h1>
}

Counter.PropTypes = {
  counter: PropTypes.number.isRequired, // is required - essential property
  number: PropTypes.number,
  string: PropTypes.string,
}

Counter.defaultProps = {
  number: 0,
  string: '',
}

class CounterButton extends Component {
  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState(({ counter }) => ({ counter: counter + 1}))
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <div>{ counter }</div>
        {/* destructuring this.state.counter */}
        <Counter
        counter={ counter }
        number={ 123 }
        string='abc'
        />
        <button onClick={ this.handleClick }>+1</button>
      </div>
    )
  }
}

export default CounterButton;
