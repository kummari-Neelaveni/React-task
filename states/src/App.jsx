// 1st example  ########increment num---.................................................................................................................

// import React, { Component } from 'react'

// export default class App extends Component {
//   // javascript code in function comp before render paina
//   constructor(){
//     super()
//     this.state={
//       count:0
//     }
//   }

//   handleClick=()=>{
//     // alert("btn clicked")
//     this.setState({count:this.state.count+10})
//   }
//   render() {
//     console.log(React.Component() ,"..........")
//     console.log(this ,"this")
//     return (
//       <>
//         <h1>App</h1>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>increment</button>
//       </>
//     )
//   }
// }
// ================2nd example  background chnge when button clicked==========================================================================================
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       color:"red"
//     }
//   }
//   colourchange(){
//     alert("btn clicked")
//   }
//   render() {
//     console.log(React.Component() ,"............")
//     console.log(this,"this")
//     return (
//       <div>
//         <button onClick={this.colourchange}>red</button>
//         <button >blue</button>
//         <button>green</button>
//       </div>
//     )
//   }
// }
// =========================more examples 1.counter app===========================================================
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//       super()
//       this.state={
//         count:0
//       }
//     }
//     handleclick=()=>{
//       this.setState({count:this.state.count+1}) //updates the state
//     }
//     handleclickDecrement=()=>{
//       this.setState({count:this.state.count-1}) //updates the state
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleclick} disabled={this.state.count==10}>increment</button>
//         <button onClick={this.handleclickDecrement} disabled={this.state.count==0}>decrement</button>
//         <button onClick={()=>this.setState({count:0})}>reset</button>
//       </div>
//     )
//   }
// }
// ===========random colour===========================================================
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       color:"red"
//     }
//   }
//   handleRandomcolor=()=>{

//  let Char="abcde123456789"
//  let hexa="#"
//     for(let i=0;i<6;i++){
//       const a=Math.floor(Math.random()*Char.length)

//       const b=Char[a] // it get the string values
//       console.log(b)
//       hexa+=b
//       console.log(hexa) //it creates a string

//     }
//     this.setState({color:hexa})
//   }
//   render() {
//     return (
//       <div style={{display:"flex",justifyContent:"Center",alignItems:"center",height:"100vh",backgroundColor:this.state.color}}>
//         <button onClick={this.handleRandomcolor}>random colour</button>
//       </div>
//     )
//   }
// }

//=====================================random quote and also colour==================================
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       quote:"practice makes man perfect",
//       color:"blue"
//     }

//   }
//   handleRandomCode=()=>{
   
//   let teluguquote= [
//   "గెలుపు మన లక్ష్యానికి ఎంత దగ్గరగా ఉన్నామో కాదు, ఎంత కష్టపడ్డామో నిర్ణయిస్తుంది.",
//   "ఆలస్యం అంటే అవకాశం కోల్పోవడమే.",
//   "జీవితం అనేది గెలుపుతో కాదు, నేర్చుకునే ప్రయాణంతో అందమవుతుంది.",
//   "మంచి పనులకు ఒంటరిగా మొదలు పెట్టినవారే, చరిత్రలో నిలిచారు.",
//   "మీరు నమ్మిన దాన్ని నెరవేర్చే శక్తి మీలోనే ఉంది.",
//   "విపత్తులే మన అసలైన బలం ఏంటో చూపిస్తాయి.",
//   "ప్రతి రోజు ఒక కొత్త అవకాశం. దాన్ని వదులుకోకండి.",
//   "వెళుతున్న మార్గం కష్టం అనిపించినా, అది మన లక్ష్యానికి తీసుకెళ్లే దారి కావచ్చు.",
//   "నీ విజయాన్ని ఎవరూ గుర్తించకపోతే క్షేమం — కానీ నీవు నిన్ను మరచిపోకేరు.",
//   "నిన్నటి బాధలే ఈరోజు బలంగా మలచుతాయి."
// ];
//     for(let i=0;i<teluguquote.length;i++){
//       let randomquote= 
//       Math.random()*teluguquote.length;
//       console.log(randomquote,"randomquote")
//     }
//     this.setState({quote:randomquote[Index]})
//   }


//   render() {
//     return (
//       <div>
//         <h1>{this.state.quote}</h1>
//         <button onClick={this.handleRandomCode}>random code</button>
//       </div>
//     )
//   }
// }
// ==============================toggle light and dark theme=============================================================
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       a:true
//     }
//   } //when the icon clicks it gets 
//   handleToggle=()=>{
//     this.setState({a:!this.state.a})
//   }
//   render() {
//     return (
//       <div style={{backgroundColor:this.state.a?"black":"white",height:"100vh"}}>
//         <button onClick={this.handleToggle}> toggle</button> 
//       </div>
//     )
//   }
// }
//  nav bar login and sign up toggle

import React, { Component } from 'react';
import Toggle from './Toggle';
import './App.css';

import { FaRegSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";


class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
      count:0,
       colorState:"#ffffff",
      quote: "hello click to see the quote ",
      isDark:false


    };
  }
