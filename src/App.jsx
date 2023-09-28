import "./App.css";

import Landing_page from "./Components/Landing_page";
import { Routes, Route } from "react-router-dom";

import Landing_page_Recepes from "./Components/Landing_Page_Recepes";
import Salad from "./Components/Salad";
import Rice from "./Components/Rice";
import Noodles from "./Components/Noodles";
import Dinner_Landing_Page from "./Components/Dinner_Landing_Page";
import Pasta from "./Components/Pasta";
import Vegbiryani from "./Components/Vegbiryani";
import SmokyVegPatties from "./Components/SmokyVegPatties";
import Lunch_Landing_Page from "./Components/Lunch_Landing_Page";
import Breakfast_Landing_Page from "./Components/Breakfast_Landing_Page";
import Prata from "./Components/Prata";
import Sandwhich from "./Components/Sandwhich";
import Frenchfries from "./Components/Frenchfries";
// import "./App.css";
import Footer from "./Components/Footer";
import Not_found from "./Not_found";
import RecipeSample from "./Components/RecipeSample";
import Gallery from "./Components/Gallery";
import Video from "./Components/Video";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route
          path="/Landing_page_Recepes"
          element={<Landing_page_Recepes />}
        />
        <Route path="/Dinner" element={<Dinner_Landing_Page />} />
        <Route path="/Dinner/Noodles" element={<Noodles />} />
        <Route path="/Dinner/Rice" element={<Rice />} />
        <Route path="/Dinner/Salad" element={<Salad />} />

        <Route path="/Lunch/RecipeSample" element={<RecipeSample />} />
        <Route path="/Lunch/Vegbiryani" element={<Vegbiryani />} />
        <Route path="/Lunch/SmokyVegPatties" element={<SmokyVegPatties />} />
        <Route path="/Lunch" element={<Lunch_Landing_Page />} />
        <Route path="/Breakfast" element={<Breakfast_Landing_Page />} />

        <Route path="/breakfast/prata" element={<Prata />} />
        <Route path="/breakfast/frenchfries" element={<Frenchfries />} />
        <Route path="/breakfast/sandwhich" element={<Sandwhich />} />
        <Route path="*" element={<Not_found />} />
      </Routes>
      <Gallery/>
      <Footer/>
      {/* <Video/> */}
    </>
  );
}

export default App;
