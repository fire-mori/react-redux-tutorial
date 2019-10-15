import React, { Component, Fragment} from 'react';

const TittleContent = React.createContext();

const LevelThree = () => (
  <TittleContent.Consumer>
    { ({title, subtitle}) => (
      <Fragment>
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
      </Fragment>
    )}
  </TittleContent.Consumer>
);

const LevelTwo = () => <LevelThree />;

const LevelOne = () => <LevelTwo />;

class App extends Component {
  render() {
    return (
      <TittleContent.Provider value={{ title: 'Hello', subtitle: 'World' }}>
        <LevelOne />
      </TittleContent.Provider>
    );
  }
}

export default App;
