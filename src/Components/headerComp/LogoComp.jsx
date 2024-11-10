import React from "react";

// ==============================ICONS=======================================
import { FiMenu } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";

// ==============================REDUX-TOOLKIT-STORE=========================
import { useDispatch, useSelector } from "react-redux";

import { funSwitchMenubar } from "../aplicationFeatures/menubarSlice";

// ==============================LOGOCOMP-COMPONENT============================
/**
 * LogoComp component: This component displays the logo of the application, which includes a menu button and the YouTube logo.
 * Clicking on menubar button its toggles menubars state & size full or small.
 *
 * @param {null} null
 *
 * @returns {JSX.Element} logo & menu button.
 */
export default function LogoComp() {
	// ====================STORE-DATA-GET-&-SET=============================
	const { menubarFull, isRelativeState, isAbsoluteState } = useSelector(
		(state) => state.menubar
	);
	const dispatch = useDispatch();

	// ====================JSX==============================================
	return (
		<div className="d-flex align-items-center gap-2">
			<button
				className="btn p-2 fs-4 d-flex align-items-center border- rounded-circle hover-dark-light"
				onClick={() => {
					dispatch(funSwitchMenubar(!menubarFull));
				}}
			>
				<FiMenu />
			</button>

			<div className="d-flex align-items-center">
				<AiFillYoutube className="fs-2 text-danger" />
				<span className="fs-5 fw-semibold">YouTube</span>
			</div>
		</div>
	);
}
