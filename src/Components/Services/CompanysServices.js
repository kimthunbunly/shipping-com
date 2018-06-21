import React from 'react';

import logotc from '../../Assets/img/logo/logotc.png';
import logo1 from '../../Assets/img/logo/logo1.png';
import logo2 from '../../Assets/img/logo/logo2.png';


export default class Services extends React.Component{
	render(){
		return(

				<div className="container container-top bg-color">
				    <label id="label-form">MY SERVICS COMPANY</label>
				    <p>Have a lot of Company Service to Delivery your parcel everywhere in cambodia</p>
				    
					<div className="card-deck ">
					  <div className="card border- bg-shadow">
					    <div className="box-img text-center">
					    	<img className="card-img-top size-img" src={logotc} alt="Cardcap"/>
					    </div>
					    <div className="card-body">
					      <h5 className="card-title">TC Compnay Services</h5>
					      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					    </div>
					    <div className="card-footer">
					      <small className="text-muted">Last updated 3 mins ago</small>
					    </div>
					  </div>
					  <div className="card border- bg-shadow">
					    <div className="box-img text-center">
					    	<img className="card-img-top size-img" src={logo1} alt="Card ap"/>
					    </div>
					    <div className="card-body">
					      <h5 className="card-title">Sport Card Service Compnay</h5>
					      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
					    </div>
					    <div className="card-footer">
					      <small className="text-muted">Last updated 3 mins ago</small>
					    </div>
					  </div>
					  <div className="card border- bg-shadow">
					    <div className="box-img text-center">
					    	<img className="card-img-top size-img" src={logo2} alt="Card ap"/>
					    </div>
					    <div className="card-body">
					      <h5 className="card-title">Logo Name Service Compnay</h5>
					      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
					    </div>
					    <div className="card-footer">
					      <small className="text-muted">Last updated 3 mins ago</small>
					    </div>
					  </div>
					</div>
					<div className="card-deck card-margin">
					  <div className="card border- bg-shadow">
					    <div className="box-img text-center">
					    	<img className="card-img-top size-img" src={logotc} alt="Cardcap"/>
					    </div>
					    <div className="card-body">
					      <h5 className="card-title">Card title</h5>
					      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					    </div>
					    <div className="card-footer">
					      <small className="text-muted">Last updated 3 mins ago</small>
					    </div>
					  </div>
					  <div className="card border- bg-shadow">
					    <div className="box-img text-center">
					    	<img className="card-img-top size-img" src={logo1} alt="Card ap"/>
					    </div>
					    <div className="card-body">
					      <h5 className="card-title">Card title</h5>
					      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
					    </div>
					    <div className="card-footer">
					      <small className="text-muted">Last updated 3 mins ago</small>
					    </div>
					  </div>
					  <div className="card border- bg-shadow">
					    <div className="box-img text-center">
					    	<img className="card-img-top size-img" src={logo2} alt="Card ap"/>
					    </div>
					    <div className="card-body">
					      <h5 className="card-title">Card title</h5>
					      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
					    </div>
					    <div className="card-footer">
					      <small className="text-muted">Last updated 3 mins ago</small>
					    </div>
					  </div>
					</div>
				</div>

			);
	}
}