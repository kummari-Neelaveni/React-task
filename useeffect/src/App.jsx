
import React ,{useState,useEffect} from 'react'
import "./App.css"

const App = () => {
  // const [count, setCount]=useState(0)
  // const handleCount=()=>{
  //   setCount(count+1)
  // }
  // console.log(count)


  // useEffect(()=>{
  //   alert("hello mount phase1")
  // })
  // useEffect(()=>{
  //   alert("hello mount phase2")
  // })
  const [apiData, setApiData]=useState([])
  const [filcatData, setFilData]=useState([])

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then((res)=>res.json())
    .then((res)=>{
       console.log(res)
       setApiData(res) //updating the state here:--comp rerender
       setFilData(res)
    })
     },[]) //in mounting phase the state should update and also it runs infinitely it updates to stop infinitely
              //  runs once by the []
  // useEffect(()=>{
  //   alert("hello mount phase1")
  // })
  // useEffect(()=>{
  //   alert("hello mount phase2")
  // })

  const handledata=(abc)=>{
    const filData=apiData.filter(x=>x.category===abc)
    console.log(filData,"filData")
    setFilData(filData)

  }
  return (
    // <div>
    //   {/* {count}
    //   <button onClick={handleCount}>+</button> */}
    //  {apiData.map((x)=>{
    //   return(
    //     <>
    //     {/* <h1>{x.title}</h1> */}


    //     </>

    //   )
      
      
    //  })}
    // </div>

<div className='cardsinfo'>
  <button onClick={() => setFilData(apiData)}>Show All</button>

  <button onClick={()=>handledata( "electronics")}>electronics</button>
  <button onClick={()=>handledata( "jewellery")}>jewellery</button>
  <button onClick={()=>handledata("women's clothing")}>womens</button>
    <button onClick={()=>handledata( "men's clothing")}>mens</button>
  
 <div className="cards-container">
  {filcatData.map((y) => {
    return (
      <div key={y.id} className="card">
        <img src={y.image} alt={y.title} className="card-image" />
        <h1 className="card-title">{y.title}</h1>
        <p className="card-price">{`Price: ₹${y.price}`}</p>
        {/* <h3 className="card-description">{y.description}</h3> */}
      </div>
    );
  })}
</div>





  
   

</div>

)
}

export default App

