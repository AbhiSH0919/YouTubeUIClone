import React, { useEffect, useMemo, useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatThin, PiUserSquare } from "react-icons/pi";
import { BiDislike } from "react-icons/bi";
import { LiaDownloadSolid } from "react-icons/lia";
import { RxScissors } from "react-icons/rx";
import { BsBookmark } from "react-icons/bs";
import { RiFlagLine } from "react-icons/ri";
import { AiOutlinePlaySquare } from "react-icons/ai";

import { NavLink, useSearchParams } from "react-router-dom";
import { API_KEY } from "../../../constants/constants";
import {
	formatDate,
	formatNumber,
	formatTitle,
} from "../../../utility/Utility";
import { useDispatch } from "react-redux";
import {
	funMenubarAbsoluteState,
	funSwitchMenubar,
	funMenubarSwitchHandler,
} from "../../aplicationFeatures/menubarSlice";

export default function Watch() {
	const [searchParams] = useSearchParams();
	const videoId = searchParams?.get("v");
	const [singleVideoData, setSingleVideoData] = useState(null);
	const [singleVideoChannelData, setSingleVideoChannelData] = useState(null);
	const [videoChannelId, setVideoChannelId] = useState(null);
	const [videoDesc, setVideoDesc] = useState(null);
	const [descFull, setDescFull] = useState(false);
	const [commentsData, setCommentsData] = useState(null);
	const dispatch = useDispatch();

	const VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

	useEffect(() => {
		if (videoId) {
			// dispatch(funSwitchMenubar(false));
			// dispatch(funMenubarAbsoluteState(true));
			dispatch(funMenubarSwitchHandler(false));
		}
	}, [videoId]);

	const fetchSingleVideoData = async (api) => {
		try {
			const response = await fetch(api);
			const data = await response.json();

			setSingleVideoData(data.items[0]);

			setVideoChannelId(data.items[0]?.snippet?.channelId);
			setVideoDesc(data.items[0]?.snippet?.description);
		} catch (error) {
			console.log("error ===> ", error);
		}
	};

	const fetchSingleVideoChannelData = async (api) => {
		try {
			const response = await fetch(api);
			const data = await response.json();

			setSingleVideoChannelData(data?.items[0]);
		} catch (error) {
			console.log("singleVideo channelData : ", error);
		}
	};

	const fetchSingleVideoCommentsData = async (api) => {
		try {
			const response = await fetch(api);
			const data = await response.json();

			setCommentsData(data?.items);
		} catch (error) {
			console.log("comments fetch err", error);
		}
	};

	useEffect(() => {
		fetchSingleVideoData(VIDEO_URL);
	}, []);

	useMemo(() => {
		const CHANNEL_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoChannelId}&key=${API_KEY}`;

		const COMMENT_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;

		if (!videoChannelId) return; // err handle
		fetchSingleVideoChannelData(CHANNEL_URL);

		if (!videoId) return;
		fetchSingleVideoCommentsData(COMMENT_URL);
	}, [videoChannelId]);

	const funFormatDesc = function (desc) {
		const arr = desc?.slice()?.split(`\n`);
		for (let i = 0; i < arr?.length; i++) {
			const newArr = arr[i]?.slice()?.split(" ");

			for (let j = 0; j < newArr.length; j++) {
				const item = newArr[j];

				const newItem = item?.startsWith("#")
					? `<a class="text-decoration-none" href=/hashtag/${item?.slice(
							1
					  )}>${item}</a>`
					: item?.includes("http")
					? `<a class="bg-secondary bg-opacity-25 text-light py-1 px-2 rounded-5" href="${item}" target="_blank">${item}</a>`
					: // : item === ""
					  // ? ""
					  // item === `<br>`
					  // ? `<br>` :
					  item;

				newArr[j] = newItem;
			}

			arr[i] = newArr?.join(" ");
		}

		const str = arr?.slice()?.join(`<br>`);

		return str;
		return descFull ? str : str?.slice(0, 172);
	};

	return (
		<div className="watch-container d-flex h-100 px-2 bg-danger mx-auto">
			<div className="player-container col- container p-4 bg-warning">
				{/* ==========VIDEO THUMBNAILS========== */}
				<div className="video-player rounded-3 overflow-hidden bg-success bg-">
					<iframe
						// width="560"
						// height="315"
						// width="100%"
						// height="460"
						className="watch-iframe"
						src={`https://www.youtube.com/embed/${videoId}?&autoplay=0`}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						autoPlay
					></iframe>
				</div>

				{/* ==========VIDEO UTILITIES========== */}
				<div className="vPlayer-utilities-container">
					<h1 className="video-title fs- fw-bolde text-light my-2">
						{singleVideoData?.snippet?.title}
					</h1>

					<div className="thumbnail-text-box d-flex align-items-center gap-2">
						<div className="d-flex align-items-center gap-3 me-auto">
							<a className="channel-img-box rounded-circle bg-black" href="">
								<img
									className="channel-img d-block w-100 h-100 object-fit-cover rounded-circle"
									src={singleVideoChannelData?.snippet?.thumbnails?.medium?.url}
									alt="Channel_Logo"
								/>
							</a>

							<div className="d-flex flex-column">
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

				{/* ==========VIDEO DESCRIPTION========== */}
				<div className="vPlayer-description-container mt-3 p-3 text-bg-dark rounded-3">
					<div className="d-flex gap-2 align-items-center fw-bold">
						<span>
							{`${new Intl.NumberFormat(navigator.language).format(
								singleVideoData?.statistics?.viewCount
							)} `}
							Views
						</span>

						<span>
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
								className="description-box--1"
								dangerouslySetInnerHTML={{
									__html: `${funFormatDesc(videoDesc)}`,
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
										className="channel-img-box rounded-circle bg-black"
										href=""
									>
										<img
											className="channel-img d-block w-100 h-100 object-fit-cover rounded-circle"
											src={
												singleVideoChannelData?.snippet?.thumbnails?.medium?.url
											}
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
							className={`desc-show-btn btn rounded-0 p-0 fw-semibold lh-1 d-fle align-items-center`}
							onClick={(e) => setDescFull(!descFull)}
						>
							{descFull ? "Show less" : "...more"}
						</button>
					</div>
				</div>

				{/* ==========VIDEO COMMENTS========== */}
				{/* <div className="vPlayer-comments-container">Comments</div> */}
			</div>

			{/* =================================================================== */}
			<div className="watch-video-playlist-container col-4 bg-info">
				<div className="feed">feed</div>
				<div className="playlists d-flex flex-column gap-2">
					<div className="playlist-1">playlist-1</div>
					<div className="playlist-2">playlist-2</div>
					<div className="playlist-3">playlist-3</div>
					<div className="playlist-4">playlist-4</div>
					<div className="playlist-5">playlist-5</div>
					<div className="playlist-6">playlist-6</div>
				</div>
			</div>
		</div>
	);
}
