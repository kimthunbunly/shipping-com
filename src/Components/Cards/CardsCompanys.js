import React from 'react';
import PropTypes from 'prop-types';

export default class CardsCompanys extends React.Component{
	render(){
		return(
			<div className="card border- bg-shadow">
			    <div className="box-img text-center">
			    	<img 	className="card-img-top size-img" 
			    			src={this.props.imgUrl} 
			    			alt={this.props.name}
			    	/>
			    </div>
			    <div className="card-body">
			      <h5 className="card-title">{this.props.name}</h5>
			      <p className="card-text">{this.props.title}</p>
			    </div>
			    <div className="card-footer">
			      <small className="text-muted">Last updated {this.props.timeUp} mins ago</small>
			    </div>
			</div>
			);
	}
}
CardsCompanys.propType = {
	name:PropTypes.string,
	title:PropTypes.string,
	timeUp:PropTypes.number
};