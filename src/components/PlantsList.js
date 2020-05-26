import React, { useContext } from "react";
import { plantcontext } from "../contexts/plantcontext";
import PlantCard from "./Plants";
import { Link } from "react-router-dom";

const PlantsList = () => {
  const { plants, deleteplant } = useContext(plantcontext);
  return (
    <div>
      plants list
      {plants.map((plants) => (
        <PlantCard key={plants.user_id} plants={plants} deleteplant={deleteplant} />
      ))}
      
      <Link to="/Addplant">add new plant</Link>
    </div>
    
  );
};

export default PlantsList;