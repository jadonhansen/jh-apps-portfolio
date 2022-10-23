import React from "react";
import { Link } from "react-router-dom";

import "../styles/home.scss";

export default function Home() {
	return (
		<div className="container-sm home">
			<div className="row">
				<div className="col-md-12 col-lg-7 left">
					<h1>Apps built for the experience</h1>
					<p>Find out more about my existing two apps</p>
					<div className="link">
						<img className="app-icon" src={require("../assets/weatherly/AppIcon.png")}></img>
						<div className="hover-wrapper">
							<Link className="app-link" to={"/weatherly"}>Weatherly</Link>
							<img className="arrow" src={require("../assets/icons/arrow-right.png")}></img>
						</div>
					</div>
					<div className="link">
						<img className="app-icon" src={require("../assets/digiwallet/AppIcon.png")}></img>
						<div className="hover-wrapper">
							<Link className="app-link" to={"/digiwallet"}>Digiwallet</Link>
							<img className="arrow" src={require("../assets/icons/arrow-right.png")}></img>
						</div>
					</div>
				</div>
				<div className="col-md-12 col-lg-5 right">
					<img className="mockup" src={require("../assets/mockups/homePageMockup.png")}></img>
				</div>
			</div>
		</div>
	);
}
