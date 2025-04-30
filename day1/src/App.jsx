import Navbar from "./Navbar"
import "./App.css";
import { Fullstack } from "./Fullstack"
import { Today } from "./Today";
import { Front} from "./Front";



function App(){
    return(
        <div>

            <div>
           <Navbar></Navbar>
           </div> 

           
              <Fullstack></Fullstack>   
              <Today></Today>

             <Front></Front>

        
        </div>

    )   
    
}

export default App