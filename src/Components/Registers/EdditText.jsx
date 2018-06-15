import React from 'react'

export default class EdditText extends React.Component{
 state =  {
    label:this.props.label,
    hint:this.props.hint,
    error:this.props.error,
    success :this.props.success
  }
  
  render(){
    


    return(
      <div>
        <label>{this.state.label}</label>
        <input placeholder={this.state.hint}/>
        <p style={{color:"green"}}>{this.state.success}</p>
        <p style={{color:"red"}}>{this.state.error}</p>
      </div>
    )
  }
}
