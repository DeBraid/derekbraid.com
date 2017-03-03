import React from 'react';
import { Router, Route, hashHistory } from 'react-router'
import App from './App';
import LogPageView from './LogPageView';
import PodcastHome from './PodcastHome';

const routes = (
	<Router history={hashHistory} onUpdate={LogPageView}>
		<Route path="/" component={App}/>
		<Route path="/podcast" component={PodcastHome}/>
	</Router>
);

export default routes;