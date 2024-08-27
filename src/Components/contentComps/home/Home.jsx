import React, { useEffect, useState } from "react";
import { Thumbnails } from "../../../utility/Utility";
import QuickTabs from "./QuickTabs";
import { JSON_DATA } from "../../../constants/constants";

export default function Home() {
	const API_KEY = "AIzaSyDa_GO4m-VwQlA8fjp6uf7npNpYmHsGQk8";

	const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=2&key=${API_KEY}`;

	// https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=12&key=AIzaSyDa_GO4m-VwQlA8fjp6uf7npNpYmHsGQk8

	// =================================================================

	const [apiData, setApiData] = useState({});

	const [nextPageToken, setNextPageToken] = useState("");
	const [videos, setVideos] = useState([]);
	const [pageInfo, setPageInfo] = useState({});
	const [channelData, setChannelData] = useState({});

	const fetchData = async (api) => {
		try {
			const response = await fetch(api);
			const data = await response.json();

			// const response = await axios.get(`${BASE_URL}/videos`, {
			// params: {
			// 	part: "snippet,contentDetails,statistics",
			// 	chart: "mostPopular",
			// 	regionCode: "US",
			// 	maxResults: 20,
			// 	key: API_KEY,
			// },
			// });
			setApiData(data);
			setNextPageToken(data?.nextPageToken);
			setVideos(data?.items);
			setPageInfo(data?.pageInfo);
			// console.log(nextPageToken, pageInfo);
		} catch (error) {
			// console.log(videos);
			console.error("Error fetching data", error);
		}
	};

	useEffect(() => {
		fetchData(API_URL);
	}, []);

	// =================================================================

	return (
		<div className="home-container gridHome position-relative w-100 row-gap-4">
			<QuickTabs />

			<div className="headerPlace grid-cols--3 column-gap-3 row-gap-5 px-2 pb-4 bg-danger-subtle">
				{videos?.map((video) => {
					return <Thumbnails key={video.id} video={video} />;
				})}
			</div>
		</div>
	);
}
