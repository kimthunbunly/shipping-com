import React from 'react';
import CardsShipment from '../Cards/CardsShipment';

export default class MyShipments extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          value :[ {
            _id: "5b3b4c07c58a8f2888b7047f",
            type: {
                dropOff: true, doorToDoor: false, economy: true, timedDelivery: false
            }
            ,
            vehicles: [ {
                type: "Truck"
            }
            ,
            {
                type: "Bus"
            }
            ,
            {
                type: "Taxi"
            }
            ],
            company: {
                _id: "5b34524119b0885480d49084", name: "FedEX Express", logo: "https://logos-download.com/wp-content/uploads/2016/06/FedEx_logo.png", address: "#3E0, Sangkat Phsar Thmei I, St. 126 Pasteur, Khan Daun Penh, Phnom Penh"
            }
            ,
            category: "Standard",
            price: 27,
            shipFrom: "Phnom Penh",
            shipTo:"Angkor Wat",
            qty: '02',
            ref_trip: [ {
                _id: "5b3b301ea1ca3800e8824106", departTime: "09:00", eta: "15:00 Today"
            }
            ,
            {
                _id: "5b3b308fa1ca3800e8824107", departTime: "12:00", eta: "18:00 Today"
            }
            ,
            {
                _id: "5b3b309fa1ca3800e8824108", departTime: "20:00", eta: "3"
            }
            ],
            trips: [ {
                _id: "5b3b4c07c58a8f2888b70482", tripId: "5b3b308fa1ca3800e8824107", totalVolume: 2400, totalWeight: 800
            }
            ,
            {
                _id: "5b3b4c07c58a8f2888b70481", tripId: "5b3b309fa1ca3800e8824108", totalVolume: 2400, totalWeight: 800
            }
            ,
            {
                _id: "5b3b4c07c58a8f2888b70480", tripId: "5b3b301ea1ca3800e8824106", totalVolume: 2400, totalWeight: 800
            }
            ]
        }
        
        ]
        } 
        this.deleteShip = this.deleteShip.bind(this);
      }
      deleteShip(v){
        for(var i = 0; i < this.state.value.length; i++){
          if(this.state.value[i] === v){
             delete this.state.value[i]
          }
        }
        this.setState({
          value:this.state.value
        })
      }
    render(){
      let {value} = this.state;
      return(
        <div className="container bg-color ">
          <label id="label-form">MY SHIPPING</label><hr/>
            {value.map((v,index) => {
                return <CardsShipment
                      key={[index]}
                      imgUrl={value[index].company.logo}
                      name={value[index].company.name}
                      eta={value[index].ref_trip[value[index].ref_trip.length-1].eta}
                      volume={value[index].trips[value[index].trips.length-1].totalVolume}
                      weight={value[index].trips[value[index].trips.length-1].totalWeight}
                      shipFrom={value[index].shipFrom}
                      shipTo={value[index].shipTo}
                      price={value[index].price}
                      qty={value[index].qty}
                      deleteShip={this.deleteShip.bind(this,v)}
                      >{v}</CardsShipment>
              })} 
        </div>
        );
    }
}