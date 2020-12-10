import React, { useContext } from 'react';
import { plantcontext } from '../contexts/plantcontext';
import PlantCard from './Plants';
import { useHistory } from 'react-router-dom';
import '../styles/PlantsList.css';
import { Button } from 'antd';

const PlantsList = () => {
	const { plants } = useContext(plantcontext);
	const { push } = useHistory();

	return (
		<div className="list">
			<h1 className="PL-title">Water Your Plants</h1>
			<div className="addplantpage">
				<Button id="add" type="primary" onClick={() => push('/Addplant')}>
					Add a New Plant
				</Button>
			</div>
			<div className="card-container">
				{plants.map((plant) => (
					<PlantCard key={plant.id} plant={plant} />
				))}
			</div>
		</div>
	);
};

export default PlantsList;
