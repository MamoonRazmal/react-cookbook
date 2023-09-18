
import './App.css'
import Mamoon from './Components/Mamoon'
import Pranita from './Components/Pranita'
import Landing_page from './Components/Landing_page'
import { Routes,Route} from 'react-router-dom'
import Breakfast from './Components/Breakfast'
import Lunch from "./Components/Lunch"
import Landing_page_Recepes from "./Components/Landing_Page_Recepes"

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={  <Landing_page />} />
      <Route path="/Breakfast" element={  <Breakfast  />} />
      <Route path="/Lunch" element={<Lunch/>} />
      <Route path='/Landing_page_Recepes' element={<Landing_page_Recepes />} />
    
      </Routes>
    </>
  )
}

export default App
