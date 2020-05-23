import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

import PlantList from "./PlantsList";

const Plantsgrab = () => {
  const [rePlantsList, setrePlantsList] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  
  const getData = () => {
    axiosWithAuth()
      .get("api/plants")
      .then((response) => {
    
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <PlantsList Plants={rePlantsList} updatePlants={setrePlantsList} />
      
    </>
  );
};

export default Plantsgrab;