import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/home/Home';

const Routes = props => (
	<Switch>
		<Route path='/home' component={Home} />
		<Route path='/' component={Home} />
	</Switch>
);

export default Routes;
