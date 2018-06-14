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
                <h2>All Package Is Very Take Care <br/>  Form My Company</h2>
                <img src={Package} alt="Package" id="package"/>
                <p>Please log in with your member account.</p>
                <button type="submit" id="btnLogin">LOG IN</button>
              </div>
              <hr/>
              <p>Do not a member, create account now !</p>
            </div>
            <div className="col-8">
              <div className="content-right">
                <div id="title-bar"><h1> PARCEL INFORMATION </h1></div>
                <div className="container-right">
                    <div className="row">
                      <div className="col-4">
                       <label>Shipping Form</label>
                      </div>
                      <div className="col-8">
                        <input/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                       <label>Shipping To</label>
                      </div>
                      <div className="col-8">
                        <input/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                       <label>Shipping By</label>
                      </div>
                      <div className="col-8">
                        <input name="radiobtn" type="radio"/>Drop Off
                        <input name="radiobtn" type="radio"/>Pick Up
                      </div>
                    </div>
                    <hr/>
                      <label>Parcel Detail:</label>
                    <div className="row">
                      <div className="col-1">
                        <label>No</label>
                        <p>A</p>
                      </div>
                      <div className="col-2">
                        <label>Type</label>
                        <select id="parcel-input">
                          <option>Package</option>
                          <option>Envelop</option>
                        </select>
                      </div>
                      <div className="col-2">
                        <label>Qty</label>
                        <input type="number" id="parcel-input"/>
                      </div>
                      <div className="col-2">
                        <label>Weight</label>
                        <input type="number" id="parcel-input"/>
                      </div>
                      <div className="col-2">
                        <label>Height</label>
                        <input type="number" id="parcel-input"/>
                      </div>
                      <div className="col-2">
                        <label>Width</label>
                        <input type="number" id="parcel-input"/>
                      </div>
                      <div className="col-1">
                        <label><br/></label>
                        <p>remove</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1">
                        <p>B</p>
                      </div>
                      <div className="col-2">
                        <select id="parcel-input">
                          <option>Package</option>
                          <option>Envelop</option>
                        </select>
                      </div>
                      <div className="col-8">
                        <input type="radio" id="radio-input" name="size"/>A1
                        <input type="radio" id="radio-input" name="size"/>A2
                        <input type="radio" id="radio-input" name="size"/>A3
                        <input type="radio" id="radio-input" name="size"/>A4
                        <input type="radio" id="radio-input" name="size"/>A5
                      </div>
                    </div>
                    <p>add more package</p>
                    <button type="submit">START</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
