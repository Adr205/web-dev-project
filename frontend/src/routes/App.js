import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Test from '../containers/Test';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/test" component={Test} />
            </Switch>
        </Router>
    )
}

export default App;