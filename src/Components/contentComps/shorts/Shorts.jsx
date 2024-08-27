import React from "react";
// ==============================ICONS=======================================
import { IoMdPlay } from "react-icons/io";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { GiSpeaker } from "react-icons/gi";
import { HiSpeakerWave } from "react-icons/hi2";
import { PiSpeakerLowFill } from "react-icons/pi";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { TbMessage } from "react-icons/tb";
import { PiShareFatFill } from "react-icons/pi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdPause } from "react-icons/io";

export default function Shorts() {
	const toggleContent = function (e) {
		const shortTextBox = document.querySelector(".thumbnail-text-box");
		e
			? shortTextBox.classList.add("hide-content")
			: shortTextBox.classList.contains("hide-content") &&
			  shortTextBox.classList.remove("hide-content");

		const shortPreview = document.querySelector(".short-preview");
		e
			? shortPreview.classList.contains("hide-content") &&
			  shortPreview.classList.remove("hide-content")
			: shortPreview.classList.add("hide-content");
	};

	return (
		<div className="shorts-container position-relative bg-warning w-100 h-100 d-flex justify-content-center align-items-start">
			<div className="mx-auto p-2 pb-0 mb-2 bg-danger d-flex gap-2">
				{/* ========================= */}

				<div className="short-thumbnail-container card card-cover d-flex flex-column text-bg-dark rounded-4 shadow-lg position-relative">
					{/* shorts play & sound buttons */}
					<div className="short-control-box text-white d-flex align-items-center gap-2 mt-3 mb-auto ms-3 z-1">
						<button className="btn fs-5 bg-opacity-25 bg-black short-utility-btn hover-dark-light">
							{/* <IoMdPlay /> */}
							<IoMdPause />
						</button>

						<button className="btn px-3 py-3 fs-5 bg-opacity-25 bg-black d-flex align-items-center gap-3 border-0 rounded-5 hover-dark-light position-relative w-auto">
							<IoVolumeMuteSharp />

							<input
								className="border-0"
								type="range"
								name="volume"
								id="shorts-volume"
							/>
						</button>
					</div>

					{/* short thumbnail short thumbnail */}
					<div className="short-thumbnail rounded-4 position-absolute w-100 h-100 overflow-hidden">
						<img
							className="d-block w-100 h-100 object-fit-cover bg-info-subtle"
							src=""
							alt="shorts"
						/>
					</div>

					{/* short text-box */}
					<div className="thumbnail-text-box px-2 mb-2 d-flex flex-column gap-2 z-1">
						<div className="d-flex align-items-center gap-3">
							<a className="channel-img-box rounded-circle" href="">
								<img
									className="channel-img d-block w-100 h-100 object-fit-cover rounded-circle"
									// src={channelSnippet?.thumbnails?.medium?.url}
									alt="Channel_Logo"
								/>
							</a>

							<a href="" className="channel-name">
								<p className="mb-0 text-capitalize">channelTitle</p>
							</a>

							<button className="btn btn-light rounded-5">Subscribe</button>
						</div>

						<div className="thumnail-details bg-danger">
							<h5 className="card-title text-light fs-6 bg-black lh-base overflow-hidden">
								{/* {formatTitle(title)} */}
								<a className="short-title" href="">
									Masha ALLAH! Greatest save,
								</a>

								<a className="short-tags" href="">
									#shorts #allah #muhammad
								</a>
							</h5>
							<a href="" className="short-music text-light">
								🎵 Sia - Unstoppable (Lyrics) · @s-chill
							</a>
						</div>
					</div>

					{/* shorts-play-position bar */}
					<div className="shorts-playbar-box mx-2 z-1">
						{/* short thumbnail short thumbnail */}
						<div className="short-preview hide-content">
							<img
								className="d-block w-100 h-100 rounded-4 object-fit-cover bg-warning-subtle"
								src=""
								alt="shorts"
							/>

							<span className="short-preview-time d-block mt-2 text-center">
								0:19
							</span>
						</div>

						<input
							onPointerOver={(e) => {
								toggleContent(true);
							}}
							onPointerOut={(e) => {
								toggleContent(false);
							}}
							className="shorts-playbar"
							type="range"
							name="play-bar"
							id="shorts-playbar"
						/>
					</div>
				</div>

				{/* =====SHORTS FEATURES BUTTONS===== */}
				<div className="shorts-features-btns-box text-white align-self-end d-flex flex-column align-items-center gap-3 ">
					<button className="btn short-utility-btn hover-dark-light active">
						<AiFillLike />
					</button>

					<button className="btn short-utility-btn hover-dark-light active">
						<AiFillDislike />
					</button>

					<button className="btn short-utility-btn hover-dark-light active">
						<TbMessage />
					</button>

					<button className="btn short-utility-btn hover-dark-light active">
						<PiShareFatFill />
					</button>

					<button className="btn short-utility-btn hover-dark-light active">
						<HiOutlineDotsVertical />
					</button>

					<a className="channel-img-box rounded-3 bg-black" href="">
						<img
							className="channel-img d-block w-100 h-100 object-fit-cover rounded-circle"
							// src={channelSnippet?.thumbnails?.medium?.url}
							alt="Channel_Logo"
						/>
					</a>
				</div>

				{/* ========================= */}
			</div>

			{/* =====SHORTS NAVIGATION BUTTON BOX===== */}
			<div className="short-navigation-box position-absolute top-50 end-0 translate-middle-y p-3 d-flex flex-column gap-3 align-items-center text-white">
				<button className="btn p-3 fs-3 d-flex align-items-center border-0 rounded-circle hover-dark-light active">
					<FaArrowUpLong />
				</button>

				<button className="btn p-3 fs-3 d-flex align-items-center border-0 rounded-circle hover-dark-light active">
					<FaArrowDownLong />
				</button>
			</div>
		</div>
	);
}
