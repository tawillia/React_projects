import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
	const [personsState, setPersonsState] = useState({
		persons: [
			{ name: 'Tatiana', age: 34 },
			{ name: 'Max', age: 28 },
			{ name: 'Manu', age: 29 }
		]
	});

	const [otherState, setOtherState] = useState('some other value');

	console.log(personsState, otherState);
	const switchNameHandler = () => {
		//console.log('was clicked');
		// DO NOT DO THIS: this.state.persons[0].name = 'Tatiana Williamson';
		setPersonsState({
			persons: [
				{ name: 'Tatiana Williamson', age: 34 },
				{ name: 'Max', age: 28 },
				{ name: 'Manu', age: 30 }
			]
		});
	};

	return (
		<div className='App'>
			<h1>Hi, I'm a React App</h1>
			<button onClick={switchNameHandler}>Switch name</button>
			<Person
				name={personsState.persons[0].name}
				age={personsState.persons[0].age}
			/>
			<Person
				name={personsState.persons[1].name}
				age={personsState.persons[1].age}>
				My hobbies is coding with code
			</Person>
			<Person
				name={personsState.persons[2].name}
				age={personsState.persons[2].age}
			/>
		</div>
	);
};

export default App;
