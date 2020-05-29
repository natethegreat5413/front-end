import React, { useContext, useState, useEffect } from 'react';
import { plantcontext } from '../contexts/plantcontext';
import { usercontext } from '../contexts/usercontext';
import { useParams } from 'react-router-dom';
import { Route, useHistory } from 'react-router-dom';
import * as yup from 'yup'

const schema = yup.object().shape({


    h2o_frequency: yup.number().required().min(10, 'must be at least 2 characters').max(99, 'cant be more than 2 characters'),
    
    nickname: yup.string(),
    species: yup.string(),
    image_url: yup.string(),
})

const Addplant = () => {
    const [disabled, setDisabled] = useState(true)
    const [addErrors, setAddErrors] = useState({
        h2o_frequency: ""
    })

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
        history.push('/PlantsList');
        window.location.reload(false);
    };

    useEffect(() => {
        schema.isValid(newplant).then(valid => {
            setDisabled(!valid);
        })
    }, [newplant])
    const validates = e => {
        e.persist();
        yup.reach(schema, e.target.name)
         .validate(e.target.value)
        .then(valid => {
            setAddErrors({
                ...addErrors,
                [e.target.name]: ""
            })
        })
        .catch(error =>{
            setAddErrors({
                ...addErrors,
                [e.target.name]:error.errors[0]
            })
        })
    }


    const handleChanges = (e) => {
        e.persist();
        validates(e)
        const plants = e.target.name;

        setNewplant({
            ...newplant,
            [plants]: e.target.value,
            // user_id:Date.now(),
            // id: Date.now(),
        });
    };

    return (
        <div className="Register">
            <form className="pure-form">
                <input
                id="input"
                    type='text'
                    name='nickname'
                    placeholder=' nickname'
                    onChange={handleChanges}></input>
                <input
                 id="input"
                    name='species'
                    placeholder='species'
                    type='text'
                    onChange={handleChanges}></input>
                <input
                 id="input"
                    name='h2o_frequency'
                    placeholder='h2o_frequency'
                    type='text'
                    onChange={handleChanges}></input>

                    {addErrors.h2o_frequency.length > 0 ? (
          <p className="errors">{addErrors.h2o_frequency}</p>
          ) : null}

                <input
                 id="input"
                    name='image_url'
                    placeholder='image_url'
                    type='text'
                    onChange={handleChanges}></input>

                <button onClick={handleSubmit} disabled={disabled} type='submit'>
                    Add plant
                </button>
            </form>
        </div>

);
    
};

export default Addplant;
