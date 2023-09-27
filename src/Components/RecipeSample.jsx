import { createClient } from "contentful";
import { useEffect, useState } from "react";
import "./Recipe.css";

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
//    return (<>
//         {recipes &&
//         recipes?.map((element)=>{
//             if(element.fields.foodName==="Pasta pesto WITH GARLIC & ROSEMARY CHICKEN"){
//                 return(<>
//                <body>
// 	<div className="header">
// 		<h1>{element.fields.foodName}</h1>
// 	</div>

// 	<div className="recipe_details">

// 		<div className="description">
// 			<p>This quick and delicious pasta dish is the perfect way to use up a summer bounty of basil and tomatoes! </p>
// 			<p>Don't have a green thumb? Never fear! You can knock out this classic pasta dish in no time with a jar of prepared pesto sauce. </p>

			
// 		</div>

// 		<figure>
// 			<img src={element.fields.foodPhoto.fields.file.url}/>
       
// 			<figcaption>Photo by MKP cookbook</figcaption>
// 		</figure>

// 	</div>

// 	<div className="card2">
// 		<div className="ingrit">
// 			<h2>The Ingredients</h2>
// 			<ul className="ingredients">
// 				{element.fields.foodIngredients.map((x)=>(<li>{x}</li>))}
				
// 			</ul>

// 			<p className="variation">Variation: Got no time, or no fresh basil? Use a 6 ounce jar of prepared pesto instead.</p>
// 		</div>

// 		<div className="process">
// 			<h2>The Process</h2>
// 			<ol className="instructions">
// 				{element.fields.foodInstruction.map((x)=>(<li>{x}</li>))}
				
// 			</ol>
// 		</div>
// 	</div>
// </body>
               
//                 </>)
//             }
//         })} 


        
//     </>);
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
            })}
            </>);
            }