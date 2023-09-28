import { NavLink } from "react-router-dom";
import main_Breakfast_photo from "./main_Breakfast_photo.webp";

export default function Breakfast_Landing_Page() {
  return (
    <>
      <div className="breakfast_link">
        <NavLink to={"/breakfast/prata"} id="nav" activeClassName="active">
          {" "}
          Prate
        </NavLink>
        <NavLink
          to={"/breakfast/frenchfries"}
          id="nav"
          activeClassName="active"
        >
          {" "}
          French Fries
        </NavLink>
        <NavLink to={"/breakfast/sandwhich"} id="nav" activeClassName="active">
          Sandwhich
        </NavLink>
        <NavLink to={"/"} id="nav" activeClassName="active">
          Back to Main
        </NavLink>
      </div>
      <div className="Hero_section">
        <img src={main_Breakfast_photo} height="500px" alt="this " />
      </div>
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
