import React from 'react';
import '../../Assets/css/index.css'
import {Link} from 'react-router-dom';

import logo from '../../Assets/img/logo.png';
import profile from '../../Assets/img/profile.png';
import Authbtn from '../Authbtn/Authbtn';

export default class Header extends React.Component{
  render(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark change-color navbar-height">
          <div className="container">
            <img src={logo} width="130" height="auto" className="d-inline-block align-top img-fluid" alt="logo"/>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="mr-auto"/>
                  <ul className="nav ">
                    <li className="nav-item ">
                      <Link to='/Homepage' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to='/ClientsServices'>Service</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to='/Contacts'>Contact</Link>
                    </li>
                  </ul>
                <div className="nav-item dropdown show">
                  <a className="btn dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={profile} alt="profile" width="25"/>
                  </a>

                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link className="dropdown-item" to='/MyShipments'>My SHIPMENT</Link>
                    <hr/>
                    <Link className="dropdown-item" to='/MyProfile'>My Profile</Link>
                    <Link className="dropdown-item" to="/Abouts">About Us</Link>
                    <a className="dropdown-item" href="Login"><Authbtn/></a>
                  </div>
                </div>
              </div>
            </div>
        </nav>
    );
  }
}
