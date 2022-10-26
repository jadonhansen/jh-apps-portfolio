import React, { useState } from "react";

import "../styles/contact.scss";

export default function Contact() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<undefined | string>(undefined);
	const [success, setSuccess] = useState(false);

	const validEmail = (email: string): boolean => {
		if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
			return true;
		}
		return false;
	};

	const send = () => {
		setLoading(true);
		setError(undefined);
		setSuccess(false);

		if (!email || !name || !message || email.trim() == "" || name.trim() == "" || message.trim() == "") {
			setError("Please make sure all fields are filled out correctly.");
		}
		else if (!validEmail(email)) setError("Invalid email address. Please try again.");
		else {
			// send email
			setSuccess(true); // or fail if err
			setEmail("");
			setName("");
			setMessage("");
		}

		setLoading(false);
	};

	return (
		<div className="container-fluid contact">
			<h2>Want to get in touch?</h2>
			<p className="mb-4">Send me any queries, suggestions, issues etc. or directly email me at apps@jadonhansen.com</p>
			<div className="row contact-content">

				<div className="col-12 col-md-10 left">
					{error && <p className="error">{error}</p>}
					{success && <p className="success">Message sent! We will be in contact soon.</p>}
					<div className="form-floating mb-3">
						<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com"/>
						<label htmlFor="floatingInput">Email address</label>
					</div>
					<div className="form-floating mb-3">
						<input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="floatingText" placeholder="Full name"/>
						<label htmlFor="floatingText">Full name</label>
					</div>
					<div className="form-floating mb-4">
						<textarea className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message here" id="floatingTextarea"></textarea>
						<label htmlFor="floatingTextarea">Message</label>
					</div>
					<button type="button" disabled={loading} onClick={send} className="btn btn-light">Send</button>
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
