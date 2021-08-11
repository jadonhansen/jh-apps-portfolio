import React from 'react';
import {
	Switch,
	Route,
	Link,
	useRouteMatch
} from "react-router-dom";

// components
import PrivacyPolicy from './pages/PrivacyPolicy';
import Navbar from './components/Navbar';

export default function Weatherly() {

	let { path, url } = useRouteMatch();

	return (
		<div>
			<Navbar />

			<Switch>
				<Route exact path={`${path}`}>
					{ weatherlyHome() }
				</Route>
				<Route path={`${path}/privacy_policy`}>
					<PrivacyPolicy />
				</Route>
      		</Switch>
		</div>
	);

	function weatherlyHome() {
		return(
			<div className="container-fluid">
				<h4>Weatherly home page coming soon!</h4>
				<p>Click <Link to={`${url}/privacy_policy`}>here</Link> to view Privacy Policy</p>
			</div>
		);
	}
}
