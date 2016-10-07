import React from 'react';
import { Router, Route, hashHistory } from 'react-router'
import App from './App';
import LogPageView from './LogPageView';

const routes = (
	<Router history={hashHistory} onUpdate={LogPageView}>
		<Route path="/" component={App}/>
	</Router>
);

export default routes;