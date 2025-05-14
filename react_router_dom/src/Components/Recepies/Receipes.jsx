import React from 'react'
import recipes from "./rData";
console.log(recipes,"rdata")
console.log(recipes.recipes,"recepies")
import Recepie from '../receipe/Recepie';
// import "/receipe.css"


const Receipes = () => {
  return (
    <div className='parentreceipe'>
      {recipes.recipes.map((rs)=>{
        console.log(rs,"rs")

        return(
          <>
           <Recepie singleRecipe={rs}/>
          </>
        )
      })}
     
    </div>
  )
}

export default Receipes
