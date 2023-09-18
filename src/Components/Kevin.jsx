import Noodles from "./Vegbiryani";
import DinnerNavbar from "./DinnerNavbar";
import Rice from "./Pasta";
import Salad from "./Lunch";
import { Route, Routes, NavLink } from "react-router-dom";

export default function Kevin() {
  return (
    <>
      <DinnerNavbar />
      <Routes>
        <Route path="/Dinner/Noodles" element={<Noodles />} />
        <Route path="/Dinner/Rice" element={<Rice />} />
        <Route path="/Dinner/Salad" element={<Salad />} />
      </Routes>
    </>
  );
}
