import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// ==============================REDUX-TOOLKIT-STORE=========================
import { useDispatch, useSelector } from "react-redux";

import {
	funMenubarAbsoluteState,
	// funMenubarSwitch,
	// funMenubarFlowShow,
	// funMenubarFlowHide,
	// funIsVideoWatching,
	funSwitchMenubar,
} from "../aplicationFeatures/menubarSlice";

// ==============================ICONS=======================================
import { FiMenu } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";

export default function LogoComp() {
	const dispatch = useDispatch();
	// const menubarFull = useSelector((state) => state.menubarFull);
	// const menubarFlowShow = useSelector((state) => state.menubarFlowShow);
	// const menubarFlowHide = useSelector((state) => state.menubarFlowHide);
	// const isVideoWatching = useSelector((state) => state.isVideoWatching);

	// const {
	// 	menubarFull,
	// 	menubarFlowShow,
	// 	menubarFlowHide,
	// 	isVideoWatching,
	// 	menuWidth,
	// } = useSelector((state) => state.menubar);

	// const [searchParams, setSearchParams] = useSearchParams();
	// const searchVideo = searchParams?.get("v");
	// useEffect(() => {
	// 	if (searchVideo) {
	// 		dispatch(funIsVideoWatching(true));
	// 		dispatch(funMenubarFlowHide(true));
	// 	}
	// }, []);

	const { menubarFull, isRelativeState, isAbsoluteState } = useSelector(
		(state) => state.menubar
	);

	// const [searchParams, setSearchParams] = useSearchParams();
	// const searchedValue = searchParams?.get("v");
	// searchedValue &&
	// 	dispatch(funMenubarAbsoluteState(true)) &&
	// 	dispatch(funSwitchMenubar(false));
	// !searchedValue && isAbsoluteState && dispatch(funSwitchMenubar(false));

	return (
		<div className="d-flex align-items-center gap-2">
			<button
				className="btn p-2 fs-4 d-flex align-items-center border- rounded-circle hover-dark-light"
				onClick={() => {
					dispatch(funSwitchMenubar(!menubarFull));

					// 	!isVideoWatching
					// 		? dispatch(funMenubarSwitch(!menubarFull))
					// 		: menubarFlowHide
					// 		? dispatch(funMenubarFlowShow(true)) &&
					// 		  dispatch(funMenubarFlowHide(false))
					// 		: dispatch(funMenubarFlowHide(true)) &&
					// 		  dispatch(funMenubarFlowShow(false));

					// 	searchVideo
					// 		? dispatch(funMenubarFlowShow(true))
					// 		: dispatch(funMenubarFlowHide(false)) &&
					// 		  dispatch(funMenubarFlowShow(false)) &&
					// 		  dispatch(funIsVideoWatching(false)) &&
					// 		  dispatch(funMenubarSwitch(!menubarFull));

					// 	// ===============================
					// 	// const menubarContainer = document.querySelector(".menubar-container");
					// 	// menubarContainer?.classList.toggle("menubar-small");
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
