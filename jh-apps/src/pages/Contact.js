import React from 'react'
import {
	Link,
} from "react-router-dom";

export default function Contact() {
	return (
		<div className="container-fluid container-pages">
			<h4>Contact page coming soon!</h4>
			<p>For now, any queries, suggestions, issues etc can be emailed to dev.weatherly@gmail.com</p>

			<Link className="link" to={`/`}>Back to Home</Link>
			<Link className="link_two" to={`/weatherly/privacy_policy`}>View Weatherly's Privacy Policy</Link>
		</div>
	)
}
