import React from 'react';

export default class CardsShipment extends React.Component {
  render(){
    return(
          <div className="row bg-color-white">
            <div className="col-sm-3">
              {this.props.from} To {this.props.to}
            </div>
            <div className="col-sm-2">
              Parcel Qty: {this.props.qty}
            </div>
            <div className="col-sm-3">
              {this.props.name}
            </div>
            <div className="col-sm-1 ">
              <p id="price-color">{this.props.price}$</p>
            </div>
            <div className="col-sm-2">
              <button typ="submit" id="btnBuy">COMFIRM</button>
            </div>
            <div className="col-sm-1">
              <button typ="submit" id="btnDel">DELETE</button>
            </div>
          </div>
      );
  }
}
