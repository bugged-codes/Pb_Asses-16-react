import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav&Route.css';

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<ul className="nav-list">
					<li className="nav-list-items">
						<NavLink className={({ isActive }) => (isActive ? 'active-class' : 'notActive-class')} to={'/'}>
							Home
						</NavLink>
					</li>
					<li className="nav-list-items">
						<NavLink className={({ isActive }) => (isActive ? 'active-class' : 'notActive-class')} to={'/Students'}>
							Students
						</NavLink>
					</li>
					<li className="nav-list-items">
						<NavLink className={({ isActive }) => (isActive ? 'active-class' : 'notActive-class')} to={'/ContactUs'}>
							Contact Us
						</NavLink>
					</li>
					{/* <li className="nav-list-items">
						<NavLink className={({ isActive }) => (isActive ? "active-class" : "notActive-class")} to={"/EditStudents"}>
							Edit
						</NavLink>
					</li> */}
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
