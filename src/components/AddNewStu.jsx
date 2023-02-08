import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addData } from '../features/Slice';
import './Component&Pages.css';

const AddNewStu = () => {
	const loc = useLocation();
	const nav = useNavigate();
	const dispatch = useDispatch();
	const [newObj, setNewObj] = useState({
		Name: '',
		Age: '',
		Course: '',
		Batch: '',
	});

	const handleChange = (event) => {
		setNewObj({ ...newObj, [event.target.name]: event.target.value });
		console.log('NewObj is: ', newObj);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addData({ newObj }));
		nav('/Students');
	};

	const handleCancel = () => {
		nav('/Students');
	};
	return (
		<div>
			<form action="">
				<label htmlFor="Name">Name: </label>
				<input type="text" name="Name" onChange={handleChange} />
				<label htmlFor="Age">Age: </label>
				<input type="number" min={18} max={26} name="Age" onChange={handleChange} />
				<label htmlFor="Course">Course: </label>
				<input type="text" name="Course" onChange={handleChange} />
				<label htmlFor="Batch">Batch: </label>
				<input type="text" name="Batch" onChange={handleChange} />
			</form>
			<div className="btn-container">
				<button onClick={handleCancel}>Cancel</button>
				<button onClick={handleSubmit}>Submit</button>
			</div>
		</div>
	);
};

export default AddNewStu;
