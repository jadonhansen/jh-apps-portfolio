import React from "react";
import { Link } from "react-router-dom";

import "../styles/weatherly.scss";

export default function Weatherly() {

	return (
		<div className="container-md weatherly">
			<h4>Weatherly home page coming soon!</h4>
			<p>
				Click <Link to="privacy_policy">here</Link> to view Privacy Policy
			</p>
			<div className="badges">
				<a
					href="https://play.google.com/store/apps/details?id=com.jadonhansen.weatherly&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="androidBadge" id="findMe" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
				</a>
				<a href="https://apps.apple.com/za/app/weatherly/id1583456822?itsct=apps_box_badge&amp;itscg=30200"
					className="iosBadge"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1632096000&h=c1b7a961cd4d624bc76116e140473847"
						alt="Download on the App Store" style={{borderRadius: "13px", width: "250px", height: "83px"}} />
				</a>
			</div>
		</div>
	);
}
