import React, { Component} from "react";
import {Route} from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Contents/Homepage';
import Registers from './Components/Registers/Registers';
import MyProfile from './Components/MyProfiles/MyProfile';
import ClientsServices from './Components/Services/ClientsServices';
import Contacts from './Components/Contacts/Contacts';
import MyShipments from './Components/MyShipments/MyShipments';
import ParcelsServices from './Components/Services/ParcelsServices';
import Abouts from './Components/Abouts/Abouts';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route path='/Homepage' component={Homepage}/>
        <Route path='/Registers' component={Registers}/>
        <Route path='/MyProfile' component={MyProfile}/>
        <Route path='/ClientsServices' component={ClientsServices}/>
        <Route path='/Contacts' component={Contacts}/>
        <Route path='/MyShipments' component={MyShipments}/>
        <Route path='/ParcelsServices' component={ParcelsServices}/>
        <Route path='/Abouts' component={Abouts}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
