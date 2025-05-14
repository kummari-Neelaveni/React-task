import React from 'react'
import './receipie details.css'
import recipes from '../Recepies/rData'
console.log(recipes.recipes)

import { useParams } from 'react-router-dom'


const Receipiedetails = () => {
    console.log(useParams(),"receipe useparams")
    // const {id}=useParams()
        const routeId=useParams()
       console.log(routeId,"recep id")
       const matchedReceipe=recipes.recipes.find(r=>r.id===Number(routeId.id))
       console.log(matchedReceipe,"matchedReceipe")
    
  return (
    <div className="recipe-card">
    <h1>{matchedReceipe.name}</h1>
    <img src={matchedReceipe.image} alt={matchedReceipe.name} />
     <p>Rating: {matchedReceipe.rating}</p>
</div>

  )
}

export default Receipiedetails
