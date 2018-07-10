import React from 'react';

export default class Province extends React.Component{
  constructor(props){
    super(props);
    this.state={
      sendProvince:'helloo'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(e){
    this.props.sendProvince("Phnom Penh City");
  }
  handleChange = (e) => {
    this.props.sendProvince(e.target.value);
    this.setState({sendProvince: e.target.value});
  };
  provinces = [
    "Phnom Penh City" ,
"Banteay Meanchey Province" ,
"Battambang Province" ,
"Kompong Cham Province" ,
"Kampong Chhang Province" ,
"Kampong Speu Province" ,
"Kampong Thom Province" ,
"Kampot Province" ,
"Kandal Province" ,
"Koh Kong Province" ,
"Kep Province" ,
"Kro Ches Province" ,
"Mondulkiri Province" ,
"Oddar Meanchey Province" ,
"Pailin Province" ,
"Preah Sihanouk Province" ,
"Preah Vihear Province" ,
"Pursat Province" ,
"Prey Veng Province",
"Ratanakiri Province" ,
"Siem Reap Province" ,
"Steng Treng Province" ,
"Svay Rieng Province" ,
"Takeo Province" ,
"Tboung Khmum Province" 
  ]
  provinceList = this.provinces.map((name, index)=>
  <option key={index+1}>{name}</option>)
  render(){
    return(

<div className="control-group">
   <div className="controls">
       <select id="country" name="country" className="form-control border-" onChange={this.handleChange} defaultValue={this.state.sendProvince}>
           {this.provinceList}
       </select>
   </div>
</div>

    );
  }
}
