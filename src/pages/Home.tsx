import React from "react";
import { Link } from "react-router-dom";

import "../styles/home.scss";

export default function Home() {
	return (
		<div className="container-md page-container">
			<h4>Apps home page coming soon!</h4>
			<p>For now, checkout our latest two apps
				<Link className="link_home_w" to={"/weatherly"}>
					Weatherly
				</Link>
				and
				<Link className="link_home_dw" to={"/digiwallet"}>
					DigiWallet
				</Link>
			</p>
			<p>or</p>
			<Link className="link_home_contact" to={"/contact"}>
				Contact Us
			</Link>
		</div>
	);
}
