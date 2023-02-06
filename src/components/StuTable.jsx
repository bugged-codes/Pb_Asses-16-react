import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Component&Pages.css';

const StuTable = () => {
	const stuArr = useSelector((state) => state.storeData);
	console.log('Stu Array is: ', stuArr);
	return (
		<>
			<table border={0}>
				<thead>
					<tr>
						<th className="td-thead">Name</th>
						<th className="td-thead">Age</th>
						<th className="td-thead">Course</th>
						<th className="td-thead">Batch</th>
						<th className="td-thead">Change</th>
						<th className="td-thead">Delete</th>
					</tr>
				</thead>
				<tbody>
					{stuArr.map((stuItem, stuIndex) => {
						console.log('stuIndex is: ', stuIndex);
						return (
							<tr key={stuIndex}>
								<td title="Student Name">{stuItem.Name}</td>
								<td title="Student Age">{stuItem.Age}</td>
								<td title="Student Course">{stuItem.Course}</td>
								<td title="Student Batch">{stuItem.Batch}</td>
								<td title="Edit Student Info">
									<Link to={'/EditStudent'} state={{ rowNum: stuIndex }}>
										Edit
									</Link>
								</td>
								<td title="Delete Student Info">
									<button>🗑️</button>
								</td>
								{/* <td>
									<Link to={'/AddNewStudent'} state={{ rowNum: stuIndex }}>
										A
									</Link>
								</td> */}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default StuTable;
