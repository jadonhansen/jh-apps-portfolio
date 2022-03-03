import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Weatherly from './apps/weatherly/Weatherly';
import Digiwallet from './apps/digiwallet/Digiwallet';
import Contact from './pages/Contact';

import Navbar from './components/navbar';

function App() {
	return (
		<Router>
			<Navbar/>

			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/weatherly'>
					<Weatherly />
				</Route>
				<Route path='/digiwallet'>
					<Digiwallet />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
