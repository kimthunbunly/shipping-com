import React from 'react';
// import {Link} from 'react-router-dom'; 
// import  { Redirect } from 'react-router-dom'

export default class CardsServices extends React.Component{
	constructor(props){
		super(props);

	this.handleSubmit = this.handleSubmit.bind(this);
		}
	handleSubmit (event){
		alert('Hello')
			event.preventDefault();
		const isLogined = localStorage.getItem('setId');
			if (isLogined === '1') {
				alert('Hello');
			} else {
				alert('fase');
			}
		  }
	render(){
		return(
		
			<div className="col-sm-5 bg-color-white">
			<form onSubmit={this.handleSubmit}>
				<div className="row justify-content-md-center text-center">
		            <div className="col-sm-6">
		                <img src={this.props.imgUrl} alt={this.props.name} id="size-logo" />
		                <p>Take care all package</p>
		            </div>
		            <div className="col-sm-6">
		                <label id="company-name">{this.props.name}</label>
		                <p>ETA {this.props.eta} days</p>
		                <span>{this.props.rate}</span>
		            </div>
	           	</div>
	           	<hr/>
	            <div className="row justify-content-md-center">
		            <label htmlFor="shipping-from" className="col-sm-4 col-form-label label-style">From:</label>
		            <div className="col-sm-8">
		                <input type="text" className="form-control-plaintext" id="shipping-from" defaultValue={this.props.from} />
		            </div>
	            </div>
	            <div className="row justify-content-md-center">
	                <label htmlFor="shipping-to" className="col-sm-4 col-form-label label-style">To:</label>
	                <div className="col-sm-8">
	                    <input type="text" className="form-control-plaintext" id="shipingp-to" defaultValue={this.props.to} />
	                </div>
	            </div>
	            <div className="row justify-content-md-center text-center">
	                <div className="col-sm-4 text-center">
	                    <p id="price-color">{this.props.price}$</p>
	                    <button type="submit" id="btnBuy">BUY NOW</button>
	                </div>
	            </div>
			</form>
            </div>
			
	);
	}
}

