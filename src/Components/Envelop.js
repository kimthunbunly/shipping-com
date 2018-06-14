import React from 'react';

export default class Envelop extends React.Component{
  render(){
    return(
        <div className="row">
          <input type="radio" className="col" checked={true} />A1
          <input type="radio" className="col" />A2
          <input type="radio" className="col" />A3
          <input type="radio" className="col" />A4
          <input type="radio" className="col" />A5
          <input type="radio" className="col" />A6
          <a>remove</a>
      </div>
    );
  }
}
