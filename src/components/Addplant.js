import React, { useContext, useState, useEffect } from 'react';
import { plantcontext } from '../contexts/plantcontext';
import { useParams } from 'react-router-dom';
import '../styles/AddPlant.css';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { Button, Card, Typography, TextField } from '@material-ui/core';

const schema = yup.object().shape({
	h2o_frequency: yup
		.number()
		.required()
		.min(10, 'must be at least 2 characters')
		.max(99, 'cant be more than 2 characters'),

	nickname: yup.string(),
	species: yup.string(),
	image_url: yup.string()
});

const Addplant = () => {
	const [disabled, setDisabled] = useState(true);
	const [addErrors, setAddErrors] = useState({
		h2o_frequency: ''
	});

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
		image_url: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		addplant(newplant);
		history.push('/PlantsList');
		window.location.reload(false);
	};

	useEffect(() => {
		schema.isValid(newplant).then((valid) => {
			setDisabled(!valid);
		});
	}, [newplant]);
	const validates = (e) => {
		e.persist();
		yup.reach(schema, e.target.name)
			.validate(e.target.value)
			.then(() => {
				setAddErrors({
					...addErrors,
					[e.target.name]: ''
				});
			})
			.catch((error) => {
				setAddErrors({
					...addErrors,
					[e.target.name]: error.errors[0]
				});
			});
	};

	const handleChanges = (e) => {
		e.persist();
		validates(e);
		const plants = e.target.name;

		setNewplant({
			...newplant,
			[plants]: e.target.value
		});
	};

	return (
		<div className="Add-Plants">
			<Card className="add-plant-card">
				<div className="t-title">
					<Typography className="card-title" variant="h3" gutterBottom>
						Let's add a Plant
					</Typography>
				</div>
				<form className="add-form" onSubmit={handleSubmit}>
					<TextField
						id="outlined-basic"
						label="Nickname"
						variant="outlined"
						type="text"
						name="nickname"
						onChange={handleChanges}
					/>

					<TextField
						variant="outlined"
						label="Plant Species"
						id="outlined-basic"
						name="species"
						type="text"
						onChange={handleChanges}
					/>

					<TextField
						variant="outlined"
						label="Watering Frequency"
						id="standard-number"
						name="h2o_frequency"
						type="number"
						InputLabelProps={{
							shrink: true
						}}
						onChange={handleChanges}
					/>

					{addErrors.h2o_frequency.length > 0 ? <p className="errors">{addErrors.h2o_frequency}</p> : null}

					<TextField
						variant="outlined"
						label="Image URL"
						id="outlined-basic"
						name="image_url"
						type="text"
						onChange={handleChanges}
					/>

					<Button
						variant="contained"
						color="primary"
						// onClick={handleSubmit}
						disabled={disabled}
						type="submit">
						Add plant
					</Button>
				</form>
			</Card>
		</div>
	);
};

export default Addplant;

// import React, { useContext, useState, useEffect } from 'react';
// import { plantcontext } from '../contexts/plantcontext';
// import { usercontext } from '../contexts/usercontext';
// import { useParams } from 'react-router-dom';
// import { Route, useHistory } from 'react-router-dom';
// import * as yup from 'yup'
// import '../styles/AddPlant.css'
// import { Form, Card, Input, InputNumber, Button } from 'antd';
// import { axiosWithAuth } from '../components/axiosWithAuth';

// // const schema = yup.object().shape({

// //     h2o_frequency: yup.number().required().min(10, 'must be at least 2 characters').max(99, 'cant be more than 2 characters'),

// //     nickname: yup.string(),
// //     species: yup.string(),
// //     image_url: yup.string(),
// // })

// const layout = {
//     labelCol: {
//       span: 8,
//     },
//     wrapperCol: {
//       span: 16,
//     },
//   };
//   const validateMessages = {
//     required: '${label} is required!',
//     types: {
//       species: '${label} must put plant species!',
//       number: '${label} is not a valid number!',
//     },
//     number: {
//       range: '${label} must be between ${min} and ${max}',
//     },
//   };

