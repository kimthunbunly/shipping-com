import React from 'react';

import Header from '../Components/Header';
import Contents from '../Components/Contents';

export default class HomePage extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Contents/>
      </div>
    );
  }
}
