import { NavLink } from "react-router-dom";

export default function LunchNavbar(){
    return(<>
        <div className="breakfast_link">
     <NavLink to={"/Lunch/Vegbiryani"} id="nav" activeClassName="active"> Veg Biryani</NavLink>
        <NavLink to={"/Lunch/Pasta"} >Pasta</NavLink>
        <NavLink to={"/Lunch/SmokyVegPatties"} >Smoky Veg Patties</NavLink>
        <NavLink to={"/Lunch/Lunch"} >Lunch Recipes</NavLink>
        </div>


       
    </>)
}