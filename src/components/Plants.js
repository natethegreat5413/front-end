import React, { useContext, useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth';
import { plantcontext } from '../contexts/plantcontext';
import { Route, useHistory } from 'react-router-dom';
import moment from 'moment';
//  const deleteplant = (plants) => {
//   axiosWithAuth().delete(`plants/${plants.user_id}`);
//  }

const PlantCard = (props) => {
    // const {waterDate, setWaterDate} = useState()
    const plants = useContext(plantcontext);
    const history = useHistory();

    // const triggerDate = () => {
    //   let date = moment().add(10, 'days').calendar()
    //   setWaterDate(date)
    //   console.log(waterDate)
    // }

    const deletePlant = () => {
        // let deleteThis = { plant_id: plants };
        axiosWithAuth()
            .delete(`/plants/${props.plant.id}`)

            .then((res) => {
                console.log(res);
                history.push('/PlantsList');
                window.location.reload(false);
            })
            .catch((err) => console.log(err));
    };
    // const updatePlant = () => {
    //     axiosWithAuth()
    //         .put(`/plants/${props.plant.id}`, {
    //             //value_id: item.Value_Id,
    //             // top_three: true
    //         })

    //         .then((res) => {
    //             console.log(res);
    //             history.push('/PlantsList');
    //             window.location.reload(false);
    //         })
    //         .catch((err) => console.log(err));
    // };
    return (
        <div className='card'>
            {/* <h4>plant id{props.plant.id}</h4> */}
            {/* <h4>{props.plant.user_id}</h4> */}
            <h4>{props.plant.nickname}</h4>
            <h4>{props.plant.species}</h4>
            <h4>{props.plant.h2o_frequency}</h4>
            <img id='plimg' src={props.plant.image_url}></img>
            <button
                id='water'
                onClick={() => {
                    let date = moment().add(`${props.plant.h2o_frequency}`, 'days').calendar()
                    axiosWithAuth()
                        .put(`/plants/${props.plant.id}`, {
                            isWatered: date
                        })
                        .then((res) => {
                            console.log(res);
                            history.push('/PlantsList');
                            window.location.reload(false);
                        })
                        .catch((err) => console.log(err));

                    console.log(date);
                }}>
                water plant
            </button>
            <button id='del' onClick={deletePlant}>
                delete
            </button>
        </div>
    );
};

export default PlantCard;
