import { createClient } from "contentful";
import { useEffect, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export default function Vegbiryani() {
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
  return (
    <>
      <NavLink to={"/Lunch"}>Back to Lunch</NavLink>
      {recipes &&
        recipes?.map((element) => {
          if (element.fields.foodName === "Veg Biryani") {
            return (
              <>
                <div className="mainClass">
                  <h1>{element.fields.foodName}</h1>
                </div>

                <div className="second">
                  <div className="instruction">
                    <br />{" "}
                    <ol>
                      <li>{element.fields.foodInstruction} </li>
                    </ol>
                    <br />
                  </div>

                  <div className="imgs">
                    <img
                      src={element.fields.foodPhoto.fields.file.url}
                      alt="Veg Biryani"
                      height="800px"
                    />{" "}
                  </div>

                  <div className="ingrid">
                    <p>Food Ingredient {element.fields.foodIngredients}</p>{" "}
                  </div>
                </div>
                <NavLink to={"/"}>Back to Main</NavLink>
              </>
            );
          }
        })}
    </>
  );
}
