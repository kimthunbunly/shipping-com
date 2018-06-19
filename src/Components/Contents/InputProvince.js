import React from 'react';

export default class Province extends React.Component{
  provinces = [
    "Phnom Penh Province" ,
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
  <option key={index}>{name}</option>
)
  render(){
    return(

      <div className="control-group">
   <div className="controls">
       <select id="country" name="country" className="form-control">
           {this.provinceList}
       </select>
   </div>
</div>

    );
  }
}
