import React, { useEffect } from "react";
import { Analytics, logEvent } from "firebase/analytics";

interface LocalHustleProps {
	firebaseAnalytics: Analytics
}

export default function LocalHustle(props: LocalHustleProps) {

	useEffect(() => {
		logEvent(props.firebaseAnalytics, "view_react_page", { page: "LocalHustle" });
	});

	return (
		<div>LocalHustle</div>
	);
}
