import React from "react";
import { Link } from "react-router-dom";

import "../styles/footer.scss";

interface AppsFooter {
	app: string
}

export default function AppsFooter({ app }: AppsFooter) {

	return (
		<div className="row footer">
			<div className="col-md-6 left">
				{
					app === "weatherly" &&
					(<div className="badges">
						<a href="https://apps.apple.com/za/app/weatherly/id1583456822?itsct=apps_box_badge&amp;itscg=30200"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="iosBadge" alt="Download on the App Store" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1632096000&h=c1b7a961cd4d624bc76116e140473847"/>
						</a>
						<a
							href="https://play.google.com/store/apps/details?id=com.jadonhansen.weatherly&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="androidBadge" id="findMe" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
						</a>
					</div>)
				}
				{
					app === "digiwallet" &&
					(<div className="badges">
						<a href="https://apps.apple.com/us/app/digiwallet/id1593438301?itsct=apps_box_badge&amp;itscg=30200"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="iosBadge" alt="Download on the App Store" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1638230400&h=5e365ba6b8b5c634c223f9a9e3bff004"/>
						</a>

						<a
							href="https://play.google.com/store/apps/details?id=com.digiwalletapp.digiwallet&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="androidBadge" id="findMe" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
						</a>
					</div>)
				}
			</div>
			<div className="col-md-6 right">
				<div className="links">
					{app === "weatherly" && <Link to={"/weatherly/privacy_policy"}>Privacy Policy</Link>}
					{app === "digiwallet" && <Link to={"/digiwallet/privacy_policy"}>Privacy Policy</Link>}
					<Link to={"/contact"}>Contact</Link>
				</div>
				<a href="https://ko-fi.com/N4N6BVG9Q" target="_blank" rel="noreferrer">
					<img className="kofi" src="https://storage.ko-fi.com/cdn/kofi1.png?v=3" alt='Buy Me a Coffee at ko-fi.com' />
				</a>
			</div>
		</div>
	);
}
