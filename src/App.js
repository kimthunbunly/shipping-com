import React, { Component } from 'react';

import Header from './Components/Header';

import Registers from './Route/Registers';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>

        <Registers/>
      </div>
    );
  }
}

export default App;
