import React from 'react';
import '../../Assets/css/index.css'
import {Link} from 'react-router-dom';

import logo from '../../Assets/img/logo.png';
import profile from '../../Assets/img/profile.png';

export default class Header extends React.Component{
  render(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark change-color">
          <div className="container">
            <img src={logo} width="130" height="auto" className="d-inline-block align-top" alt="logo"/>

              <div className="mr-auto"/>
              <ul className="nav ">
                <li className="nav-item ">
                  <Link to='/Home' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/CompanysServices'>Service</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/Contacts'>Contact</Link>
                </li>
              </ul>
                <div className=" nav-item dropdown show">
                  <a className="btn dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={profile} alt="profile" width="25"/>
                  </a>

                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link className="dropdown-item" to='/MyShipments'>My SHIPMENT</Link>
                    <hr/>
                    <Link className="dropdown-item" to='/MyProfile'>My Profile</Link>
                    <Link className="dropdown-item" to="/Abouts">About Us</Link>
                    <a className="dropdown-item" href="">Log Out</a>
                  </div>
                </div>
          </div>
        </nav>
    );
  }
}
