import React from "react";

// ==============================ICONS=======================================
import { PiYoutubeLogoFill } from "react-icons/pi";
import { SiYoutubemusic, SiYoutubekids } from "react-icons/si";

// ==============================COMPONENTS==================================
import { MenuListContainer } from "../../utility/Utility";

export default function MoreFromYouTubeTabs() {
	const youTubeMoreArr = [
		[<PiYoutubeLogoFill />, "YouTube Premium"],
		[<SiYoutubemusic />, "YouTube Music"],
		[<SiYoutubekids />, "YouTube Kids"],
	];

	return (
		<div className="moreFromYouTubeTabs">
			<p className="fs-5 fw-medium px-2 pt-3 ms-3 my-0">More from YouTube</p>
			<MenuListContainer tabsArr={youTubeMoreArr} />
		</div>
	);
}
