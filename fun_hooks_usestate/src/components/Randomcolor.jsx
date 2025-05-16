import React ,{useState}from 'react'

const Randomcolor = () => {
    const [randomclr,setRandomclr]=useState("")
    const handleRandomClr=()=>{
        let chars="abcdefgh0123456789"
        let color="#"


        for (let i=0;i<6;i++){
            const randomIndex=Math.floor(Math.random()*chars.length)
            console.log(randomIndex,"randomIndex")
            color+=chars[randomIndex]
            console.log(color,"color")
            setRandomclr(color)
        }
        
    }
  return (
    <div style={{backgroundColor:randomclr,height:"100vh"}}>
      <button onClick={handleRandomClr}>RandomClr</button>
    </div>
  )
}

export default Randomcolor
