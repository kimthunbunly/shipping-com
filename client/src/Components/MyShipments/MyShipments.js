import React from 'react';
import CardsShipment from '../Cards/CardsShipment';

export default class MyShipments extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        value :[],
        data:[]
      } 
      this.deleteShip = this.deleteShip.bind(this);
    }
    componentDidMount (){
      const setId=localStorage.getItem('setId');
      if (!setId) {
          window.location='/login';
      }else{
        let res = JSON.parse(localStorage.getItem('$res_Data%$&'))
        let value = res.data;
        this.setState({value});
        let data = JSON.parse(localStorage.getItem('$send_Data%$&'))
        this.setState({data});
      }
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
      <div className="container container-top bg-color ">
        <label id="label-form">MY SHIPMENTS</label>
          {value.map((v,index) => {
              return <CardsShipment
                    key={[index]}
                    imgUrl={value[index].company.logo}
                    name={value[index].company.name}
                    eta={value[index].ref_trip[value[index].ref_trip.length-1].eta}
                    shipFrom={this.state.data.shipFrom}
                    shipTo={this.state.data.shipTo}
                    price={value[index].price}
                    deleteShip={this.deleteShip.bind(this,v)}
                    >{v}</CardsShipment>
            })} 
      </div>
      );
  }
}