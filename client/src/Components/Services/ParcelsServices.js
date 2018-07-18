import React from 'react'; 

import CardsServices from '../Cards/CardsServices';

export default class StartService extends React.Component { 
      constructor(props){
        super(props);
        this.state = {
            setData:[],
            value: []
        }
    }
    componentDidMount(){ 
        let setData = JSON.parse(localStorage.getItem('$send_Data%$&'))
        if (setData) {
            this.setState({setData})
        } else {
            window.location='/404'
        }
        let res_ser = JSON.parse(localStorage.getItem('$res_Data%$&'))
        if (res_ser) {
            let value = res_ser.data;
            this.setState({value});
        } else {
            window.location='/404'
        }
      }
    render(){ 
        let {value} = this.state;
        return(
<div>
    <div className="container container-top bg-color">
        <label id="label-form">YOUR PARCEL DETAIL</label>
        <div className="row justify-content-md-center">
            <div className="col-sm-10">

                <div className="row">
                    <label className="col-sm-4 col-form-label label-style">Shipping From:</label>
                    <label className="col-sm-4 col-form-label"> {this.state.setData.shipFrom}</label>
                </div>
                <div className="row">
                    <label className="col-sm-4 col-form-label label-style">Shipping To:</label>
                    <label className="col-sm-4 col-form-label "> {this.state.setData.shipTo}</label>
                </div>
                <div className="row">
                    <label className="col-sm-4 col-form-label label-style">Shipping By:</label>
                    <label className="col-sm-4 col-form-label "> {this.state.setData.shipBy}</label>
                </div>
                <div className="row">
                    <label className="col-sm-4 col-form-label label-style">Parcel Detail:</label>
                    <label className="col-sm col-form-label ">qty={this.state.setData.qty}; weight={this.state.setData.weight}; height= {this.state.setData.height}; width= {this.state.setData.width}</label>
                </div>
                <br/>
                <div className="row justify-content-md-center text-center">                    
                    <p>*NOTE: Please check the parcel detail, make sure it correct!</p>
                </div>
            </div>
        </div>
    </div>
    <div className="container bg-color">
        <label id="label-form">CHOOSE YOUR SERVICE</label>
            <div className="row">
                    {value.map((v,index) => {
                        return <CardsServices 
                                key={index}
                                imgUrl={value[index].company.logo}
                                name={value[index].company.name}
                                eta={value[index].ref_trip[value[index].ref_trip.length-1].eta}
                                rate="*******"
                                address={value[index].company.address}
                                from={this.state.setData.shipFrom}
                                to={this.state.setData.shipTo}
                                price={value[index].price}
                                >{v}</CardsServices> 
                    })} 
            </div>
    </div>
</div>
); } }