// const Addplant = () => {
//     // const [disabled, setDisabled] = useState(true)
//     // const [addErrors, setAddErrors] = useState({
//     //     h2o_frequency: ""
//     // })
//     const { addplant } = useContext(plantcontext);
//     const { id } = useParams();
//     const history = useHistory();
//     const [form] = Form.useForm()
//     const [newplant, setNewplant] = useState({
//         id: id,
//         user_id: parseInt(localStorage.getItem('id')),
//         nickname: '',
//         species: '',
//         h2o_frequency: '',
//         image_url: '',
//     });

//     // const [plants, setplants] = useState([]);

//     // useEffect(() => {
//     //     axiosWithAuth()
//     //         .get('/plants')
//     //         .then((res) => {
//     //             console.log(res);
//     //             setplants(res.data);
//     //         });
//     // }, []);
//     // useEffect(() => {
//     //     form.setFieldsValue({
//     //         nickname: '',
//     //         species: '',
//     //         h2o_frequency: null,
//     //         image_url: ''
//     //     })
//     // })
//     const onFinish = () => {
//         debugger
//         addplant(newplant)
//         // axiosWithAuth()
//         //     .post('/plants', values)
//         //     .then(res => {
//         //         console.log(res)
//         //         // setplants([...plants, values])
//         //     })
//         //     .catch(error => console.log(error))
//         history.push('/PlantsList');
//         window.location.reload(false);
//     };

//     // useEffect(() => {
//     //     schema.isValid(newplant).then(valid => {
//     //         setDisabled(!valid);
//     //     })
//     // }, [newplant])
//     // const validates = e => {
//     //     e.persist();
//     //     yup.reach(schema, e.target.name)
//     //      .validate(e.target.value)
//     //     .then(valid => {
//     //         setAddErrors({
//     //             ...addErrors,
//     //             [e.target.name]: ""
//     //         })
//     //     })
//     //     .catch(error =>{
//     //         setAddErrors({
//     //             ...addErrors,
//     //             [e.target.name]:error.errors[0]
//     //         })
//     //     })
//     // }

//     const handleChanges = (e) => {
//         // e.persist();
//         // validates(e)
//         // const plants = e.target.name;

//         setNewplant({
//             ...newplant,
//             [e.target.name]: e.target.value,
//             // user_id:Date.now(),
//             // id: Date.now(),
//         });
//     };

//     return (
//         <div className="Add-Plants">
//             <Card title='Add Your Plant' className='Add-Plant'>
//                 <Form
//                 {...layout}
//                 form={form}
//                 name="nest-messages"
//                 onFinish={onFinish}
//                 validateMessages={validateMessages}
//                 className='add-form'
//                 >
//                     <Form.Item
//                         name='nickname'
//                         label="Nickname"
//                         rules={[
//                         {
//                             required: true,
//                         },
//                         ]}
//                     >
//                         <Input onChange={handleChanges}/>
//                     </Form.Item>
//                     <Form.Item
//                         name='species'
//                         label="Species"
//                         rules={[
//                         {
//                             required: true
//                         },
//                         ]}
//                     >
//                         <Input onChange={handleChanges}/>
//                     </Form.Item>
//                     <Form.Item
//                         name='h2o_frequency'
//                         label="Water Frequency"
//                         rules={[
//                         {

//                             min: 0,
//                             max: 99,
//                             required: true
//                         },
//                         ]}
//                     >
//                         <InputNumber onChange={handleChanges}/>
//                     </Form.Item>
//                     <Form.Item name='image_url' label="Plant Image">
//                         <Input onChange={handleChanges}/>
//                     </Form.Item>

//                     <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//                         <Button type="primary" htmlType="submit">
//                         Add Plant
//                         </Button>
//                     </Form.Item>
//                 </Form>
//             </Card>
//         </div>

// );

// };

// export default Addplant;
