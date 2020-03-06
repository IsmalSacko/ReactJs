import React, {Fragment} from 'react'

const Membre = ({nom, children}) => {

    return  (
    <frames>
        <h1>Membres de Ma famille sont: {nom} </h1>    
        <p>{children}</p>
        </frames>
        )
}

export default Membre