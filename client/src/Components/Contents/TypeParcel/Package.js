import React from 'react';

export default class Package extends React.Component{
      constructor(props){
            super(props);
            this.state = {
                  qty: props.qty,
                  weight: props.weight,
                  height: props.height,
                  width: props.width
            }
      }
      render(){ 
    return(
        <div className="row">
            <div className="col-sm-12">
              <div className="row justify-content-md-center">
                <div className="col-sm-3 input-style">
                      <input type="number" name="qty" placeholder="QTY" defaultValue={this.state.qty} onChange={this.props.pChange} />
                </div>
                <div className="col-sm-3 input-style">
                      <input type="number" name="weight" placeholder="We(cm)" defaultValue={this.state.weight} onChange={this.props.pChange}/>
                </div>
                <div className="col-sm-3 input-style">
                      <input type="number" name="height" placeholder="Hi(cm)" defaultValue={this.state.height} onChange={this.props.pChange}/>
                </div>
                <div className="col-sm-3 input-style">
                      <input type="number" name="width" placeholder="Wi(cm)" defaultValue={this.state.width} onChange={this.props.pChange}/>
                </div>
              </div>
            </div>
       </div>
    );
  }
}