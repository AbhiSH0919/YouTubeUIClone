import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Watch() {
	const [searchParams] = useSearchParams();
	const videoId = searchParams.get("v");

	return (
		<div className="watch-container">
			<div className="player-container">
				<div className="video-player">
					<iframe
						width="560"
						height="315"
						src={`https://www.youtube.com/embed/${videoId}?si=3EnkwnJkdBqIpQzC`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
				<div className="video-player-information">information</div>
			</div>
			<div className="watch-video-playlist-container">
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
