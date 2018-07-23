import React from 'react';
import './Style.css';

export default class ItemParcel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            package: true ,
            envelop: false,
            typeParcel:null
        }
        this.onChange = this.onChange.bind(this);
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
                            <input type="number" name="weight" placeholder="We(kg)" defaultValue={this.props.sendData} onChange={this.props.changeInput} onBlur={this.props.onBlur}/>
                        </div>
                        <div className="col-sm-3 input-style">
                            <input type="number" name="length" placeholder="Le(cm)" defaultValue={this.props.sendData} onChange={this.props.changeInput} onBlur={this.props.onBlur}/>
                        </div>
                        <div className="col-sm-3 input-style">
                            <input type="number" name="height" placeholder="Hi(cm)" defaultValue={this.props.sendData} onChange={this.props.changeInput} onBlur={this.props.onBlur}/>
                        </div>
                        <div className="col-sm-3 input-style">
                            <input type="number" name="width" placeholder="Wi(cm)" defaultValue={this.props.sendData} onChange={this.props.changeInput} onBlur={this.props.onBlur}/>
                        </div>
                </div>
            :null}
            {this.state.envelop ?                                 
                <div className="col-sm-10 row text-center" onClick={this.handleChange} defaultValue={this.state.envelopsize}>
                    <div className="col-sm radio-style">
                        <input type="radio" name="envelopsize" id="A1" value="A1" defaultChecked="true"/><label htmlFor="A1">A1</label>
                    </div>
                    <div className="col-sm radio-style">
                        <input type="radio" name="envelopsize" id="A2" value="A2"/><label htmlFor="A2">A2</label>
                    </div>
                    <div className="col-sm radio-style">
                        <input type="radio" name="envelopsize" id="A3" value="A3"/><label htmlFor="A3">A3</label>
                    </div>
                    <div className="col-sm radio-style">
                        <input type="radio" name="envelopsize" id="A4" value="A4"/><label htmlFor="A4">A4</label>
                    </div>
                    <div className="col-sm radio-style">
                        <input type="radio" name="envelopsize" id="A5" value="A5"/><label htmlFor="A5">A5</label>
                    </div>
                </div>
            :null}
                <div className="col-sm-2 text-remove">
                    {this.props.btnRemove ?
                    <p onClick={this.props.delEvent}>remove</p>
                    :null}
                </div>
            </div>                          
        </div>
        );
    }
}