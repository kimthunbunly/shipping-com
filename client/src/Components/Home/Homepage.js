import React from 'react';
import Package from '../../Assets/img/package.png'; 
import ItemParcel from './ItemParcel';

export default class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            package: true ,
            envelop: false,
            typeParcel:null,
            shipFrom:'',
            shipTo:'',
            shipBy:'',
            envelopsize:'',
            qty:'',
            weight:'',
            height:'',
            width:'',
            value: [<ItemParcel/>],
            num:1
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addMore = this.addMore.bind(this);
        this.delItem = this.delItem.bind(this);
    }
    componentDidMount(){
        this.setState({
            shipFrom:'Phnom Penh City',
            shipTo:'Phnom Penh City',
            shipBy:'Drop Off',
        })
    }
    addMore(){      
        // let num = this.state.num+1;
        // this.setState({num:num});
        this.state.value.push(<ItemParcel/>)
        this.setState(
          this.state.value
        )
    }
    delItem(v){
        for(var i = 0; i < this.state.value.length; i++){
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
    if (shipBy === "pick up") {
        return this.setState({shipBy:"drop off"})
    } else {
        return this.setState({shipBy:"pick up"})
    }   
  }
    onChange = (e) => {
        this.setState({
            typeParcel: e.target.value
        });
        let type = this.state.typeParcel
        if (type === 'envelop') {
            this.setState({package:true});
            this.setState({envelop:false});
        } else {
            this.setState({envelop:true});
            this.setState({package:false});
        }
    }
    onSubmit(e){
        let val = this.state.qty;
        // if (val === '') {
        //     alert('forget input parcel detail')
        // } else {
        //     let a = {   shipFrom:this.state.shipFrom,
        //                 shipTo:this.state.shipTo,
        //                 shipBy:this.state.shipBy,
        //                 qty:this.state.qty,
        //                 weight:this.state.weight,
        //                 height:this.state.height,
        //                 width:this.state.width};
        //     localStorage.setItem('data',JSON.stringify(a))

        //     window.location= '/parcel-service'
        // }
        console.log(this.state)
 }
    valqty =(e) => {
        this.setState({ qty:e});
    }
    valwe =(e) => {
        this.setState({ weight:e});
    }
    valhe =(e) => {
        this.setState({ height:e});
    }
    valwi =(e) => {
        this.setState({ width:e});
    }

    provinces = [
        "Phnom Penh City",
        "Banteay Meanchey Province",
        "Battambang Province",
        "Kompong Cham Province",
        "Kampong Chhang Province",
        "Kampong Speu Province",
        "Kampong Thom Province",
        "Kampot Province",
        "Kandal Province",
        "Koh Kong Province",
        "Kep Province",
        "Kro Ches Province",
        "Mondulkiri Province",
        "Oddar Meanchey Province",
        "Pailin Province",
        "Preah Sihanouk Province",
        "Preah Vihear Province",
        "Pursat Province",
        "Prey Veng Province",
        "Ratanakiri Province",
        "Siem Reap Province",
        "Steng Treng Province",
        "Svay Rieng Province",
        "Takeo Province",
        "Tboung Khmum Province"
    ]
    provinceList = this.provinces.map((name, index) =>
            <option key = {index + 1} > { name } </option>)
    
    render(){
        let { value } = this.state;
        return(
            <div className="container">

                <div className="row justify-content-md-center">
                    <div className="col-sm-4 content-left">
                        <h2>All Package Is Very Take Care <br/>  Form My Company</h2>
                        <img src={Package} width="150" alt="Package" id="package" />
                        <hr/>
                        <p>Create by Mr.Banly the developer Cambodia.</p>
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
                                <select id="country" className="custom-input" name="shipFrom" defaultValue={this.state.shipFrom} onChange={this.handleChange} >
                                    {this.provinceList}
                                </select>
                            </div>
                        </div>
                        <div className="row justify-content-md-center custom-margin">
                            <div className="col-sm-3">
                                <label>SHIPPING TO</label>
                            </div>
                            <div className="col-sm-6 ">
                                <select id="country" className="custom-input" name="shipTo" defaultValue={this.state.shipTo} onChange={this.handleChange}>
                                    {this.provinceList}
                                </select>
                            </div>
                        </div>
                        <div className="row justify-content-md-center custom-margin">
                            <div className="col-sm-3">
                                <label>SHIPPING BY</label>
                            </div>
                            <div className="col-sm-6" onChange={this.handleChange} defaultValue={this.state.shipBy}>
                                <input type="radio" id="drop" name="radio-group" value= "drop off" defaultChecked="true"/>
                                    <label htmlFor="drop" className="radio-group">Drop Off</label>
                                <input type="radio" id="pick" name="radio-group" value= "pick up"/>
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
                                    num={this.state.num}
                                    delEvent={this.delItem.bind(this, v)}
                                    qty={this.valqty}
                                    weight={this.valwe}
                                    height={this.valhe}
                                    width={this.valwi}
                                    >{v}</ItemParcel>})}
{/* end of parcel detail */}

                    <div className="row col-sm-12">
                        <label onClick={this.addMore} onChange={this.handleChange}> + add more parcel</label>
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