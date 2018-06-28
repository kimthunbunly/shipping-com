import React from 'react'; 
import logotc from '../../Assets/img/logo/logotc.png'; 
import logo1 from '../../Assets/img/logo/logo1.png'; 
import logo2 from '../../Assets/img/logo/logo2.png'; 
import logo3 from '../../Assets/img/logo/logo3.png'; 

import CardsServices from '../Cards/CardsServices';

export default class StartService extends React.Component { 
    render(){ 
        return(
<div className="unknow">
    <div className="container container-top bg-color">
        <label id="label-form">YOUR PARCEL DETAIL</label>
        <div className="row justify-content-md-center">
            <div className="col-sm-10">

                <div className="row">
                    <label htmlFor="shipping-from" className="col-sm-4 col-form-label label-style">Shipping From:</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control-plaintext" id="shipping-from" defaultValue="Battambang Privince" />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="shipping-to" className="col-sm-4 col-form-label label-style">Shipping To:</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control-plaintext" id="shipingp-to" defaultValue="Phnom Penh" />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="shipping-by" className="col-sm-4 col-form-label label-style">Shipping By:</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control-plaintext" id="shipping-by" defaultValue="Drop Off" />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="parcel-qty" className="col-sm-4 col-form-label label-style">Parcel Qty:</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control-plaintext" id="parcel-qty" defaultValue="02" />
                    </div>
                </div>
                <div className="row justify-content-md-center text-center">
                    <p>*NOTE: Please check the parcel detail, make sure it correct!</p>
                </div>
            </div>
        </div>
    </div>
    <div className="container bg-color">
        <label id="label-form">CHOOSE YOUR SERVICE</label>
            <div className="row justify-content-md-center">
                <CardsServices
                    imgUrl={logotc}
                    name="Tranfer Company"
                    eta={3}
                    rate="*******"
                    from="Battambang Province"
                    to="Phnom Penh City"
                    price={25}
                />  
                <CardsServices
                    imgUrl={logo1}
                    name="Sport Company"
                    eta={2}
                    rate="*******"
                    from="Battambang Province"
                    to="Phnom Penh City"
                    price={27}
                />          
            </div>
            <div className="row justify-content-md-center">
                <CardsServices
                    imgUrl={logo2}
                    name="User Company"
                    eta={4}
                    rate="*******"
                    from="Battambang Province"
                    to="Phnom Penh City"
                    price={24}
                />  
                <CardsServices
                    imgUrl={logo3}
                    name="Own Company"
                    eta={4}
                    rate="*******"
                    from="Battambang Province"
                    to="Phnom Penh City"
                    price={23}
                />          
            </div>
    </div>
</div>
); } }