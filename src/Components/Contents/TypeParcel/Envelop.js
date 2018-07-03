import React from 'react';

const Envelop =(props) => {
    return(
        <div className="row">
          <div className="col-sm-12">
            <div className="row ">
              <div className="col-sm-2 radio-style">
                <input type="radio" name={props.radioName}/>A1
              </div>
              <div className="col-sm-2 radio-style">
                <input type="radio" name={props.radioName}/>A2
              </div>
              <div className="col-sm-2 radio-style">
                <input type="radio" name={props.radioName}/>A3
              </div>
              <div className="col-sm-2 radio-style">
                <input type="radio" name={props.radioName}/>A4
              </div>
              <div className="col-sm-2 radio-style">
                <input type="radio" name={props.radioName}/>A5
              </div>
              <div className="col-sm-2 radio-style">
                <input type="radio" name={props.radioName}/>A6
              </div>
            </div>
          </div>
      </div>
    );
  }
  export default Envelop;
