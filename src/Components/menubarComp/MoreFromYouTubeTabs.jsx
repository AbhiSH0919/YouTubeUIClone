import React from "react";

// ==============================ICONS=========================================
import { PiYoutubeLogoFill } from "react-icons/pi";
import { SiYoutubemusic, SiYoutubekids } from "react-icons/si";

// ==============================COMPONENTS====================================
import { MenuListContainer } from "../../utility/Utility";

// ==============================MORE_FROM_YOU_TUBE_TABS-COMPONENT=============
/**
 * MoreFromYouTubeTabs component: This component display a list of additional YouTube services, including YouTube Premium, YouTube Music, and YouTube Kids.
 * @param {null} null
 * @returns {JSX.Element} Youtube additional services tabs.
 */
export default function MoreFromYouTubeTabs() {
	const youTubeMoreArr = [
		[<PiYoutubeLogoFill />, "YouTube Premium"],
		[<SiYoutubemusic />, "YouTube Music"],
		[<SiYoutubekids />, "YouTube Kids"],
	];

	// ====================JSX==============================================
	return (
		<div className="moreFromYouTubeTabs">
			<p className="fs-5 fw-medium px-2 pt-3 ms-3 my-0">More from YouTube</p>
			<MenuListContainer tabsArr={youTubeMoreArr} />
		</div>
	);
}
