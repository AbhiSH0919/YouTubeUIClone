import React, { useEffect, useMemo, useState } from "react";

// ==============================COMPONENTS====================================
import WatchVideoThumbnails from "./WatchVideoThumbnails";
import WatchVideoUtilities from "./WatchVideoUtilities";
import WatchVideoDescription from "./WatchVideoDescription";
import WatchVideoComments from "./WatchVideoComments";
import WatchVideoPlaylist from "./WatchVideoPlaylist";

// ==============================CONSTANTS=====================================
import { API_KEY } from "../../../constants/constants";

// ==============================REACT-REDUX-TOOLKIT===========================
import { useDispatch, useSelector } from "react-redux";
import {
	funMenubarAbsoluteState,
	funSwitchMenubar,
	funMenubarSwitchHandler,
} from "../../aplicationFeatures/menubarSlice";
import { funLoadingHandler } from "../../aplicationFeatures/globalUtilitySlice";

// ==============================REACT-ROUTER-DOM==============================
import { NavLink, useSearchParams } from "react-router-dom";

// ==============================WATCH-COMPONENT===============================
/**
 * Watch component: This component fetches video data from the YouTube API and renders the video thumbnail, video utilities, description, comments, and playlist.
 *
 * @param {string} videoId - The ID of the YouTube video to display.
 *
 * @returns {JSX.Element} The Watch component.
 */
export default function Watch() {
	const [searchParams] = useSearchParams();
	const videoId = searchParams?.get("v");
	const VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

	// ====================STATES===========================================
	const [singleVideoData, setSingleVideoData] = useState(null);
	const [singleVideoChannelData, setSingleVideoChannelData] = useState(null);
	const [videoChannelId, setVideoChannelId] = useState(null);
	const [commentsData, setCommentsData] = useState(null);

	// ====================STORE-DATA-GET-&-SET=============================
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state) => state.globalUtility);

	useEffect(() => {
		if (videoId) {
			dispatch(funMenubarSwitchHandler(false));
			dispatch(funLoadingHandler(true));
		}
	}, [videoId]);

	// ====================FETCHING-WATCHPAGE-DATA==========================
	const fetchSingleVideoData = async (api) => {
		try {
			const response = await fetch(api);
			const data = await response.json();

			setSingleVideoData(data.items[0]);

			setVideoChannelId(data.items[0]?.snippet?.channelId);
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
		} finally {
			dispatch(funLoadingHandler(false));
			console.log(isLoading);
		}
	};

	useEffect(() => {
		fetchSingleVideoData(VIDEO_URL);
	}, []); // InitCall

	useMemo(() => {
		const CHANNEL_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoChannelId}&key=${API_KEY}`;

		const COMMENT_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;

		if (!videoChannelId) return; // err handle
		fetchSingleVideoChannelData(CHANNEL_URL);

		if (!videoId) return;
		fetchSingleVideoCommentsData(COMMENT_URL);
	}, [videoChannelId]); // InitCall_2

	// ====================JSX==============================================
	return (
		<div className="watch-container d-flex h-100 px-2 bg-danger mx-auto">
			<div className="player-container col- container p-4 bg-warning">
				<WatchVideoThumbnails videoId={videoId} />

				<WatchVideoUtilities obj={[singleVideoData, singleVideoChannelData]} />

				<WatchVideoDescription
					obj={[singleVideoData, singleVideoChannelData]}
				/>

				<WatchVideoComments />
			</div>

			<WatchVideoPlaylist />
		</div>
	);
}
