import React from 'react'; 
import Package from './package.png'; 
import './Style.css'; 
import ItemParcel from './ItemParcel'; 
// import axios from 'axios' 
import Blog from '../Contents/Blog';

export default class Homepage extends React.Component{ 
    constructor(props){ 
        super(props); 
        this.state = { 
            provinces: [ "Phnom Penh", "Angkor Wat", "Kirirum", "Kampot", "KrongKep", "Sihanounkville" ], 
            package: true , 
            envelop: false, 
            typeParcel:'', 
            shipFrom:'', 
            shipTo:'', 
            shipBy:'', 
            envelopsize:'', 
            length:[], 
            weight:[], 
            height:[], 
            width:[], 
            value: [<ItemParcel/>], 
            btnRemove:false,
            count:1,
            volume:0,
            totalWeight:0
        } 
        this.handleChange = this.handleChange.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 
        this.addItem = this.addItem.bind(this); 
        this.delItem = this.delItem.bind(this); 
    } 
        componentDidMount(){ 
        this.setState({ typeParcel:"package", shipFrom:"Phnom Penh", shipTo:"Phnom Penh", shipBy:"pickUp" }) 
    } 
        addItem(){ 
        this.state.value.push(<ItemParcel/>) 
        this.setState( this.state.value ) 
        this.setState({typeParcel:'package'})
        let c = this.state.count;
        if (c) {
            let count = c + 1
            this.setState({count:count})
            this.setState({btnRemove:true})
        }
    } 
        delItem(index, v){  
        let c = this.state.count; 
        if (c === 2 ) {
            this.setState({btnRemove:false})
            let count = 1
            this.setState({count:count})
        }else{
            let count = c - 1
            this.setState({count:count})
        }
        
        let length = this.state.length; 
        let width = this.state.width; 
        let height = this.state.height; 
        let weight = this.state.weight; 
        
        length.splice(index,1); 
        width.splice(index,1); 
        height.splice(index,1);
        weight.splice(index,1); 
        
        this.setState({length,width,height,weight}); 
        
        let parcels = this.state.value.slice();
        for(var i = 0; i < parcels.length; i++) {         
         if(parcels[i] === v ){
            delete parcels[i] 
            }
        } 
            this.setState({ value: parcels }) 
        } 
        handleChange=(e)=> { 
                this.setState({ [e.target.name]:e.target.value }) 
                const shipBy = this.state.shipBy; if (shipBy === "pickUp") { 
                    return this.setState({shipBy:"dropOff"}) } 
                    else { 
                        return this.setState({shipBy:"pickUp"}) } 
        } 
        onChange = (e) => { 
            this.setState({ typeParcel: e.target.value });
        } 
        onSubmit(e){ 
            let a = this.state.shipFrom; 
            let b = this.state.shipTo; 
            if (a===b) { 
                alert("Can't Choose The Same Province") } 
                else { this.checkTypeParcel(); } 
        } 
        checkTypeParcel(){ 
            let a = this.state.typeParcel; 
            if (a === 'package') { 
                this.inputParcelVaild(); } 
                else { this.pushData(); } 
        } 
        pushData(){ 
            let send_data = this.state; 
            localStorage.setItem('$send_Data%$&',JSON.stringify(send_data)); 
            window.location='/parcel-service'
        }                 
        inputParcelVaild(){ 
            let val = this.formVaild(); 
            if (val === false) { 
                alert('forget input parcel detail') }
                else { this.pushData() } 
        } 
        volume(){ 
            return this.state.height * this.state.width; 
        } 
        formVaild(){ 
            return this.state.length.length > 0 && this.state.weight.length > 0 && this.state.height.length >0 && this.state.width.length >0 ;
        } 
        newChange =(e ,index) => { 
            let arr = this.state[index.target.name].slice(); 
            arr[e] = index.target.value; 
            this.setState({[index.target.name] : arr}); 
            this.totalValue();
        } 
        totalValue(){
            let height = this.state.height;
            let totalHeight = 0;
            height.forEach(h => totalHeight +=  parseInt(h,[]));
    
            let width = this.state.width;
            let totalWidth = 0;
            width.forEach(w => totalWidth +=  parseInt(w,[]));
    
            let length = this.state.length;
            let totalLength = 0;
            length.forEach(l => totalLength +=  parseInt(l,[]));
    
            let weight = this.state.weight;
            let totalWeight = 0;
            weight.forEach(q => totalWeight +=  parseInt(q,[]));
            this.setState({totalWeight})
            
            let volume = totalHeight * totalWidth * totalLength;
            this.setState({volume})
        }
        render(){ 
            let { value,provinces } = this.state; 
            return(
            <div>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-sm-4 content-left">
                            <h2>All Package Is Very Take Care <br/>  Form My Company</h2>
                            <img src={Package} width="120" alt="Package" id="package" className="img-fluid" />
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
                                        <option id="style-option" key={ index + 1}> { name } </option>)}
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
                                        <option id="style-option" key={ index + 1}> { name } </option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="row justify-content-md-center custom-margin">
                                <div className="col-sm-3">
                                    <label>SHIPPING BY</label>
                                </div>
                                <div className="col-sm-6" onChange={this.handleChange} defaultValue={this.state.shipBy}>
                                    <input type="radio" id="drop" name="radio-group" value="dropOff" defaultChecked="true" />
                                    <label htmlFor="drop" className="radio-group">Drop Off</label>
                                    <input type="radio" id="pick" name="radio-group" value="pickUp" />
                                    <label htmlFor="pick" className="radio-group">Pick Up</label>
                                </div>
                            </div>
                            <div className="">
                                <hr/>
                            </div>
                            <div className=" container row">
                                <label>Parcel Detail :</label>
                            </div>
                            {value.map((data,index) => { 
                                return <ItemParcel 
                                key={index} 
                                btnRemove={this.state.btnRemove }
                                num={index+1} 
                                delEvent={this.delItem.bind(this, index, data)} 
                                sendData={this.state} 
                                changeInput={this.newChange.bind(this,index)}>
                                {data}
                                </ItemParcel>})}
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
                <div className="row justify-content-md-center">
                        <Blog/>
                    </div>
                </div>
        ); } }