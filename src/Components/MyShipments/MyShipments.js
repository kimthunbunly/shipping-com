import React from 'react';

export default class MyShipments extends React.Component {
  render(){
    return(
      <div className="container container-top bg-color ">
        <label id="label-form">MY SHIPMENTS</label>
        <div className="row bg-margin">
          <div className="col-3">
            <label id="label-parcel">Shipping Destination</label>
          </div>
          <div className="col-2">
            <label id="label-parcel">Parcel Detail</label>
          </div>
          <div className="col-3">
            <label id="label-parcel">By Service Company</label>
          </div>
          <div className="col-1">
            <label id="label-parcel">Price</label>
          </div>
        </div>
        <div className="row bg-color-white">
          <div className="col-3">
            Battambang to Phnom Penh
          </div>
          <div className="col-2">
            Parcel Qty: 01
          </div>
          <div className="col-3">
            Tranfer Company
          </div>
          <div className="col-1 ">
            10$
          </div>
          <div className="col-2">
            <button typ="submit" id="btnBuy">COMFIRM</button>
          </div>
          <div className="col-1">
            <button typ="submit" id="btnDel">DELETE</button>
          </div>
        </div>
                <div className="row bg-color-white">
          <div className="col-3">
            Battambang to Phnom Penh
          </div>
          <div className="col-2">
            Parcel Qty: 01
          </div>
          <div className="col-3">
            Tranfer Company
          </div>
          <div className="col-1 ">
            10$
          </div>
          <div className="col-2">
            <button typ="submit" id="btnConfirm">COMFIRM</button>
          </div>
          <div className="col-1">
            <button typ="submit" id="btnDel">DELETE</button>
          </div>
        </div>
      </div>
      );
  }
}