import { NavLink } from "react-router-dom";
import Image_Galery from "./Image_Galery";

export default function Landing_page_Recepes(){
    return(
      <div className="main_div">
        <div  className="menu">
            <img src="images.jpeg" />
        <NavLink to={"/Breakfast"} id="nav" activeClassName="active" >Breakfast</NavLink>
        <NavLink to={"/Lunch"}  id="nav" activeClassName="active">Lunch</NavLink>
        <NavLink to={"/Dinner"}  id="nav" activeClassName="active">Dinner</NavLink>

        </div>
        <></>
        <div className="Hero_section">
          

        </div>
        <footer className="footer"></footer>
      
      
      
      </div>
    )
}