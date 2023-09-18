import Vegbiryani from "./Vegbiryani";
import LunchNavbar from "./LunchNavbar";
import Pasta from "./Pasta";
import Lunch from "./Lunch";
import SmokyVegPatties from "./SmokyVegPatties";
import { Route, Routes, NavLink } from "react-router-dom";
import Noodles from "./Noodles";
import Rice from "./Rice";
import Salad from "./Salad";

export default function Pranita() {
  return (
    <>
      <LunchNavbar />
      <Routes>
        <Route path="/Lunch/Lunch" element={<Lunch />} />
        <Route path="/Lunch/Pasta" element={<Pasta />} />
        <Route path="/Lunch/Vegbiryani" element={<Vegbiryani />} />
        <Route path="/Lunch/SmokyVegPatties" element={<SmokyVegPatties />} />
        <Route path="/Dinner/Noodles" element={<Noodles />} />
        <Route path="/Dinner/Rice" element={<Rice />} />
        <Route path="/Dinner/Salad" element={<Salad />} />
      </Routes>
    </>
  );
}
