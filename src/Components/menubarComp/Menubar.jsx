import React from "react";

// ==============================COMPONENTS==================================
import MainTabs from "./MainTabs";
import SignInTab from "./SignInTab";
import ExploreTabs from "./ExploreTabs";
import MoreFromYouTubeTabs from "./MoreFromYouTubeTabs";
import ForUserTabs from "./ForUserTabs";
import FooterTab from "./FooterTab";

// ==============================REACT-REDUX-TOOLKIT===========================
import { useSelector } from "react-redux";

// ==============================REACT-ROUTER-DOM==============================
import { useSearchParams } from "react-router-dom";

// ==============================MENUBAR-COMPONENT=============================
/**
 * Menubar component: Displays the all menubar tabs in this component and other relevant information.
 * which includes the main tabs, sign in tab, explore tabs, more from YouTube tabs, for user tabs, and footer tab.
 *
 * @param {null} null
 * @returns {JSX.Element} Menubar UI
 */
export default function Menubar() {
	// ====================STATES===========================================
	const signed = false;
	const [searchParams, setSearchParams] = useSearchParams();
	const searchedValue = searchParams?.get("v");

	// ====================STORE-DATA-GET-&-SET=============================
	const { menubarFull, isRelativeState, isAbsoluteState } = useSelector(
		(state) => state.menubar
	);

	// ====================JSX==============================================
	return (
		<div
			className={`menubar-container bg-info flex-shrink-0 flex-grow-0 h-auto ${
				!searchedValue && isRelativeState
					? menubarFull
						? "relativeMenubarFull"
						: "relativeMenubarSmall"
					: searchedValue || isAbsoluteState
					? menubarFull
						? "absoluteMenubarShow"
						: "absoluteMenubarHide"
					: "relativeMenubarFull"
			}`}
		>
			<div className="menubar-inner-container d-flex flex-column  text-white position-fixed overflow-y-scroll w-100 bg-danger">
				<MainTabs />

				{menubarFull ? (
					<>
						{!signed ? <SignInTab /> : null}
						<ExploreTabs />
						<MoreFromYouTubeTabs />
						<ForUserTabs />
						<FooterTab />
					</>
				) : null}
			</div>
		</div>
	);
}

// isRelativeState ? MenuSmallLarge : isAbsoluteState ? MenubarSmallLarge
