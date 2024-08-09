import React from "react";

// ==============================ICONS=======================================
import { PiFireBold, PiMusicNote, PiBroadcastFill } from "react-icons/pi";
import { CgShoppingBag } from "react-icons/cg";
import { BiMoviePlay } from "react-icons/bi";
import { GrGamepad, GrTrophy } from "react-icons/gr";
import { ImNewspaper } from "react-icons/im";
import { GoLightBulb } from "react-icons/go";
import { GiBeard } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";

// ==============================COMPONENTS==================================
import { MenuListContainer } from "../../utility/Utility";

export default function ExploreTabs() {
	const exploreTabsArr = [
		[<PiFireBold />, "Trending"],
		[<CgShoppingBag />, "Shopping"],
		[<PiMusicNote />, "Music"],
		[<BiMoviePlay />, "Movies"],
		[<PiBroadcastFill />, "Live"],
		[<GrGamepad />, "Gaming"],
		[<ImNewspaper />, "News"],
		[<GrTrophy />, "Sports"],
		[<GoLightBulb />, "Courses"],
		[<GiBeard />, "Fashion & Beauty"],
		[<MdOutlinePodcasts />, "Podcasts"],
	];

	return (
		<div className="exploreTabs">
			<p className="fs-5 fw-medium px-2 pt-3 mx-3 my-0">Explore</p>

			<MenuListContainer tabsArr={exploreTabsArr} />
		</div>
	);
}
