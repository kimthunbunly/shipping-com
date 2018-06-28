import React from 'react';
import axios from 'axios';
import '../../Assets/css/index.css';

export default class MyProfile extends React.Component{
	constructor(props){
		super(props);
		this.state={
			firstName:'',
			lastName:'',
			email:'',
			password:'',
			phone:'',
			address:'',
			country:'',
			postCode:''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	
	}
	handleChange(event){
			this.setState(
				{[event.target.name]: event.target.value});
	}
	handleSubmit(event){
		alert('Updated');
		event.preventDefault();

		const user = this.state;
		const id = localStorage.getItem('setId');

		axios.put(`http://localhost:5000/users/edit/`+id, user)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
	}
	validateForm(){
		return this.state > 0;
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit} >
			<div className="container bg-color">
				<label id="label-form">MY PROFILE</label>
				<div className="row justify-content-md-center">
					<div className="col-sm-6">
					          <div className="form-group register-style">
					            <div className="row justify-content-md-center">
					                <div className="col-sm-6 ">
					                  <label>First</label>
					                  <input
					                  name="firstName"
					                  type="text"
					                  className="form-control border-"
														placeholder="John"
														value={this.state.firstName}
														onChange={this.handleChange}
					                  />
					                </div>
					                <div className="col-sm-6 text-left">
					                  <label >Last</label>
					                  <input
					                  name="lastName"
					                  type="text"
					                  className="form-control border-"
														placeholder="John"
														value={this.state.lastName}
														onChange={this.handleChange}
					                  />
					                </div>
					              </div>
					            </div>
					            <div className="form-group register-style">
					              <label>Email</label>
					              <input
					              name="email"
					              type="email"
					              className="form-control border-"
												placeholder="example@mail.org"
												value={this.state.email}
												onChange={this.handleChange}
					              />
					            </div>
					            <div className="form-group register-style">
					              <label>Password</label>
					              <input
					              type="password"
					              name="password"
					              className="form-control border-"
												placeholder="********"
												value={this.state.password}
												onChange={this.handleChange}
					              />
					            </div>
					            <div className="form-group register-style">
					              <label>Confirm Password</label>
					              <input
					              type="password"
					              name="confirmpassword"
					              className="form-control border-"
												placeholder="********"
												value={this.state.password}
												onChange={this.handleChange}
					              />
					            </div>					           
					        </div>
					<div className="col-sm-6">
							<div className="form-group register-style">
					              <label>Phone Number</label>
					              <input
					              name="phone"
					              type="number"
					              className="form-control border-"
												placeholder="+855 12345678"
												value={this.state.phone}
												onChange={this.handleChange}
					              />
							</div>
							<div className="form-group register-style">
					              <label>Address</label>
					              <input
					              name="address"
					              type="text"
					              className="form-control border-"
												placeholder="#32, St.123BT, Sangkat Toul Kok, Khan Chamkarmorn, Phom Penh"
												value={this.state.address}
												onChange={this.handleChange}
					              />
							</div>
							<div className="form-group register-style">
					              <label>Country</label>
					              <input
					              name="country"
					              type="text"
					              className="form-control border-"
												placeholder="Cambodia"
												value={this.state.country}
												onChange={this.handleChange}
					              />
							</div>
							<div className="form-group register-style">
					              <label>Post Code</label>
					              <input
					              name="postCode"
					              type="number"
					              className="form-control border-"
												placeholder="12000"
												value={this.state.postCode}
												onChange={this.handleChange}
					              />
							</div>
					</div>
						<button 
									type="submit" 
									id="btnChange"
									>SAVE CHANGE</button>
				</div>
			</div>
			</form>
			);
	}
}