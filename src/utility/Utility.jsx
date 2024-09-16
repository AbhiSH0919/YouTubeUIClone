import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

// ==============================REACT-REDUX-TOOLKIT===========================
import { useDispatch, useSelector } from "react-redux";
import {
	funMenubarSwitch,
	funMenubarFlowShow,
	funMenubarFlowHide,
	funIsVideoWatching,
} from "../Components/aplicationFeatures/menubarSlice";

// ==============================REACT-ROUTER-DOM============================
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// ==============================ICONS=======================================
import { PiUserCircle } from "react-icons/pi";
import { TbDotsVertical } from "react-icons/tb";

// ==============================CONSTANTS=====================================
import { API_KEY } from "../constants/constants";
import { RxAvatar } from "react-icons/rx";

// ==============================JavaScript-FUNCTIONS==========================
// ==============================DATE-FORMATER=================================
const formatDate = function (date, locale) {
	const calcDaysPassed = (oldDate, newDate) =>
		Math.round(Math.abs(newDate - oldDate) / (1000 * 60 * 60 * 24));

	const daysPassed = calcDaysPassed(date, new Date());

	if (daysPassed === 0) return "Today";
	if (daysPassed === 1) return "Yesterday";
	if (daysPassed <= 7) return `${daysPassed} days ago`;
	else {
		return new Intl.DateTimeFormat(locale, {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		}).format(date);
	}
};

// ==============================NUMBER-FORMATER=========================
const formatNumber = function (num) {
	if (num <= 999) return num;
	if (num <= 999999) return Math.round(num / 1000) + "K";
	if (num > 999999) return Math.round(num / 1000000) + "M";
};

// ==============================VIDEOS-TITLE-FORMATER=========================
const formatTitle = (title) =>
	title.length <= 70 ? title : title.slice(0, 67) + "...";

// ==============================RANDOM-NUMBER-GENERATOR=======================
const RandomNumber = ({ digits = 99999 }) =>
	Math.trunc(Math.random() * digits) + 1;

// ==============================COMPONENTS==================================
// ==============================ThemeChange=================================
function ThemeChange() {
	const [theme, setTheme] = useState("dark");
	document.documentElement.setAttribute("data-bs-theme", theme);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<div>
			<button className="btn btn-primary" onClick={toggleTheme}>
				Toggle Theme
			</button>
		</div>
	);
}

// ==============================MenuListContainer===========================
const MenuListContainer = function ({ tabsArr }) {
	const menubarShow = true;

	// =====SEFETY=====
	MenuListContainer.propTypes = {
		tabsArr: PropTypes.array.isRequired,
	};
	if (typeof tabsArr !== "object") return;

	return (
		<>
			{tabsArr ? (
				<ul className="menubar-items-boxs nav nav-pills flex-column border-bottom border-secondary px-2 py-2">
					{tabsArr?.map((tab) => {
						const [tabIcon, tabName] = menubarShow
							? [tab[0], tab[1]]
							: [tab[0], null];

						return (
							<MenuListItem key={tab[1]} tabIcon={tabIcon} tabName={tabName} />
						);
					})}
				</ul>
			) : (
				console.log(tabsArr)
			)}
		</>
	);
};

// ==============================MenuListItem================================
const MenuListItem = function ({ tabIcon, tabName }) {
	const dispatch = useDispatch();
	// 	==================Higher order function create======================
	const utilMenubarHide = function () {
		dispatch(funIsVideoWatching(false));
		dispatch(funMenubarFlowHide(false));
		dispatch(funMenubarFlowShow(false));
	};

	return (
		<li className="nav-item w-100">
			<NavLink
				to={`/${tabName === "Home" ? "" : tabName}`}
				onClick={utilMenubarHide}
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

// ==============================SignInBtn===================================
const SignInBtn = function () {
	return (
		<button className="btn btn-outline-dark border d-flex align-items-center gap-1 rounded-pill ms-3 py-1 text-primary fw-bold">
			<PiUserCircle className="fs-3" /> Sign in
		</button>
	);
};

// ======================================================================= //

const Thumbnails = function ({ video }) {
	const menubarFull = useSelector((state) => state.menubarFull);
	const dispatch = useDispatch();
	// if (!video) return;
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

	// 	=====================================================
	// const [contentDetails, setContentDetails] = useState({});
	const [channelSnippet, setChannelSnippet] = useState({});
	// const [statistics, setStatistics] = useState({});
	const [channelData, setChannelData] = useState({});

	const CHANNEL_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`;

	// ==================DATA FETCH=================================
	const fetchChannelData = async (api) => {
		try {
			const response = await fetch(api);
			// console.log(typeof response, ":", response, "asyncronus fetch");
			const data = await response.json();

			setChannelData(data);
			// setContentDetails(data.items[0].contentDetails);
			setChannelSnippet(data.items[0].snippet);
			// setStatistics(data.items[0].statistics);
		} catch (error) {
			console.error("Error fetching data", error);
		}
	};

	useEffect(() => {
		fetchChannelData(CHANNEL_URL);
	}, []);

	// 	==================Higher order function create======================
	const utilMenubarHide = function () {
		dispatch(funIsVideoWatching(true));
		dispatch(funMenubarFlowHide(true));
		dispatch(funMenubarFlowShow(false));
		dispatch(funMenubarSwitch(true));
	};

	return (
		<div className="thumbnail-container bg-warning">
			<figure className="d-flex flex-column gap-3 m-0">
				<div
					className="thumbnail-img-box w-100 rounded-4  overflow-hidden loading-animation"
					style={menubarFull ? { height: "11rem" } : { height: "13rem" }}
				>
					<NavLink to={`/watch?v=${videoId}`} onClick={utilMenubarHide}>
						<img
							src={thumbnails?.standard?.url}
							className="d-block w-100 h-100 object-fit-cover"
							alt="Thumbnails"
						/>
					</NavLink>
				</div>

				<figcaption className="thumbnail-text-box figure-caption d-flex gap-2">
					<a href="" className="channel-img-box rounded-circle">
						<img
							className="channel-img d-block w-100 h-100 object-fit-cover rounded-circle"
							src={channelSnippet?.thumbnails?.medium?.url}
							alt="Channel_Logo"
						/>
					</a>

					<div className="thumnail-details w-100 bg-danger">
						<NavLink
							to={`/watch?v=${videoId}`}
							onClick={utilMenubarHide}
							className="card-title text-light fs-6 h-50 text-decoration-none d-block bg-black lh-base overflow-hidden"
						>
							{formatTitle(videoTitle)}
						</NavLink>
						<div className="card-text text-body-secondary">
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

// ======================================================================= //
// ==============================COMPONENTS-EXPORTS======================= //
export {
	ThemeChange,
	MenuListContainer,
	MenuListItem,
	SignInBtn,
	RandomNumber,
	Thumbnails,
};
// ======================================================================= //
