import React from 'react'

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loggin:'Log In',
            loggout:'Log Out',
            authbtn:''
        };
        const setId = localStorage.getItem('setId');
        if (setId) {
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