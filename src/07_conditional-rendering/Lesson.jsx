import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';

const ValidationMsg = ({val}) => {
   if (val > 10 ) {
     return <h1>greater than 10</h1>
   } else {
     return <h1>less then 10</h1>
   }
  };

const Tab1 = () => (
  <h1>Tab1 text text</h1>
)

const Tab2 = () => (
  <h1>Tab2 text text</h1>
)

const Tab3 = () => (
  <h1>Tab3 text text</h1>
)

class App extends Component {

  state = {
    activeTab: 1,
  }

  handleTab = (event) => {
    this.setState({
      activeTab: Number(event.target.getAttribute('data-name')),
    });
  }

  render() {
    console.log(this.state);
    const { activeTab } = this.state;
    return (
      <div>
        <ValidationMsg val={ 8 } ></ValidationMsg>
        <Fragment>
          <button data-name={1} onClick={ this.handleTab }>Tab1</button>
          <button data-name={2} onClick={ this.handleTab }>Tab2</button>
          <button data-name={3} onClick={ this.handleTab }>Tab3</button>
          { activeTab === 1 ? <Tab1/> : activeTab === 2 ? <Tab2/> : <Tab3/> }
        </Fragment>
        <div>
          {`Active tab: ${activeTab === 1 ? 'first': activeTab === 2 ? 'second' : 'third'}`}
        </div>
      </div>
    )
  }
}

export default App;
