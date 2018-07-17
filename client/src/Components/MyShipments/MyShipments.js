import React from 'react';
import CardsShipment from '../Cards/CardsShipment';

export default class MyShipments extends React.Component {

  componentDidMount(){    
    const setId=localStorage.getItem('setId');
    if (!setId) {
        window.location='/login';
    } else {  
          
        }
    }
  render(){
    return(
      <div className="container container-top bg-color ">
        <label id="label-form">MY SHIPMENTS</label>
        <CardsShipment/>
      </div>
      );
  }
}