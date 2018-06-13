import React from 'react';
import '../Assets/css/index.css';

import Package from '../Assets/img/package.png';

export default class Contents extends React.Component{
  render(){
    return(
      <div className="content">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-4">
              <div className="content-left">
                <h2>All Package Is Very Take Care Form My Company</h2>
                <img src={Package} alt="Package" id="package"/>
                <p>Please log in with your member account.</p>
                <button type="submit" id="btnLogin">LOG IN</button>
              </div>
              <hr/>
              <p>Do not a member, create account now !</p>
            </div>
            <div className="col-8">
              <div className="content-right">
                <div className="container">
                  <h1> PARCEL INFORMATION </h1>
                    <div className="row">
                      <div className="col-4">
                       <label>Shipping Form</label>
                      </div>
                      <div className="col-8">
                        <input/>
                      </div>
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
