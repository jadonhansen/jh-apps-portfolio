import React from "react";
import { Link } from "react-router-dom";

import "../styles/footer.scss";

export default function AppsFooter() {
	return (
		<div className="row footer">
			<a>Get it for Android</a>
			<a>Get it for iOS</a>
			<a>Weatherly Privacy Policy</a>
			<a>Contact</a>
		</div>
	);
}
