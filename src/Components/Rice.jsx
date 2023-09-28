import { createClient } from "contentful";
import { useEffect, useState } from "react";
import "./style.css";
import "./Recipe.css";
import { NavLink } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader"

export default function Rice() {
  // const [recepe, Setrecepe] = useState([]);
  // const client = createClient({
  //   accessToken: "BfNWgp-dFg2W-jxgkIPYNce0IS8N6g9LJT1JA1uTbGQ",
  //   space: "0q4y2er5mofe",
  // });
  const[loading,setloading]=useState(false)
  const [recepe, Setrecepe] = useState([])
  const api="https://cookbook-backend-zliv.onrender.com/recepe/"
const getdata=async()=>{
  setloading(true)
  const res=await fetch(api)
  const data=await res.json()
  Setrecepe(data);
  setloading(false)
  // const getdata = async () => {
  //   const entrydata = await client.getEntries();
  //   console.log("entries", entrydata.items);
  //   Setrecepe(entrydata.items);
   };
   useEffect(() => {
    getdata();
    console.log("Recepe = ", recepe);
    console.log("this is the value of recepe2", recepe[1]);
  }, []);
  //  <li>{x.food_ingredients.map((x)=>(<li>{x}</li>))}</li>
  // <li>{x.food_instruction?.map((x)=>(<li>{x}</li>))}</li>
  return (
    <>
      <NavLink to={"/Breakfast"} id="nav" activeClassName="active">
        Dinner
      </NavLink>

      {loading?  <div id="loader"> <PuffLoader color="#36d7b7" />  </div>:recepe.map((x) => {
        console.log("this value is got from recepe.map ", x.food_name);

        if (x.food_name === "Fried Rice") {
          return (
            <>
               <div id="card-container">
  <div id="card-title">{x.food_name}</div>
   <div id="recipe-image">
    <img src={x.food_photo}/>
   </div>
  <div id="details">Prep time: <span className="detail-value">20 minutes</span> | Cook time: <span className="detail-value">55 minutes</span> | Yield: <span className="detail-value">Makes one loaf</span></div>
  <div id="card-items">
    <span className="card-item-title">Ingredients</span>
    <ul className="checkmark">
    
    <li> {x.food_ingredients.split(",").map((a)=>(
      <li>{a}</li>
      ))}
    </li>
    </ul>
  </div>
  
  <div id="method">
  <span className="card-item-title">Method</span>
    <ul className="checkmark">
    {console.log("this is the array you wanted",x.food_instruction.split(","))}
   <li> {x.food_ingredients.split(",").map((a)=>(
      <li>{a}</li>
      ))}
    </li>


</ul>
  </div>
</div>
              {/* <NavLink to={"/"}>Back to Main</NavLink> */}
            </>
          );
        }
      })}
    </>
  );
}
