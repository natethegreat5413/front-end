import React, { useContext } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

//  const deleteplant = (plants) => {
//   axiosWithAuth().delete(`plants/${plants.user_id}`);
//  }

const PlantCard = (props) => {
  return (
  
    <div className='card'> 
     plants
      <h4>{props.plants.user_id}</h4>
      <h4>{props.plants.nickname}</h4>
      <h4>{props.plants.species}</h4>
      <h4>{props.plants.h2O_frequency}</h4>
      <img src={props.plants.image_url}></img>
     {/* <button onClick={deleteplant()}>delete</button>  */}
    </div>
  );
};

export default PlantCard;