import Vegbiryani from "./Vegbiryani";
import LunchNavbar from "./LunchNavbar";
import Pasta from "./Pasta";
import Lunch from "./Lunch"
import SmokyVegPatties from "./SmokyVegPatties"
import { Route,Routes,NavLink } from 'react-router-dom'


export default function Pranita(){
    return(<>
     <LunchNavbar/>
     <Routes>
     <Route path="/Lunch/Lunch" element={<Lunch />}/>
        <Route path="/Lunch/Pasta" element={<Pasta />}/>
        <Route path="/Lunch/Vegbiryani" element={<Vegbiryani />}/>
        <Route path="/Lunch/SmokyVegPatties" element={<SmokyVegPatties />} />
        </Routes>
    </>)
}