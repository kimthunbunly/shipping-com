import React from 'react';
import Package from './package.png'; 
import './Style.css'
import ItemParcel from './ItemParcel';
import axios from 'axios'

export default class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            provinces: [
                "Phnom Penh",
                "Angkor Wat",
                "Kirirum",
                "Kampot",
                "KrongKep",
                "Sihanounkville"
            ],
            package: true ,
            envelop: false,
            typeParcel:'',
            shipFrom:'',
            shipTo:'',
            shipBy:'',
            envelopsize:'',
            qty:[],
            weight:[],
            height:[],
            width:[],
            value: [<ItemParcel/>]
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addItem = this.addItem.bind(this);
        this.delItem = this.delItem.bind(this);
    }
    componentDidMount(){
        this.setState({
            typeParcel:"package",
            shipFrom:"Phnom Penh",
            shipTo:"Phnom Penh",
            shipBy:"pickUp"
        })
    }
    addItem(){      
        this.state.value.push(<ItemParcel/>)
        this.setState(
          this.state.value
        )
    }
    delItem(v){
        for(var i = 1; i < this.state.value.length; i++){
          if(this.state.value[i] === v){
             delete this.state.value[i]
          }
        }
        this.setState({
          value:this.state.value
        })
      }
    handleChange = (e) => {
    this.setState({
        [e.target.name]:e.target.value
    })
    const shipBy = this.state.shipBy;        
        if (shipBy === "pickUp") {
            return this.setState({shipBy:"dropOff"})
        } else {
            return this.setState({shipBy:"pickUp"})
        }   
    }
    onChange = (e) => {
        this.setState({
            typeParcel: e.target.value
        });
    }
    onSubmit(e){
        let a = this.state.shipFrom;
        let b = this.state.shipTo;
        if (a===b) {
            alert("Can't Choose The Same Province")
        } else {
            this.checkTypeParcel();
        }
    }
    checkTypeParcel(){
        let a = this.state.typeParcel;
        if (a === 'package') {
            this.inputParcelVaild();
        } else {
            this.pushData();                
        }
    }
    pushData(){
        let send_data = this.state;
        let shipFrom = this.state.shipFrom;
        let shipTo = this.state.shipTo;
        let shipBy = this.state.shipBy;
        let volume = this.volume();
        let weight = this.state.weight;
        localStorage.setItem('$send_Data%$&',JSON.stringify(send_data));
        
        axios.get(`http://localhost:3003/search/`+shipFrom+'/'+shipTo+'?type='+shipBy+'&&volume='+volume+'&&weight='+weight)
        .then(res =>{
            let res_data = res;
            localStorage.setItem('$res_Data%$&',JSON.stringify(res_data));
            window.location= '/parcel-service'
        }).catch(
            "404"     
        )

    }
    inputParcelVaild(){
        let val = this.formVaild();
        if (val === false) {
            alert('forget input parcel detail')
        } else {
            this.pushData()
        }
    }
    volume(){
        return this.state.height * this.state.width;
    }
    formVaild(){
        return  this.state.qty.length > 0 &&
                this.state.weight.length > 0 &&
                this.state.height.length >0 &&
                this.state.width.length >0 ;
    }
    childValueQty =(e) => {
        this.setState({ qty:e});
    }
    childvalueWeight =(e) => {
        this.setState({ weight:e});
    }
    childValueHeight =(e) => {
        this.setState({ height:e});
    }
    childValueWidth =(e) => {
        this.setState({ width:e});
    }
    childValueEnvelop =(e) => {
        this.setState({ envelopsize:e});
    }
    typeParcel=(e)=>    {
        this.setState({typeParcel:e})
    }
    render(){
        let { value,provinces } = this.state;
        return(
            <div className="container">

                <div className="row justify-content-md-center">
                    <div className="col-sm-4 content-left">
                        <h2>All Package Is Very Take Care <br/>  Form My Company</h2>
                        <img src={Package} width="120" alt="Package" id="package" className="img-fluid"/>
                        <hr/>
                        <p>Create for help to people enjoy to send them parcel :)</p>
                    </div>
                    <div className="col-sm-8 bg-color">
                        <div className="container row col-sm-12" id="title-bar">
                            <h1> PARCEL INFORMATION </h1>
                        </div>
                        <div className="row justify-content-md-center custom-margin">
                            <div className="col-sm-3">
                                <label>SHIPPING FROM</label>
                            </div>
                            <div className="col-sm-6 ">
                                <select id="country" className="custom-input" name="shipFrom" defaultValue={this.state.shipFrom} onChange={this.handleChange}>
                                {provinces.map((name, index) =>
                                    <option id="style-option" key = {index + 1} > { name } </option>)}
                                </select>
                            </div>
                        </div>
                        <div className="row justify-content-md-center custom-margin">
                            <div className="col-sm-3">
                                <label>SHIPPING TO</label>
                            </div>
                            <div className="col-sm-6 ">
                                <select id="country" className="custom-input" name="shipTo" defaultValue={this.state.shipTo} onChange={this.handleChange}>
                                {provinces.map((name, index) =>
                                    <option id="style-option" key = {index + 1} > { name } </option>)}
                                </select>
                            </div>
                        </div>
                        <div className="row justify-content-md-center custom-margin">
                            <div className="col-sm-3">
                                <label>SHIPPING BY</label>
                            </div>
                            <div className="col-sm-6" onChange={this.handleChange} defaultValue={this.state.shipBy}>
                                <input type="radio" id="drop" name="radio-group" value= "dropOff" defaultChecked="true"/>
                                    <label htmlFor="drop" className="radio-group">Drop Off</label>
                                <input type="radio" id="pick" name="radio-group" value= "pickUp"/>
                                    <label htmlFor="pick" className="radio-group" >Pick Up</label>  
                            </div>
                        </div>
                        <div className="">
                            <hr/>
                        </div>
                        <div className=" container row">
                            <label>Parcel Detail :</label>
                        </div>

{/* --new items have been show in here-- */}
                        {value.map((v,index) => {
                            return  <ItemParcel
                                    key={index}
                                    num={[index+1]}
                                    delEvent={this.delItem.bind(this,v)}
                                    qty={this.childValueQty}
                                    weight={this.childvalueWeight}
                                    height={this.childValueHeight}
                                    width={this.childValueWidth}
                                    envelopsize={this.childValueEnvelop}
                                    typeParcel={this.typeParcel}
                                    >{v}</ItemParcel>})}
{/* end of parcel detail */}

                    <div className="row col-sm-12 text-add">
                        <label onClick={this.addItem} onChange={this.handleChange}> + add more parcel</label>
                    </div>
                    <div className="row float-right">
                        <div className="col-sm-10">
                        <button id="btnStart" onClick={this.onSubmit}>START</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}