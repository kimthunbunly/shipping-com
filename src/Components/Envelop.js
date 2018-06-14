import React from 'react';

export default class Envelop extends React.Component{
  render(){
    return(
        <div className="form-group row">
          <div className="col">
            <input type="radio"checked={true} />A1
          </div>
          <div className="col">
            <input type="radio"/>A2
          </div>
          <div className="col">
            <input type="radio"/>A3
          </div>
          <div className="col">
            <input type="radio"/>A4
          </div>
          <div className="col">
            <input type="radio"/>A5
          </div>
          <div className="col">
            <input type="radio"/>A6
          </div>
          <div className="col">
            <a>remove</a>
          </div>
      </div>
    );
  }
}
