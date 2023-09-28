import { createClient } from "contentful";
import { useEffect, useState } from "react";
import "./Recipe.css";
import Video from "./Video";

export default function RecipeSample(){
    const [recipes, setReceips] = useState();
    const client = createClient({
        space: "0q4y2er5mofe",
        accessToken: "BfNWgp-dFg2W-jxgkIPYNce0IS8N6g9LJT1JA1uTbGQ",
      });
      const getData = async () => {
        const entryItems = await client.getEntries();
        console.log("ENTRIES: ", entryItems.items);
        setReceips(entryItems.items);
      };
      useEffect(() => {
        
        getData();
        
      }, []);
return (<>
{recipes &&
            recipes?.map((element)=>{
                 if(element.fields.foodName==="Pasta pesto WITH GARLIC & ROSEMARY CHICKEN"){
return(<>
<div id="card-container">
  <div id="card-title">{element.fields.foodName}</div>
   <div id="recipe-image">
    <img src={element.fields.foodPhoto.fields.file.url}/>
   </div>
  <div id="details">Prep time: <span className="detail-value">20 minutes</span> | Cook time: <span className="detail-value">55 minutes</span> | Yield: <span className="detail-value">Makes one loaf</span></div>
  <div id="card-items">
    <span className="card-item-title">Ingredients</span>
    <ul className="checkmark">
      <li>{element.fields.foodIngredients.map((x)=>(<li>{x}</li>))}</li>
      
    </ul>
  </div>
  
  <div id="method">
  <span className="card-item-title">Method</span>
    <ul className="checkmark">
      <li>{element.fields.foodInstruction.map((x)=>(<li>{x}</li>))}</li>


</ul>
  </div>
</div>
</>);
}
            })
            }
           
            </>
           );



            }