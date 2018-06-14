import React from 'react';

export default class PickUp extends React.Component{
  render(){
    return(
        <div className=" row">
          <label className="col-sm-4" id="label-style">Date</label>
          <div className="col-sm-3 ">
            <input type="date" id="date"/>
          </div>
          <label className="col-sm-2" id="label-style">Time</label>
          <div className="col-sm-3 ">
            <input type="time" id="times"/>
          </div>
        </div>
    );
  }
}
