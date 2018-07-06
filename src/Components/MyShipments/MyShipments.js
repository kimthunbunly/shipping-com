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
        <div className="row bg-margin">
          <div className="col-sm-3">
            <label id="label-parcel">Shipping Destination:</label>
          </div>
          <div className="col-sm-2">
            <label id="label-parcel">Parcel Detail:</label>
          </div>
          <div className="col-sm-3">
            <label id="label-parcel">By Service Company:</label>
          </div>
          <div className="col-sm-1">
            <label id="label-parcel">Price:</label>
          </div>
        </div>
        <CardsShipment
        from="Battambang Province"
        to="Phnom Penh City"
        qty={15}
        name="Sprot Service Company"
        price={20}/>
      </div>
      );
  }
}