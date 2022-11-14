import React from "react";
import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import Home from "./pages/Home";
import Weatherly from "./pages/Weatherly";
import Digiwallet from "./pages/Digiwallet";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import WeatherlyPolicy from "./pages/WeatherlyPolicy";
import DigiWalletPolicy from "./pages/DigiWalletPolicy";

function App() {
	const firebaseConfig = {
		apiKey: process.env.REACT_APP_API_KEY,
		authDomain: process.env.REACT_APP_AUTH_DOMAIN,
		projectId: process.env.REACT_APP_PROJECT_ID,
		storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
		messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
		appId: process.env.REACT_APP_APP_ID,
		measurementId: process.env.REACT_APP_MEASUREMENT_ID
	};

	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);

	return (
		<>
			<Navbar firebaseAnalytics={analytics} />

			<Routes>
				<Route path="/" element={<Home firebaseAnalytics={analytics}/>} />
				<Route path="weatherly" element={<Weatherly firebaseAnalytics={analytics}/>} />
				<Route path="weatherly/privacy_policy" element={<WeatherlyPolicy firebaseAnalytics={analytics}/>} />
				<Route path="digiwallet" element={<Digiwallet firebaseAnalytics={analytics}/>} />
				<Route path="digiwallet/privacy_policy" element={<DigiWalletPolicy firebaseAnalytics={analytics}/>} />
				<Route path="contact" element={<Contact firebaseApp={app} firebaseAnalytics={analytics}/>} />
			</Routes>
		</>
	);
}

export default App;
