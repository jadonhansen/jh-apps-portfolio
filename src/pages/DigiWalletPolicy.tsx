import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Analytics, logEvent } from "firebase/analytics";

import "../styles/privacy_policy.scss";

interface DigiWalletPolicyProps {
	firebaseAnalytics: Analytics
}

export default function DigiWalletPolicy(props: DigiWalletPolicyProps) {

	useEffect(() => {
		logEvent(props.firebaseAnalytics, "view_react_page", { page: "DigiWalletPolicy" });
	}, []);

	const goBack = () => {
		logEvent(props.firebaseAnalytics, "digiwallet_policy_go_back_btn");
	};

	return (
		<div className="container-md privacy-container">
			<div className="btn-box">
				<Link onClick={goBack} className="back-button" to={"/digiwallet"}>Back to DigiWallet</Link>
			</div>

			<h3>DigiWallet&apos;s Privacy Policy</h3>
			<h6>Effective as of 01-01-2021</h6>
			<p className="text-muted">If there are any questions regarding the below, please do not
				hesitate to contact support.
			</p>

			<ol className="ol-index">
				<li>Introduction</li>
				<li>About this policy</li>
				<li>Your rights and your preferences: Giving you choice and control</li>
				<li>Personal data we collect from you</li>
				<li>What we use your personal data for</li>
				<li>Sharing your personal data</li>
				<li>Data retention and deletion</li>
				<li>Transfer to other countries</li>
				<li>Links</li>
				<li>Keeping your personal data safe</li>
				<li>Children</li>
				<li>Changes to this Policy</li>
				<li>How to contact us</li>
			</ol>

			<ol className="ol-content">
				{/* 1. INTRODUCTION */}
				<li>
					<p className="li-heading">Introduction</p>
					<p>Thanks for using DigiWallet! At DigiWallet, we want to give you the best possible experience to
						ensure that you enjoy our service. Your privacy and the security of your personal data is, and will
						always be, enormously important to us. So, we want to transparently explain how and why we gather,
						store, share and use your personal data - as well as outline the controls and choices you have
						around when and how you choose to share your personal data.
					</p>
					<p>That is our objective, and this Privacy Policy (&apos;Policy&apos;) will explain exactly what we mean in further detail below.</p>
				</li>

				{/* 2. ABOUT THE POLICY */}
				<li>
					<p className="li-heading">About this Policy</p>
					<p>
						This Policy sets out the essential details relating to your personal data relationship with
						DigiWallet. From time to time, we may develop new or offer additional services. If the introduction
						of these new or additional services results in any material change to the way we collect or process
						your personal data we will provide you with more information or additional terms or policies. Unless
						stated otherwise when we introduce these new or additional services, they will be subject to this
						Policy.
					</p>
					<p>The aim of this Policy is to:</p>
					<p>- Ensure that you understand what personal data we collect about you, the reasons why we collect and use it, and who we share it with;</p>
					<p>- Explain the way we use the personal data that you share with us in order to give you a great experience when you are using DigiWallet; and</p>
					<p>- Explain your rights and choices in relation to the personal data we collect and process about you and how we will protect your privacy.</p>
					<p>
						For information on how to contact us if you ever have any questions or concerns, please see Section 13 &apos;How to contact us&apos; below.
						Alternatively, if you do not agree with the content of this Policy, then please remember it is your choice whether you want to use DigiWallet.
					</p>
				</li>

				{/* 3. Your rights and your preferences: Giving you choice and control */}
				<li>
					<p className="li-heading">Your rights and your preferences: Giving you choice and control</p>
					<p>
						The General Data Protection Regulation or &apos;GDPR&apos; gives certain rights to individuals in relation to their personal data. Accordingly,
						we are happy to offer transparency and access controls to help users take advantage of those rights. As available and except as limited
						under applicable law, the rights afforded to individuals are:</p>
					<p>- Right of access - the right to be informed of, and request access to, the personal data we process about you;</p>
					<p>- Right to rectification - the right to request that we amend or update your personal data where it is inaccurate or incomplete;</p>
					<p>- Right to erasure - the right to request that we delete your personal data;</p>
					<p>- Right to restrict - the right to request that we temporarily or permanently stop processing all or some of your personal data;</p>
					<p>- Right to object - 1. the right, at any time, to object to us processing your personal data on grounds relating to your particular situation;
						2. the right to object to your personal data being processed for direct marketing purposes;</p>
					<p>- Right to data portability - the right to request a copy of your personal data in electronic format and
						the right to transmit that personal data for use in another party&apos;s service; and</p>
					<p>- Right not to be subject to automated decision-making - the right to not be subject to a decision based solely on
						automated decision making, including profiling, where the decision would have a legal effect on you or produce a similarly significant effect.</p>
					<p>In order to enable you to learn more about these rights, exercise these rights with ease, and record your
						preferences in relation to how DigiWallet uses your personal data, we provide the following resources:</p>
					<p>- Contact information which allows you to make a request regarding the use, rectification, access
						and erasure of personal data.</p>
					<p>If you have any questions about your privacy, your rights, or how to exercise them, please contact support found on the DigiWallet app menu.</p>
				</li>

				{/* 4. Personal data we collect from you */}
				<li>
					<p className="li-heading">Personal data we collect from you</p>
					<p>The points below describes personal data collected when you sign up for a DigiWallet account</p>
					<p>- Usage Data: Specifically this is your device type when logging crashlytics data.</p>
				</li>

				{/* 5. What we use your personal data for */}
				<li>
					<p className="li-heading">What we use your personal data for</p>
					<p>When you use or interact with the DigiWallet app, we use a variety of technologies to process the personal data we
						collect about you for various reasons. We have set out the points below as the reasons why we process your personal data:</p>
					<ul>
						<li>Purpose: To understand, diagnose, troubleshoot, and fix issues with the DigiWallet service.
							Associated Data: Usage Data.</li>
						<li>Purpose: To evaluate and develop new features, technologies, and improvements to the DigiWallet
							service. Associated Data: Usage Data.</li>
					</ul>
				</li>

				{/* 6. Sharing your personal data */}
				<li>
					<p className="li-heading">Sharing your personal data</p>
					<p>We have set out the categories of recipients of the personal data collected or generated through your use of the DigiWallet service.</p>
					<ul>
						<li>Recipient: Private DigiWallet personnel. Reason: We will share your personal data with authorised
							DigiWallet employees to fix, update and improve our services.</li>
					</ul>
				</li>

				{/* 7. Data retention and deletion */}
				<li>
					<p className="li-heading">Data retention and deletion</p>
					<p>We keep your personal data only as long as necessary to provide you with the DigiWallet service and
						for legitimate and essential business purposes, such as maintaining the performance of the
						DigiWallet service, making data-driven business decisions about new features and offerings.</p>
					<p>All personal data is anonymous and can in no way identify you as an individual.</p>
				</li>

				{/* 8. Transfer to other countries */}
				<li>
					<p className="li-heading">Transfer to other countries</p>
					<p>DigiWallet shares your personal data globally with the necessary services to securely store and process your data as specified in this Policy.</p>
				</li>

				{/* 9. Links */}
				<li>
					<p className="li-heading">Links</p>
					<p>We may display advertisements from third parties and other content that links to third-party websites. We cannot control
						or be held responsible for third parties&apos; privacy practices and content. If you click on a third-party advertisement or link, please
						understand that you are leaving the DigiWallet service and any personal data you provide will not be covered by this Policy. Please read their
						privacy policies to find out how they collect and process your personal data.</p>
				</li>

				{/* 10. Keeping your personal data safe */}
				<li>
					<p className="li-heading">Keeping your personal data safe</p>
					<p>We are committed to protecting our users&apos; personal data. We implement appropriate technical and
						organisational measures to help protect the security of your personal data; however, please note
						that no system is ever completely secure. Also note that all personal data is completely anonymous
						and can in no way identify you as an individual.</p>
				</li>

				{/* 11. Children */}
				<li>
					<p className="li-heading">Children</p>
					<p>The DigiWallet service is not directed to children under the age of 13 years. The DigiWallet service is also not offered
						to children whose age makes it illegal to process their personal data, even anonymously, or requires parental consent for the processing of their personal data
						under the GDPR or other local law.</p>
					<p>We do not knowingly collect anonymous, personal data from children under 13 years or under the applicable age
						limit (the &apos;Age Limit&apos;). If you are under the Age Limit, please do not use the DigiWallet service.</p>
				</li>

				{/* 12. Changes to this Policy */}
				<li>
					<p className="li-heading">Changes to this Policy</p>
					<p>We may occasionally make changes to this Policy. When we make material changes to this Policy, we&apos;ll provide you with
						prominent notice as appropriate under the circumstances, e.g., by displaying a prominent notice within the DigiWallet service or by sending you
						an email and/or a device notification. We may notify you in advance. Please, therefore, make sure you read any such notice carefully.</p>
				</li>

				{/* 13. How to contact us */}
				<li>
					<p className="li-heading">How to contact us</p>
					<p>Please email us at: apps(at)jadonhansen.com</p>
				</li>
			</ol>
			<p className={"text-muted bottom-info"}>We hope to provide you with a unique experience while using DigiWallet!</p>
			<p className="text-muted">© 2022 Jadon Hansen.</p>
		</div>
	);
}
