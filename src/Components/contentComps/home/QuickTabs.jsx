import React, { useState } from "react";

// ==============================ICONS=========================================
import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";

// ==============================REACT-REDUX-TOOLKIT===========================
import { useSelector } from "react-redux";

// ==============================QUICK-TABS-COMPONENT==========================
/**
 * QuickTabs component: A navigation component that displays a list of tabs and allows users to navigate through them.
 *
 * @param {null} null
 * @returns {JSX.Element} The QuickTabs component.
 */
export default function QuickTabs() {
	const quickTabs = [
		"All",
		"Music",
		"Video",
		"Game",
		"Motivation",
		"Spritual",
		"Code",
		"HTML",
		"CSS",
		"Java Script",
		"ReactJs",
		"Portfolio",
		"NextJs",
		"Course",
		"Job",
		"Compitation",
		"Websites",
		"CodeHub",
		"Blog",
		"For You",
	];

	// ====================STATES===========================================
	const [leftBtnIsVisible, setLeftBtnIsVisible] = useState(false);
	const [rightBtnIsVisible, setRightBtnIsVisible] = useState(true);

	const scrollQuickTab = function (e) {
		e.preventDefault();
		const btnsData = e.target.closest(".btn").dataset;
		const tabsRow = document.getElementById("quickTabsRow");

		// Handle scroll to the left
		if (leftBtnIsVisible && Boolean(btnsData.btnPrev)) {
			// const ele = e.target.closest(".quickTabArrow").nextElementSibling;

			// Scroll 100px to the left
			const scrollEle = (tabsRow.scrollLeft -= 100);

			// Show right btn when left scroll start
			!rightBtnIsVisible && setRightBtnIsVisible(true);

			// Hide left btn when left scroll end
			scrollEle <= 0 && setLeftBtnIsVisible(false);
		}

		// Handle scroll to the right
		if (rightBtnIsVisible && Boolean(btnsData.btnNext)) {
			// const ele = e.target.closest(".quickTabArrow").previousElementSibling;

			// Scroll 100px to the right
			const scrollEle = (tabsRow.scrollLeft += 100);

			// Show left btn when right scroll start
			!leftBtnIsVisible && setLeftBtnIsVisible(true);

			// Hide right btn when right scroll end
			scrollEle >= tabsRow.scrollWidth - tabsRow.clientWidth &&
				setRightBtnIsVisible(false);
		}
	};

	// ====================STORE-DATA-GET-&-SET=============================
	const { isLoading } = useSelector((state) => state.globalUtility);

	// ====================JSX==============================================
	return (
		<div className="headerPlace quickTabsContainer text-center d-flex align-items-center gap-3 bg-info-subtle sticky-top overflow-hidden">
			{!leftBtnIsVisible ? null : (
				<div className="quickTabArrow carousel-control-prev  justify-content-start opacity-100">
					<button
						data-btn-prev="true"
						className="btn p-2 border-0 rounded-circle hover-dark-light fs-6 d-flex align-items-center justify-content-center"
						onClick={(e) => scrollQuickTab(e)}
					>
						<LuChevronLeft className="fs-4" />
					</button>
				</div>
			)}

			<div
				id="quickTabsRow"
				className="quickTabsRow d-flex align-items-center w-100 gap-3 position-relative p-2 overflow-x-scroll"
			>
				{quickTabs.map((tab, i) => {
					return (
						<button
							key={i}
							className={`btn btn-secondary py-1 flex-shrink-0 ${
								isLoading ? "loading-animation" : ""
							}`}
						>
							{tab}
						</button>
					);
				})}
			</div>

			{!rightBtnIsVisible ? null : (
				<div className="quickTabArrow carousel-control-next  justify-content-end opacity-100">
					<button
						data-btn-next="true"
						className="btn p-2 border-0 rounded-circle hover-dark-light fs-6 d-flex align-items-center justify-content-center"
						onClick={(e) => scrollQuickTab(e)}
					>
						<LuChevronRight className="fs-4" />
					</button>
				</div>
			)}
		</div>
	);
}
