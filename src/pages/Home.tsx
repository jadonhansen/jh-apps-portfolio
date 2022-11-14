import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Analytics, logEvent } from "firebase/analytics";

import "../styles/home.scss";

interface Home {
	firebaseAnalytics: Analytics
}

export default function Home(props: Home) {

	useEffect(() => {
		logEvent(props.firebaseAnalytics, "view_react_page", { page: "Home" });
	}, []);

	const linkClick = (link: string) => {
		logEvent(props.firebaseAnalytics, "home_link_click", { link: link });
	};

	return (
		<div className="container-sm home">
			<div className="row">
				<div className="col-md-12 col-lg-7 left">
					<h1>Apps built for the experience</h1>
					<p>Find out more about my existing two apps</p>
					<div className="link">
						<img className="app-icon" src={require("../assets/weatherly/AppIcon.png")}></img>
						<div className="hover-wrapper">
							<Link onClick={() => linkClick("weatherly")} className="app-link" to={"/weatherly"}>
								Weatherly
								<img className="arrow" src={require("../assets/icons/arrow-right.png")}></img>
							</Link>
						</div>
					</div>
					<div className="link">
						<img className="app-icon" src={require("../assets/digiwallet/AppIcon.png")}></img>
						<div className="hover-wrapper">
							<Link onClick={() => linkClick("digiwallet")} className="app-link" to={"/digiwallet"}>
								DigiWallet
								<img className="arrow" src={require("../assets/icons/arrow-right.png")}></img>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-md-12 col-lg-5 right">
					<img className="mockup" src={require("../assets/mockups/homeLanding.png")}></img>
				</div>
			</div>
		</div>
	);
}
