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
				postCode:'',
				showInfo:true,
				showEdit:false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onEditInfo = this.onEditInfo.bind(this);
		this.onCancel = this.onCancel.bind(this);
	
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
			}).then(this.onCancel());
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
	onEditInfo(){
				this.setState({showEdit:true,showInfo:false})
			}
	onCancel(){
		this.setState({showEdit:false,showInfo:true})
	}
	render(){
		return(
			<div className="container bg-color">
				<label id="label-form">MY PROFILE</label>
				<hr/>
				{this.state.showEdit?
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
					<div className="row justify-content-md-center">
						<div className="col-sm-4 btn-margin">
								<button 
										type="submit" 
										className="btn btn-success"
										onClick={this.handleSubmit}
										>SAVE CHANGE</button>
							</div>
							<div className="col-sm-4 btn-margin">
								<button 
										type="submit" 
										className="btn btn-danger"
										onClick={this.onCancel}
										>CANCEL</button>
							</div>
					</div>
				</div>
				:null}
				{this.state.showInfo?
					<div className="row">
							<div className="col-sm-5">
								<div className="row cus-margin">
											<label className="col-sm-4 col-form-label label-style">First Name:</label>
											<label className="col-sm-8 col-form-label"> {this.state.firstName}</label>
									</div>		
									<div className="row cus-margin">
											<label className="col-sm-4 col-form-label label-style">Last Name:</label>
											<label className="col-sm-8 col-form-label"> {this.state.lastName}</label>
									</div>
									<div className="row cus-margin">
											<label className="col-sm-4 col-form-label label-style">Email:</label>
											<label className="col-sm-8 col-form-label"> {this.state.email}</label>
									</div>
									<div className="row cus-margin">
											<label className="col-sm-4 col-form-label label-style">Password:</label>
											<label className="col-sm-8 col-form-label"> **********</label>
									</div>
							</div>
							<div className="col-sm-7">
							<div className="row cus-margin">
											<label className="col-sm-3 col-form-label label-style">Phone:</label>
											<label className="col-sm-9 col-form-label"> {this.state.phone}</label>
									</div>		
									<div className="row cus-margin">
											<label className="col-sm-3 col-form-label label-style">Address:</label>
											<label className="col-sm-9 col-form-label"> {this.state.address}</label>
									</div>
									<div className="row cus-margin">
											<label className="col-sm-3 col-form-label label-style">Country:</label>
											<label className="col-sm-9 col-form-label"> {this.state.country}</label>
									</div>
									<div className="row cus-margin">
											<label className="col-sm-3 col-form-label label-style">Post Code:</label>
											<label className="col-sm-9 col-form-label">{this.state.postCode}</label>
									</div>
									<br/>
									<div className="row">
										<button className="btn btn-danger" type="button" onClick={this.onEditInfo}>EditInfo</button>
									</div>
							</div>
					</div>
				:null}
			</div>
			);
	}
}