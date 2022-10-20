import React from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.scss";
import navLogo from "../assets/jadon-hansen-applications-white.svg";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark nav-bg">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
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
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Apps
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<li>
									<Link className="nav-link" to="/">
										All
									</Link>
								</li>
								<li><hr className="dropdown-divider" /></li>
								<li>
									<Link className="nav-link" to="weatherly">
										Weatherly
									</Link>
								</li>
								<li>
									<Link className="nav-link" to="digiwallet">
										DigiWallet
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}