import React, { useContext, useEffect, useState} from 'react';
import { plantcontext } from '../contexts/plantcontext';
import PlantCard from './Plants';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../components/axiosWithAuth';



const PlantsList = () => {
    const { plants } = useContext(plantcontext);

    return (
        <div>
            plants list
            {plants.map((plant) => (
                <PlantCard
                    key={plant.id}
                    plant={plant}
                />
            ))}
            <Link to='/Addplant'>add new plant</Link>
        </div>
    );
};

export default PlantsList;
