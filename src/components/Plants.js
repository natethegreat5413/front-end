import React from 'react';
import { axiosWithAuth } from './axiosWithAuth';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { Card, Button } from 'antd';
import '../styles/Plants.css';

const { Meta } = Card;

const PlantCard = (props) => {
	const history = useHistory();

	//// WORKING ////
	const deletePlant = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.delete(`/plants/${props.plant.id}`)

			.then((res) => {
				console.log(res);
				history.push('/PlantsList');
				window.location.reload(false);
			})
			.catch((err) => console.log(err));
	};

	const waterPlant = (e) => {
		e.preventDefault();
		let date = moment().add(`${props.plant.h2o_frequency}`, 'days').calendar();
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
	};

	const format = moment.utc(props.plant.isWatered).format('MM/DD/YYYY');

	return (
		<div className="plant-card-wrapper">
			<Card
				className="plant-cards"
				style={{ width: 300 }}
				cover={<img alt="plant" id="plimg" src={props.plant.image_url} />}
				actions={[
					<Button type="primary" id="water" onClick={waterPlant}>
						<i className="fas fa-tint"></i> Water
					</Button>,
					//// THIS WORKS ////
					<Button type="primary" danger id="del" onClick={deletePlant}>
						<i className="fas fa-trash-alt"></i> Delete
					</Button>
				]}>
				<Meta title={props.plant.nickname} /> <br />
				<p>SPECIES: {props.plant.species}</p>
				<p>WATER EVERY: {props.plant.h2o_frequency} days</p>
				<p>NEXT WATERING DATE: {format}</p>
			</Card>
		</div>
	);
};

export default PlantCard;
