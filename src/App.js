import React, { Component } from 'react';

import Header from './Components/Header';
import HomePage from './Route/HomePage';
import Registers from './Route/Registers';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <HomePage/>
        <Registers/>
      </div>
    );
  }
}

export default App;
