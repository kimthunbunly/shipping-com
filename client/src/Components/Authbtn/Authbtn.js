import React from 'react'

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loggin:'Log In',
            loggout:'Log Out',
            authbtn:''
        };
        const token = localStorage.getItem('%%%data$$$');
        if (token) {
            this.state.authbtn=this.state.loggout;
        } else {
            this.state.authbtn=this.state.loggin;
        }
    }
    render(){
        return(
            <div> 
                {this.state.authbtn}              
            </div>
        );
    }
}