
import { NavLink } from "react-router-dom"
import Main_Dinner_Photo from './Main_Dinner_Photo.jpeg'

export default function Dinner_Landing_Page(){
    return(
        <>
           <div className="breakfast_link">
        <NavLink to={"/Dinner/Noodles"} id="nav" activeClassName="active"> Noodles</NavLink>
        <NavLink to={"/Dinner/Rice"} id="nav" activeClassName="active">Rice</NavLink>
      
        <NavLink to={"/Dinner/Salad"} id="nav" activeClassName="active">Salat</NavLink>
        <NavLink to={"/"} id="nav" activeClassName="active">Back TO Main</NavLink>
        </div>
          <div className="Hero_section">
          
          <img src={Main_Dinner_Photo} height='500px' alt="this " />



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
      </>
    )
}