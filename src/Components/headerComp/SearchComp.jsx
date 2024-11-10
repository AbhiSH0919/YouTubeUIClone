import React from "react";

// ==============================ICONS=======================================
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";

// ==============================SEARCHCOMP-COMPONENT==========================
/**
 * SearchComp component: This component displays the search bar type anything inside to search video Also including voice search.
 *
 * @param {null} null
 *
 * @returns {JSX.Element} Search bar and voice search button.
 */
export default function SearchComp() {
	// ====================JSX==============================================
	return (
		<div className="d-flex align-items-cente gap-3 col-6 ms-5">
			<form
				action=""
				className="d-flex w-100 border-0 rounded-pill overflow-hidden"
			>
				<input
					className="rounded-start-pill form-control shadow-none ps-3 text-bg-dark element-focus-border"
					type="search"
					name="search"
					id="search"
					placeholder="Search"
				/>
				<button className="btn fs-5 px-3 d-flex align-items-center border-start-0 rounded-end-pill bg-dark border-primary-small">
					<CiSearch />
				</button>
			</form>

			<button className="btn fs-4 p-2 d-flex align-items-center border-0 rounded-circle bg-dark hover-dark-light">
				<MdKeyboardVoice />
			</button>
		</div>
	);
}
