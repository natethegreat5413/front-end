import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

const initialPlant = {
    id:"",
  name: "",
  Nickname:"",
  Species:"",
  h2Ofrequency:"",
  Image:"",
};

const PlantList = ({ plants, addplants }) => {
    const [plant, setplant] = useState(initialPlant);



  return (
    <div className="plant-wrap">
plants up
    </div>
  );
};

export default PlantList;