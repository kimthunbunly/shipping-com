import React from 'react';

export default class CardsShipment extends React.Component {
  render(){
    return(
      <div className="card cus-margin">
      <div className="row text-center">
        <div className="col-sm-4">
          <img className="img-fluid align-center" src={this.props.imgUrl} alt={this.props.name} />
        </div>
        <div className="col-sm-4">
          <label id="company-name">{this.props.name}</label>
          <p><b>From: </b> {this.props.shipFrom} <b> To: </b> {this.props.shipTo}</p>
          <p> <b>Volume: </b>{this.props.volume} cm<sup>3</sup> & <b>Weight: </b>{this.props.weight} kg</p>
          <p> <b>Quantity:</b> {this.props.qty} & <b>ETA</b> {this.props.eta} days</p>
        </div>
        <div className="col-sm-4 align-center">
          <p id="price-color"> {this.props.price}$</p>
          <button type="submit" className="btn btn-danger" onClick={this.props.deleteShip}>Delete</button>
        </div>
      </div>
    </div>
      );
  }
}
