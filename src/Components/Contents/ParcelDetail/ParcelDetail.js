import React from 'react'; 

import PPackage from '../TypeParcel/Package'; 
import Envelop from '../TypeParcel/Envelop'; 

export default class ParcelDetail extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            package:<PPackage/>,
            envelop:<Envelop/>,
            onValue: null,
            boxChange:<PPackage/>
        };
        this.handleChange = this.handleChange.bind(this);
      }
        handleChange (e){
            this.setState({ onValue: e.target.value });

            const boxChange = this.state.onValue;
            if (boxChange==='envelop') {
                this.state.boxChange = this.state.package;
            } else {
                this.state.boxChange = this.state.envelop;
            }
        }
        render(){ 
        return(
                        <div className="row space-row">
                            <div className="col-sm-4">
                                <label className="col-sm-5">No-A</label>
                                <select className="col-sm-7 combobox-style" value={this.state.onValue} onChange={this.handleChange}>
                                    <option 
                                        value='package'
                                        >Package</option>
                                    <option 
                                        value='envelop'
                                        >Envelop</option>
                                </select>
                            </div>
                            <div className="col-sm-8" id="demo">
                                {this.state.boxChange}
                            </div>
                        </div>
); } }