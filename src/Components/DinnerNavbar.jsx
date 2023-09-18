import { NavLink } from "react-router-dom";

export default function DinnerNavbar() {
  return (
    <>
      <div className="breakfast_link">
        <NavLink to={"/Dinner/Noodles"} id="nav" activeClassName="active">
          Noodles
        </NavLink>
        <NavLink to={"/Dinner/Rice"}>Rice</NavLink>
        <NavLink to={"/Dinner/Salad"}>Salad</NavLink>
      </div>
    </>
  );
}
