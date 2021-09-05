import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Weatherly from "./apps/weatherly/Weatherly";
import Contact from "./components/Contact";

// Add more app home pages to this router.
// They will then be available on a global scale.

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/weatherly">
					<Weatherly />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
