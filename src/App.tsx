import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Weatherly from "./apps/weatherly/Weatherly";
import Digiwallet from "./apps/digiwallet/Digiwallet";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar";

function App() {
	return (
		<div>
			<Navbar/>

			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="weatherly/*" element={<Weatherly />} />
				<Route path="digiwallet/*" element={<Digiwallet />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
