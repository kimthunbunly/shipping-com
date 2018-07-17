import React from 'react';

export default class CardsShipment extends React.Component {
  render(){
    return(
          <div className="card cus-margin">
            <div className="row text-center">
              <div className="col-sm-4">
                <img className="img-fluid" src={this.props.imgUrl} alt={this.props.name} />
              </div>
              <div className="col-sm-4">
                <label id="company-name">{this.props.name}</label>
                <p><b>From: </b> {this.props.shipFrom} <b> To: </b> {this.props.shipTo}</p>
                <p> ETA {this.props.eta} days</p>
              </div>
              <div className="col-sm-4">
                <p id="price-color"> {this.props.price}$</p>
	              <button type="submit" className="btn btn-danger" onClick={this.props.deleteShip}>Delete</button>
              </div>
            </div>
          </div>
      );
  }
}
