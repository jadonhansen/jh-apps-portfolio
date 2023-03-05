import React from "react";
import { Link } from "react-router-dom";
import { Analytics, logEvent } from "firebase/analytics";

import "../styles/navbar.scss";
import navLogo from "../assets/jadon-hansen-applications-white.svg";

interface NavbarProps {
	firebaseAnalytics: Analytics
}

export default function Navbar(props: NavbarProps) {

	const linkClick = (link: "weatherly" | "digiwallet" | "localhustle" | "home-logo" | "kofi" | "home" | "contact") => {
		logEvent(props.firebaseAnalytics, "navbar_link_click", { link: link });
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark nav-bg">
			<div className="container-fluid">
				<Link onClick={() => linkClick("home-logo")} className="navbar-brand" to="/">
					<img src={navLogo} alt="jhLogo" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarContent"
					aria-controls="navbarContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">

						<li className="nav-item kofi-item">
							<a onClick={() => linkClick("kofi")} href="https://ko-fi.com/N4N6BVG9Q" target="_blank" rel="noreferrer">
								<img className="kofi" src="https://storage.ko-fi.com/cdn/kofi1.png?v=3" alt='Buy Me a Coffee at ko-fi.com' />
							</a>
						</li>

						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Apps
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<li>
									<Link onClick={() => linkClick("home")} className="nav-link" to="/">
										Home
									</Link>
								</li>
								<li><hr className="dropdown-divider" /></li>
								<li>
									<Link onClick={() => linkClick("weatherly")} className="nav-link" to="weatherly">
										Weatherly
									</Link>
								</li>
								<li>
									<Link onClick={() => linkClick("digiwallet")} className="nav-link" to="digiwallet">
										DigiWallet
									</Link>
								</li>
								<li>
									<Link onClick={() => linkClick("localhustle")} className="nav-link" to="local_hustle">
										Local Hustle
									</Link>
								</li>
							</ul>
						</li>

						<li className="nav-item">
							<Link onClick={() => linkClick("contact")} className="nav-link" to="/contact">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}