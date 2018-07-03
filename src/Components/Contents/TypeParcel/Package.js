import React from 'react';

const Package =(props) => {
    return(
        <div className="row">
            <div className="col-sm-12">
              <div className="row justify-content-md-center">
                <div className="col-sm-3 input-style">
                      <input type="number" placeholder="QTY"/>
                </div>
                <div className="col-sm-3 input-style">
                      <input type="number" placeholder="We(cm)"/>
                </div>
                <div className="col-sm-3 input-style">
                      <input type="number" placeholder="Hi(cm)"/>
                </div>
                <div className="col-sm-3 input-style">
                      <input type="number" placeholder="Wi(cm)"/>
                </div>
              </div>
            </div>
       </div>
    );
  }
export default Package;