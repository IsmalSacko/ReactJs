import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'
class App extends Component{
render () {  
  const  {titre1} = this.props
  // const  {titre2} = this.props
  // const  {titre3} = this.props
  return (
    <div className="App">
     <h1>{titre1}</h1>
     <Membre nom ='Ismaila'/>     
     <Membre nom ='Gaye'/>     
     <Membre nom ='Astan'/>     
     <Membre nom ='Bintou'/>     
     <Membre nom ='Sandy'>     
     je suis
     </Membre>
    </div>
  )
  
}
}





export default App;
