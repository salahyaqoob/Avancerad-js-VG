import axios from "axios";
import { useEffect, useState } from "react";
import { IAnimals } from "../models/IAnimals";


export function InitialAnimals() {
    let getItem=JSON.parse(localStorage.getItem("animals")||"[]");
    const[animals,setAnimals]=useState<IAnimals[]>(getItem);
    
    useEffect(() => {
      if (animals?.length!==0) 
          return;
          axios
          .get<IAnimals[]>("https://animals.azurewebsites.net/api/animals")
          .then((res) => {
              updateStatus(res.data)
          });
      
    },[]);
    
    function updateStatus(item:IAnimals[]) {
        addToLS([...item]);
        setAnimals([...item]);
    }
    
    function addToLS(item:IAnimals[]) {
        localStorage.setItem("animals",JSON.stringify(item));
    }
    let list=animals.forEach((t) => {
        if (t.id==2) {
            t.imageUrl="https://www.rd.com/wp-content/uploads/2020/11/GettyImages-1124309626.jpg?w=2121";
            localStorage.setItem("animals",JSON.stringify(animals))
        }
    });
    
    console.log("Animals",animals);
        return <div></div>
    }