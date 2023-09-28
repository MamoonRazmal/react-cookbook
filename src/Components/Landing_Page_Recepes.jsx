import { NavLink } from "react-router-dom";
import Image_Galery from "./Image_Galery";
import Footer from "./Footer";
  import "./Footer.css";
  import "./Pranitastyle.css";
  import "./style.css";

export default function Landing_page_Recepes(){
    return(
      <div className="main_div">
        <div  className="menu">
            <img src="images.jpeg" />
            <div className="topnav">
        <NavLink to={"/Breakfast"} className="maindiv"  >Breakfast</NavLink>
        <NavLink to={"/Lunch"}    className="maindiv" >Lunch</NavLink>
        <NavLink to={"/Dinner"}   className="maindiv" >Dinner</NavLink>
        </div>
        </div>
        <></>
        <div className="Hero_section">
          

        </div>
        <footer className="footer"></footer>
      <Footer/>
   
      
      </div>
    )
}