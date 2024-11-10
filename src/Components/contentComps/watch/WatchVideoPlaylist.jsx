import React from "react";

// ==============================WATCH-VIDEO-PLAYLIST-COMPONENT================
/**
 * Watch Video Playlist component: This component rendere youtube video playlist.
 * @param {null} null
 * @returns {JSX.Element} Video Playlist UI.
 */
export default function WatchVideoPlaylist() {
	// ====================JSX==============================================
	return (
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
	);
}
