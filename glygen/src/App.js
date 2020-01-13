import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes />
			<Footer />
		</div>
	);
}

export default App;
