import React, { Component } from 'react';

import Header from './Components/Header';
import ParcelService from './Components/Contents/ParcelService';
import Registers from './Route/Registers';
import MyProfile from './Components/Contents/MyProfile';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ParcelService/>
        <Registers/>
        <MyProfile/>
      </div>
    );
  }
}

export default App;
