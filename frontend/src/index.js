import React from 'react';
import ReactDOM from 'react-dom';
import FirebaseAppProvider from 'reactfire';
import firebaseConfig from './firebase-config';
import App from './App';

ReactDOM.render(
	<FirebaseAppProvider firebaseConfig={firebaseConfig}>
		<App />
	</FirebaseAppProvider>,
	document.getElementById('root')
);


