import React from "react";

// ==============================ICONS=====================================
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import { BiDislike } from "react-icons/bi";
import { LiaDownloadSolid } from "react-icons/lia";
import { RxScissors } from "react-icons/rx";
import { BsBookmark } from "react-icons/bs";
import { RiFlagLine } from "react-icons/ri";

// ==============================COMPONENTS====================================
import {
	formatDate,
	formatNumber,
	formatTitle,
} from "../../../utility/coreJsUtils";

// ==============================REACT-REDUX-TOOLKIT===========================
import { useSelector } from "react-redux";

// ==============================WATCH=VIDEO-UTILITIES-COMPONENT===============
/**
 * Watch Video Utilities component: This component provide types of features like Share, likes, dislikes, download, save, clip, subscribe.
 *
 * @param {object[]} obj - An array of data objects, each containing a single video & single video channel data.
 *
 * @returns {JSX.Element} Video Utility features UI.
 */
export default function WatchVideoUtilities({ obj }) {
	const [singleVideoData, singleVideoChannelData] = obj;

	// ====================STORE-DATA-GET-&-SET=============================
	const { isLoading } = useSelector((state) => state.globalUtility);

	// ====================JSX==============================================
	return (
		<div className="vPlayer-utilities-container">
			<h1 className="video-title fs- fw-bolde text-light my-2">
				{singleVideoData?.snippet?.title}
			</h1>

			<div className="thumbnail-text-box d-flex align-items-center gap-2">
				<div className="d-flex align-items-center gap-3 me-auto">
					<a
						className={`channel-img-box rounded-circle bg-black overflow-hidden ${
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

					<div
						className={`d-flex flex-column h-100 ${
							isLoading ? "loading-animation" : ""
						}`}
					>
						<a
							href=""
							className="channel-name fw-bold text-decoration-none text-light lh-1 d-inline-block"
						>
							{singleVideoData?.snippet?.channelTitle}
						</a>

						<span className="d-inline-block text-black opacity-75 fw-semibold">
							{/* {funFormatSubCount(subscribeCount)} */}
							{formatNumber(
								singleVideoChannelData?.statistics?.subscriberCount
							)}
							subscribers
						</span>
					</div>

					<button className="btn btn-light px-3 text-black text-opacity-75 fw-semibold rounded-5 me-auto">
						Subscribe
					</button>
				</div>

				<div className="d-flex rounded-5 bg-dark-subtle">
					<button className="btn btn-sm fs-6 d-flex align-items-center gap-2 hover-dark-light active ps-3 py-2 rounded-5 rounded-end-0 border-0 fw-medium">
						<AiOutlineLike className="fs-5" />
						{/* {singleVideoData?.statistics?.likeCount?.slice(0, 2) + `K`} */}
						{formatNumber(singleVideoData?.statistics?.likeCount)}
					</button>

					<button className="btn btn-sm fs-6 d-flex align-items-center hover-dark-light active pe-3 py-2 rounded-5 rounded-start-0 border-0">
						<BiDislike className="fs-5" />
					</button>
				</div>

				<button className="btn btn-sm fs-6 d-flex align-items-center gap-2 fw-medium px-3 py-2 hover-dark-light active border-0 rounded-5">
					<PiShareFatThin className="fs-5" /> Share
				</button>

				<button className="btn btn-sm fs-6 d-flex align-items-center gap-2 fw-medium px-3 py-2 hover-dark-light active border-0 rounded-5">
					<LiaDownloadSolid className="fs-5" /> Download
				</button>

				<div className="btn-group dropup">
					<button
						type="button"
						className="btn btn-sm fs-6 fw-medium hover-dark-light p-2 active border-0 rounded-5 d-flex align-items-center"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<HiOutlineDotsHorizontal className="fs-5" />
					</button>
					<ul className="dropdown-menu fw-bold">
						{/* <!-- Dropdown menu links --> */}
						<li>
							<a
								className="dropdown-item d-flex align-items-center gap-3 fw-medium"
								href="#"
							>
								<RxScissors className="fs-5" /> Clip
							</a>
						</li>
						<li>
							<a
								className="dropdown-item d-flex align-items-center gap-3 fw-medium"
								href="#"
							>
								<BsBookmark className="fs-5" /> Save
							</a>
						</li>
						<li>
							<a
								className="dropdown-item d-flex align-items-center gap-3 fw-medium"
								href="#"
							>
								<RiFlagLine className="fs-5" /> Report
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
