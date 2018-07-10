import React, { Component} from "react";
import {Route,Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
import Homepage from './Components/Home/Homepage';
import MyProfile from './Components/MyProfiles/MyProfile';
import ClientsServices from './Components/Services/ClientsServices';
import Contacts from './Components/Contacts/Contacts';
import MyShipments from './Components/MyShipments/MyShipments';
import ParcelsServices from './Components/Services/ParcelsServices';
import Abouts from './Components/Abouts/Abouts';
import LoginForm from './Components/Registers/Form/LoginForm';
import RegisterForm from './Components/Registers/Form/RegisterForm';
import _404 from './Components/Page404/Page404';
import Loading from './App/Loading';

class App extends Component {
  state = {
    loaded: false}
  constructor(){
    super();
    Loading.load(v => this.setState({loaded:true}));
  }
  render() {
    return (
      <div>
        <Header/>
          <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/home' component={Homepage}/>
          <Route path='/profile' component={MyProfile}/>
          <Route path='/service' component={ClientsServices}/>
          <Route path='/contact' component={Contacts}/>
          <Route path='/my-shipment' component={MyShipments}/>
          <Route path='/parcel-service' component={ParcelsServices}/>
          <Route path='/about' component={Abouts}/>
          <Route path='/login' component={LoginForm}/>
          <Route path='/signup' component={RegisterForm}/>
          <Route path='/' component={_404}/>
          </Switch>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
