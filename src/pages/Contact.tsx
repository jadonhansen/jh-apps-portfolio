import React from "react";

import "../styles/contact.scss";

export default function Contact() {
	return (
		<div className="container-fluid contact">
			<h2>Want to get in touch?</h2>
			<p className="mb-4">Send me any queries, suggestions, issues etc. or directly email me at apps@jadonhansen.com</p>
			<div className="row contact-content">

				<div className="col-12 col-md-10 left">
					<div className="form-floating mb-3">
						<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
						<label htmlFor="floatingInput">Email address</label>
					</div>
					<div className="form-floating mb-3">
						<input type="text" className="form-control" id="floatingText" placeholder="Full name"/>
						<label htmlFor="floatingText">Full name</label>
					</div>
					<div className="form-floating mb-4">
						<textarea className="form-control" placeholder="Type your message here" id="floatingTextarea"></textarea>
						<label htmlFor="floatingTextarea">Message</label>
					</div>
					<button type="button" className="btn btn-light">Send</button>
				</div>

				<div className="col-12 col-md-1 right">
					<div className="social-wrapper">
						<img src={require("../assets/icons/instagram.png")}></img>
						<a href="https://www.instagram.com/developer.jadon" target="_blank" rel="noreferrer">Instagram</a>
					</div>
					<div className="social-wrapper">
						<img src={require("../assets/icons/twitter.png")}></img>
						<a href="https://twitter.com/JadonHansen" target="_blank" rel="noreferrer">Twitter</a>
					</div>
					<div className="social-wrapper">
						<img src={require("../assets/icons/linkedin.png")}></img>
						<a href="https://www.linkedin.com/in/jadonhansen/" target="_blank" rel="noreferrer">LinkedIn</a>
					</div>
					<div className="social-wrapper">
						<img src={require("../assets/icons/github.png")}></img>
						<a href="https://github.com/jadonhansen" target="_blank" rel="noreferrer">GitHub</a>
					</div>
				</div>
			</div>
		</div>
	);
}
