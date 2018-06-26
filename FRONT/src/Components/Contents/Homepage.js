import React from 'react'; 
import '../../Assets/css/index.css'; 
import {Link} from 'react-router-dom'; 
import Package from '../../Assets/img/package.png'; 
import Province from './InputProvince'; 
import PPackage from './TypeParcel/Package'; 
import Envelop from './TypeParcel/Envelop'; 

export default class Contents extends React.Component{ 
    render(){ 
        return(
<div className="container bg-color-body">
    <div className="row">
        <div className="col-sm-4 content-left">
            <h2>All Package Is Very Take Care <br/>  Form My Company</h2>
            <img src={Package} width="150" alt="Package" id="package" />
            <p>Please log in with your member account.</p>
            <Link to='/Login'>
            <button type="submit" id="btnLogin">LOG IN</button>
            </Link>
            <hr/>
            <Link to='Register' id="link-color-">Do not a member, create account now !</Link>
        </div>
        <div className="col-sm-8">
            <div className="content-right bg-color">
                <div className="container">
                    <div id="title-bar">
                        <h1> PARCEL INFORMATION </h1></div>

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
                            <input type="radio" name="shipping" /> <span>Drop Off</span>
                            <input type="radio" name="shipping" /> <span>Pick Up</span>
                        </div>
                    </div>
                    <hr/>

                    <div className=" row">
                        <label className="col-sm-12">Parcel Detail</label>
                        <div className="row">
                            <div className="col-sm-4">
                                <label className="col-sm-5">No-A</label>
                                <select className="col-sm-7 combobox-style">
                                    <option>Package</option>
                                    <option>Envelop</option>
                                </select>
                            </div>
                            <div className="col-sm-8" id="demo">
                                <PPackage/>
                                <br/>
                                <Envelop/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a href="">+ add more package</a>
                        </div>
                        <div className="col-sm-12">
                            <Link to='/ParcelsServices'>
                            <button typ="button" id="btnStart">START</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
); } }