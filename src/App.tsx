import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Weatherly from "./pages/Weatherly";
import Digiwallet from "./pages/Digiwallet";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import WeatherlyPolicy from "./pages/WeatherlyPolicy";
import DigiWalletPolicy from "./pages/DigiWalletPolicy";

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="weatherly" element={<Weatherly />} />
				<Route path="weatherly/privacy_policy" element={<WeatherlyPolicy />} />
				<Route path="digiwallet" element={<Digiwallet />} />
				<Route path="digiwallet/privacy_policy" element={<DigiWalletPolicy />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
