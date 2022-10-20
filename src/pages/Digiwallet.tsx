import React from "react";
import { Link } from "react-router-dom";

import "../styles/digiwallet.scss";

export default function Digiwallet() {

	return (
		<div className="container-md digiwallet">
			<h4>DigiWallet home page coming soon!</h4>
			<p>
				Click <Link to="privacy_policy">here</Link> to view Privacy Policy
			</p>
			<div className="badges">
				<a
					href="https://play.google.com/store/apps/details?id=com.digiwalletapp.digiwallet&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="androidBadge" id="findMe" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
				</a>

				<a href="https://apps.apple.com/us/app/digiwallet/id1593438301?itsct=apps_box_badge&amp;itscg=30200"
					className="iosBadge"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1638230400&h=5e365ba6b8b5c634c223f9a9e3bff004"
						alt="Download on the App Store" style={{borderRadius: "13px", width: "250px", height: "83px"}} />
				</a>
			</div>
		</div>
	);
}
