import React from 'react';

export default class ItemParcel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            package: true ,
            envelop: false,
            typeParcel:null,
            envelopsize:'',
            qty: props.qty,
            weight: props.weight,
            height: props.height,
            width: props.width
        }
        this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this);
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
    render(){
        return(
            <div className="row justify-content-md-center" >
            <div className="col-sm-4 row">
                <div className="col-sm-4 text-no">
                    <label>No-{this.props.num}</label>
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
        );
    }
}