import React , { useState }from 'react'

const Counter = () => {
  const [count, setCount]=useState(0);

  const handleCount =(xyz)=>{
    if( xyz===0){
      setCount(0)
    }
    else{
      setCount(count+xyz)
    }
  }
  return (
    <div>
     <h1>Counter app with usestate hook</h1>
     <h2>{count}</h2>
     <button onClick={()=>handleCount(10)} disabled ={count==100}>+</button>
     <button  onClick={()=>handleCount(-10)} disabled ={count==0}>-</button>
      <button onClick={()=>handleCount(0)}>reset</button>
    </div>
  )
}

export default Counter
