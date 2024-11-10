// ==============================HOOKS======================================
import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

// ==============================ICONS=========================================
import { PiUserCircle } from "react-icons/pi";
import { TbDotsVertical } from "react-icons/tb";

// ==============================COMPONENTS====================================
import { formatTitle, formatDate, formatNumber } from "./coreJsUtils";

// ==============================CONSTANTS=====================================
import { API_KEY } from "../constants/constants";

// ==============================REACT-REDUX-TOOLKIT===========================
import { useDispatch, useSelector } from "react-redux";
import {
	funMenubarRelativeState,
	funMenubarAbsoluteState,
	funSwitchMenubar,
	funMenubarSwitchHandler,
} from "../Components/aplicationFeatures/menubarSlice";

// ==============================REACT-ROUTER-DOM==============================
import { NavLink, useNavigate } from "react-router-dom";

// ==============================REUSABLE-COMPONENTS===========================

// ==============================THEMECHANGE-COMPONENT=========================

/**
 * This component allows users to switch between light and dark themes.
 * It uses the useState hook to store the current theme and updates the
 * document's data-bs-theme attribute accordingly.
 * @param {null} null
 * @returns {JSX.Element} A button that toggles the theme when clicked.

 */
function ThemeChange() {
	// ====================STATES===========================================
	const [theme, setTheme] = useState("dark");
	document.documentElement.setAttribute("data-bs-theme", theme);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	// ====================JSX==============================================
	return (
		<div>
			<button className="btn btn-primary" onClick={toggleTheme}>
				Toggle Theme
			</button>
		</div>
	);
}

// ==============================MENULISTCONTAINER-COMPONENT===================
/**
 * This component simplifies the rendering of a menu list container.
 * It takes an array of tabs as a prop and returns a JSX element representing the menu list.
 * The menu list is rendered as an unordered list with each tab item as a list item.
 * @param {object[]} tabsArr - An array of tab objects, each containing a tab icon and a tab name.
 * @returns {JSX.Element} A JSX element representing the container of menu lists.
 */
const MenuListContainer = function ({ tabsArr }) {
	// =====SEFETY=====
	MenuListContainer.propTypes = {
		tabsArr: PropTypes.array.isRequired,
	};
	if (typeof tabsArr !== "object") return;

	// ====================JSX==============================================
	return (
		<>
			{tabsArr ? (
				<ul className="menubar-items-boxs nav nav-pills flex-column border-bottom border-secondary px-2 py-2">
					{tabsArr?.map((tab) => {
						const [tabIcon, tabName] = tab;

						return (
							<MenuListItem key={tabName} tabIcon={tabIcon} tabName={tabName} />
						);
					})}
				</ul>
			) : (
				(null, console.log(tabsArr))
			)}
		</>
	);
};

// ==============================MENULISTITEM_COMPONENT========================
/**
 * This component simplify return menu list item
 * @param {object} param0 Provide react icon as a props.
 * @param {string} param1 Provide tab name as a props.
 * @returns {JSX.Element} Return Jsx Element : html list tag inside anchor tag including react icon & tab name
 */
const MenuListItem = function ({ tabIcon, tabName }) {
	// ====================STORE-DATA-GET-&-SET=============================
	const dispatch = useDispatch();

	// ====================JSX==============================================
	return (
		<li className="nav-item w-100">
			<NavLink
				to={`/${tabName === "Home" ? "" : tabName}`}
				onClick={() => dispatch(funMenubarSwitchHandler(true))}
				className="menubar-item-link hover-dark-ligh rounded-3 nav-link text-white d-flex align-items-center column-gap-4"
			>
				<span className="fs-4 d-flex justify-content-center align-items-center">
					{tabIcon}
				</span>

				{tabName}
			</NavLink>
		</li>
	);
};

// ==============================SIGNINBTN-COMPONENT===========================
/**
 * @param {null} null
 * @returns {React.JSX.Element} Return Sign button
 */
