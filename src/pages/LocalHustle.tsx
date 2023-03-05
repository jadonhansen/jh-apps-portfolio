import React, { useEffect } from "react";
import { Analytics, logEvent } from "firebase/analytics";

import AppsFooter from "../components/AppsFooter";
import "../styles/localhustle.scss";

interface LocalHustleProps {
	firebaseAnalytics: Analytics
}

export default function LocalHustle(props: LocalHustleProps) {

	useEffect(() => {
		logEvent(props.firebaseAnalytics, "view_react_page", { page: "LocalHustle" });
	});

	return (
		<div className="container-fluid localhustle">
			<div className="row landing">
				<h1>Coming soon!</h1>
			</div>

			<AppsFooter app="localhustle"/>
		</div>
	);
}
