import React from 'react';
import axios from 'axios';
import '../../Assets/css/index.css';

export default class MyProfile extends React.Component{
	constructor(props){
		super(props);
		this.state={
				data:[],
				firstName:'',
				lastName:'',
				email:'',
				password:'',
				confirm:'',
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
		event.preventDefault();
		let user = this.state;
		let id = this.state.data._id
		let vaild = this.state.password;
		let password = this.state.password;
		let confirm = this.state.confirm;
		let token = JSON.parse(localStorage.getItem('%%%data$$$'));
		if (vaild) {} else {
			alert('password not input')
			return null;
		}
		if (password === confirm) {} else {
			alert('password not match')
			return null;
		}
		if (vaild.length > 5) {
			alert("Profile was Updated!")
			fetch(`/api/users/edit/${id}`, {
				method: 'PUT',
				headers: {
					'X-Auth': token,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			}).then();
		} else {
			alert('password too short')
		}
	}
	componentWillMount (e){
		let token = JSON.parse(localStorage.getItem('%%%data$$$'));
    if (!token) {
        window.location='/login';
    }
		axios.get(`/api/users/me`, { headers: { "X-Auth": token } })
      .then(res => {
					this.setState({ data : res.data});
					let v = res.data;
					this.setState({	firstName:v.firstName,
													lastName:v.lastName,
													email:v.email,
													address:v.address,
													phone:v.phone,
													country:v.country,
													postCode:v.postCode})
			})}
	render(){
		return(
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
														placeholder="firstname"
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
														placeholder="lastname"
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
					              name="confirm"
					              className="form-control border-"
												placeholder="********"
												value={this.state.confirm}
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
												placeholder="postcode"
												value={this.state.postCode}
												onChange={this.handleChange}
					              />
							</div>
					</div>
						<button 
									type="submit" 
									id="btnChange"
									onClick={this.handleSubmit}
									>SAVE CHANGE</button>
				</div>
			</div>
			);
	}
}