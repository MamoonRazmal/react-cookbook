import { NavLink } from "react-router-dom";
export default function BreakfastNavbar(){
    return(
        <div className="breakfast_link">
        <NavLink to={"/breakfast/prata"} id="nav" activeClassName="active"> Prate</NavLink>
        <NavLink to={"/breakfast/frenchfries"}>French Fries</NavLink>
        <NavLink to={"/breakfast/sandwhich"}>Sandwhich</NavLink>
        <NavLink to={"/breakfast/s"}>Back To Main</NavLink>
        </div>
    )
}