import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";
import "./SpeciAnimal.css"


export function SpecificAnimal() {
    let getItem = JSON.parse(localStorage.getItem("animals") || "[]");
    let timeNow = new Date().toLocaleTimeString();
    let { id } = useParams();

    const [animals, setAnimals] = useState<IAnimals[]>(getItem);
    const [time, setTime] = useState(timeNow);
    const [fed, setFed] = useState("");


    function handleClick() {
        timeNow = new Date().toLocaleTimeString();
        setTime(timeNow);


        let specificAnimal = animals.find((animal) => animal.id.toString() == id)
        if (specificAnimal) {
            specificAnimal.isFed = true;
            specificAnimal.lastFed = timeNow.toString();
            localStorage.setItem("animals", JSON.stringify(animals));

        }

        if (specificAnimal?.lastFed) {
            let feding = specificAnimal.name + " " + "is fed Please comeback in 3 hours!"
            setFed(feding);
            localStorage.setItem("animals", JSON.stringify(animals));
        }



    }


//FedStatus
//*********************************************************************************************************************************/
    useEffect(() => {



        let specificAnimal = animals.find((animal) => animal.id.toString() == id)
        if (specificAnimal) {
            let now = new Date().getTime();

            let sec = Math.floor((now / 1000));
            let minn = Math.floor(sec / 60);
            let h = Math.floor(minn / 60);
            let difm = minn - (h * 60);
            let difs = sec - (difm * 60) - (h * 60 * 60);

            let lastfedTime = specificAnimal.lastFed;
            let array = lastfedTime.split(":");
            let second = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + (parseInt(array[2], 10));

            let minn2 = Math.floor(second / 60);
            let h2 = Math.floor(minn2 / 60);
            let difm2 = minn2 - (h2 * 60);
            let difs2 = second - (difm2 * 60) - (h2 * 60 * 60);


            if (difs != difs2) {
                specificAnimal.isFed = false;
                let food = specificAnimal.name + " " + "is Hungry Please fed me!"
                setFed(food);
                localStorage.setItem("animals", JSON.stringify(animals));
            }

        }


    }, []);

//*********************************************************************************************************************************/


    let specList = animals.filter((animal) => animal.id.toString() == id).map((animal) => {
        return (
            <div key={animal.id} className="specificAnimals-container">
               <div className="info">
                <h3>Name: {animal.name}</h3>
                <h3>Birth: {animal.yearOfBirth}</h3>
                <h3>medicine: {animal.medicine}</h3>
                </div>
                <p>LastFed: {animal.lastFed}</p>
                <div className="img-container">
                    <img src={animal.imageUrl} alt={animal.name} />
                    <span><p>Description about {animal.name}</p>
                        {animal.longDescription}</span>
                  
                </div>
                
                <h1>{fed}</h1>

                <button className="button" onClick={() => { handleClick(); }}>click me</button>

            </div>
        )
    });

    return (<div className="specificAnimals">{specList}</div>)

};
