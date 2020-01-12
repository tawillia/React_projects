import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import Header from './components/layout/Header';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes />
		</div>
	);
}

export default App;
