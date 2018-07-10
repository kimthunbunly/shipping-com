import React from 'react';
import Package from '../../Assets/img/package.png'; 

export default class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            package: true ,
            envelop: false,
            typeParcel:null,
            addMore:'',
            shipFrom:'',
            shipTo:'',
            shipBy:'',
            envelopsize:'',
            qty:'',
            weight:'',
            height:'',
            width:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addMore = this.addMore.bind(this);
    }
    componentDidMount(){
        this.setState({
            shipFrom:'Phnom Penh City',
            shipTo:'Phnom Penh City',
            shipBy:'Drop Off'

        })
    }
    addMore(){        

}
    handleChange = (e) => {
    this.setState({
        shipFrom:e.target.value,
        shipTo:e.target.value,
        qty:e.target.value,
        weight:e.target.value,
        height:e.target.value,
        width:e.target.value
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
    onSubmit(){
        if (this.formVaild === '') {
            alert("hello0")
        } else {
            alert("dfdff")
        }
    }
    formVaild(){
        return  this.state.qty ,
                this.state.weight ,
                this.state.height ,
                this.state.width ;
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
        return(
            <div className="container">
                <div className="row justify-content-md-center">
                <   div className="col-sm-4 content-left">
                        <h2>All Package Is Very Take Care <br/>  Form My Company</h2>
                        <img src={Package} width="150" alt="Package" id="package" />
                        <hr/>
                        <p>Create by Mr.Banly the developer Cambodia.</p>
                    </div>
                    <div className="col-sm-8 bg-color">
                        <div className="container row col-sm-12" id="title-bar">
                            <h1> PARCEL INFORMATION </h1>
                            <hr/>
                        </div>
                        <div className="row justify-content-md-center custom-margin">
                            <div className="col-sm-3">
                                <label>SHIPPING FROM</label>
                            </div>
                            <div className="col-sm-6 ">
                                <select id="country" className="custom-input" name="country" defaultValue={this.state.shipFrom} onChange={this.handleChange} >
                                    {this.provinceList}
                                </select>
                            </div>
                        </div>
                        <div className="row justify-content-md-center custom-margin">
                            <div className="col-sm-3">
                                <label>SHIPPING TO</label>
                            </div>
                            <div className="col-sm-6 ">
                                <select id="country" className="custom-input" name="country" defaultValue={this.state.shipTo} onChange={this.handleChange}>
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

{/* row of parcel detail */}
                        <div className="row justify-content-md-center">
                            <div className="col-sm-4 row">
                                <div className="col-sm-4 text-no">
                                    <label>No-1</label>
                                </div>
                                <div className="col-sm-8 cus-">
                                    <select defaultValue={this.state.typeParcel} onChange={this.onChange}>
                                        <option 
                                            value='package'
                                            >Package</option>
                                        <option 
                                            value='envelop'
                                            >Envelop</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-8 row">
                            {this.state.package ?                                 
                                <div className="col-sm-10 row text-center">
                                        <div className="col-sm-3 input-style">
                                            <input type="number" name="qty" placeholder="QTY" defaultValue={this.state.qty} onChange={this.handleChange}/>
                                        </div>
                                        <div className="col-sm-3 input-style">
                                            <input type="number" name="weight" placeholder="We(cm)" defaultValue={this.state.weight} onChange={this.handleChange}/>
                                        </div>
                                        <div className="col-sm-3 input-style">
                                            <input type="number" name="height" placeholder="Hi(cm)" defaultValue={this.state.height} onChange={this.handleChange}/>
                                        </div>
                                        <div className="col-sm-3 input-style">
                                            <input type="number" name="width" placeholder="Wi(cm)" defaultValue={this.state.width} onChange={this.handleChange}/>
                                        </div>
                                </div>
                            :null}
                            {this.state.envelop ?                                 
                                <div className="col-sm-10 row text-center" onChange={this.handleChange} defaultValue={this.state.envelopsize}>
                                    <div className="col-sm radio-style">
                                        <input type="radio" name="rr" id="A1" value="A1" defaultChecked="true"/><label htmlFor="A1">A1</label>
                                    </div>
                                    <div className="col-sm radio-style">
                                        <input type="radio" name="rr" id="A2" value="A2"/><label htmlFor="A2">A2</label>
                                    </div>
                                    <div className="col-sm radio-style">
                                        <input type="radio" name="rr" id="A3" value="A3"/><label htmlFor="A3">A3</label>
                                    </div>
                                    <div className="col-sm radio-style">
                                        <input type="radio" name="rr" id="A4" value="A4"/><label htmlFor="A4">A4</label>
                                    </div>
                                    <div className="col-sm radio-style">
                                        <input type="radio" name="rr" id="A5" value="A5"/><label htmlFor="A5">A5</label>
                                    </div>
                                </div>
                            :null}
                                <div className="col-sm-2 text-remove">
                                    <p onClick={this.props.delEvent}>remove</p>
                                </div>
                            </div>                          
                        </div>
{/* end of row detail */}
                    <div className="row col-sm-12">
                        <label onClick={this.addMore}> + add more parcel</label>
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