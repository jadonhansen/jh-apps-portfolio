import React from "react";

import AppsFooter from "../components/AppsFooter";
import "../styles/weatherly.scss";

export default function Weatherly() {

	return (
		<div className="container-fluid weatherly">
			<div className="row landing">
				<div className="col-md-8 left">
					<div className="app-title">
						<img src={require("../assets/weatherly/AppIcon.png")}></img>
						<h1>Weatherly</h1>
					</div>
					<p>Bringing you the best of weather, wherever, whenever.</p>
					<div className="badges">
						<a href="https://apps.apple.com/za/app/weatherly/id1583456822?itsct=apps_box_badge&amp;itscg=30200"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="iosBadge" alt="Download on the App Store" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1632096000&h=c1b7a961cd4d624bc76116e140473847" />
						</a>
						<a
							href="https://play.google.com/store/apps/details?id=com.jadonhansen.weatherly&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="androidBadge" id="findMe" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
						</a>
					</div>
				</div>
				<div className="col-md-4 right">
					<img className="landing-img" src={require("../assets/weatherly/weatherlyLanding1.png")}></img>
				</div>
			</div>

			<div className="row about">
				<div className="col-md-7 col-img">
					<img src={require("../assets/weatherly/weatherlyAbout.png")}></img>
				</div>
				<div className="col-md-5 right">
					<h3>About</h3>
					<p>Weatherly was designed for the user who doesn&apos;t have time to interpret complicated graphs and weather statistics (unless you&apos;re into that kind of thing).</p>
					<p>With screen time so high nowadays Weatherly makes sure you get your weather related answers as easily as possible and in no time at all.</p>
					<p>Easily personalise your experience with light or dark mode, imperial or metric unit settings and much more!</p>
				</div>
			</div>

			<div className="row features">
				<div className="col-12 col-md-4 mb-3">
					<h3>Features</h3>
					<p>- Your current location&apos;s weather which updates as you move about.</p>
					<p>- A 24 hour and 7 day forecast for your location.</p>
					<p>- Weather inaccuracy reporting.</p>
					<p>- Search capabilities for any location across the globe with an interactive map and text search.</p>
					<p>- Save searched locations to your personal list, accurate to its&apos; timezone.</p>
					<p>- Customisable wind speed units, temperature units, time format, rain units and much more!</p>
					<p>- Sunrise and sunset time.</p>
					<p>- Moon phases.</p>
					<p>- Dark theme & light theme.</p>
				</div>
				<div className="col-12 col-md-4 mb-3 img-col">
					<img src={require("../assets/weatherly/weatherlyFeatures.png")}></img>
				</div>
				<div className="col-12 col-md-4 mb-3">
					<h3>Premium features</h3>
					<p>- 24 hour and 7 day forecast graphs.</p>
					<p>- Save an infinite amount of locations.</p>
					<p>- Set a saved location to be your default home screen location.</p>
					<p>- No ads.</p>
				</div>
			</div>

			<div className="row api">
				<h3>API Source</h3>
				<p>The weather data originates from the global weather API provider, OpenWeatherMap, providing you with pinpoint accuracy data.</p>
				<p>Don&apos;t agree? Then utilise our in-app, weather-accuracy feature to report discrepancies.</p>
				<a href="https://openweathermap.org/guide" target="_blank" rel="noreferrer">OpenWeatherMap</a>
			</div>

			<div className="row reviews">
				<h3>Reviews from users</h3>
				<div className="col-12 col-md-4 mb-3">
					<div className="review-box">

					</div>
				</div>
				<div className="col-12 col-md-4 mb-3">
					<div className="review-box">
						
					</div>
				</div>
				<div className="col-12 col-md-4 mb-3">
					<div className="review-box">
						
					</div>
				</div>
			</div>

			<AppsFooter app="weatherly"/>
		</div>
	);
}
