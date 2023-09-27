import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { NavLink } from "react-router-dom";
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
              <div className="mainClass">
                <h1>{x.fields.foodName}</h1>
              </div>

              <div className="second">
                <div className="instruction">
                  <ul>
                    Food instruction:{" "}
                    {x.fields.foodIngredients.map((ing) => (
                      <li>{ing}</li>
                    ))}
                  </ul>
                </div>

                <div className="imgs">
                  <img
                    src={x.fields.foodPhoto.fields.file.url}
                    alt="French Fries"
                    height="800px"
                  />{" "}
                </div>

                <div className="ingrid">
                  <ul>
                    Food Ingredient:{" "}
                    {x.fields.foodIngredients.map((ing) => (
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