// counter app
  handleclick=()=>{
      this.setState({count:this.state.count+1}) //updates the state
   }
   handleclickDecrement=()=>{
           this.setState({count:this.state.count-1}) //updates the state
   }
// random colour generator
   handleColorChnage=()=>{
    const chars="0123456789abcdef";
    let color="#";
    for(let i=0;i<6;i++){
              const randomChar=Math.floor(Math.random()*chars.length);
              color+=chars[randomChar]
    }
    console.log(color,"color")
    this.setState({colorState:color})
  }
// random quote generator
handleRadomQuote = () => {
    const teluguQuotes = [
      "ప్రయత్నం లేకుండా విజయము అసాధ్యం!",
      "నీ కలలు నీలోనే ప్రారంభమవాలి.",
      "ఓడిపోవడం కాదు, నిలబడే ధైర్యం ముఖ్యం!",
      "నువ్వు నువ్వే సృష్టించే విజయాన్ని మరెవ్వరూ తగిలించలేరు.",
      "ప్రతి ప్రయత్నం ఒక విజయం!",
      "సమయం తక్కువగా ఉంటే, ప్రయత్నం ఎక్కువగా చేయాలి.",
      "నిన్నటి తప్పులే నేటి విజయం.",
      "మీరు శక్తి కనబరిచినప్పుడు ప్రపంచం కూడ మీను ఆదరిస్తుంది.",
      "జీవితాన్ని మార్చాలంటే, ఒక చిన్న అడుగు పెట్టాలి.",
      "విజయానికి దారి ఒకే – నిరంతర పోరాటం.",
      "నువ్వు సృష్టించు విజయమే నిన్ను ఆదరిస్తుంది.",
      "కష్టాలే పాఠాలు, విజయం అలవాటుగా వస్తుంది.",
      "ప్రయత్నం తప్పనిసరిగా ఉంటే, విజయాన్ని తప్పించలేము.",
      "ఏడుపు అలవాటు చేయు, కానీ నిలబడటం నేర్చుకో.",
      "నీవు లేని చోట, నీ ప్రయత్నాలు ఉంటాయి.",
      "విజయం బహుమతి కాదు, అది కృషికి ఫలితం.",
      "కాలాన్ని వృథా చేయకు – అది తిరిగి రావడం లేదు.",
      "నిన్ను నీవు నమ్ము, ప్రపంచం నిన్ను మరిచినా సరే.",
      "శ్రమిస్తే శిఖరాలు దక్కుతాయి.",
      "పెద్ద కలలు కని, వాటిని నిజం చేయి.",
      "గెలుపు మీ గమ్యం కాదు, అది మీ అలవాటు కావాలి.",
      "ఒకే దారిలో వెళ్ళిపోకు, నీ దారిని నీవే సృష్టించు.",
      "ఆలోచించు, ఆచరించు, సాధించు.",
      "ఎప్పటికైనా ప్రారంభించు, ఆలస్యం అయినా సరే.",
      "నీ స్వప్నాలకు నీ కాళ్లు పెట్టు.",
      "తప్పులు పాఠాలు అవుతాయి, వాటిని భయపడవద్దు.",
      "విజయం శబ్దం కాదు, అది శ్రమల యొక్క నిశ్శబ్ద ప్రతిఫలం.",
      "ఒక గొప్ప వ్యక్తి అనగానే, అతను ఎన్నో ఓటములు ఎదుర్కొన్నవాడు.",
      "తన మీద నమ్మకమున్నవాడే ఎప్పటికైనా ముందుకు వెళ్తాడు.",
      "జీవితంలో ప్రతి అడుగు గమ్యాన్ని దగ్గర చేస్తుంది.",
      "నీ పరిస్తితిని శాపించకు – మార్పును మొదలుపెట్టు.",
      "నీవు చేసిన కృషి ఎప్పటికైనా ఫలిస్తుంది.",
      "ఓడిన తర్వాతే గెలుపు విన్నూతనం తెలుస్తుంది.",
      "ప్రపంచాన్ని మార్చాలంటే ముందు నీ ఆలోచనల్ని మార్చు.",
      "కష్టం తప్పదు, కాని దాని ఫలం మధురం.",
      "గమ్యం చూసే కళ్ళు ఉండాలి, కాదు అనే మనస్సు కాదు.",
      "ప్రతిఒక్క రోజు ఓ కొత్త అవకాశం.",
      "నీవు రాణించాలంటే, సంతోషంగా కాదు – కృషిగా ఉండాలి.",
      "ఒక్కసారి ఓడినప్పుడు ఆగిపోవద్దు, అది మొదటి అడుగే.",
      "కలలు చూస్తే చాలు కాదు, వాటి కోసం పనిచేయాలి.",
      "ఆలస్యం జీవితం దొరకకుండా చేస్తుంది.",
      "నువ్వు చేసే ప్రతి పని నీపై ఒప్పిగానుంది.",
      "ఆత్మవిశ్వాసం విజయానికి మూలాధారం.",
      "నవ్వుతూ ముందుకు సాగితే బాధలు వెనక్కి తగ్గతాయి.",
      "మాటల కంటే పనిచేయడమే గొప్పది.",
      "మీరు ప్రారంభించకపోతే, గమ్యం చేరకపోవచ్చు.",
      "విజయం కోసం shortcuts వద్దు – కేవలం true effort చాలు.",
      "నీ విజయం మీద నువ్వే గర్వపడగలిగితే అదే నిజమైన గెలుపు.",
      "పదేళ్లలో నీకోసం చేసినవి గుర్తు రావు, కానీ నీవు చేసినవి గుర్తుంటాయి.",
      "కష్టపడితే దేవుడే నీకు మార్గం చూపిస్తాడు.",
    ];

    for (let i = 0; i < teluguQuotes.length; i++) {
      let randomQuote = Math.floor(Math.random() * teluguQuotes.length);
      console.log(randomQuote)
      this.setState({ quote: teluguQuotes[randomQuote] });
    }
// random colour
    const chars="0123456789abcdef";
    let color="#";
    for(let i=0;i<6;i++){
              const randomChar=Math.floor(Math.random()*chars.length);
              color+=chars[randomChar]
    }
    console.log(color,"color")
    this.setState({colorState:color})

  };
  // toggle dark and light theme
  handleTheme=()=>{
    this.setState(prevState=>({isDark:!prevState.isDark}))
  }



  render() {
    return (
      <div>
        {/* Navbar */}
        <div
          style={{
            backgroundColor: 'blue',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
          }}
        >
          <h2 style={{ color: 'white', margin: 0 }}>Neelaveni</h2>

          <div>
            <button
              style={{
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
              }}
              onClick={() => this.setState({ isLogin: false })}
            >
              Signup
            </button>

            <button
              style={{
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                marginLeft: '10px'
              }}
              onClick={() => this.setState({ isLogin: true })}
            >
              Login
            </button>
          </div>
        </div>

{/* Conditional Form */}
        <Toggle isLogin={this.state.isLogin} />
{/* counter app */}
       <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Counter App</h1>
<h1 style={{ textAlign: "center", fontSize: "3rem", color: "#333" }}>{this.state.count}</h1>
<div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
  <button
    onClick={this.handleclick}
    disabled={this.state.count === 10}
    style={{
      padding: "10px 20px",
      fontSize: "1rem",
      borderRadius: "10px",
      border: "none",
      backgroundColor: this.state.count === 10 ? "#ccc" : "#4CAF50",
      color: "white",
      cursor: this.state.count === 10 ? "not-allowed" : "pointer"
    }}
  >
    Increment
  </button>
  <button
    onClick={this.handleclickDecrement}
    disabled={this.state.count === 0}
    style={{
      padding: "10px 20px",
      fontSize: "1rem",
      borderRadius: "10px",
      border: "none",
      backgroundColor: this.state.count === 0 ? "#ccc" : "#f44336",
      color: "white",
      cursor: this.state.count === 0 ? "not-allowed" : "pointer"
    }}
  >
    Decrement
  </button>
  <button
    onClick={() => this.setState({ count: 0 })}
    style={{
      padding: "10px 20px",
      fontSize: "1rem",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "#2196F3",
      color: "white",
      cursor: "pointer"
    }}
  >
    Reset
  </button>
</div>

{/* random colour */}
 <div style={{
  backgroundColor: this.state.colorState,
  width: "100vw",
  height: "30vh",
  padding: "2rem",
  marginBottom: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#000"
}}>
  <h1 style={{ marginBottom: "1rem" }}>Random Color Generator</h1>
  <button
    onClick={this.handleColorChnage}
    style={{
      padding: "10px 20px",
      fontSize: "1rem",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "#333",
      color: "#fff",
      cursor: "pointer"
    }}
  >
    Generate Color
  </button>
</div>


{/* random quote and bg colour */}
<div style={{
  backgroundColor: this.state.colorState,
  width: "100vw",
  height: "auto",
  padding: "2rem",
  textAlign: "center",
  marginBottom: "2rem",
  color: "#000"
}}>
  <h1 style={{ marginBottom: "1rem" }}>Random Telugu Quote</h1>
  <button
    onClick={this.handleRadomQuote}
    style={{
      padding: "10px 20px",
      fontSize: "1rem",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "#673ab7",
      color: "#fff",
      cursor: "pointer",
      marginBottom: "1rem"
    }}
  >
    Generate Quote
  </button>
  <p style={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "1rem" }}>{this.state.quote}</p>
</div>



      {/* toggle dark and light theme */}
              <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Toggle Dark / Light Theme</h1>
<div style={{
  backgroundColor: this.state.isDark ? "#111" : "#f5f5f5",
  height: "30vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}}>
  <button
    onClick={this.handleTheme}
    style={{
      padding: "12px",
      fontSize: "1.5rem",
      borderRadius: "50%",
      border: "none",
      backgroundColor: this.state.isDark ? "#fff" : "#333",
      color: this.state.isDark ? "#000" : "#fff",
      cursor: "pointer",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
    }}
  >
    {this.state.isDark ? <FaRegSun /> : <FaMoon />}
  </button>
</div>

      </div>
    );
  }
}

export default App;



