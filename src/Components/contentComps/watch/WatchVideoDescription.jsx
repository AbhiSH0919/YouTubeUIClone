import React, { useState } from "react";

// ==============================ICONS=====================================
import { PiUserSquare } from "react-icons/pi";
import { AiOutlinePlaySquare } from "react-icons/ai";

// ==============================COMPONENTS====================================
import {
	formatDate,
	formatNumber,
	funFormatDesc,
} from "../../../utility/coreJsUtils";

// ==============================REACT-REDUX-TOOLKIT===========================
import { useSelector } from "react-redux";

// ==============================WATCH-VIDEO-DESCRIPTION-COMPONENT=============
/**
 * Watch Video Description component: This component describe all about video and there channels and tags.
 *
 * @param {object[]} obj - An array of data objects, each containing a single video & single video channel data.
 *
 * @returns {JSX.Element} Video Description UI.
 */
export default function WatchVideoDescription({ obj }) {
	const [singleVideoData, singleVideoChannelData] = obj;

	// ====================STATES===========================================
	const [descFull, setDescFull] = useState(false);

	// ====================STORE-DATA-GET-&-SET=============================
	const { isLoading } = useSelector((state) => state.globalUtility);

	// ====================JSX==============================================
	return (
		<div className="vPlayer-description-container mt-3 p-3 text-bg-dark rounded-3">
			<div className="d-flex gap-2 align-items-center fw-bold">
				<span className={`${isLoading ? "loading-animation" : ""}`}>
					{`${new Intl.NumberFormat(navigator.language).format(
						singleVideoData?.statistics?.viewCount
					)} `}
					Views
				</span>

				<span className={`${isLoading ? "loading-animation" : ""}`}>
					{formatDate(
						singleVideoData?.snippet?.publishedAt,
						singleVideoChannelData?.snippet?.country
					)}
				</span>
			</div>

			<div className="description mt-1 text-body">
				<div
					className={`${
						descFull ? "showFull" : "showSmall"
					} d-flex flex-column gap-5`}
				>
					<div
						aria-label="youtube description"
						className={`description-box--1 ${
							isLoading ? "loading-animation" : ""
						}`}
						dangerouslySetInnerHTML={{
							__html: `${funFormatDesc(singleVideoData?.snippet?.description)}`,
						}}
					></div>

					<div className="description-box--2 d-flex flex-column gap-2 align-items-start">
						<h3 className="fs-5 fw-bold lh-normal">Transcript</h3>
						<p className="m-0">Follow along using the transcript.</p>
						<button className="btn btn-outline-primary hover-dark-light rounded-5 border-secondary">
							Show transcript
						</button>
					</div>

					<div className="description-box--3 d-flex flex-column gap-3 align-items-start">
						<div className="d-flex align-items-center gap-3 me-auto">
							<a
								className={`channel-img-box rounded-circle bg-black ${
									isLoading ? "loading-animation" : ""
								}`}
								href=""
							>
								<img
									className="channel-img d-block w-100 h-100 object-fit-cover rounded-circle"
									src={singleVideoChannelData?.snippet?.thumbnails?.medium?.url}
									alt="Channel_Logo"
								/>
							</a>

							<div className="d-flex flex-column justify-content-between gap-1 lh-1">
								<a
									href=""
									className="channel-name fs-5 fw-bold text-decoration-none text-light d-inline-block"
								>
									{singleVideoData?.snippet?.channelTitle}
								</a>

								<span className="d-inline-block text- opacity-75 fw-semibold">
									{/* {funFormatSubCount(subscribeCount)} */}
									{formatNumber(
										singleVideoChannelData?.statistics?.subscriberCount
									)}
									subscribers
								</span>
							</div>
						</div>

						<div className="d-flex align-items-center gap-3">
							<button
								className="btn text-light rounded-5
									border-secondary-subtle fw-medium lh-1 d-flex align-items-center gap-1 hover-dark-light"
							>
								<AiOutlinePlaySquare className="fs-4" /> Videos
							</button>

							<button
								className="btn text-light rounded-5
									border-secondary-subtle fw-medium lh-1 d-flex align-items-center gap-1 hover-dark-light"
							>
								<PiUserSquare className="fs-4" /> About
							</button>
						</div>
					</div>
				</div>
				<button
					className={`desc-show-btn btn rounded-0 p-0 fw-semibold lh-1 d-fle align-items-center border-0`}
					onClick={(e) => setDescFull(!descFull)}
				>
					{descFull ? "Show less" : "...more"}
				</button>
			</div>
		</div>
	);
}
