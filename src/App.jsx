import React from 'react';
import SectionTitle from './SectionTitle';
import './App.css';

const App = () => {

	const title = 'Hello world!';

	const isDateDisplayed = true;

	const users = [
		{
			id: 1,
			name: 'John',
		},
		{
			id: 2,
			name: 'Lucy',
		},
		{
			id: 3,
			name: 'Jimmy',
		},
		{
			id: 4,
			name: 'James',
		},
		{
			id: 5,
			name: 'Carrie',
		},
		{
			id: 6,
			name: 'Carl',
		},
		{
			id: 7,
			name: 'Diana',
		},
	];

	const handleDisplayEventAlert = (event) => {
		alert(`A ${event.type} event has been triggered.`);
	};

	const handleDisplayUsernameInAlert = (username) => {
		alert(`Hello ${username}!`);
	};

	return (
		<>
			<h1 style={{
				color: '#21618c',
				textDecoration: 'underline',
			}}>{ title }</h1>
			<SectionTitle content="Clock" />
			{ 
				isDateDisplayed
					? <p>Today: { new Date().toLocaleDateString() } { new Date().toLocaleTimeString() }</p>
					: null
			}
			<button className='btn' onClick={handleDisplayEventAlert}>Click here!</button>
			<SectionTitle content="Users" />
			<div>
				<ul>
					{ 
						users.map((user) => {
							return <li key={user.id} onClick={() => handleDisplayUsernameInAlert(user.name)}>{ user.name }</li>;
						})
					}
				</ul>
			</div>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur voluptatum ut architecto sequi cumque quam sunt autem impedit corporis expedita, nesciunt numquam optio, esse debitis consectetur maiores aperiam corrupti quidem.
			</p>
		</>
	);

};

export default App;