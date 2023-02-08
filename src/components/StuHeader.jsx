import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Component&Pages.css';

const StuHeader = () => {
	const stuArr = useSelector((state) => state.storeData);
	return (
		<div className="subheader student-header">
			<h1 className="student-header-child">Students Details.</h1>
			<div className="link-btn student-header-child">
				<Link className="a-btn" to={'/AddNewStudent'} state={{ rowNum: stuArr.stuIndex }}>
					Add New Student
				</Link>
			</div>
		</div>
	);
};

export default StuHeader;
