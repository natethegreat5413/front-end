import React, { useContext, useState } from 'react';
import { plantcontext } from '../contexts/plantcontext';
import { usercontext } from '../contexts/usercontext';
import { useParams } from 'react-router-dom';
import { Route, useHistory } from 'react-router-dom';

const Addplant = () => {
    const { addplant } = useContext(plantcontext);
    const { id } = useParams();
    const history = useHistory();
    //const { addplant } = useContext(usercontext);
    const [newplant, setNewplant] = useState({
        id: id,
        user_id: parseInt(localStorage.getItem('id')),
        nickname: '',
        species: '',
        h2o_frequency: '',
        image_url: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addplant(newplant);
        history.push('/PlantsList')
        window.location.reload(false);
    };

    const handleChanges = (e) => {
        const plants = e.target.name;

        setNewplant({
            ...newplant,
            [plants]: e.target.value,
            // user_id:Date.now(),
            // id: Date.now(),
        });
    };

    return (
        <div>
            <form>
                <input
                    type='text'
                    name='nickname'
                    placeholder=' nickname'
                    onChange={handleChanges}></input>
                <input
                    name='species'
                    placeholder='species'
                    type='text'
                    onChange={handleChanges}></input>
                <input
                    name='h2o_frequency'
                    placeholder='h2o_frequency'
                    type='text'
                    onChange={handleChanges}></input>
                <input
                    name='image_url'
                    placeholder='image_url'
                    type='text'
                    onChange={handleChanges}></input>

                <button onClick={handleSubmit} type='submit'>
                    Add plant
                </button>
            </form>
        </div>
    );
};

export default Addplant;
