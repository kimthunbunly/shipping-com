import React from 'react';

import LoginForm from './Form/LoginForm';
import RegisterForm from './Form/RegisterForm';

export default class Registers extends React.Component{
  render(){
    return(
      <div className="container">
       <div className="row justify-content-md-center">
        <LoginForm/>
          <div className="col-sm-2 text-center">
          </div>
        <RegisterForm/>
        </div>
      </div>
    );
  }
}
