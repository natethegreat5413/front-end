import React, { useContext, useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth';
import { plantcontext } from '../contexts/plantcontext';
import { Route, useHistory } from 'react-router-dom';
import moment from 'moment';
import { date, string } from 'yup';
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

// let datenow = date.now; 
//console.log(datenow)
//let millisecondsnow = datenow.getTime() 
//let datewater = 
//console.log(datewater)
//let millisecondswater = datewater.getTime()

// for (let i = 0; props.plant.length > i; i++){
  
//   } 
    //console.log(props.plant.isWatered.getUTCHours())
   const format = moment.utc( props.plant.isWatered ).format('MM/DD/YYYY')
   // var proposedDate = newhours + props.plant.isWatered;
//     var isValidDate = moment(proposedDate).isValid();
//     var momentDate = moment(proposedDate)
// var hour = momentDate.hours();
// var minutes = momentDate.minutes();
// var seconds = momentDate.seconds();
// console.log(momentDate.format("YYYY-MM-DD hh:mm:ss A Z"));
// console.log(newhours)
//let millisecondswater = format.getTime()
//<div className={ props.plant.isWatered > date.now ? "needwater":'card'}>
    return (
        <div className='card'>
     
            {/* <h4>plant id{props.plant.id}</h4> */}
            {/* <h4>{props.plant.user_id}</h4> */}
            <h4>Name : {props.plant.nickname}</h4>
            <h4>Species : {props.plant.species}</h4>
            <h4>Water every  : {props.plant.h2o_frequency} days</h4>
            <img id='plimg' src={props.plant.image_url}></img>
            <h3>Next watering date</h3>
      
    <h3>{format}</h3>
    {/* <h4>{millisecondswater}</h4> */}
   
    
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
