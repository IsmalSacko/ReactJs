import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'
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

  handleClick = (num) =>{
    // on copie d'abord l'objet à modifier
    const modiAge = { ... this.state.famile }
    // on définit le nbre à incrémentter 
    modiAge.membre1.age +=num
    // Et le passe en paramètre
    this.setState({modiAge})

  }

  handleChange = (event) =>{
    // on copie d'abord l'objet à modifier
    const modinom = { ... this.state.famile }
    // on définit le nbre à incrémentter 
    const nom = event.target.value
    modinom.membre1.nom=nom
    // Et le passe en paramètre
    this.setState({modinom})

  }

  handleChangeAge = (event) =>{
    // on copie d'abord l'objet à modifier
    const modifAge = { ... this.state.famile }
    // on définit le nbre à incrémentter 
    const age = event.target.value
    modifAge.membre1.age=age
    // Et le passe en paramètre
    this.setState({modifAge})

  }

render () {  
  const  {titre} = this.props
  const  {famile} = this.state
   return (
    <div className="App">
     <h1>{titre}</h1>
     <input type="text" value={famile.membre1.nom} onChange={this.handleChange} />
     <input type="text" value={famile.membre1.age} onChange={this.handleChangeAge}/>
     <Membre nom= {famile.membre1.nom} age ={famile.membre1.age}/>   
     <Membre nom= {famile.membre2.nom} age ={famile.membre2.age}/>   
     <Membre nom={famile.membre3.nom} age ={famile.membre3.age}/>   
     <Membre nom = {famile.membre4.nom} age ={famile.membre4.age}/>   
     <Membre nom ={famile.membre5.nom} age ={famile.membre5.age}/>   
     <Membre nom ={famile.membre6.nom} age ={famile.membre6.age}>
         
     je suis un élément fils de la division.
     </Membre>
     <Button vieillir={()=>this.handleClick(5)}/>
    </div>
  )
  
}
}





export default App;
 