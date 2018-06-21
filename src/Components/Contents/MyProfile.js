import React from 'react';
import '../../Assets/css/index.css';

export default class MyProfile extends React.Component{
	render(){
		return(
			<div className="container bg-color">
				<label id="label-form">MY PROFILE</label>
				<div className="row justify-content-md-center">
					<div className="col-sm-6">
					        <form >
					          <div className="form-group register-style">
					            <div className="row justify-content-md-center">
					                <div className="col-sm-6 ">
					                  <label>First</label>
					                  <input
					                  name="firstname"
					                  type="text"
					                  className="form-control border-"
					                  placeholder="John"
					                  />
					                </div>
					                <div className="col-sm-6 text-left">
					                  <label >Last</label>
					                  <input
					                  name="lastname"
					                  type="text"
					                  className="form-control border-"
					                  placeholder="John"
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
					              />
					            </div>
					            <div className="form-group register-style">
					              <label>Password</label>
					              <input
					              type="password"
					              name="password"
					              className="form-control border-"
					              placeholder="********"
					              />
					            </div>
					            <div className="form-group register-style">
					              <label>Confirm Password</label>
					              <input
					              type="password"
					              name="confirmpassword"
					              className="form-control border-"
					              placeholder="********"
					              />
					            </div>					           
					          </form>
					        </div>
					<div className="col-sm-6">
							<div className="form-group register-style">
					              <label>Phone Number</label>
					              <input
					              name="phonenumber"
					              type="number"
					              className="form-control border-"
					              placeholder="+855 12345678"
					              />
							</div>
							<div className="form-group register-style">
					              <label>Address</label>
					              <input
					              name="address"
					              type="text"
					              className="form-control border-"
					              placeholder="#32, St.123BT, Sangkat Toul Kok, Khan Chamkarmorn, Phom Penh"
					              />
							</div>
							<div className="form-group register-style">
					              <label>Date of Birth</label>
					              <input
					              name="country"
					              type="date"
					              className="form-control border-"
					              placeholder="+855 12345678"
					              />
							</div>
							<div className="form-group register-style">
					              <label>Post Code</label>
					              <input
					              name="postcode"
					              type="number"
					              className="form-control border-"
					              placeholder="12000"
					              />
							</div>
					</div>
				<button type="submix" id="btnChange">SAVE CHANGE</button>
				</div>
			</div>
			);
	}
}