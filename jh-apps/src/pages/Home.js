import React from "react";
import { Link } from "react-router-dom";

// styles
import "./home.scss";

export default function Home() {
	return (
		<div className="container-fluid container-pages">
			<h4>Apps home page coming soon!</h4>
			<p>For now, check out our latest app, Weatherly (coming soon to the iOS App Store)</p>

			<a
				href="https://play.google.com/store/apps/details?id=com.jadonhansen.weatherly&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img id="findMe" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
			</a>

			<p>or</p>
			<Link className="link" to={`/contact`}>
				Contact Us
			</Link>
			<Link className="link_two" to={`/weatherly/privacy_policy`}>
				View Weatherly's Privacy Policy
			</Link>
		</div>
	);
}
