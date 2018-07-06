import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class RegisterForm extends React.Component{
  constructor(props){
  super(props);
  this.state = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmpassword:'',
    isAgreed: false
    };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

}
  handleChange(event){
    this.setState(
            {[event.target.name]: event.target.value});            
    const isAgreed = event.target.checked;
    this.setState(
            {isAgreed:isAgreed}
    )
  }
  handleSubmit(event){
       event.preventDefault();

      //  const user = {
      //   email: this.state.email

      // };
      const user = this.state;
  
      axios.post(`http://localhost:5000/users/signup`, user)
        .then(res => {
          console.log(res);
          console.log(res.data);
          window.location='/profile';
        })
        .catch(error =>{
          alert('Wrong inpute');
        })
  } 
  validateForm(){
    return this.state.email.length > 0
        && this.state.password.length>0
        && this.state.confirmpassword.length>0
        && this.state.firstName.length>0
        && this.state.lastName.length>0
        && this.state.isAgreed === true;
  } 
  render(){
    return(
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-sm-6 bg-color">
          <form onSubmit={this.handleSubmit}>
          <div className="form-group register-style">
            <label id="label-form">REGISTER NEW ACCOUNT</label>
            <div className="row justify-content-md-center">
                <div className="col-sm-6 ">
                  <label>First</label>
                  <input
                  autoFocus
                  name="firstName"
                  type="text"
                  className="form-control"
                  placeholder="John"
                  value={this.state.firstName}
                  onChange={this.handleChange}/>
                </div>
                <div className="col-sm-6 text-left">
                  <label >Last</label>
                  <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  placeholder="John"
                  value={this.state.lastName}
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
              <div className="form-check">
                <input type="checkbox" 
                className="form-check-input" 
                id="exampleCheck1"
                onChange={this.handleChange}
                checked={this.state.isAgreed}/>
                <label className="form-check-label" htmlFor="exampleCheck1">agree term and condition</label>
              </div>
            </div>
            <button type="submit"
            className="btn btn-primary"
            id="btnRegister"
            disabled={!this.validateForm()}
            >REGISTER</button>
            </div>
              <div className="text-center">
                <Link to='login' id="link-color-">Already have account !</Link>
              </div>
          </form>
        </div>
      </div>
    </div>
    );
  }
}


