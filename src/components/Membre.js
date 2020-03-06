import React, {Fragment} from 'react'

const Membre = ({nom, age, children}) => {

    return  (
    <frames>
        <h1>{nom} : {age}</h1> 
        <p>{children}</p>
        </frames>
        )
}

export default Membre