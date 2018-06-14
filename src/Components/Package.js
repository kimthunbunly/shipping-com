import React from 'react';

export default class Package extends React.Component{
  render(){
    return(
        <div className="row">
          <input type="number" className="col" placeholder="QTY"/>
          <input type="number" className="col" placeholder="We(cm)"/>
          <input type="number" className="col" placeholder="Hi(cm)"/>
          <input type="number" className="col" placeholder="Wi(cm)"/>
          <a>remove</a>
      </div>
    );
  }
}
