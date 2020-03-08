import React, {Fragment} from 'react'

const Membre = ({nom, age, children , cacherNom, handleChange,handleChangeAge}) => {

    return  (
    <frames>
        <h1 style={{backgroundColor:'purple', color: age < 18 ?'red' : 'white'}}>{nom} : {age}</h1> 
        <input type="text" value={nom} onChange={handleChange} />
        <input type="text" value={age} onChange={handleChangeAge}/>

        <button onClick={cacherNom}>x</button>
        <p style={{ color: 'green' }}>{children}</p>
    </frames>
        )
}

export default Membre