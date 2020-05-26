import React, { useContext } from 'react';
import { axiosWithAuth } from './axiosWithAuth';
import { plantcontext } from '../contexts/plantcontext'

//  const deleteplant = (plants) => {
//   axiosWithAuth().delete(`plants/${plants.user_id}`);
//  }

const PlantCard = props => {
  const plants = useContext(plantcontext)

  const deletePlant = () => {
    // let deleteThis = { plant_id: plants };
    axiosWithAuth()
        .delete(`/plants/${props.plant.id}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
  };
  
    return (
        <div className='card'>
            <h4>{props.plant.user_id}</h4>
            <h4>{props.plant.nickname}</h4>
            <h4>{props.plant.species}</h4>
            <h4>{props.plant.h2O_frequency}</h4>
            <img src={props.plant.image_url}></img>
            <button onClick={deletePlant()}>delete</button>
        </div>
    );
};

export default PlantCard;
