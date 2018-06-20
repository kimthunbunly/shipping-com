import React from 'react';

export default class Envelop extends React.Component{
  render(){
    return(
        <div className="form-group row">
          <div className="col">
            <input type="radio" name="radio-size"/>A1
          </div>
          <div className="col">
            <input type="radio" name="radio-size"/>A2
          </div>
          <div className="col">
            <input type="radio" name="radio-size"/>A3
          </div>
          <div className="col">
            <input type="radio" name="radio-size"/>A4
          </div>
          <div className="col">
            <input type="radio" name="radio-size"/>A5
          </div>
          <div className="col">
            <input type="radio" name="radio-size"/>A6
          </div>
          <div className="col">
            <a href="" id="link-color">remove</a>
          </div>
      </div>
    );
  }
}
