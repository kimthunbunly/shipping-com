import React from 'react';
import ParcelDetail from '../ParcelDetail/ParcelDetail';

export default class Package extends React.Component{
      constructor(props){
            super(props);
            this.state={
                  qty:'',
                  weight:'',
                  height:'',
                  width:''
            }
            this.handleChange=this.handleChange.bind(this);

      }
      handleChange = (e) => {
            this.setState(
                  {[e.target.name]: e.target.value});
      }
      render(){
    return(
        <div className="row">
            <div className="col-sm-12">
              <div className="row justify-content-md-center">
                <div className="col-sm-3 input-style">
                      <input type="number" name="qty" placeholder="QTY" value={this.props.helloQty} onChange={this.handleChange}/>
                </div>
                <div className="col-sm-3 input-style">
                      <input type="number" name="weight" placeholder="We(cm)" value={this.state.weight} onChange={this.handleChange}/>
                </div>
                <div className="col-sm-3 input-style">
                      <input type="number" name="height" placeholder="Hi(cm)"value={this.state.height} onChange={this.handleChange}/>
                </div>
                <div className="col-sm-3 input-style">
                      <input type="number" name="width" placeholder="Wi(cm)"value={this.state.width} onChange={this.handleChange}/>
                </div>
              </div>
            </div>
       </div>
    );
  }
}