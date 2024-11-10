import React from "react";

// ==============================WATCH-VIDEO-THUMBNAILS-COMPONENT==============
/**
 * Watch Video Thumbnails component: This component playing video with features.
 *
 * @param {string} videoId - Video ID of Which video want to play.
 *
 * @returns {JSX.Element} Video Player Container.
 */
export default function WatchVideoThumbnails({ videoId }) {
	// ====================JSX==============================================
	return (
		<div className="video-player rounded-3 overflow-hidden bg-success bg-">
			<iframe
				className="watch-iframe"
				src={`https://www.youtube.com/embed/${videoId}?&autoplay=0`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				autoPlay
			></iframe>
		</div>
	);
}
