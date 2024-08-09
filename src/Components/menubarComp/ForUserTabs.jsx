import React from "react";

// ==============================ICONS=======================================
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFlag } from "react-icons/md";
import { MdOutlineHelpOutline } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";

// ==============================COMPONENTS==================================
import { MenuListContainer } from "../../utility/Utility";

export default function ForUserTabs() {
	const forUserTabsArr = [
		[<IoSettingsOutline />, "Settings"],
		[<MdOutlineFlag />, "Report history"],
		[<MdOutlineHelpOutline />, "Help"],
		[<RiFeedbackLine />, "Send feedback"],
	];

	return <MenuListContainer tabsArr={forUserTabsArr} />;
}
