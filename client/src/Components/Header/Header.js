import React from 'react';
import '../../Assets/css/index.css'
import {Link} from 'react-router-dom';

import logo from '../../Assets/img/logo-white.png';
import profile from '../../Assets/img/profile.png';
import Authbtn from '../Authbtn/Authbtn';

export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.onLoggout = this.onLoggout.bind(this);
  }
  onLoggout(e){
    e.preventDefault();
    const token =localStorage.getItem('%%%data$$$');
    if (token ) {
      alert('Your Account have been loggout!')
      localStorage.clear();
      window.location.reload();
      window.location='/';
    } else {
      window.location='/login';
    }
  }
  render(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark change-color navbar-height">
          <div className="container">
            <Link to='/'><img src={logo} width="130" height="auto" className="d-inline-block align-top img-fluid" alt="logo"/></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="mr-auto"/>
                  <ul className="nav ">
                    <li className="nav-item ">
                      <Link to='/home' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to='/service'>Service</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to='/contact'>Contact</Link>
                    </li>
                  
                <div className="nav-item dropdown show">
                  <a className="btn dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={profile} alt="profile" width="25"/>
                  </a>

                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                    <Link to='/my-shipment' className="dropdown-item" >My SHIPMENT</Link>
                    <hr/>
                    <Link to='/profile' className="dropdown-item">My Profile</Link>
                    <Link className="dropdown-item" to='/about'>About Us</Link>
                    <a href="" onClick={this.onLoggout} className="dropdown-item"><Authbtn/></a>
                  </div>
                </div>
                </ul>
              </div>
            </div>
        </nav>
    );
  }
}
