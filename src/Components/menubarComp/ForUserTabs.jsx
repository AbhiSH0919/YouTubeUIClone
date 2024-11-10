import React from "react";

// ==============================ICONS=========================================
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFlag } from "react-icons/md";
import { MdOutlineHelpOutline } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";

// ==============================COMPONENTS====================================
import { MenuListContainer } from "../../utility/Utility";

// ==============================FORUSERTABS-COMPONENT=========================
/**
 * ForUserTabs component: This component that renders a list of tabs for user-specific actions.
 * @param {null} null
 * @returns {JSX.Element} display the tabs to takes actions by the users.
 */
export default function ForUserTabs() {
	const forUserTabsArr = [
		[<IoSettingsOutline />, "Settings"],
		[<MdOutlineFlag />, "Report history"],
		[<MdOutlineHelpOutline />, "Help"],
		[<RiFeedbackLine />, "Send feedback"],
	];

	// ====================JSX==============================================
	return <MenuListContainer tabsArr={forUserTabsArr} />;
}
