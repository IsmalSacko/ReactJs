import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'
const famile ={
  membre1: {nom: 'Ismael', age: 29},
  membre2: {nom: 'Gaye', age:27},
  membre3: {nom: 'Astan', age:23},
  membre4: {nom: 'Bakry', age:20},
  membre5: {nom: 'Mamadou', age:19},
  membre6: {nom: 'Sandy', age:17}
}
class App extends Component{
  state = {famile}

  handleClick = () =>{
    // on copie d'abord l'objet à modifier
    const famile = { ... this.state.famile }
    // on définit le nbre à incrémentter 
    famile.membre1.age +=1
    // Et le passe en passe en paramètre
    this.setState({famile})

  }

render () {  
  const  {titre} = this.props
  const  {famile} = this.state
   return (
    <div className="App">
     <h1>{titre}</h1>
     <Membre nom= {famile.membre1.nom} age ={famile.membre1.age}/>   
     <Membre nom= {famile.membre2.nom} age ={famile.membre2.age}/>   
     <Membre nom={famile.membre3.nom} age ={famile.membre3.age}/>   
     <Membre nom = {famile.membre4.nom} age ={famile.membre4.age}/>   
     <Membre nom ={famile.membre5.nom} age ={famile.membre5.age}/>   
     <Membre nom ={famile.membre6.nom} age ={famile.membre6.age}>
         
     je suis un élément fils de la division.
     </Membre>
     <button onClick={this.handleClick}>Vieillir</button>
    </div>
  )
  
}
}





export default App;
