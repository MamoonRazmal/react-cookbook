import Breakfast from "./Breakfast";
import { Route,Routes } from "react-router-dom";
import BreakfastNavbar from "./BreakfastNavbar";
import Prata from "./Prata"
import Sandwhich from "./Sandwhich";
import Frenchfries from "./Frenchfries";

export default function Mamoon(){
  
 
  
   
 
  return (
  <div>
      <BreakfastNavbar />
     <Routes>
     <Route path="/breakfast/breakfast" element={<Breakfast />}/>
        <Route path="/breakfast/prata" element={<Prata />}/>
        <Route path="/breakfast/frenchfries" element={<Frenchfries />}/>
        <Route path="/breakfast/sandwhich" element={<Sandwhich />} />
        </Routes>
      
  

  </div>
  )
}