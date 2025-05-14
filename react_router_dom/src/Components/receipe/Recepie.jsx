import React from 'react'
import "./receipe.css";
import recipes from '../Recepies/rData';
// import Receipes from '../Recepies/Receipes';
import {Link} from 'react-router-dom';

const Recepie = (abs) => {
    console.log(abs,"abs")
     console.log(abs.singleRecipe,"abbb")
     const singler=abs.singleRecipe

  return (
    <div className='recipiecard'>
    <img src={singler.image}></img>
    <h1>{singler.name}</h1>
  <Link to={`/receipes/${singler.id}`}> <button>View Details</button> </Link>
    
      
    </div>
  );
}

export default Recepie
