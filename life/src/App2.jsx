import React, { Component } from 'react'
import "./App2.css"
export default class App2 extends Component {
    constructor(){
        super()
        this.state={
         data:[],
         loading:true
        }

    }

  //   handledata=(btntype)=>{

  //     if(btntype === "fakestore") {
  //         fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(res=>{
  //       console.log(res,"fdata")
  //       this.setState({data:res,loading:false})
  //     })
  //     }
  //     else if(btntype === "dummyjson products"){
  //       fetch("https://dummyjson.com/products").then(res=>res.json()).then(res=>{
  //       console.log(res.products,"pdata")
  //       this.setState({data:res.products,loading:false})
  //     }) 
  //   }
  //   else if(btntype === "dummyjsonreceipies"){
  //     fetch("https://dummyjson.com/recipes").then(res=>res.json()).then(res=>{
  //       console.log(res.recipes,"rdata")
  //       this.setState({data:res.recipes,loading:false})
  //     })
  //   }
  //   else{
  //     return;
  //   }
  // }  
  //=============
    // componentDidMount(){

    // }
     handleData=(btnType)=>{
let url;
if(btnType === "fakestore"){
  url="https://fakestoreapi.com/products";
}else if(btnType === "dummyjsonproducts"){
 url="https://dummyjson.com/products";
}
else if(btnType === "dummyjsonreceipies") {
 url="https://dummyjson.com/recipes";
   
}else{
  return ;
}
fetch(url).then(res=>res.json()).then(res=>{
  console.log(res,"64");
  const finalRes= res.products || res.recipes || res;
  console.log(finalRes,"finalRes")
  this.setState({data:finalRes,loading:false})
})

}
componentDidUpdate(){
       const dataFromLs=JSON.parse(localStorage.getItem("data"))
    this.setState({data:dataFromLs,loading:false})
    console.log(this.state.data,"data from state")
  }

  render() {
    return (
      <div className='app2'>
       <div className='app2child1'>
        <button onClick={()=>this.handleData("fakestore")}>fakestore</button>
        <button onClick={()=>this.handleData("dummyjsonproducts")}>dummyjson products</button>
        <button onClick={()=>this.handleData("dummyjsonreceipies")}>dummyjsonreceipies</button>
       </div>

       <div className='app2child2'>
            {this.state.loading?"plse clic ant btn":this.state.data.map((x)=>{
              return(
                <>
                <h1>{x.title || x.name}</h1>
                </>
              )
            })}
        </div>
      </div>
    )
  }
}
