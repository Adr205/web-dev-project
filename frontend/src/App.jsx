import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './containers/Home';
const config = require('./config');

const GSearchAPI = config.api.GamesSearchApi;
const GSearchOrderAPI = config.api.GameSearchOrdering;

const App = () => {
	return (
		<Router>
			<Switch>
				<Layout apis={{ GSearchAPI: GSearchAPI, GSearchOrderAPI: GSearchOrderAPI }}>
					<Route exact path="/" component={Home} />
				</Layout>
			</Switch>
		</Router>
	)
}

export default App;