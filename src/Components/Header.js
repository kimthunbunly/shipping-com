import React from 'react';
import '../Assets/css/index.css'

import logo from '../Assets/img/logo.png';
import profile from '../Assets/img/profile.png';

export default class Header extends React.Component{
  render(){
    return(
        <div className="header">
          <div className="container">
            <div className="row justify-content-md-center" >
              <div className="col-8">
                <div className="header-logo">
                  <img src={logo} alt="logo"/>
                </div>
              </div>
              <div className="col-4">
                <div className="row jsutify-content-md-center">
                  <div className="col-3">
                    <div className="nav-title">
                      <h1>Home</h1>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="nav-title">
                      <h1>Service</h1>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="nav-title">
                      <h1>Profile</h1>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="nav-title">
                      <img src={profile} alt="icon-profile" id="icon-profile"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
