import Not_Found_photo from './Components/Not_Found_photo.webp'
import { NavLink } from 'react-router-dom'
export default function Not_found(){

   
    return(
        <>
        <div className='main_404' >
            <div>
         <NavLink to={"/"} id="nav" activeClassName="active">Back TO Main</NavLink>
         </div>
       <img src={Not_Found_photo} alt="" />
       </div>
       </>
    )
}