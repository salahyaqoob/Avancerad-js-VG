import { useState } from "react";
import { Link } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";
import "./homePageAnimals.css"


export function HomePageAnimals() {
    let getItem=JSON.parse(localStorage.getItem("animals")||"[]");
    const[animals,setAnimals]=useState<IAnimals[]>(getItem);

        let homeList=animals.map((animal) => {
            return(
                    <div key={animal.id} className="animals-container">
                        <Link to={"/specificanimal/" + animal.id}>
                            <h3 >{animal.name} </h3>
                            <div className='img-container'>
                                <img src={animal.imageUrl} alt={animal.name} />
                            </div>
                        </Link>
                        <span className="short-description">{animal.shortDescription}</span>
                    </div>
                    
            )
            
        });
            localStorage.setItem("animals", JSON.stringify(animals));
  
       
    return <div className="animals">{homeList}</div>


    
}