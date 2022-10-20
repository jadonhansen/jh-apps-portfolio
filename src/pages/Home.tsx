import React from "react";
import { Link } from "react-router-dom";

import "../styles/home.scss";

export default function Home() {
	return (
		<div className="container-md home">
			<div className="row">
				<div className="col-8 left">
					<h1>Apps made for the experience</h1>
					<p>Check out my existing two apps</p>
					<div className="app-link">
						<img className="app-icon" src={require("../assets/weatherly/AppIcon.png")}></img>
						<Link className="link_home_w" to={"/weatherly"}>Weatherly</Link>
					</div>
					<div className="app-link">
						<img className="app-icon" src={require("../assets/digiwallet/AppIcon.png")}></img>
						<Link className="link_home_dw" to={"/digiwallet"}>Digiwallet</Link>
					</div>
				</div>
				<div className="col-4 right">
					<p>image</p>
				</div>
			</div>
		</div>
	);
}
