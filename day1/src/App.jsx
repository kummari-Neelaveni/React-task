import Navbar from "./Navbar"
import "./App.css";
import { Fullstack } from "./Fullstack"
import { Today } from "./Today";




function App(){
    return(
        <div>

            <div>
           <Navbar></Navbar>
           </div> 

           
              <Fullstack></Fullstack>   
              <Today></Today>

           

        
        </div>

    )   
    
}

export default App