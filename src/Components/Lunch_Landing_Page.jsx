import { NavLink } from "react-router-dom";
import main_lunch_photo from "./Main_Lunch_photo.jpeg";
import Video from "./Video";

export default function Lunch_Landing_Page() {
  //
  return (
    <>
      <div className="breakfast_link">
      <NavLink to={"/"} id="navnew" activeClassName="active">
          Home
        </NavLink>
        <NavLink to={"/Lunch/Vegbiryani"} id="navnew" activeClassName="active">
          {" "}
          Veg Biryani
        </NavLink>
        <NavLink to={"/Lunch/Pasta"} id="navnew" activeClassName="active">
          Pasta
        </NavLink>
        <NavLink
          to={"/Lunch/SmokyVegPatties"}
          id="navnew"
          activeClassName="active"
        >
          Smoky Veg Patties
        </NavLink>
        
      </div>
      <div className="Hero_section">
        <img src={main_lunch_photo} height="500px" alt="this " />
      </div>
      <Video/>
      {/* <div className="details">
        <p>
          {" "}
          In our Cookbook you can find as many recepes as you wanted such as
          Spicey soap which are famous by Killer Whale ,Tear of crocodile but we
          created this extra ordinary website in React HTML and CSS so love or
          Hate it . it is what its and this project has been designed by famous
          Author His exelency Sir Kavin and the main architect was non only the
          most famous Poetess Prinita and iam just Background Artist
        </p>
      </div>

      <footer className="footer">All right Reserved 2080</footer> */}
    </>
  );
}
