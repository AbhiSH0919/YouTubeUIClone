import React, { useState } from "react";
import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";

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

	const tabStartPosition = 0;
	const tabEndPosition = 4;
	let [count, setCount] = useState(0);

	return (
		<div
			className="headerPlace quickTabs text-center d-flex align-items-center gap-3 bg-info-subtle sticky-top overflow-hidden"
			// style={{
			// 	top: "55px",
			// 	backfaceVisibility: "hidden",
			// 	zIndex: "9",
			// }}
		>
			{count === tabStartPosition ? null : (
				<div className="quickTabArrow carousel-control-prev  justify-content-start opacity-100">
					<button
						className="btn p-2 border-0 rounded-circle hover-dark-light fs-6 d-flex align-items-center justify-content-center"
						onClick={() => count > tabStartPosition && setCount(count - 1)}
					>
						<LuChevronLeft className="fs-4" />
					</button>
				</div>
			)}

			<div
				className="d-flex align-items-center w-100 gap-3 position-relative p-2"
				style={{
					transition: "all .4s",
					// transform: `transLateX(${100 * (1 - count)}px)`,
					transform: `transLateX(${100 * -count}px)`,
				}}
			>
				{quickTabs.map((tab, i) => {
					return (
						<button key={i} className="btn btn-secondary py-1 flex-shrink-0">
							{tab}
						</button>
					);
				})}
			</div>

			{count === tabEndPosition ? null : (
				<div className="quickTabArrow carousel-control-next  justify-content-end opacity-100">
					<button
						className="btn p-2 border-0 rounded-circle hover-dark-light fs-6 d-flex align-items-center justify-content-center"
						onClick={() => count < tabEndPosition && setCount(count + 1)}
					>
						<LuChevronRight className="fs-4" />
					</button>
				</div>
			)}
		</div>
	);
}
