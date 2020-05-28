import React, { useContext } from 'react';
import { axiosWithAuth } from './axiosWithAuth';
import { plantcontext } from '../contexts/plantcontext'
import { Route, useHistory } from 'react-router-dom';
//  const deleteplant = (plants) => {
//   axiosWithAuth().delete(`plants/${plants.user_id}`);
//  }

const PlantCard = props => {
  const plants = useContext(plantcontext)
const history = useHistory();

  const deletePlant = () => {
    // let deleteThis = { plant_id: plants };
    axiosWithAuth()
        .delete(`/plants/${props.plant.id}`)
        
        .then((res) => {
            console.log(res);
            history.push('/PlantsList')
            window.location.reload(false);
        })
        .catch((err) => console.log(err));
  };
  const updatePlant = () => {
    axiosWithAuth()
        .put(`/plants/${props.plant.id}`,{
          //value_id: item.Value_Id,
         // top_three: true
        })
        
        .then((res) => {

            console.log(res);
            history.push('/PlantsList')
            window.location.reload(false);
        })
        .catch((err) => console.log(err));
  }; 
    return (
        <div className='card'>
            {/* <h4>plant id{props.plant.id}</h4> */}
            {/* <h4>{props.plant.user_id}</h4> */}
            <h4>{props.plant.nickname}</h4>
            <h4>{props.plant.species}</h4>
            <h4>{props.plant.h2o_frequency}</h4>
            <img id="plimg" src={props.plant.image_url}></img>
            <button id="water" onClick={updatePlant}>water plant</button>
            <button id="del" onClick={deletePlant}>delete</button>
        </div>
    );
};

export default PlantCard;
