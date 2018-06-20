import React from 'react';

import LoginForm from './Form/LoginForm';
import RegisterForm from './Form/RegisterForm';

export default class Registers extends React.Component{
  render(){
    return(
      <div className="container">
       <div className="row justify-content-md-center">
        <LoginForm/>
          <div className="col-2 text-center">
            OR
          </div>
        <RegisterForm/>
        </div>
      </div>
    );
  }
}
