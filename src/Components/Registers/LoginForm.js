import React from 'react';

export default class LoginForm extends React.Component{
    constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleChange(event){
      this.setState(
        {[event.target.name]: event.target.value});
    }
    handleSubmit(event){
      alert(this.state.email + 'Was Submited');
      event.preventDefault();
    }
    validateForm(){
      return this.state.email.length > 0 && this.state.password.length>6;
    }
  render(){
    return(
          <div className="col-4 bg-color text-center">
            <div className="brand-name">
              <h1>BRAND LOGO NAME</h1>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group login-style">
                <label id="label-form">LOG IN ACCOUNT</label>
                <input
                name="email"
                type="email"
                className="form-control"
                placeholder="example@mail.org"
                value={this.state.email}
                onChange={this.handleChange}/>
              </div>
              <div className="form-group login-style">
                <input
                type="password"
                name="password"
                className="form-control "
                placeholder="********"
                value={this.state.password}
								onChange={this.handleChange}/>
                <p className="text-left">forget password</p>
              </div>
              <button type="submit"
              className="btn btn-primary"
              id="btnLogin"
              disabled={!this.validateForm()}
              >LOG IN</button>
            </form>
          </div>
    );
  }
}
