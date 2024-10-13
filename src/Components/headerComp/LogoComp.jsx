import React from "react";

// ==============================REDUX-TOOLKIT-STORE=========================
import {
	funMenubarSwitch,
	funMenubarFlowShow,
	funMenubarFlowHide,
	funIsVideoWatching,
} from "../aplicationFeatures/menubarSlice";
import { useDispatch, useSelector } from "react-redux";

// ==============================ICONS=======================================
import { FiMenu } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";

export default function LogoComp() {
	const dispatch = useDispatch();
	const menubarFull = useSelector((state) => state.menubarFull);
	const menubarFlowShow = useSelector((state) => state.menubarFlowShow);
	const menubarFlowHide = useSelector((state) => state.menubarFlowHide);
	const isVideoWatching = useSelector((state) => state.isVideoWatching);
	const [searchParams, setSearchParams] = useSearchParams();
	const searchVideo = searchParams?.get("v");

	return (
		<div className="d-flex align-items-center gap-2">
			<button
				className="btn p-2 fs-4 d-flex align-items-center border- rounded-circle hover-dark-light"
				onClick={() => {
					!isVideoWatching
						? dispatch(funMenubarSwitch(!menubarFull))
						: menubarFlowHide
						? dispatch(funMenubarFlowShow(true)) &&
						  dispatch(funMenubarFlowHide(false))
						: dispatch(funMenubarFlowHide(true)) &&
						  dispatch(funMenubarFlowShow(false));

					searchVideo
						? dispatch(funMenubarFlowShow(true))
						: dispatch(funMenubarFlowHide(false)) &&
						  dispatch(funMenubarFlowShow(false)) &&
						  dispatch(funIsVideoWatching(false)) &&
						  dispatch(funMenubarSwitch(!menubarFull));

					// ===============================
					// const menubarContainer = document.querySelector(".menubar-container");
					// menubarContainer?.classList.toggle("menubar-small");
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
