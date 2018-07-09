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
    confirm:'',
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
       const user = this.state;
       const vaild = this.state.password;
       const password = this.state.password;
       const confirm = this.state.confirm;
       if (vaild) {} else {
         alert('password not input')
         return null;
       }
       if (password === confirm) {} else {
         alert('password not match')
         return null;
       }
       if (vaild.length > 5) {
        //  axios.post(`/api/users/signup`, user)
         axios.post(`http://localhost:5000/users/signup`, user)
         .then(res => {
          //  console.log(res);
          //  console.log(res.data);
           const e = (res.data.e);
          //  console.log(e)
           localStorage.setItem('e',e); 
           window.location='/login';
         })
       } else {
         alert('password too short')
       }
     }
  validateForm(){
    return this.state.isAgreed === true &&
            this.state.firstName.length > 0 &&
            this.state.lastName.length > 0 &&
            this.state.email.length > 0;
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
              name="confirm"
              className="form-control"
              placeholder="********"
              value={this.state.confirm}
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


