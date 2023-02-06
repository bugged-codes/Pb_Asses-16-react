import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { editData } from '../features/Slice';
import './Component&Pages.css';

const EditStu = () => {
	const loc = useLocation();
	const nav = useNavigate();
	const stuIndex = loc.state.rowNum; //What is this?
	const dispatch = useDispatch();
	const editArr = useSelector((state) => state.storeData);
	console.log('StuIndex is: ' + stuIndex);
	const newObj = {
		Name: editArr[stuIndex].Name,
		Age: editArr[stuIndex].Age,
		Course: editArr[stuIndex].Course,
		Batch: editArr[stuIndex].Batch,
	};

	const handleChange = (event) => {
		newObj[event.target.name] = event.target.value;
		console.log('NewObj is: ', newObj);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(editData({ newObj, stuIndex }));
		nav('/Students');
	};

	const handleCancel = () => {
		nav('/Students');
	};
	return (
		<div>
			<form action="">
				<label htmlFor="Name">Name: </label>
				<input type="text" placeholder={editArr[stuIndex].Name} name="Name" onChange={handleChange} />
				<label htmlFor="Age">Age: </label>
				<input type="number" min={18} max={26} placeholder={editArr[stuIndex].Age} name="Age" onChange={handleChange} />
				<label htmlFor="Course">Course: </label>
				<input type="text" placeholder={editArr[stuIndex].Course} name="Course" onChange={handleChange} />
				<label htmlFor="Batch">Batch: </label>
				<input type="text" placeholder={editArr[stuIndex].Batch} name="Batch" onChange={handleChange} />
			</form>
			<div className="btn-container">
				<button onClick={handleCancel}>Cancel</button>
				<button onClick={handleSubmit}>Submit</button>
			</div>
		</div>
	);
};

export default EditStu;
