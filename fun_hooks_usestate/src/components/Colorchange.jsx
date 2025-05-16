import React,{useState} from 'react'

const Colorchange = () => {
  const [color, setColor]=useState(" ")
  const handlecolor=(clr)=>{
    setColor(clr)
  }
  return (
    <div style={{height:'100vh',backgroundColor:color,transition:'0.3s'}}>
 <button onClick={()=>handlecolor("red")}>Red</button> 
 <button onClick={()=>handlecolor("blue")}>blue</button> 
 <button onClick={()=>handlecolor("green")}>green</button> 
    </div>
  )
}

export default Colorchange
