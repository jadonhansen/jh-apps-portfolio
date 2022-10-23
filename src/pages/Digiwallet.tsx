import React from "react";
import { Link } from "react-router-dom";

import "../styles/digiwallet.scss";

export default function Digiwallet() {

	return (
		<div className="container-md digiwallet">
			<div className="row landing">
				<div className="col-md-8">
					<div className="app-title">
						<img src={require("../assets/digiwallet/AppIcon.png")}></img>
						<h1>Digiwallet</h1>
					</div>
					<p>For an effortless shopping experience.</p>
					<div className="badges">
						<a href="https://apps.apple.com/us/app/digiwallet/id1593438301?itsct=apps_box_badge&amp;itscg=30200"
							className="iosBadge"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1638230400&h=5e365ba6b8b5c634c223f9a9e3bff004"
								alt="Download on the App Store" style={{borderRadius: "13px", width: "250px", height: "83px"}} />
						</a>

						<a
							href="https://play.google.com/store/apps/details?id=com.digiwalletapp.digiwallet&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="androidBadge" id="findMe" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
						</a>
					</div>
				</div>
				<div className="col-md-4">
					<img className="landing-img" src={require("../assets/digiwallet/digiwalletLanding.png")}></img>
				</div>
			</div>

			<div className="row about">
				<div className="col-md-6">
					<img src={require("../assets/digiwallet/digiwalletAbout.png")}></img>
				</div>
				<div className="col-md-6">
					<h3>About</h3>
					<p>With DigiWallet you&apos;re able to digitally store all of your barcoded loyalty, rewards or club cards.</p>
					<p> Developed for an effortless experience - you&apos;re able to add, edit, find and display your cards all while you&apos;re in line at the till, it&apos;s that quick!</p>
					<p>We&apos;ve made it possible to choose from an ever expanding range of brands or by creating cards of your own. If you have any cards you would love to see, feel free to let us know by using the brand suggestion feature in the app.</p>
					<p>DigiWallet was designed to ease the shopping experience, a problem we have all faced at one point.</p>
				</div>
			</div>

			<div className="row features">
				<h3>Features</h3>
				<div className="col-md-6">
					<img src={require("../assets/digiwallet/digiwalletFeatures.png")}></img>
				</div>
				<div className="col-md-6">
					<p>Add any card with a barcode for scanning.</p>
					<p>Pick from well-known card brands or create your own custom cards.</p>
					<p>Easily find and organise the way you view your cards.</p>
					<p>Dark theme and light theme.</p>
				</div>
			</div>

			<div className="row">
				<h3>Reviews from users</h3>
				<div className="review-box">

				</div>
				<div className="review-box">

				</div>
				<div className="review-box">

				</div>
			</div>
		</div>
	);
}
