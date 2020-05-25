import React, { useContext } from "react";

const PlantCard = (props) => {


  return (
  
    <div className='card'> 
     plants
      <h2>{props.plant.name}</h2>
      <h4>{props.plant.Id}</h4>
      <h4>{props.plant.Nickname}</h4>
      <h4>{props.plant.Species}</h4>
      <h4>{props.plant.h2O}</h4>
      <img src={props.plant.Image}></img>
    </div>
  );
};

export default PlantCard;