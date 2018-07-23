import React from 'react'
import './Style.css'
import axios from 'axios';

export default class Payment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        let token = JSON.parse(localStorage.getItem('%%%data$$$'));
        axios.get(`/api/users/me`, { headers: { "X-Auth": token } })
        .then(res => {
                        let data = res.data;
                        this.setState({data});
              })
              
    }
    handleChange(e){
        console.log(this.state.data)
    }
    render(){
        return(
			<div className="container container-top bg-color">
				<label id="label-form">PAYMENT</label>
				    <hr/>
                <h3 className="cus-padding-h3">Your Information</h3>
                    <br/>
				<div className="row">
                    <label className="col-sm-2 cus-padding">Name:</label>
                    <p className="col-sm-6">{this.state.data.firstName} {this.state.data.lastName}</p>
                </div>
                <div className="row">
                    <label className="col-sm-2 cus-padding">Email:</label>
                    <p className="col-sm-6">{this.state.data.email}</p>
                </div>
                <div className="row">
                    <label className="col-sm-2 cus-padding">Adress:</label>
                    <p className="col-sm-6">{this.state.data.address}</p>
                </div>
                <div className="row">
                    <label className="col-sm-2 cus-padding">Country:</label>
                    <p className="col-sm-6">{this.state.data.country}</p>
                </div>
                <div className="row">
                    <label className="col-sm-2 cus-padding">Post Code:</label>
                    <p className="col-sm-6">{this.state.data.postCode}</p>
                </div>
{/* --card info-- */}
                <h3 className="cus-padding-h3">Credit Card Information</h3>
                    <br/>
                <div className="row">
                    <label htmlFor="cardType" className="col-sm-3 col-form-label cus-padding">I Have:</label>
                    <div className="col-sm-4" id="cardType" onChange={this.handleChange}>
                        <input type="radio" id="visa" name="radio-group" value="visa" />
                        <label htmlFor="visa" className="radio-group">Visa</label>
                        <input type="radio" id="Master Card" name="radio-group" value="Master Card" />
                        <label htmlFor="Master Card" className="radio-group">Master Card </label>
                        <input type="radio" id="Wing" name="radio-group" value="Wing" />
                        <label htmlFor="Wing" className="radio-group">Wing </label>
                        <input type="radio" id="Pay Go" name="radio-group" value="Pay Go" />
                        <label htmlFor="Pay Go" className="radio-group">Pay Go </label>
                    </div>
                </div>
                <div className="row cus-top">
                    <label htmlFor="cardNum" className="col-sm-3 col-form-label cus-padding">Card Number:</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" name="cardNum" id="cardNum" placeholder="Card Number:" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row cus-top">
                    <label htmlFor="cardName" className="col-sm-3 col-form-label cus-padding">Name Of Card:</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" name="cardName" id="cardName" placeholder="Name Of Card:" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row cus-top">
                    <label htmlFor="cardEx" className="col-sm-3 col-form-label cus-padding">Expriation Date:</label>
                    <div className="col-sm-4">
                        <input type="date" className="form-control" name="cardEx" id="cardEx" placeholder="Expriation Date:" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row cus-top">
                    <label htmlFor="cvv" className="col-sm-3 col-form-label cus-padding">CVV:</label>
                    <div className="col-sm-4">
                        <input type="number" className="form-control" name="cvv" id="cvv" placeholder="CVV:" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row justify-content-md-center cus-ma">
                    <button className="btn btn-success ">Purchase</button>
                </div>
			</div>
        );
    }
}