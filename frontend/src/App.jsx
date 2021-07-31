import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './containers/Home';
import GameInfo from './containers/GameInfo';
const config = require('./config');

const GSearchAPI = config.api.GamesSearchApi;
const GSearchOrderAPI = config.api.GameSearchOrdering;

const GetGameInfo = () => {
	let { id } = useParams();

	return (
		<GameInfo id={id} />
	)
}

const App = () => {
	return (
		<Router>
			<Switch>
				<Layout apis={{ GSearchAPI: GSearchAPI, GSearchOrderAPI: GSearchOrderAPI }}>
					<Route exact path="/" component={Home} />
					<Route exact path="/game/:id" children={<GetGameInfo/>} />
				</Layout>
			</Switch>
		</Router>
	)
}

export default App;