const SignInBtn = function () {
	// ====================JSX==============================================
	return (
		<button className="btn btn-outline-dark border d-flex align-items-center gap-1 rounded-pill ms-3 py-1 text-primary fw-bold">
			<PiUserCircle className="fs-3" /> Sign in
		</button>
	);
};

// ==============================THUMBNAILS-COMPONENT==========================

/**
 * This component simplify return YouTube home page thumbnails UI
 * @param {{ video: object; }} param0 Provide single array of video Id & snippet
 * @param {string} param.video0 id:videoId
 * @param {object} param.video1 object of video snippet
 * @returns {React.JSX.Element} Return full thumbnails UI
 */
const Thumbnails = function ({ video }) {
	// if (!video) return;

	// ====================STATES===========================================
	// const [contentDetails, setContentDetails] = useState({});
	const [channelSnippet, setChannelSnippet] = useState({});
	const [channelData, setChannelData] = useState({});

	const { id: videoId, snippet } = video;
	const {
		categoryId,
		channelId,
		channelTitle,
		description,
		title: videoTitle,
		thumbnails,
		publishedAt,
		tags,
	} = snippet;

	const locale = navigator.language;

	const CHANNEL_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`;

	// ====================STORE-DATA-GET-&-SET=============================
	const { menubarFull, isRelativeState, isAbsoluteState } = useSelector(
		(state) => state.menubar
	);
	const { isLoading } = useSelector((state) => state.globalUtility);

	// ====================FETCHING-CHANNEL-DATA============================
	const fetchChannelData = async (api) => {
		try {
			const response = await fetch(api);
			const data = await response.json();

			setChannelData(data);
			// setContentDetails(data.items[0].contentDetails);
			setChannelSnippet(data.items[0].snippet);
		} catch (error) {
			console.error("Error fetching data", error);
		}
	};

	useEffect(() => {
		fetchChannelData(CHANNEL_URL);
	}, [CHANNEL_URL]);

	// ====================JSX==============================================
	return (
		<div className="thumbnail-container bg-warning">
			<figure className="d-flex flex-column gap-3 m-0">
				<div
					className={`thumbnail-img-box w-100 rounded-4  overflow-hidden ${
						isRelativeState && menubarFull ? "height-small" : "height-full"
					}`}
				>
					<NavLink
						to={`/watch?v=${videoId}`}
						className={isLoading ? `loading-animation` : ""}
					>
						<img
							src={thumbnails?.standard?.url}
							className="d-block w-100 h-100 object-fit-cover"
							alt="Thumbnails"
						/>
					</NavLink>
				</div>

				<figcaption className="thumbnail-text-box figure-caption d-flex gap-2">
					<a
						href=""
						className={`channel-img-box rounded-circle overflow-hidden ${
							isLoading ? "loading-animation" : ""
						}`}
					>
						<img
							className="channel-img d-block w-100 h-100 object-fit-cover rounded-circle"
							src={channelSnippet?.thumbnails?.medium?.url}
							alt="Channel_Logo"
						/>
					</a>

					<div className="thumnail-details w-100 bg-danger">
						<NavLink
							to={`/watch?v=${videoId}`}
							className={`card-title text-light fs-6 h-50 text-decoration-none d-block bg-black lh-base overflow-hidden ${
								isLoading ? "loading-animation" : ""
							}`}
						>
							{formatTitle(videoTitle)}
						</NavLink>
						<div
							className={`card-text text-body-secondary ${
								isLoading ? "loading-animation" : ""
							}`}
						>
							<p className="mb-0 text-capitalize">{channelTitle}</p>
							<div className="d-flex align-items-center gap-1">
								<span className="me-2">
									{/* {formatNumber(statistics.viewCount)} views */}
								</span>

								<span>{formatDate(new Date(publishedAt), locale)}</span>
							</div>
						</div>
					</div>

					<button className="btn fs-5 p-1 align-self-start d-flex border-0 rounded-circle hover-dark-light">
						<TbDotsVertical />
					</button>
				</figcaption>
			</figure>
		</div>
	);
};

// ==============================COMPONENTS-EXPORTS============================
export { ThemeChange, MenuListContainer, MenuListItem, SignInBtn, Thumbnails };
