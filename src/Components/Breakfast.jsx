import { createClient } from "contentful";
import { useState,useEffect} from "react";
import { Routes,Route } from "react-router-dom";
import Frenchfries from "./Frenchfries";
import BreakfastNavbar from "./BreakfastNavbar";
import Prata from "./Prata";
import Sandwhich from "./Sandwhich";

export default function Breakfast(){
    const[recepe,Setrecepe]= useState([])
    const client = createClient({
        accessToken:"BfNWgp-dFg2W-jxgkIPYNce0IS8N6g9LJT1JA1uTbGQ",
        space : "0q4y2er5mofe",
       });
       const getdata= async()=>{
        const entrydata=await client.getEntries();
        console.log("entries",entrydata.items)
        Setrecepe(entrydata.items)
       }
useEffect(()=>{
getdata();
console.log("Recepe = ",recepe)
console.log("this is the value of recepe2",recepe[1]);
},[])
    return (
        <>
      
      
        {recepe.map((x)=>{
            console.log("value rrr ",x.fields.foodName)
            
            
            if(x.fields.foodName==="Prata"){
                return(
                <>
               
            
                 <Prata  />
                 </>
                )
            }
            else if(x.fields.foodName==="Sandwhich"){
                return(
                <>
                 <h1>{x.fields.foodName}</h1>
            
                 <Sandwhich recepe={x.fields.foodPhoto.fields.file.url} ins={x.fields.foodInstruction} ing={x.fields.foodIngredients
} />
                 </>
                )
            }

            else if(x.fields.foodName==="French Fries"){
                return(
                <>
                 <h1>{x.fields.foodName}</h1>
            
                 <Frenchfries recepe={x.fields.foodPhoto.fields.file.url} ins={x.fields.foodInstruction} ing={x.fields.foodIngredients
} />
                 </>
                )
            }
           
            
            
            
            
        })}

</>
        
        
       
    )
}