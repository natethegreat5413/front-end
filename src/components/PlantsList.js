import React, { useContext } from "react";
import { plantcontext } from "../contexts/plantcontext";
import plantCard from "./Plants";

const PlantsList = () => {
  const { plants } = useContext(plantcontext);
  return (
    <div>
      plants list
      {plants.map((plants) => (
        <plantCard key={plants.id} plants={plants} />
      ))}
    </div>
  );
};

export default PlantsList;