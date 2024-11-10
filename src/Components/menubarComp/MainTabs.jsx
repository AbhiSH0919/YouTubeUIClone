import React from "react";

// ==============================ICONS=========================================
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { GoHistory } from "react-icons/go";

// ==============================COMPONENTS====================================
import { MenuListContainer } from "../../utility/Utility";

// ==============================MAINTABS-COMPONENT============================
/**
 * MainTabs component: This component display the main tabs in the Menubar.
 * @param {null} null
 * @returns {JSX.Element} The JSX element representing the main tabs.
 */
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

	// ====================JSX==============================================
	return (
		<>
			{mainTabsArr.map((tabsArr, inx) => {
				return <MenuListContainer key={inx} tabsArr={tabsArr} />;
			})}
		</>
	);
}
