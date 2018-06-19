import React from 'react';
import '../Assets/css/index.css'

import logo from '../Assets/img/logo.png';
import profile from '../Assets/img/profile.png';

export default class Header extends React.Component{
  render(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark change-color">
          <div className="container">
            <img src={logo} width="130" height="auto" className="d-inline-block align-top" alt="logo"/>

              <div className="mr-auto"/>
              <ul className="nav ">
                <li className="nav-item ">
                  <a className="nav-link" href="">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Contact</a>
                </li>
              </ul>
                <div className="dropdown show">
                  <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={profile} alt="profile" width="25"/>
                  </a>

                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">My SHIPMENT</a>
                    <hr/>
                    <a className="dropdown-item" href="#">My Profile</a>
                    <a className="dropdown-item" href="#">About Us</a>
                    <a className="dropdown-item" href="#">Log Out</a>
                  </div>
                </div>
          </div>
        </nav>
    );
  }
}
