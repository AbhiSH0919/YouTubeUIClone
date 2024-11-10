import React from "react";

// ==============================ICONS=======================================
import { SlCamrecorder } from "react-icons/sl";
import { RiLiveLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";

// ==============================COMPONENTS==================================
import { SignInBtn } from "../../utility/Utility";

// ==============================OPTIONS-COMPONENT=============================
/**
 * Options component: This component displays the create new live video button, all notification button and also showing user login or signup status.
 * @param {null} null
 *
 * @returns {JSX.Element} live button, notification button and profile button.
 */
export default function Options() {
	// ====================JSX==============================================
	return (
		<div className="d-flex align-items-center gap-1">
			<button className="btn fs-4 p-2 d-flex align-items-center border-0 rounded-circle text-bg-dar hover-dark-light">
				<RiLiveLine />
			</button>

			<button className="btn fs-4 p-2 d-flex align-items-center border-0 rounded-circle text-bg-dar hover-dark-light">
				<IoMdNotificationsOutline />
			</button>

			<SignInBtn />
		</div>
	);
}

// ====================dropdown menu list & itmes====================
/*
===========================================================================
	<div className="dropstart">
				<span
					className="dropdown-toggle show"
					data-bs-toggle="dropdown"
					aria-expanded="true"
				>
					⏬
				</span>

				<ul
					className="dropdown-menu p-2" //show
					data-popper-placement="left-end"
					style={{
						position: "absolute",
						top: "110%",
						right: "100%",
						margin: "0px",
					}}
				>
					<li className="d-flex align-items-center">
						<span>▶</span>
						<a className="dropdown-item" href="#">
							Your data in YouTube
						</a>
					</li>
					<li className="d-flex align-items-center">
						<span>▶</span>
						<a className="dropdown-item" href="#">
							Appearance: Device theme
						</a>
					</li>
					<li className="d-flex align-items-center">
						<span>▶</span>
						<a className="dropdown-item" href="#">
							Your data in YouTube
						</a>
					</li>
					<li>
						<hr className="dropdown-divider" />
					</li>
					<li className="d-flex align-items-center">
						<span>▶</span>
						<a className="dropdown-item" href="#">
							Your data in YouTube
						</a>
					</li>
				</ul>
			</div>
===========================================================================

*/
