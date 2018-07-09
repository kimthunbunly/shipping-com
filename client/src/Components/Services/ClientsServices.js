import React from 'react';

import CardsCompanys from '../Cards/CardsCompanys';

import logotc from '../../Assets/img/logo/logotc.png';
import logo1 from '../../Assets/img/logo/logo1.png';
import logo2 from '../../Assets/img/logo/logo2.png';

export default class Services extends React.Component{
	render(){
		return(
				<div className="container container-top bg-color">
				    <label id="label-form">MY SERVICS COMPANY</label>
				    <p>Have a lot of Company Service to Delivery your parcel everywhere in cambodia</p>
				    	<div className="col-sm card-deck">
				    		<CardsCompanys 
					    		imgUrl={logotc} 
					    		name="Tranfer Company"
					    		title="This card has supporting text below as a natural lead-in to additional content."
					    		timeUp={3}
				    		/>  
				    		<CardsCompanys 
					    		imgUrl={logo2} 
					    		name="Sport Company"
					    		title="This card has supporting text below as a natural lead-in to additional content."
					    		timeUp={15}
				    		/>  
				    		<CardsCompanys 
					    		imgUrl={logo1} 
					    		name="Name Company"
					    		title="This card has supporting text below as a natural lead-in to additional content."
					    		timeUp={30}
				    		/>  		
				    	</div>
				    	<br/>
				    	<div className="col-sm card-deck">
				    		<CardsCompanys 
					    		imgUrl={logo1} 
					    		name="Tranfer Company"
					    		title="This card has supporting text below as a natural lead-in to additional content."
					    		timeUp={40}
				    		/>  
				    		<CardsCompanys 
					    		imgUrl={logotc} 
					    		name="Sport Company"
					    		title="This card has supporting text below as a natural lead-in to additional content."
					    		timeUp={45}
				    		/>  
				    		<CardsCompanys 
					    		imgUrl={logo2} 
					    		name="Name Company"
					    		title="This card has supporting text below as a natural lead-in to additional content."
					    		timeUp={55}
				    		/>  		
				    	</div>
				</div>
			);
	}
}