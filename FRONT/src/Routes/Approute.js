import React from "react";
import {Switch,Route, Redirect,withRouter } from "react-router-dom";

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Homepage from '../Components/Contents/Homepage';
import Registers from '../Components/Registers/Registers';
import MyProfile from '../Components/MyProfiles/MyProfile';
import Page404 from '../Components/Page404/Page404';
import ClientsServices from '../Components/Services/ClientsServices';
import Contacts from '../Components/Contacts/Contacts';
import MyShipments from '../Components/MyShipments/MyShipments';
import ParcelsServices from '../Components/Services/ParcelsServices';
import Abouts from '../Components/Abouts/Abouts';

export default class Approute extends React.Component{
    redner(){
        return(
                <div>
                    <div style={{ minHeight: "900px" }}>
                        <Header/>
                        <Switch>
                        <Header/>
                                <Route path='/' component={Homepage}/>
                                <Route path='/Registers' component={Registers}/>
                                <Route path='/MyProfile' component={MyProfile}/>
                                <Route path='/ClientsServices' component={ClientsServices}/>
                                <Route path='/Contacts' component={Contacts}/>
                                <Route path='/MyShipments' component={MyShipments}/>
                                <Route path='/ParcelsServices' component={ParcelsServices}/>
                                <Route path='/Abouts' component={Abouts}/>
                                <Footer/>
                            <Route component={Page404} exact />
                        </Switch>
                        {/* <PrivateRoute path="/protected" component={Protected} exact /> */}
                    </div>
                    <Footer />
                </div>
        );
    }
}