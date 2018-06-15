import React from 'react';

export default class RegisterForm extends React.Component{
  constructor(props){
  super(props);
  this.state = {
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmpassword:''
    };
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
    return this.state.email.length > 0
        && this.state.password.length>0
        && this.state.confirmpassword.length>0
        && this.state.firstname.length>0
        && this.state.lastname.length>0;
  }
  render(){
    return(
        <div className="col-6 bg-color">
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label id="label-form">REGISTER NEW ACCOUNT</label>
            <div className="row justify-content-md-center">
                <div className="col-6 ">
                  <label>First</label>
                  <input
                  name="firstname"
                  type="text"
                  className="form-control"
                  placeholder="John"
                  value={this.state.firstname}
                  onChange={this.handleChange}/>
                </div>
                <div className="col-6 text-left">
                  <label >Last</label>
                  <input
                  name="lastname"
                  type="text"
                  className="form-control"
                  placeholder="John"
                  value={this.state.lastname}
                  onChange={this.handleChange}/>
                </div>
              </div>
            </div>
            <div className="form-group register-style">
              <label>Email</label>
              <input
              name="email"
              type="email"
              className="form-control"
              placeholder="example@mail.org"
              value={this.state.email}
              onChange={this.handleChange}/>
            </div>
            <div className="form-group register-style">
              <label>Password</label>
              <input
              type="password"
              name="password"
              className="form-control"
              placeholder="********"
              value={this.state.password}
              onChange={this.handleChange}/>
            </div>
            <div className="form-group register-style">
              <label>Confirm Password</label>
              <input
              type="password"
              name="confirmpassword"
              className="form-control"
              placeholder="********"
              value={this.state.confirmpassword}
              onChange={this.handleChange}/>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">agree term and condition</label>
              </div>
            </div>
            </div>
            <button type="submit"
            className="btn btn-primary"
            id="btnRegister"
            disabled={!this.validateForm()}
            >REGISTER</button>
          </form>
        </div>
    );
  }
}
