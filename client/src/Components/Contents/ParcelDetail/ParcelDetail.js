import React from 'react'; 

import PPackage from '../TypeParcel/Package'; 
import Envelop from '../TypeParcel/Envelop'; 

export default class ParcelDetail extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            package:<PPackage   qty={this.val}
                                weight={this.val}
                                height={this.val}
                                width={this.val}
                                pChange={this.pChange}/>,
            envelop:<Envelop/>,
            onValue: null,
            boxChange: <PPackage/>,
            num:props.num,
            qty:'',
            weight:'',
            height:'',
            width:'',
            disableForm: false
        };
        this.handleChange = this.handleChange.bind(this);  
        this.pChange = this.pChange.bind(this);        
      }
        handleChange (e){
            this.setState({ onValue: e.target.value });

            const boxChange = this.state.onValue;
            if (boxChange==='envelop') {
                this.setState({boxChange:this.state.package})
            } else {
                this.setState({boxChange:this.state.envelop})
            }
        }
        val =(e) => {
            this.setState({ [e.target.name]:e});
        }
        pChange(e){
            this.setState({[e.target.name]:e.target.value});

        }
        render(){
        return(
                        <div className="row space-row">
                            <div className="col-sm-4">
                                <label className="col-sm-5">No-{this.state.num}</label>
                                <select className="col-sm-7 combobox-style" defaultValue={this.state.onValue} onChange={this.handleChange}>
                                    <option 
                                        value='package'
                                        >Package</option>
                                    <option 
                                        value='envelop'
                                        >Envelop</option>
                                        
                                </select>
                            </div>
                            <div className="col-sm-8" id="demo">
                            {this.state.qty}
                                <div className="row">
                                    <div className="col-sm-10">
                                        {this.state.boxChange}
                                        <div className="">
                                            {/* <PPackage 
                                            qty={this.val}
                                            weight={this.val}
                                            height={this.val}
                                            width={this.val}
                                            pChange={this.pChange}
                                            /> */}
                                        </div>
                                    </div>
                                    <div className="col-sm-2 text-remove">
                                        <p onClick={this.props.delEvent}>remove</p>
                                    </div>
                                </div>
                            </div>
                        </div>
); } }
