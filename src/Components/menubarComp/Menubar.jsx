import React from "react";
import { useSelector } from "react-redux";

// ==============================COMPONENTS==================================
import MainTabs from "./MainTabs";
import SignInTab from "./SignInTab";
import ExploreTabs from "./ExploreTabs";
import MoreFromYouTubeTabs from "./MoreFromYouTubeTabs";
import ForUserTabs from "./ForUserTabs";
import FooterTab from "./FooterTab";

export default function Menubar() {
	const signed = false;
	// const menuWidth = useSelector((state) => state.menuWidth);
	const menubarFull = useSelector((state) => state.menubarFull);
	const menubarFlowShow = useSelector((state) => state.menubarFlowShow);
	const menubarFlowHide = useSelector((state) => state.menubarFlowHide);

	return (
		<div
			// className="menubar-container bg-info flex-shrink-0 flex-grow-0 h-auto"
			className={`menubar-container bg-info flex-shrink-0 flex-grow-0 h-auto ${
				menubarFull ? "" : "menubar-small"
			}
			${menubarFlowShow ? "menubar-flow-show" : ""} ${
				menubarFlowHide ? "menubar-flow-hide" : ""
			}`}
			// style={
			// 	{
			// 		// width: "290px",
			// 		// width: `${menuWidth + 20}px`,
			// 		// minHeight: "calc(100vh - 56px)",
			// 	}
			// }
		>
			<div
				className="menubar-inner-container d-flex flex-column  text-white position-fixed overflow-y-scroll w-100 bg-danger"
				// style={
				// 	{
				// 		// maxWidth: "250px",
				// 		// maxWidth: `${menuWidth}px`,
				// 		// height: "calc(100vh - 56px)",
				// 		// top: "56px",
				// 	}
				// }
			>
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
