import React from "react";

// ==============================ICONS=======================================
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { GoHistory } from "react-icons/go";

// ==============================COMPONENTS==================================
import { MenuListContainer } from "../../utility/Utility";

export default function MainTabs() {
	const mainTabsArr = [
		[
			[<IoMdHome />, "Home"],
			[<SiYoutubeshorts />, "Shorts"],
			[<MdOutlineSubscriptions />, "Subscriptions"],
		],
		[
			[<AiOutlinePlaySquare />, "Play"],
			[<GoHistory />, "History"],
		],
	];

	return (
		<>
			{mainTabsArr.map((tabsArr, inx) => {
				return <MenuListContainer key={inx} tabsArr={tabsArr} />;
			})}
		</>
	);
}
