import { NavLink } from "react-router-dom";
import Main_Dinner_Photo from "./Main_Dinner_Photo.jpeg";


export default function Dinner_Landing_Page() {
  return (
    <>
      <div className="breakfast_link">
        <NavLink to={"/Dinner/Noodles"} id="nav" activeClassName="active">
          {" "}
          Japanese Ramen
        </NavLink>
        <NavLink to={"/Dinner/Rice"} id="nav" activeClassName="active">
          Fried Rice
        </NavLink>

        <NavLink to={"/Dinner/Salad"} id="nav" activeClassName="active">
          Fruitsalad
        </NavLink>
        <NavLink to={"/"} id="nav" activeClassName="active">
          Back to Main
        </NavLink>
      </div>
      <div className="Hero_section">
        <img src={Main_Dinner_Photo} height="500px" alt="this " />
      </div>
    
    </>
  );
}
