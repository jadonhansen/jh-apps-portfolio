import React from "react";

import * as reviews from "../assets/reviews.json";
import "../styles/reviews.scss";

interface ReviewsProps {
	app: "weatherly" | "digiwallet"
}

export default function Reviews({ app }: ReviewsProps) {

	const correctLinks = () => {
		if (app == "weatherly") {
			return (
				<>
					<a
						className="ios-link"
						href="https://apps.apple.com/za/app/weatherly/id1583456822?itsct=apps_box_badge&amp;itscg=30200"
						target="_blank"
						rel="noopener noreferrer"
					>
						App Store
					</a>
					<a
						href="https://play.google.com/store/apps/details?id=com.jadonhansen.weatherly&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
						target="_blank"
						rel="noopener noreferrer"
					>
						Google Play
					</a>
				</>
			);
		}

		return (
			<>
				<a
					className="ios-link"
					href="https://apps.apple.com/us/app/digiwallet/id1593438301?itsct=apps_box_badge&amp;itscg=30200"
					target="_blank"
					rel="noopener noreferrer"
				>
					App Store
				</a>
				<a
					href="https://play.google.com/store/apps/details?id=com.digiwalletapp.digiwallet&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
					target="_blank"
					rel="noopener noreferrer"
				>
					Google Play
				</a>
			</>
		);
	};

	const empty = () => {
		return (
			<div className="col-md-12">
				<p className="no-reviews">Seems like {app.charAt(0).toUpperCase() + app.slice(1)} is still fresh to the market!</p>
				<div className="suggestion">
					<p>Help me by adding your review here:</p>
					{correctLinks()}
				</div>
			</div>
		);
	};

	return (
		<div className={`row reviews ${app}-rev`}>
			<h3 className="heading">Reviews from users</h3>

			{
				reviews[app].android.length <= 0 ?
					empty()
					:
					<div className="row">
						{
							reviews[app].android.map((review, i: number) => {
								return (
									<div key={i} className="col-12 col-md-4 mb-3">
										<div className="review-box">
											<p className="user">{review.user}</p>
											<p className="comment">{review.comment}</p>
											<div className="star-wrapper">
												<img className="star" src={ review.stars >= 0 ? require("../assets/icons/star-black.png") : require("../assets/icons/star-grey.png")} />
												<img className="star" src={ review.stars > 1 ? require("../assets/icons/star-black.png") : require("../assets/icons/star-grey.png")} />
												<img className="star" src={ review.stars > 2 ? require("../assets/icons/star-black.png") : require("../assets/icons/star-grey.png")} />
												<img className="star" src={ review.stars > 3 ? require("../assets/icons/star-black.png") : require("../assets/icons/star-grey.png")} />
												<img className="star" src={ review.stars > 4 ? require("../assets/icons/star-black.png") : require("../assets/icons/star-grey.png")} />
											</div>
										</div>
									</div>
								);
							})
						}
						<div className="suggestion">
							<p>See more or add a review here:</p>
							{correctLinks()}
						</div>
					</div>
			}
		</div>
	);
}
