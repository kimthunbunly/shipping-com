import React from 'react';

export default class Package extends React.Component{
  render(){
    return(
        <div className="row input-style">
            <div className="col-sm-10">
              <div className="row justify-content-md-center">
                <div className="col-sm-3">
                      <input type="number" placeholder="QTY"/>
                </div>
                <div className="col-sm-3">
                      <input type="number" placeholder="We(cm)"/>
                </div>
                <div className="col-sm-3">
                      <input type="number" placeholder="Hi(cm)"/>
                </div>
                <div className="col-sm-3">
                      <input type="number" placeholder="Wi(cm)"/>
                </div>
              </div>
            </div>
            <div className="col-sm-2 text-remove">
                <a href="#" >remove</a>
           </div>
       </div>
    );
  }
}