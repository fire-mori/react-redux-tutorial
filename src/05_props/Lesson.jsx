import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const Counter = (props) => {
//   console.log(props)
//   return <h1>{`Counter Component. Counter value is ${props.counter}`}</h1>
// }

export const Counter = ({counter = 0}) => {
  return <h1>{`Counter Component. Counter value is ${counter}`}</h1>
};

export const Button = () => (
  <button>Button from props</button>
);

export class CounterButton extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  static defaultProps = {
    children: null,
  };

  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState(({ counter }) => ({ counter: counter + 1}))
  };

  render() {
    const { counter } = this.state;
    const { children, child } = this.props;

    return (
      <div>
        { child }
        <div>{ counter }</div>
         {/* { children } */}
         {/* пробрасывание пропсов в дочерний оборачиваемый компонент из компонента обертки */}
         { React.cloneElement(children, { counter: this.state.counter }) }

        <button onClick={ this.handleClick }>+1</button>
      </div>
    )
  }
}

export default CounterButton;
