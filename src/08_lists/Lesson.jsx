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

const people = ['Jack', 'Jane', 'Bob', 'George'];
const tabsBtn = [
  {
    dataName: 1,
    title: 'Tab1',
  },
  {
    dataName: 2,
    title: 'Tab2',
  },
  {
    dataName: 3,
    title: 'Tab3',
  },
];

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
      <Fragment>
        <ValidationMsg val={ 8 } ></ValidationMsg>

          {tabsBtn.map(({ dataName, title }) => (
            <button
            data-name={ dataName }
            key={`${dataName}-${title}`}
            onClick={ this.handleTab }
            >{title}</button>
          ))}

          { activeTab === 1 ? <Tab1/> : activeTab === 2 ? <Tab2/> : <Tab3/> }

        <div>
          {`Active tab: ${activeTab === 1 ? 'first': activeTab === 2 ? 'second' : 'third'}`}
        </div>

        <ul>
          {people.map((person, index) => (
            <li key={index}>{person}</li>
         ))}
        </ul>

      </Fragment>
    )
  }
}

export default App;
