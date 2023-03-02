import React, { useEffect } from "react";
import { Analytics, logEvent } from "firebase/analytics";

interface LocalHustlePolicyProps {
	firebaseAnalytics: Analytics
}

export default function LocalHustlePolicy(props: LocalHustlePolicyProps) {

	useEffect(() => {
		logEvent(props.firebaseAnalytics, "view_react_page", { page: "LocalHustlePolicy" });
	}, []);

	const goBack = () => {
		logEvent(props.firebaseAnalytics, "localhustle_policy_go_back_btn");
	};

	return (
		<div>LocalHustlePolicy</div>
	);
}
