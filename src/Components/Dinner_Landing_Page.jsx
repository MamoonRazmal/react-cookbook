import { NavLink } from "react-router-dom";
import Main_Dinner_Photo from "./Main_Dinner_Photo.jpeg";

import Video from "./Video";
export default function Dinner_Landing_Page() {
  return (
    <>
      <div className="breakfast_link">
      <NavLink to={"/"} id="navnew" activeClassName="active">
          Home
        </NavLink>
        <NavLink to={"/Dinner/Noodles"} id="navnew" activeClassName="active">
          {" "}
          Japanese Ramen
        </NavLink>
        <NavLink to={"/Dinner/Rice"} id="navnew" activeClassName="active">
          Fried Rice
        </NavLink>

        <NavLink to={"/Dinner/Salad"} id="navnew" activeClassName="active">
          Fruit salad
        </NavLink>
      
      </div>
      <div className="Hero_section">
        <img src={Main_Dinner_Photo} height="500px" alt="this " />
      </div>
    <Video/>
    </>
  );
}
