import React from 'react';

export default class Contacts extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			name:'',
			email:'',
			password:'',
			textarea:''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
		handleChange(event){
			this.setState(
				{[event.target.name]: event.target.value});
		}
		handleSubmit(event){
			alert("Hello")
			event.preventDefault();
		}
		validateForm(){
			return 	this.state.name.length	>0
			&&		this.state.email.length	>0
			&&		this.state.password.length>0
			&&		this.state.textarea.length>0
		}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
			<div className="container container-top bg-color">
				<label id="label-form">MY CONTACT</label>
				<hr/>
					<div className="row justify-content-md-center">
						<div className="col-sm-6">
							<div className="form-group register-style">
				              <label>Name</label>
				              <input
				              name="name"
				              type="text"
				              className="form-control border-"
				              placeholder="Jonh Son"
				              value={this.state.name}
                              onChange={this.handleChange}/>
				            </div>
				            <div className="form-group register-style">
				              <label>Email</label>
				              <input
				              name="email"
				              type="email"
				              className="form-control border-"
				              placeholder="example@mail.org"
				              value={this.state.email}
                              onChange={this.handleChange}/>
				            </div>
				            <div className="form-group register-style">
				              <label>Password</label>
				              <input
				              type="password"
				              name="password"
				              className="form-control border-"
				              placeholder="********"
				              value={this.state.password}
                              onChange={this.handleChange}/>
				            </div>
						</div>
						<div className="col-sm-6">
							<div className="form-group register-style">
   								<label htmlFor="textarea">Your Comment</label>
    							<textarea 
    							name="textarea"
    							value={this.state.textarea}
    							onChange={this.handleChange}
    							className="form-control border-" 
    							id="textarea" rows="10" 
    							placeholder="Write some text in here......"></textarea>
				            </div>
						</div>
					<div className="row justify-content-md-center text-center">
						<div className="12">
							<p>Thank you for comment, i will reply you back soon!</p>
						</div>
						<div className="col-sm-12">
							<button 
								type="submit" 
								id="btnSubmit"
								className="btn btn-primary"
								disabled={!this.validateForm()}
								>SUBMIT</button>
						</div>
					</div>
					</div>
				</div>
				</form>
			);
	}
}