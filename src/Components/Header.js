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
                  <a className="nav-link" href="">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <img src={profile} width="30" alt="profile"/>
                  </a>
                </li>

              </ul>
          </div>
        </nav>
    );
  }
}
