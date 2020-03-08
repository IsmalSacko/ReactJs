import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'
const famile ={
  membre1: {nom: 'Ismael', age: 29},
  membre2: {nom: 'Gaye', age:27},
  membre3: {nom: 'Astan', age:23},
  membre4: {nom: 'Brahima', age:22},
  membre5: {nom: 'Bakry', age:20},
  membre6: {nom: 'Mamadou', age:19},
  membre7: {nom: 'Sandy', age:17}
}
class App extends Component{
  state = {famile, isShow : false}

  handleClick = (num) =>{
    // on copie d'abord l'objet à modifier
    const modiAge = { ... this.state.famile }
    // on définit le nbre à incrémentter 
    modiAge.membre1.age +=num
    // Et le passe en paramètre
    this.setState({modiAge})

  }
  /**
   * Permet d'incrementer l'âge d'un membre de famille
   */
  handleChange = (event, id) =>{
    // on copie d'abord l'objet à modifier
    const modinom = { ... this.state.famile }
    // on définit le nbre à incrémentter 
    const nom = event.target.value
    modinom[id].nom=nom
    // Et le passe en paramètre
    this.setState({modinom})

  }

  cacherNom = id =>{
    const modinom = { ... this.state.famile } 
       famile[id].nom="x"
       famile[id].age ="x"
    // const nom = event.target.value
    // modinom.membre1.nom=nom
    // Et le passe en paramètre
    this.setState({modinom})

  }

  handleChangeAge = (event, id) =>{
    // on copie d'abord l'objet à modifier
    const modifAge = { ... this.state.famile }
    // on définit le nbre à incrémentter 
    const age = event.target.value
    modifAge[id].age=age
    // Et le passe en paramètre
    this.setState({modifAge})

  }

  handleShowDetails = () =>{
    const isShow = !this.state.isShow
      this.setState({ isShow })
  }
   

render () {  
  const  {titre} = this.props
  const  {famile, isShow} = this.state
   const liste =Object.keys(famile)
   .map(membre =>(
     <Membre
     key={membre}
     handleChange={event => this.handleChange(event, membre)}
     handleChangeAge={event => this.handleChangeAge(event, membre)}
     cacherNom={()=>this.cacherNom(membre)}
    nom ={famile[membre].nom}
    age={famile[membre].age}/>
   ))
   console.log(liste)
   return (
    <div className="App">
     <h1>{titre}</h1>
     
     {liste}     
      {
      isShow ? <p>je suis un élément fils de la division.</p> : null
      }   
       
     <button onClick = {this.handleShowDetails}>
       { isShow ? 'Cacher' : 'Monter' }
     </button>
     <p></p>
     <Button vieillir={()=>this.handleClick(5)}/>
    </div>
  )
  
}
}





export default App;
 