import { NavLink } from "react-router-dom";
import cookbook3 from './cookbook3.jpg'


export default function Landing_page(){
    return(
      <div className="main_div">
        <div  className="menu">
          
            <NavLink to={"/Breakfast"}  id="nav" activeClassName="active">Breakfast</NavLink>
        <NavLink to={"/Lunch"} id="nav" activeClassName="active">Lunch</NavLink>
        <NavLink to={"/Dinner"} id="nav" activeClassName="active">  Dinner</NavLink>
        <NavLink to={""} id="nav" activeClassName="active">Collections</NavLink>
        <NavLink to={""} id="nav" activeClassName="active">Tips</NavLink>

        </div>
        <></>
        <div className="Hero_section">
          
            <img src={cookbook3} height='500px' alt="this " />



        </div>
        <div className="details">
        <p> In our Cookbook you can find as many recepes as you wanted such as Spicey soap which are famous by  Killer Whale ,Tear of crocodile
            but we created this extra ordinary website in React HTML and CSS so 
            love or Hate it . it is what its 
            and this project has been designed by famous Author His exelency Sir Kavin and the main architect was non only the most famous Poetess
            Prinita and iam just Background Artist 
        </p>




        </div>
        <footer className="footer">
        All right Reserved 2080 

        </footer>
      
      
      
      </div>
    )
}