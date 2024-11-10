import React from "react";

// ==============================COMPONENTS==================================
import LogoComp from "./LogoComp";
import SearchComp from "./SearchComp";
import Options from "./Options";

// ==============================HEADER-COMPONENT=============================
/**
 * Header component: This component provide navigation bar at the top of the screen including logo, search bar and other more options.
 *
 * @param {null} null
 *
 * @returns {JSX.Element} Navigation Bar UI.
 */
export default function Header() {
	// ====================JSX==============================================
	return (
		<header className="header px-3 py-2 sticky-top w-100 bg-body">
			<nav className="navbar py-0 d-flex align-items-center justify-content-between">
				<LogoComp />
				<SearchComp />
				<Options />
			</nav>
		</header>
	);
}
