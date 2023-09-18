import { useEffect ,useState} from "react";
import { createClient } from "contentful";

export default function Image_Galery(){
    const[recepe,Setrecepe]= useState([])
  
    const client = createClient({
        accessToken:"BfNWgp-dFg2W-jxgkIPYNce0IS8N6g9LJT1JA1uTbGQ",
        space : "0q4y2er5mofe",
       });
       const getdata= async()=>{
        const entrydata=await client.getEntries();
        console.log("entries",entrydata.items)
        Setrecepe(entrydata.items)
        //Setphoto(entrydata.items.photoGallery)
      //   console.log("here should be the value shouvld checked x.fields.foodName = ",x.fields.foodName)
       }
useEffect(()=>{
getdata();
console.log("Recepe = ",recepe)
console.log("this is the value of recepe2",recepe[1]);
},[])

 
            
    return (
        <>
      
      
        {recepe.map((x)=>{
         //   console.log("here should be the value shouvld checked x.fields.photoGallery = ",x.fields.photoGallery[6].fields.file.url)
            
           const cutar=x.fields.photoGallery.splice(7)
          
                return(
                    <>
               
                    <div className="imgs">
                   {cutar.fields.photoGallery.map((xx)=>{
                    console.log("this is what you want",xx.fields.file.url)
                // ( xx.fieldsfields.file.url) ? 
                return(
                  <>  <img src={xx.fields.file?.url}  height='300px' /> </>)
               // <h1>xx.fields.file.url</h1>
                })}
                    
                    </div>
                   
                
                 
                     </>
                    )
            })}
            </>
    )

        
}