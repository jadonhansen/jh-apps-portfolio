import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Analytics, logEvent } from "firebase/analytics";

import "../styles/privacy_policy.scss";

interface WeatherlyPolicyProps {
	firebaseAnalytics: Analytics
}

export default function WeatherlyPolicy(props: WeatherlyPolicyProps) {

	useEffect(() => {
		logEvent(props.firebaseAnalytics, "view_react_page", { page: "WeatherlyPolicy" });
	}, []);

	const goBack = () => {
		logEvent(props.firebaseAnalytics, "weatherly_policy_go_back_btn");
	};

	return (
		<div className="container-md privacy-container">
			<div className="btn-box">
				<Link onClick={goBack} className="back-button" to={"/weatherly"}>Back to Weatherly</Link>
			</div>

			<h3>Weatherly Privacy Policy</h3>
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
					<p>Thanks for using Weatherly!
						At Weatherly, we want to give you the best possible experience to ensure that you enjoy our service.
						Your privacy and the security of your personal data is, and will always be, enormously important to us. So, we want to transparently
						explain how and why we gather, store, share and use your personal data - as well as outline the controls and choices you have around
						when and how you choose to share your personal data.
					</p>
					<p>That is our objective, and this Privacy Policy (&apos;Policy&apos;) will explain exactly what we mean in further detail below.</p>
				</li>

				{/* 2. ABOUT THE POLICY */}
				<li>
					<p className="li-heading">About this Policy</p>
					<p>
						This Policy sets out the essential details relating to your personal data relationship with Weatherly.
						From time to time, we may develop new or offer additional services. If the introduction of these new or additional services results
						in any material change to the way we collect or process your personal data we will provide you with more information or additional
						terms or policies. Unless stated otherwise when we introduce these new or additional services, they will be subject to this Policy.
					</p>
					<p>The aim of this Policy is to:</p>
					<p>- Ensure that you understand what personal data we collect about you, the reasons why we collect and use it, and who we share it with;</p>
					<p>- Explain the way we use the personal data that you share with us in order to give you a great experience when you are using Weatherly; and</p>
					<p>- Explain your rights and choices in relation to the personal data we collect and process about you and how we will protect your privacy.</p>
					<p>
						For information on how to contact us if you ever have any questions or concerns, please see Section 13 &apos;How to contact us&apos; below.
						Alternatively, if you do not agree with the content of this Policy, then please remember it is your choice whether you want to use Weatherly.
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
						preferences in relation to how Weatherly uses your personal data, we provide the following resources:</p>
					<p>- User Settings: allows you to exercise choices about the processing of certain personal data, and an automated
						&apos;Delete Account&apos; function to remove and stop the processing of your data.</p>
					<p>- Support (accessed via the settings page): allows you to make a request regarding the use, rectification,
						access and erasure of personal data.</p>
					<p>If you have any questions about your privacy, your rights, or how to exercise them, please contact support found on the Weatherly app support page.</p>
				</li>

				{/* 4. Personal data we collect from you */}
				<li>
					<p className="li-heading">Personal data we collect from you</p>
					<p>The points below describes personal data collected when you sign up for a Weatherly account</p>
					<p>User Data: This is the personal data that is provided by you or collected by us to enable you to sign up for and use
						a Weatherly account. This includes your email address.</p>
					<p>Usage Data: This is the personal data that is collected about you when you&apos;re accessing and/or using a Weatherly
						account, including: your type of Weatherly plan, device type.</p>
					<p>Purchase Verification Data: This is the App Store and/or Google Play store data that is collected to solely verify the
						authenticity of an in-app-purchase associated with a Weatherly account.</p>
				</li>

				{/* 5. What we use your personal data for */}
				<li>
					<p className="li-heading">What we use your personal data for</p>
					<p>When you use or interact with a Weatherly account, we use a variety of technologies to process the personal data we
						collect about you for various reasons. We have set out the points below as the reasons why we process your personal data:</p>
					<ul>
						<li>Purpose: To provide and personalize the Weatherly service. Associated Data: User Data, Usage Data, Purchase Verification Data.</li>
						<li>Purpose: To understand, diagnose, troubleshoot, and fix issues with the Weatherly service. Associated Data: User Data, Usage Data, Purchase Verification Data.</li>
						<li>Purpose: To evaluate and develop new features, technologies, and improvements to the Weatherly service. Associated Data: User Data, Usage Data, Purchase Verification Data.</li>
						<li>Purpose: To comply with legal obligations and law enforcement requests. Associated Data: User Data, Usage Data, Purchase Verification Data.</li>
						<li>Purpose: To process your payment. Associated Data: User Data, Usage Data, Purchase Verification Data.</li>
						<li>Purpose: To detect fraud, including fraudulent payments and fraudulent use of the Weatherly service. Associated Data: User Data, Usage Data, Purchase Verification Data.</li>
						<li>Purpose: To establish, exercise, or defend legal claims. Associated Data: User Data, Usage Data, Purchase Verification Data.</li>
					</ul>
				</li>

				{/* 6. Sharing your personal data */}
				<li>
					<p className="li-heading">Sharing your personal data</p>
					<p>We have set out the categories of recipients of the personal data collected or generated through your use of the Weatherly service.</p>
					<ul>
						<li>Recipient: Payment processors. Reason: We will share your personal data with our payment processors as necessary to enable them to process your payments, and for anti-fraud purposes.</li>
						<li>Recipient: Law enforcement and data protection authorities. Reason: We share your personal data when we in good
							faith believe it is necessary for us to do so in order to comply with a legal obligation under applicable law, or respond to valid legal
							process, such as a search warrant, a court order, or a subpoena. We also share your personal data where we in good faith believe that it
							is necessary for the purpose of our own, or a third party&apos;s legitimate interest relating to national security, law enforcement, litigation,
							criminal investigation, protecting the safety of any person, or to prevent death or imminent bodily harm, provided that we deem that such
							interest is not overridden by your interests or fundamental rights and freedoms requiring the protection of your personal data.</li>
					</ul>
				</li>

				{/* 7. Data retention and deletion */}
				<li>
					<p className="li-heading">Data retention and deletion</p>
					<p>We keep your personal data only as long as necessary to provide you with the Weatherly service and for legitimate and
						essential business purposes, such as maintaining the performance of the Weatherly service, making data-driven business decisions about new
						features and offerings, complying with our legal obligations, and resolving disputes. We keep some of your personal data for as long as you
						are a user of the Weatherly service.</p>
					<p>If you request, we will delete or anonymise your personal data so that it no longer identifies you, unless we are
						legally allowed or required to maintain certain personal data, including situations such as the following:</p>
					<p>- If there is an unresolved issue relating to your account, such as an outstanding credit on your account or an unresolved claim or dispute we will retain the necessary personal data until the issue is resolved;</p>
					<p>- Where we need to retain the personal data for our legal, tax, audit, and accounting obligations, we will retain the necessary personal data for the period required by applicable law; and/or,</p>
					<p>- Where necessary for our legitimate business interests such as fraud prevention or to maintain the security of our users.</p>
				</li>

				{/* 8. Transfer to other countries */}
				<li>
					<p className="li-heading">Transfer to other countries</p>
					<p>Weatherly shares your personal data globally with the necessary services to securely store and process your data as specified in this Policy.</p>
				</li>

				{/* 9. Links */}
				<li>
					<p className="li-heading">Links</p>
					<p>We may display advertisements from third parties and other content that links to third-party websites. We cannot control
						or be held responsible for third parties&apos; privacy practices and content. If you click on a third-party advertisement or link, please
						understand that you are leaving the Weatherly service and any personal data you provide will not be covered by this Policy. Please read their
						privacy policies to find out how they collect and process your personal data.</p>
				</li>

				{/* 10. Keeping your personal data safe */}
				<li>
					<p className="li-heading">Keeping your personal data safe</p>
					<p>We are committed to protecting our users&apos; personal data. We implement appropriate technical and organisational
						measures to help protect the security of your personal data; however, please note that no system is ever completely secure. We have
						implemented various policies including pseudonymisation, encryption, access, and retention policies to guard against unauthorised access and
						unnecessary retention of personal data in our systems.</p>
					<p>Your password protects your user account, so we encourage you to use a strong password that is unique to your
						Weatherly account, never share your password with anyone, limit access to your computer and browser, and log out after having used the Weatherly service.</p>
				</li>

				{/* 11. Children */}
				<li>
					<p className="li-heading">Children</p>
					<p>The Weatherly service is not directed to children under the age of 13 years. The Weatherly service is also not offered
						to children whose age makes it illegal to process their personal data or requires parental consent for the processing of their personal data
						under the GDPR or other local law.</p>
					<p>We do not knowingly collect personal data from children under 13 years or under the applicable age limit
						(the &apos;Age Limit&apos;). If you are under the Age Limit, please do not use the Weatherly service, and do not provide any personal data to us.</p>
					<p>If you are a parent of a child under the Age Limit and become aware that your child has provided personal data to
						Weatherly, please contact us using the support page in the app settings, and you may request exercise of your applicable rights detailed
						in Section 3 &apos;Your rights and your preferences: Giving you choice and control&apos; of this Policy.</p>
					<p>If we learn that we have collected the personal data of a child under the age of 13 years, we will take reasonable
						steps to delete the personal data. This may require us to delete the Weatherly account for that child.</p>
				</li>

				{/* 12. Changes to this Policy */}
				<li>
					<p className="li-heading">Changes to this Policy</p>
					<p>We may occasionally make changes to this Policy. When we make material changes to this Policy, we&apos;ll provide you with
						prominent notice as appropriate under the circumstances, e.g., by displaying a prominent notice within the Weatherly service or by sending you
						an email and/or a device notification. We may notify you in advance. Please, therefore, make sure you read any such notice carefully.</p>
				</li>

				{/* 13. How to contact us */}
				<li>
					<p className="li-heading">How to contact us</p>
					<p>Thank you for reading our Policy. If you have any questions about this Policy, please contact us on the support
						page or email us at: dev.weatherly@gmail.com</p>
				</li>
			</ol>
			<p className={"text-muted bottom-info"}>We hope to provide you with a great experience while using Weatherly!</p>
			<p className="text-muted">© 2022 Jadon Hansen</p>
		</div>
	);
}
