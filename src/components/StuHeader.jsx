import React from 'react';
import { Link } from 'react-router-dom';
import './Component&Pages.css';

const StuHeader = () => {
	return (
		<div className="subheader student-header">
			<h1 className="student-header-child">Students Details.</h1>
			<div className="link-btn student-header-child">
				<Link className="a-btn" to={'/AddNewStudent'}>
					Add New Student
				</Link>
			</div>
		</div>
	);
};

export default StuHeader;
