import React from 'react';

import logotc from '../../Assets/img/logo/logotc.png';
import logo1 from '../../Assets/img/logo/logo1.png';
import logo2 from '../../Assets/img/logo/logo2.png';
import logo3 from '../../Assets/img/logo/logo3.png';

export default class StartService extends React.Component {
	render(){
		return(
			<div className="unknow">
				<div className="container container-top bg-color">
					<label id="label-form">YOUR PARCEL DETAIL</label>
					<div className="row justify-content-md-center">
						<div className="col-10">

						  <div className="row">
						    <label for="shipping-from" className="col-sm-2 col-form-label">Shipping From:</label>
						    <div className="col-sm-10">
						      <input type="text" className="form-control-plaintext" id="shipping-from" value="Battambang Privince"/>
						    </div>
						  </div>
						   <div className="row">
						    <label for="shipping-to" className="col-sm-2 col-form-label">Shipping To:</label>
						    <div className="col-sm-10">
						      <input type="text" className="form-control-plaintext" id="shipingp-to" value="Phnom Penh"/>
						    </div>
						  </div>
						   <div className="row">
						    <label for="shipping-by" className="col-sm-2 col-form-label">Shipping By:</label>
						    <div className="col-sm-10">
						      <input type="text" className="form-control-plaintext" id="shipping-by" value="Drop Off"/>
						    </div>
						  </div>
						   <div className="row">
						    <label for="parcel-qty" className="col-sm-2 col-form-label">Parcel Qty:</label>
						    <div className="col-sm-10">
						      <input type="text" className="form-control-plaintext" id="parcel-qty" value="02"/>
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
						<div className="col-5 bg-color-white">
							<div className="row text-center">
								<div className="col-6">
									<img src={logotc} alt="logotc" id="size-logo"/>
									<p>Take care all package</p>
								</div>
								<div className="col-6">
									<label id="company-name">Tranfer Company</label>
									<p>ETA 3 days</p>
									<span>*****</span>
								</div>
							</div>
							<hr/>
							<div className="row justify-content-md-center">
							    <label for="shipping-from" className="col-sm-4 col-form-label">Shipping From:</label>
							    <div className="col-sm-6">
							      <input type="text" className="form-control-plaintext" id="shipping-from" value="Battambang Privince"/>
							    </div>
							  </div>
							   <div className="row justify-content-md-center">
							    <label for="shipping-to" className="col-sm-4 col-form-label">Shipping To:</label>
							    <div className="col-sm-6">
							      <input type="text" className="form-control-plaintext" id="shipingp-to" value="Phnom Penh"/>
							    </div>
							</div>
							<div className="row justify-content-md-center">
									<div className="col-4 text-center">
										<p id="price-color">15$</p>
										<button typ="submit" id="btnBuy">BUY NOW</button>
									</div>
							</div>
						</div>
						<div className="col-5 bg-color-white">
							<div className="row text-center">
								<div className="col-6">
									<img src={logo1} alt="logotc" id="size-logo"/>
									<p>Take care all package</p>
								</div>
								<div className="col-6">
									<label id="company-name">Tranfer Company</label>
									<p>ETA 3 days</p>
									<span>*****</span>
								</div>
							</div>
							<hr/>
							<div className="row justify-content-md-center">
							    <label for="shipping-from" className="col-sm-4 col-form-label">Shipping From:</label>
							    <div className="col-sm-6">
							      <input type="text" className="form-control-plaintext" id="shipping-from" value="Battambang Privince"/>
							    </div>
							  </div>
							   <div className="row justify-content-md-center">
							    <label for="shipping-to" className="col-sm-4 col-form-label">Shipping To:</label>
							    <div className="col-sm-6">
							      <input type="text" className="form-control-plaintext" id="shipingp-to" value="Phnom Penh"/>
							    </div>
							</div>
							<div className="row justify-content-md-center">
									<div className="col-4 text-center">
										<p id="price-color">15$</p>
										<button typ="submit" id="btnBuy">BUY NOW</button>
									</div>
							</div>
						</div>
					</div>
					<div className="row justify-content-md-center row-top">
						<div className="col-5 bg-color-white">
							<div className="row text-center">
								<div className="col-6">
									<img src={logo2} alt="logotc" id="size-logo"/>
									<p>Take care all package</p>
								</div>
								<div className="col-6">
									<label id="company-name">Tranfer Company</label>
									<p>ETA 3 days</p>
									<span>*****</span>
								</div>
							</div>
							<hr/>
							<div className="row justify-content-md-center">
							    <label for="shipping-from" className="col-sm-4 col-form-label">Shipping From:</label>
							    <div className="col-sm-6">
							      <input type="text" className="form-control-plaintext" id="shipping-from" value="Battambang Privince"/>
							    </div>
							  </div>
							   <div className="row justify-content-md-center">
							    <label for="shipping-to" className="col-sm-4 col-form-label">Shipping To:</label>
							    <div className="col-sm-6">
							      <input type="text" className="form-control-plaintext" id="shipingp-to" value="Phnom Penh"/>
							    </div>
							</div>
							<div className="row justify-content-md-center">
									<div className="col-4 text-center">
										<p id="price-color">15$</p>
										<button typ="submit" id="btnBuy">BUY NOW</button>
									</div>
							</div>
						</div>
						<div className="col-5 bg-color-white">
							<div className="row text-center">
								<div className="col-6">
									<img src={logo3} alt="logotc" id="size-logo"/>
									<p>Take care all package</p>
								</div>
								<div className="col-6">
									<label id="company-name">Tranfer Company</label>
									<p>ETA 3 days</p>
									<span>*****</span>
								</div>
							</div>
							<hr/>
							<div className="row justify-content-md-center">
							    <label for="shipping-from" className="col-sm-4 col-form-label">Shipping From:</label>
							    <div className="col-sm-6">
							      <input type="text" className="form-control-plaintext" id="shipping-from" value="Battambang Privince"/>
							    </div>
							  </div>
							   <div className="row justify-content-md-center">
							    <label for="shipping-to" className="col-sm-4 col-form-label">Shipping To:</label>
							    <div className="col-sm-6">
							      <input type="text" className="form-control-plaintext" id="shipingp-to" value="Phnom Penh"/>
							    </div>
							</div>
							<div className="row justify-content-md-center">
									<div className="col-4 text-center">
										<p id="price-color">15$</p>
										<button typ="submit" id="btnBuy">BUY NOW</button>
									</div>
							</div>
						</div>
					</div>
					<div className="row justify-content-md-center row-top">
						<div className="col-5 bg-color-white">
							<div className="row text-center">
								<div className="col-6">
									<img src={logo2} alt="logotc" id="size-logo"/>
									<p>Take care all package</p>
								</div>
								<div className="col-6">
									<label id="company-name">Tranfer Company</label>
									<p>ETA 3 days</p>
									<span>*****</span>
								</div>
							</div>
							<hr/>
							<div className="row justify-content-md-center">
							    <label for="shipping-from" className="col-sm-4 col-form-label">Shipping From:</label>
							    <div className="col-sm-6">
							      <input type="text" className="form-control-plaintext" id="shipping-from" value="Battambang Privince"/>
							    </div>
							  </div>
							   <div className="row justify-content-md-center">
							    <label for="shipping-to" className="col-sm-4 col-form-label">Shipping To:</label>
							    <div className="col-sm-6">
							      <input type="text" className="form-control-plaintext" id="shipingp-to" value="Phnom Penh"/>
							    </div>
							</div>
							<div className="row justify-content-md-center">
									<div className="col-4 text-center">
										<p id="price-color">15$</p>
										<button typ="submit" id="btnBuy">BUY NOW</button>
									</div>
							</div>
						</div>
						<div className="col-5 bg-color-white">
							<div className="row text-center">
								<div className="col-6">
									<img src={logo3} alt="logotc" id="size-logo"/>
									<p>Take care all package</p>
								</div>
								<div className="col-6">
									<label id="company-name">Tranfer Company</label>
									<p>ETA 3 days</p>
									<span>*****</span>
								</div>
							</div>
							<hr/>
							<div className="row justify-content-md-center">
							    <label for="shipping-from" className="col-sm-4 col-form-label">Shipping From:</label>
							    <div className="col-sm-6">
							      <input type="text" className="form-control-plaintext" id="shipping-from" value="Battambang Privince"/>
							    </div>
							  </div>
							   <div className="row justify-content-md-center">
							    <label for="shipping-to" className="col-sm-4 col-form-label">Shipping To:</label>
							    <div className="col-sm-6">
							      <input type="text" className="form-control-plaintext" id="shipingp-to" value="Phnom Penh"/>
							    </div>
							</div>
							<div className="row justify-content-md-center">
								<div className="col-10 text-center ">
									<p id="price-color">15$</p>
									<button typ="submit" id="btnBuy">BUY NOW</button>
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>
			);
	}
}