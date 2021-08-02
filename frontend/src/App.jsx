import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import Home from './containers/Home';
import SignUp from './containers/SignUp';
import Login from './containers/Login';
import GameInfo from './containers/GameInfo';
import PrivateRoute from './components/PrivateRoute';
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
			<AuthProvider>
				<Switch>
					<Layout apis={{ GSearchAPI: GSearchAPI, GSearchOrderAPI: GSearchOrderAPI }}>
						<PrivateRoute exact path="/" component={Home} />
						<PrivateRoute exact path="/game/:id" children={<GetGameInfo />} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/login" component={Login} />
					</Layout>
				</Switch>
			</AuthProvider>
		</Router>
	)
}

export default App;