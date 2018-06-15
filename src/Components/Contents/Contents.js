import React from 'react';
import '../../Assets/css/index.css';

import Package from '../../Assets/img/package.png';
import Province from './Input-Province';
import PickUp from './PickUp';
import PPackage from './TypeParcel/Package';
import Envelop from './TypeParcel/Envelop';

export default class Contents extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-4 content-left">
            <h2>All Package Is Very Take Care <br/>  Form My Company</h2>
            <img src={Package} width="150" alt="Package" id="package"/>
            <p>Please log in with your member account.</p>
            <button type="submit" id="btnLogin">LOG IN</button>
            <hr/>
            <p>Do not a member, create account now !</p>
          </div>
          <div className="col-8">
            <div className="content-right">
              <div className="container">
                <div id="title-bar"><h1> PARCEL INFORMATION </h1></div>

                <div className="form-group row">
                  <label className="col-sm-4" id="label-style">Shipping From</label>
                  <div className="col-sm-8">
                    <Province/>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-4" id="label-style">Shipping To</label>
                  <div className="col-sm-8">
                    <Province/>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-4" id="label-style">Shipping By</label>
                  <div className="col-sm-8 input-radio">
                    <input type="radio" name="shipping" checked={true} /> <span>Drop Off</span>
                    <input type="radio" name="shipping"/> <span>Pick Up</span>
                  </div>
                </div>
                <PickUp/>
                <hr/>

                <div className=" row">
                  <label className="col-sm-12">Parcel Detail</label>
                    <div className="col-4">
                      <label className="col-5">No-A</label>
                      <select className="col-7 combobox-style">
                        <option>Package</option>
                        <option>Envelop</option>
                      </select>
                    </div>
                      <div className="col-8" id="demo">
                        <PPackage/>
                        <br/>
                        <Envelop/>
                      </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <a>+ add more package</a>
                  </div>
                  <div className="col-12">
                    <button typ="button" id="btnStart">START</button>
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
