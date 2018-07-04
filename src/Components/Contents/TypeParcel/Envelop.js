import React from 'react';

const Envelop =(props) => {
    return(
        <div className="row">
          <div className="col-sm-12">
            <div className="row ">
              <div className="col-sm-2 radio-style">
                <input type="radio" name="rr" id="A1"/><label htmlFor="A1">A1</label>
              </div>
              <div className="col-sm-2 radio-style">
                <input type="radio" name="rr" id="A2"/><label htmlFor="A2">A2</label>
              </div>
              <div className="col-sm-2 radio-style">
                <input type="radio" name="rr" id="A3"/><label htmlFor="A3">A3</label>
              </div>
              <div className="col-sm-2 radio-style">
                <input type="radio" name="rr" id="A4"/><label htmlFor="A4">A4</label>
              </div>
              <div className="col-sm-2 radio-style">
                <input type="radio" name="rr" id="A5"/><label htmlFor="A5">A5</label>
              </div>
              <div className="col-sm-2 radio-style">
                <input type="radio" name="rr" id="A6"/><label htmlFor="A6">A6</label>
              </div>
            </div>
          </div>
      </div>
    );
  }
  export default Envelop;
