import React from 'react';

import logo from '../../../Assets/img/logo.png';

export default class LoginForm extends React.Component{
    constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleChange (event){
      this.setState(
        {[event.target.name]: event.target.value});
    }
    handleSubmit (event){
      alert("Logined")
      event.preventDefault();
    }
    validateForm(){
      return this.state.email.length > 0 && this.state.password.length>0;
    }
  render(){
    return(
          <div className="col-sm-4 bg-color text-center">
            <div className="brand-name">
              <img src={logo} id="style-logo" alt="logo"/>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group login-style">
                <label id="label-form">LOG IN ACCOUNT</label>
                <input
                autoFocus
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
