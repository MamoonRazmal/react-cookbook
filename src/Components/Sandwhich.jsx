import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { NavLink } from "react-router-dom";
import "./Recipe.css";
export default function Sandwhich() {
  const [recepe, Setrecepe] = useState([]);
  const client = createClient({
    accessToken: "BfNWgp-dFg2W-jxgkIPYNce0IS8N6g9LJT1JA1uTbGQ",
    space: "0q4y2er5mofe",
  });
  const getdata = async () => {
    const entrydata = await client.getEntries();
    console.log("entries", entrydata.items);
    Setrecepe(entrydata.items);
  };
  useEffect(() => {
    getdata();
    console.log("Recepe = ", recepe);
    console.log("this is the value of recepe2", recepe[1]);
  }, []);
  return (
    <>
      <NavLink to={"/Breakfast"} id="nav" activeClassName="active">
        Back to Breakfast
      </NavLink>
      {recepe.map((x) => {
        console.log("value rrr ", x.fields.foodName);

        if (x.fields.foodName === "Sandwhich") {
          return (
            <>
             <div id="card-container">
  <div id="card-title">{x.fields.foodName}</div>
   <div id="recipe-image">
    <img src={x.fields.foodPhoto.fields.file.url}/>
   </div>
  <div id="details">Prep time: <span className="detail-value">20 minutes</span> | Cook time: <span className="detail-value">55 minutes</span> | Yield: <span className="detail-value">Makes one loaf</span></div>
  <div id="card-items">
    <span className="card-item-title">Ingredients</span>
    <ul className="checkmark">
      <li>{x.fields.foodIngredients.map((x)=>(<li>{x}</li>))}</li>
      
    </ul>
  </div>
  
  <div id="method">
  <span className="card-item-title">Method</span>
    <ul className="checkmark">
      <li>{x.fields.foodInstruction.map((x)=>(<li>{x}</li>))}</li>


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
