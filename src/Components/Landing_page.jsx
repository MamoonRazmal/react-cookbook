import { NavLink } from "react-router-dom";
import cookbook3 from './cookbook3.jpg'
export default function Landing_page(){
    return(
      <div className="main_div">
        <div  className="menu">
            <img src="images.jpeg" />
        <NavLink to={"/Landing_page_Recepes"}>recepes</NavLink>
        <NavLink to={""}>Collections</NavLink>
        <NavLink to={""}>Tips</NavLink>

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