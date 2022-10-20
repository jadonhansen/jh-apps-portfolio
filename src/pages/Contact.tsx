import React from "react";

import "../styles/contact.scss";

export default function Contact() {
	return (
		<div className="container-md contact">
			<h2>Want to get in touch?</h2>
			<p className="mb-4">Send me any queries, suggestions, issues etc. or directly email me at apps@jadonhansen.com</p>
			<div className="contact-content">
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
		</div>
	);
}
