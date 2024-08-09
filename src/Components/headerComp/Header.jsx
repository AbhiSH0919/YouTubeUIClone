import React from "react";

// ==============================COMPONENTS==================================
import LogoComp from "./LogoComp";
import SearchComp from "./SearchComp";
import Options from "./Options";

export default function Header() {
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
