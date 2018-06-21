import React from 'react';

export default class Contacts extends React.Component {
	render(){
		return(
			<div className="container container-top bg-color">
				<label id="label-form">MY CONTACT</label>
					<div className="row justify-content-md-center">
						<div className="col-sm-6">
							<div className="form-group register-style">
				              <label>Name</label>
				              <input
				              name="name"
				              type="text"
				              className="form-control border-"
				              placeholder="Jonh Son"/>
				            </div>
				            <div className="form-group register-style">
				              <label>Email</label>
				              <input
				              name="email"
				              type="email"
				              className="form-control border-"
				              placeholder="example@mail.org"/>
				            </div>
				            <div className="form-group register-style">
				              <label>Password</label>
				              <input
				              type="password"
				              name="password"
				              className="form-control border-"
				              placeholder="********"/>
				            </div>
						</div>
						<div className="col-sm-6">
							<div className="form-group register-style">
   								<label htmlFor="textarea">Your Comment</label>
    							<textarea className="form-control border-" id="textarea" rows="10" placeholder="Write some text in here......"></textarea>
				            </div>
						</div>
					<div className="row justify-content-md-center text-center">
						<div className="12">
							<p>Thank you for comment, i will reply you back soon!</p>
						</div>
						<div className="col-sm-12">
							<button typ="submit" id="btnSubmit">SUBMIT</button>
						</div>
					</div>
					</div>
			</div>
			);
	}
}