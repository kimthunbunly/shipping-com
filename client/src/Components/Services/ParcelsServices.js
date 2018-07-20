import React from 'react'; 
import CardsServices from '../Cards/CardsServices';
import axios from 'axios' 

export default class StartService extends React.Component { 
      constructor(props){
        super(props);
        this.state = {
            setData:[],
            value: [],
            volume:0,
            totalWeight:0
        }
    }
    componentDidMount(){ 
        let setData = JSON.parse(localStorage.getItem('$send_Data%$&'))
        this.setState({setData})
        let shipFrom = setData.shipFrom; 
        let shipTo = setData.shipTo; 
        let shipBy = setData.shipBy; 
        let volume = setData.volume;
        let weight = setData.totalWeight; 
        axios.get(`api/search/`+shipFrom+'-'+shipTo+'?type='+shipBy+'&&volume='+volume+'&&weight='+weight) 
        .then(res =>{              
            let value = res.data;
            console.log(res.data)
            this.setState({value});}
        )
      }
    render(){ 
        let {value} = this.state;
        return(
<div>
    <div className="container container-top bg-color">
        <label id="label-form">YOUR PARCEL DETAIL{this.state.height}</label>
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
                    <label className="col-sm-4 col-form-label label-style">Parcel Quantity:</label>
                    <label className="col-sm col-form-label ">{this.state.setData.length.length}</label>
                </div>
                <div className="row">
                    <label className="col-sm-4 col-form-label label-style">Total Volume:</label>
                    <label className="col-sm col-form-label ">{this.state.setData.volume} cm<sup>3</sup></label>
                </div>
                <div className="row">
                    <label className="col-sm-4 col-form-label label-style">Total Weight:</label>
                    <label className="col-sm col-form-label ">{this.state.setData.totalWeight} kg</label>
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