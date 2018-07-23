import React from 'react'
import './Style.css'
import profile from '../../Assets/img/profile.jpg'
import Contact from '../Contacts/Contacts'

export default class Blog extends React.Component{
    render(){
        return(
            <div className="bg">
                <div className="container">                  
                    <div className="row justify-content-md-center bg-img">

                    </div>
                    <div className="text-center bg">
                        <h3>Our Team</h3>
                        <br/>
                    </div>
                    <div className="row text-center">
                        <div className="col-sm-4">
                            <img className="img-fluid" src={profile} alt="banly" id="banly"/>
                            <h4>Banly</h4>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-fluid" src={profile} alt="banly" id="banly2"/>
                            <h4>Banly</h4>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-fluid" src={profile} alt="banly" id="banly3"/>
                            <h4>Banly</h4>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <Contact/>
                    </div>
                    <div className="text-center">
                        <h3>Our Client</h3>                      
                    </div>
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img className="img-fluid" id="img-size" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png" alt=""/>
                        </div>
                        <div className="col-sm-3 text-center">
                            <img className="img-fluid" id="img-size" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png" alt=""/>
                        </div> 
                        <div className="col-sm-3 text-center">
                            <img className="img-fluid" id="img-size" src="https://objectpartners.com/wp-content/uploads/2015/02/mongodb-logo.png" alt=""/>
                        </div> 
                        <div className="col-sm-3 text-center">
                            <img className="img-fluid" id="img-size" src="https://sdtimes.com/wp-content/uploads/2018/01/bootstrap-stack-490x412.png" alt=""/>
                        </div>         
                    </div> 
                </div>
            </div>
        );
    }
}