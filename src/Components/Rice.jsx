import { createClient } from "contentful";
import { useEffect, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
export default function Pasta() {
  const [recipes, setReceips] = useState();
  const client = createClient({
    space: "0q4y2er5mofe",
    accessToken: "BfNWgp-dFg2W-jxgkIPYNce0IS8N6g9LJT1JA1uTbGQ",
  });
  const getData = async () => {
    const entryItems = await client.getEntries();
    console.log("ENTRIES: ", entryItems.items);
    console.log(entryItems.items);
    setReceips(entryItems.items);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavLink to={"/Dinner"}>Back to Dinner</NavLink>
      {recipes &&
        recipes?.map((element) => {
          console.log("test", element.fields.foodName);
          if (element.fields.foodName === "Fried Rice") {
            return (
              <>
                <div className="mainClass">
                  <h1>{element.fields.foodName}</h1>
                </div>

                <div className="second">
                  <div className="instruction">
                    <br />{" "}
                    <ul>
                      Instructions:
                      {element.fields.foodInstruction.map((inst) => (
                        <li>{inst}</li>
                      ))}
                    </ul>
                    <br />
                  </div>

                  <div className="imgs">
                    <img
                      src={element.fields.foodPhoto.fields.file.url}
                      alt="Rice"
                      height="500px"
                    />
                  </div>

                  <div className="ingrid">
                    <ul>
                      Food Ingredient:
                      {element.fields.foodIngredients.map((ing) => (
                        <li>{ing}</li>
                      ))}
                    </ul>
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
