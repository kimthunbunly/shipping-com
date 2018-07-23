import React from 'react'
import './Style.css'

export default class Payment extends React.Component{
    render(){
        return(
			<div className="container container-top bg-color">
				<label id="label-form">PAYMENT</label>
				    <hr/>
                <h3 className="cus-padding-h3">Your Information</h3>
                    <br/>
				<div className="row">
                    <label className="col-sm-2 cus-padding">Name:</label>
                    <p className="col-sm-4">Vong Seypo</p>
                </div>
                <div className="row">
                    <label className="col-sm-2 cus-padding">Email:</label>
                    <p className="col-sm-4">Vong Seypo@gmail.com</p>
                </div>
                <div className="row">
                    <label className="col-sm-2 cus-padding">Adress:</label>
                    <p className="col-sm-4">Vong Seypo</p>
                </div>
                <div className="row">
                    <label className="col-sm-2 cus-padding">Country:</label>
                    <p className="col-sm-4">Vong Seypo</p>
                </div>
                <div className="row">
                    <label className="col-sm-2 cus-padding">Post Code:</label>
                    <p className="col-sm-4">Vong Seypo</p>
                </div>
{/* --card info-- */}
                <h3 className="cus-padding-h3">Credit Card Information</h3>
                    <br/>
				<div className="row">
                    <label htmlFor="card-number" className="col-sm-3 cus-padding">I Have:</label>
                    <input type="text" className="col-sm-3 form-control cus-ma"/>
                </div>
                <div className="row">
                    <label htmlFor="card-number" className="col-sm-3 cus-padding">Card Number:</label>
                    <input type="text" className="col-sm-3 form-control cus-ma"/>
                </div>
                <div className="row">
                    <label htmlFor="" className="col-sm-3 cus-padding">Name Of Card:</label>
                    <input type="text" className="col-sm-3 form-control cus-ma"/>
                </div>
                <div className="row">
                    <label htmlFor="" className="col-sm-3 cus-padding">Expriation Date:</label>
                    <input type="text" className="col-sm-3 form-control cus-ma"/>
                </div>
                <div className="row">
                    <label htmlFor="" className="col-sm-3 cus-padding">CVV:</label>
                    <input type="text" className="col-sm-3 form-control cus-ma"/>
                </div>
                <div className="row justify-content-md-center cus-ma">
                    <button className="btn btn-success ">Purchase</button>
                </div>
			</div>
        );
    }
}