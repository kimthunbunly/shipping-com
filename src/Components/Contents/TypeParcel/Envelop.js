import React from 'react';

export default class Envelop extends React.Component{
  render(){
    return(
        <div className="row">
          <div className="col-sm-10">
            <div className="row ">
              <div className="col-sm-2 radio-style">
                <input type="radio" name="radio-size"/>A1
              </div>
              <div className="col-sm-2 radio-style">
                <input type="radio" name="radio-size"/>A2
              </div>
              <div className="col-sm-2 radio-style">
                <input type="radio" name="radio-size"/>A3
              </div>
              <div className="col-sm-2 radio-style">
                <input type="radio" name="radio-size"/>A4
              </div>
              <div className="col-sm-2 radio-style">
                <input type="radio" name="radio-size"/>A5
              </div>
              <div className="col-sm-2 radio-style">
                <input type="radio" name="radio-size"/>A6
              </div>
            </div>
          </div>
          <div className="col-sm-2 text-remove">
              <a href="">remove</a>
          </div>
      </div>
    );
  }
}
