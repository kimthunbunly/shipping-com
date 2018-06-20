import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Header from './Components/Header/Header';
import ParcelService from './Components/Contents/ParcelService';
import Registers from './Components/Registers/Registers';
import MyProfile from './Components/Contents/MyProfile';
import CompanysServices from './Components/Services/CompanysServices';
import Contacts from './Components/Contacts/Contacts';
import MyShipments from './Components/MyShipments/MyShipments';
import StartServices from './Components/Services/StartServices';
import Abouts from './Components/Abouts/Abouts';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route path='/Home' component={ParcelService}/>
        <Route path='/Registers' component={Registers}/>
        <Route path='/MyProfile' component={MyProfile}/>
        <Route path='/CompanysServices' component={CompanysServices}/>
        <Route path='/Contacts' component={Contacts}/>
        <Route path='/MyShipments' component={MyShipments}/>
        <Route path='/StartServices' component={StartServices}/>
        <Route path='/Abouts' component={Abouts}/>
      </div>
    );
  }
}

export default App;
