import React from 'react'; 
import '../../Assets/css/index.css'; 
// import {Link} from 'react-router-dom';   
import Package from '../../Assets/img/package.png'; 
import Province from './InputProvince'; 
import ParcelDetail from './ParcelDetail/ParcelDetail';

export default class Contents extends React.Component{ 
    constructor(props) {
        super(props);
     
        this.onAddmore = this.onAddmore.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {    
           data: [<ParcelDetail/>],
           num:1,
           shipFrom:'',
           shipTo:'',
           shipBy:"drop off"
        };
     }
     onAddmore() {
        let num = this.state.num+1;
        this.state.data.push(<ParcelDetail/>)
        this.setState({num:num});
        this.setState({data:this.state.data});
     }
     onDelete(index){
        const data = this.state.data;
        console.log(data)
        data.splice(index,1);
        this.setState({data: this.state.data});
     }
     handleSubmit(e){ 
        e.preventDefault()
        const shipFrom = this.state.shipFrom
        const shipTo = this.state.shipTo
        const shipBy = this.state.shipBy
        localStorage.setItem('shipFrom',shipFrom)
        localStorage.setItem('shipTo',shipTo)
        localStorage.setItem('shipBy',shipBy)
        window.location='/parcel-service';
     }
     valueShipFrom = (e) => {
        this.setState({
          shipFrom: e
        })
      }
      valueShipTo = (e) => {
        this.setState({
          shipTo: e
        })
      }
      handleChange (e){
        const shipBy = this.state.shipBy;        
        if (shipBy === "pick up") {
            return this.setState({shipBy:"drop off"})
        } else {
            return this.setState({shipBy:"pick up"})
        }        
      }
        render(){ 
        return(
<div className="container bg-color-body">
    <div className="row">
        <div className="col-sm-4 content-left">
            <h2>All Package Is Very Take Care <br/>  Form My Company</h2>
            <img src={Package} width="150" alt="Package" id="package" />
            <hr/>
            <p>Create by Mr.Banly the developer Cambodia.</p>
        </div>
        <div className="col-sm-8">
            <div className="content-right bg-color">
                <div className="container">
                    <div id="title-bar">
                        <h1> PARCEL INFORMATION </h1></div>
                        
                    <div className="form-group row">
                        <label className="col-sm-4" id="label-style">Shipping From</label>
                        <div className="col-sm-8">
                            <Province
                            sendProvince={this.valueShipFrom}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4" id="label-style">Shipping To</label>
                        <div className="col-sm-8">
                            <Province
                            sendProvince={this.valueShipTo}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4" id="label-style">Shipping By</label>
                        <div className="col-sm-8 input-radio"defaultValue={this.state.shipBy} onChange={this.handleChange}>
                            <input type="radio" id="drop" name="radio-group" value= "drop off" defaultChecked="true"/>
                                <label htmlFor="drop" className="radio-group">Drop Off</label>
                            <input type="radio" id="pick" name="radio-group" value= "pick up"/>
                                <label htmlFor="pick" className="radio-group" >Pick Up</label>  
                        </div>
                    </div>
                    <hr/>
                    <div className=" row">
                        <label>Parcel Detail</label>
                        <div className="col-sm-12">
                            {
                                this.state.data.map( (data,index) => {
                                    return (
                                            <ParcelDetail 
                                            key={index}
                                            delEvent={this.onDelete.bind(this,index)}
                                            num={this.state.num}
                                            />
                            )})}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4 text-add">
                            <p onClick={this.onAddmore}>+ add more package</p>
                        </div>
                        <div className="col-sm-12">
                            <form onSubmit={this.handleSubmit}>
                                    <button 
                                    typ="button" 
                                    id="btnStart"
                                    onClick={this.handleSubmit}>START</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
); } }