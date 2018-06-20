import React from 'react';

export default class Package extends React.Component{
  render(){
    return(
        <div className="row input-style">
          <input type="number" className="col-sm" placeholder="QTY"/>
          <input type="number" className="col-sm" placeholder="We(cm)"/>
          <input type="number" className="col-sm" placeholder="Hi(cm)"/>
          <input type="number" className="col-sm" placeholder="Wi(cm)"/>
          <a href="" className="col-sm" id="link-color">remove</a>
      </div>
    );
  }
}
