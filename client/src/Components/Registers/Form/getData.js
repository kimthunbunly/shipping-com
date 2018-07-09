import React from 'react';
import axios from 'axios';

export default class getData extends React.Component{
    constructor(props){
    super(props);
    this.state = {
      getData:getData
    };

	const id = localStorage.getItem('setId');
		axios.put(`http://localhost:5000/users/edit/`+id, user)
			.then(res => {
				console.log(res);
				console.log(res.data);
            })
    }
  render(){
    return(
      <div>
          {getData=this.state.getData}
      </div>
    );
  }
}
