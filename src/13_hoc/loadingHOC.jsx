import React, { Component } from 'react';
import './loader.css'

const isEmpty = (prop) => (
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty('length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)
);


const LoadingHOC = (loadingProp) => (WrappedComponent) => {
  return class App extends Component {
    render() {
      return isEmpty(this.props[loadingProp]) ?
      <div className="loader"></div>
      : <WrappedComponent {...this.props} />;
    }
  }
}

export default LoadingHOC;
