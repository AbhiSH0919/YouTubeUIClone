import React, { useEffect, useState } from "react";

// ==============================COMPONENTS====================================
import { Thumbnails } from "../../../utility/Utility";
import QuickTabs from "./QuickTabs";

// ==============================CONSTANTS=====================================
import { API_KEY } from "../../../constants/constants";

// ==============================REACT-REDUX-TOOLKIT===========================
import { useDispatch, useSelector } from "react-redux";
import {
	funMenubarAbsoluteState,
	funMenubarRelativeState,
	funMenubarSwitchHandler,
	funSwitchMenubar,
} from "../../aplicationFeatures/menubarSlice";
import { funLoadingHandler } from "../../aplicationFeatures/globalUtilitySlice";

// ==============================REACT-ROUTER-DOM==============================
import { useSearchParams } from "react-router-dom";

// ==============================HOME-COMPONENT================================
/**
 * Home component that displays a list of YouTube videos.
 * This component fetches data from the YouTube API and renders a list of video thumbnails.
 * @param {null} null
 * @returns {JSX.Element} The Home component.
 */
export default function Home() {
	const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=8&key=${API_KEY}`;

	// ====================STATES===========================================
	const [apiData, setApiData] = useState({});
	const [nextPageToken, setNextPageToken] = useState("");
	const [videos, setVideos] = useState(objData?.items);
	const [pageInfo, setPageInfo] = useState({});

	const [searchParams, setSearchParams] = useSearchParams();
	const searchedValue = searchParams?.get("v");

	// ====================STORE-DATA-GET-&-SET=============================
	const { menubarFull, isRelativeState, isAbsoluteState } = useSelector(
		(state) => state.menubar
	);
	const { isLoading } = useSelector((state) => state.globalUtility);
	const dispatch = useDispatch();

	useEffect(() => {
		!searchedValue &&
			isAbsoluteState &&
			dispatch(funMenubarSwitchHandler(false));
	}, [isAbsoluteState]);

	// ====================FETCHING-HOMEPAGE-DATA===========================
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
		} catch (error) {
			console.error("Error fetching data", error);
		} finally {
			dispatch(funLoadingHandler(false));
		}
	};

	useEffect(() => {
		fetchData(API_URL);
		dispatch(funLoadingHandler(true));
	}, []); // InitCall

	// ====================JSX==============================================
	return (
		<div className="home-container gridHome position-relative w-100 row-gap-4">
			<QuickTabs />

			<div
				className={`headerPlace column-gap-3 row-gap-5 px-2 pb-4 bg-danger-subtle ${
					isAbsoluteState ? "grid-cols--auto" : "grid-cols--3"
				}`}
			>
				{videos?.map((video) => {
					return <Thumbnails key={video.id} video={video} />;
				})}
			</div>
		</div>
	);
}

const objData = {
	kind: "youtube#videoListResponse",
	etag: "n6K8-0GqVuHzaEWs0vmygRxEChk",
	items: [
		{
			kind: "youtube#video",
			etag: "f0GGmkkWWZwoTy1U3LMqjMaZnl0",
			id: "ATGQdcN4UBs",
			snippet: {
				publishedAt: "2024-07-25T05:30:00Z",
				channelId: "UCZSNzBgFub_WWil6TOTYwAg",
				title:
					"Phir Aayi Hasseen Dillruba | Official Trailer | Taapsee P, Vikrant M, Sunny K, Jimmy S",
				description:
					"Dil ke haal se kya pata, kaun bhala, aur kaun bawla? 👀 🥀\r\nPhir Aayi Hasseen Dillruba iss rahasya ko mitane, on 9 August, only on Netflix ❤️‍🔥\r\n\r\nWatch on Netflix: https://www.netflix.com/title/81683052\r\n\r\nFollow Netflix India on:\r\nWebsite: https://www.netflix.com/\r\nYouTube: http://bit.ly/NetflixIndiaYT\r\nInstagram: http://www.instagram.com/netflix_in\r\nFacebook: http://www.facebook.com/NetflixIN\r\nTwitter: http://twitter.com/netflixindia",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/ATGQdcN4UBs/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/ATGQdcN4UBs/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/ATGQdcN4UBs/hqdefault.jpg",
						width: 480,
						height: 360,
					},
					standard: {
						url: "https://i.ytimg.com/vi/ATGQdcN4UBs/sddefault.jpg",
						width: 640,
						height: 480,
					},
					maxres: {
						url: "https://i.ytimg.com/vi/ATGQdcN4UBs/maxresdefault.jpg",
						width: 1280,
						height: 720,
					},
				},
				channelTitle: "Netflix India",
				tags: [
					"Taapsee Pannu",
					"Vikrant Massey",
					"haseen dillruba",
					"haseen dillruba full movie",
					"haseen dillruba trailer",
					"phir aayi haseen dillruba",
					"phir aayi haseen dillruba release date",
					"phir aayi haseen dillruba trailer",
					"phir aayi haseen dilruba plot",
					"phir aayi haseen dilruba trailer",
					"phir aayi hasseen dillruba",
					"phir aayi hasseen dillruba movie trailer. sunny kaushal",
					"phir aayi hasseen dillruba teaser",
					"phir aayi hasseen dillruba trailer",
					"tseries",
				],
				categoryId: "24",
				liveBroadcastContent: "none",
				localized: {
					title:
						"Phir Aayi Hasseen Dillruba | Official Trailer | Taapsee P, Vikrant M, Sunny K, Jimmy S",
					description:
						"Dil ke haal se kya pata, kaun bhala, aur kaun bawla? 👀 🥀\r\nPhir Aayi Hasseen Dillruba iss rahasya ko mitane, on 9 August, only on Netflix ❤️‍🔥\r\n\r\nWatch on Netflix: https://www.netflix.com/title/81683052\r\n\r\nFollow Netflix India on:\r\nWebsite: https://www.netflix.com/\r\nYouTube: http://bit.ly/NetflixIndiaYT\r\nInstagram: http://www.instagram.com/netflix_in\r\nFacebook: http://www.facebook.com/NetflixIN\r\nTwitter: http://twitter.com/netflixindia",
				},
				defaultAudioLanguage: "en-US",
			},
		},
		{
			kind: "youtube#video",
			etag: "3GQB2DmB_Tepp7E0Aby0yTuNCSE",
			id: "roz9sXFkTuE",
			snippet: {
				publishedAt: "2024-07-24T11:33:17Z",
				channelId: "UC_A7K2dXFsTMAciGmnNxy-Q",
				title:
					"Aaj Ki Raat | Stree 2 | Tamannaah Bhatia | Sachin-Jigar | Madhubanti | Divya | Amitabh | 15th August",
				description:
					"Check out the scintillating song featuring Tamannaah Bhatia in the upcoming movie Stree 2! Sung by Madhubanti Bagchi, Divya Kumar with lyrics penned by Amitabh Bhattacharya and composed by Sachin-Jigar, this song is set to sizzle your screens. Don't miss out on the electrifying dance moves and catchy beats!\n\n👉 Subscribe to Saregama Music: https://bit.ly/3FkAS0W\n\nCredits:\nMusic Composer : Sachin - Jigar\nSingers : Madhubanti Bagchi, Divya Kumar, Sachin -Jigar\nLyrics : Amitabh Bhattacharya \n\nAll Music Produced Arranged & Designed By : Sachin-Jigar, Abhishek Singh (White Noise Collectives)\nMusic Production Head - Romil Ved \nBackings : Sumonto Mukherjee, Sahil Vishwakarma, Hrishikesh Gangan\nRecording Engineer : Swar Mehta (White Noise Collective)\nMixed and Mastered by : Eric Pillai (FSOB Studio)\nAssistant Mix Engineer : Michael Edwin Pillai\nChoreographer :  Vijay Ganguly \nDOP: Jishnu Bhattacharjee\n\nStree 2 in cinemas 15th August 2024\n\nJio Studios & Dinesh Vijan present Stree 2 \n\nStarring: Shraddha Kapoor, Rajkummar Rao, Pankaj Tripathi, Abhishek Banerjee, and Aparshakti Khurana\nDirected by: Amar Kaushik\nProduced by: Dinesh Vijan\nProduced by: Jyoti Deshpande\nWritten by: Niren Bhatt\n\nLyrics:\nThodi fursat bhi meri jaan kabhi\nBaahon ko deejiye\nThodi fursat bhi meri jaan kabhi\nBaahon ko deejiye\n\nAaj ki raat maza husn ka\nAankhon se leejiye\nAaj ki raat maza husn ka\nAankhon se leejiye\n\nWaqt barbaad na bin baat ki\nBaaton mein keejiye\nWaqt barbaad na bin baat ki\nBaaton mein keejiye\n\nAaj ki raat maza husn ka\nAankhon se leejiye\nAaj ki raat maza husn ka\nAankhon se leejiye\n\nJaan ki qurbaani\nLe le dilbar jaani\nTabaahi pakki hai\nAag tu main paani\n\nJaan ki qurbaani\nLe le dilbar jaani\nTabaahi pakki hai\nAag tu main paani\n\nMere mehboob samajhiye zara\nMauqe ki nazaakat\nMere mehboob samajhiye zara\nMauqe ki nazaakat\n\nKe khareedi nahin jaa sakti\nHaseenon ki ijaazat\nKe khareedi nahin jaa sakti\nHaseenon ki ijaazat\n\nNaaz itna .. meri jaan\nNaaz itna bhi nahin\nKhokhle vaadon pe keejiye\n\nAaj ki raat maza husn ka\nAankhon se leejiye\nAaj ki raat maza husn ka\nAankhon se leejiye\n\nJaan ki qurbaani\nLe le dilbar jaani\nTabaahi pakki hai\nAag tu main paani\n\nJaan ki qurbaani\nLe le dilbar jaani\nTabaahi pakki hai\nAag tu main paani\n\n#tamannaahbhatia\n#stree2\n#saregamamusic\n#sachinjigar \n#madhubantibagchi\n#amitabhbhattacharya\n#shraddhakapoor\n#rajkumarrao\n#pankajtripathi\n\nLearn to sing in Sur with AI Powered Personal Music Teacher- Padhanisa by Saregama. Download Padhanisa App now; https://sarega.ma/padhanisa\n\nTo Listen To The Songs From Bad Newz, click here:\nhttps://www.youtube.com/playlist?list=PLXCoHsJ9oLefLO2qXLfLhVIiBomnu5Ags\n\nTo Listen To The Songs From Kalki , click here: https://www.youtube.com/playlist?list=PLXCoHsJ9oLecsCGTUkHwoBl5QvPZmrL65\n\nTo Listen To The Songs From Chamkila, click here:\nhttps://www.youtube.com/playlist?list=PLXCoHsJ9oLedUUkYRQTTiyIw25l7VTuTz\n\nTo Listen To The Songs From Rocky Aur Rani ki Prem Kahani , click here: https://www.youtube.com/playlist?list=PLXCoHsJ9oLefBprn38xyDfvgL-73WncT9\n\nTo Listen To Saregama Originals, click here: https://www.youtube.com/playlist?list=PLXCoHsJ9oLeejQ4QL6fdOGBXFz2G_gDex\n\nAawaz Aapki, Gaane Hamare, Ab Sunegi Duniya Saari\nMake your own cover on this song and we’ll launch it on our Openstage Youtube Channel.\nSend it on content@saregama.com \n\nTo buy Saregama Carvaan, visit  https://www.saregama.com/carvaan/carvaanhindi\nTo buy virus free original tracks, visit  https://www.saregama.com/musicstore\n\nLabel:: Saregama India Ltd, A RPSG Group Company\n\nTo buy the original and virus free track, visit www.saregama.com\n\nFollow us on:\n\nYouTube: http://www.youtube.com/saregamamusic\n\nFacebook: http://www.facebook.com/Saregama\n\nInstagram: https://www.instagram.com/saregama_official/\n\nX: https://twitter.com/saregamaglobal",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/roz9sXFkTuE/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/roz9sXFkTuE/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/roz9sXFkTuE/hqdefault.jpg",
						width: 480,
						height: 360,
					},
					standard: {
						url: "https://i.ytimg.com/vi/roz9sXFkTuE/sddefault.jpg",
						width: 640,
						height: 480,
					},
					maxres: {
						url: "https://i.ytimg.com/vi/roz9sXFkTuE/maxresdefault.jpg",
						width: 1280,
						height: 720,
					},
				},
				channelTitle: "Saregama Music",
				tags: [
					"aaj ki raat",
					"aaj ki rat",
					"aaj ki raat stree2",
					"aaj ki rat stree2",
					"stree2 songs",
					"stree2 song",
					"stree2 new song",
					"tamanna new song",
					"tamanna bhatia new song",
					"tamanna song",
					"stree2 teaser",
					"stree2 trailer",
					"Aaj ki raat maza husn ka aankhon se leejiye",
					"Aaj ki raat maza husn ka",
					"Aaj ki raat tamanna song",
					"Aaj ki raat maza husn ka tamanna bhatia song",
					"new hindi song",
					"shraadha kapoor",
					"rajkumar rao",
					"pankaj tripathi",
					"sachin jigar songs",
					"madhubanti bagchi songs",
					"amitabh bhattacharya songs",
				],
				categoryId: "10",
				liveBroadcastContent: "none",
				defaultLanguage: "en",
				localized: {
					title:
						"Aaj Ki Raat | Stree 2 | Tamannaah Bhatia | Sachin-Jigar | Madhubanti | Divya | Amitabh | 15th August",
					description:
						"Check out the scintillating song featuring Tamannaah Bhatia in the upcoming movie Stree 2! Sung by Madhubanti Bagchi, Divya Kumar with lyrics penned by Amitabh Bhattacharya and composed by Sachin-Jigar, this song is set to sizzle your screens. Don't miss out on the electrifying dance moves and catchy beats!\n\n👉 Subscribe to Saregama Music: https://bit.ly/3FkAS0W\n\nCredits:\nMusic Composer : Sachin - Jigar\nSingers : Madhubanti Bagchi, Divya Kumar, Sachin -Jigar\nLyrics : Amitabh Bhattacharya \n\nAll Music Produced Arranged & Designed By : Sachin-Jigar, Abhishek Singh (White Noise Collectives)\nMusic Production Head - Romil Ved \nBackings : Sumonto Mukherjee, Sahil Vishwakarma, Hrishikesh Gangan\nRecording Engineer : Swar Mehta (White Noise Collective)\nMixed and Mastered by : Eric Pillai (FSOB Studio)\nAssistant Mix Engineer : Michael Edwin Pillai\nChoreographer :  Vijay Ganguly \nDOP: Jishnu Bhattacharjee\n\nStree 2 in cinemas 15th August 2024\n\nJio Studios & Dinesh Vijan present Stree 2 \n\nStarring: Shraddha Kapoor, Rajkummar Rao, Pankaj Tripathi, Abhishek Banerjee, and Aparshakti Khurana\nDirected by: Amar Kaushik\nProduced by: Dinesh Vijan\nProduced by: Jyoti Deshpande\nWritten by: Niren Bhatt\n\nLyrics:\nThodi fursat bhi meri jaan kabhi\nBaahon ko deejiye\nThodi fursat bhi meri jaan kabhi\nBaahon ko deejiye\n\nAaj ki raat maza husn ka\nAankhon se leejiye\nAaj ki raat maza husn ka\nAankhon se leejiye\n\nWaqt barbaad na bin baat ki\nBaaton mein keejiye\nWaqt barbaad na bin baat ki\nBaaton mein keejiye\n\nAaj ki raat maza husn ka\nAankhon se leejiye\nAaj ki raat maza husn ka\nAankhon se leejiye\n\nJaan ki qurbaani\nLe le dilbar jaani\nTabaahi pakki hai\nAag tu main paani\n\nJaan ki qurbaani\nLe le dilbar jaani\nTabaahi pakki hai\nAag tu main paani\n\nMere mehboob samajhiye zara\nMauqe ki nazaakat\nMere mehboob samajhiye zara\nMauqe ki nazaakat\n\nKe khareedi nahin jaa sakti\nHaseenon ki ijaazat\nKe khareedi nahin jaa sakti\nHaseenon ki ijaazat\n\nNaaz itna .. meri jaan\nNaaz itna bhi nahin\nKhokhle vaadon pe keejiye\n\nAaj ki raat maza husn ka\nAankhon se leejiye\nAaj ki raat maza husn ka\nAankhon se leejiye\n\nJaan ki qurbaani\nLe le dilbar jaani\nTabaahi pakki hai\nAag tu main paani\n\nJaan ki qurbaani\nLe le dilbar jaani\nTabaahi pakki hai\nAag tu main paani\n\n#tamannaahbhatia\n#stree2\n#saregamamusic\n#sachinjigar \n#madhubantibagchi\n#amitabhbhattacharya\n#shraddhakapoor\n#rajkumarrao\n#pankajtripathi\n\nLearn to sing in Sur with AI Powered Personal Music Teacher- Padhanisa by Saregama. Download Padhanisa App now; https://sarega.ma/padhanisa\n\nTo Listen To The Songs From Bad Newz, click here:\nhttps://www.youtube.com/playlist?list=PLXCoHsJ9oLefLO2qXLfLhVIiBomnu5Ags\n\nTo Listen To The Songs From Kalki , click here: https://www.youtube.com/playlist?list=PLXCoHsJ9oLecsCGTUkHwoBl5QvPZmrL65\n\nTo Listen To The Songs From Chamkila, click here:\nhttps://www.youtube.com/playlist?list=PLXCoHsJ9oLedUUkYRQTTiyIw25l7VTuTz\n\nTo Listen To The Songs From Rocky Aur Rani ki Prem Kahani , click here: https://www.youtube.com/playlist?list=PLXCoHsJ9oLefBprn38xyDfvgL-73WncT9\n\nTo Listen To Saregama Originals, click here: https://www.youtube.com/playlist?list=PLXCoHsJ9oLeejQ4QL6fdOGBXFz2G_gDex\n\nAawaz Aapki, Gaane Hamare, Ab Sunegi Duniya Saari\nMake your own cover on this song and we’ll launch it on our Openstage Youtube Channel.\nSend it on content@saregama.com \n\nTo buy Saregama Carvaan, visit  https://www.saregama.com/carvaan/carvaanhindi\nTo buy virus free original tracks, visit  https://www.saregama.com/musicstore\n\nLabel:: Saregama India Ltd, A RPSG Group Company\n\nTo buy the original and virus free track, visit www.saregama.com\n\nFollow us on:\n\nYouTube: http://www.youtube.com/saregamamusic\n\nFacebook: http://www.facebook.com/Saregama\n\nInstagram: https://www.instagram.com/saregama_official/\n\nX: https://twitter.com/saregamaglobal",
				},
				defaultAudioLanguage: "hi",
			},
		},
		{
			kind: "youtube#video",
			etag: "ngk-fj4jwoo5lDeLOxEPJ9LMf9k",
			id: "eyB67gJPJOc",
			snippet: {
				publishedAt: "2024-07-26T03:43:27Z",
				channelId: "UCrn698AOJJ69zWN9Z_kTAKQ",
				title: "🔥Raayan Public Review | Raayan Review | Dhanush, SJ Suryah",
				description:
					"#raayanreview\n#raayanmoviereview\n#raayanpublicreview\n\n\nThis Review From Bangalore FDFS\n\n\n#raayan, #raayanfdfs, #raayandfsreview, #raayanfdfsresponse, #raayanfdfsbangalore, raayan, raayan movie, raayan review, raayan fdfs celebration, raayan fdfs whatsapp status, raayan fdfs live, raayan fdfs reaction, raayan movie fdfs, raayan move fdfs celebration, raayan movie fdfs whatsapp status, raayan fdfs celebrations, raayan fdfs movie celebrations, raayan fdfs review, raayan movie fdfs review, raayan fdfs reaction, raayan movie fdfs reaction, raayan fdfs public review, raayan movie fdfs public review,raayan public review, raayan public talk, raayan public opinion, raayan public review tamil, raayan public review telugu, raayan public review hindi, raayan public review whatsapp status, raayan public review today, raayan public review bangalore, raayan public review kerala, raayan public review blue sattai, raayan public review troll, raayan public review tamil today, raayan public review tamil whatsapp status, raayan public review tamil status, raayan public review tamil troll, raayan movie public review, raayan movie public review in tamil, raayan public talk, raayan public talk telugu, raayan public talk tamil, raayan public talk chennai, raayan public talk malayalam, raayan public talk today, raayan public opinion, raayan public opinion tamil, raayan public opinion telugu, raayan public opinion troll, raayan movie public opinion, raayan theatre public review, raayan new video, raayan new video, raayan danush ntry, raayan danush mass scenes, raayan theatre review, raayan theatre response,raayan its prasanth review, raayan movie reviews, tamil cinema review raayan, raayan review tamil cinema review, raayan panda review, raayan filmi craft review, raayan review by prashanth, raayan review empty hand, empty hand raayan review, filmi craft arun review raayan, raayan review filmi craft, raayan public review, raayan review, raayan movie review, raayan tamil movie review,raayan review public, raayan movie review public, raayan review tamil talkies, tamil talkies review raayan, raayan review by prasanth, raayan review memes, raayan movie public review chennai, raayan public review in hyderabad, raayan public review whatsapp status, raayan review blue sattai, raayan memes review, raayan review meme, raayan meme review, raayan movie meme review, raayan meme reviews, raayan review in tamil public, raayan reviews, raayan public reviews, raayan tamil movie reviews, raayan tamil movie public reviews, raayan public review overseas, raayan tamil deleted scenes, raayan tamil movie deleted scenes, raayan review tamil, raayan review today, raayan review blue sattai, raayan fans review, raayan movie fans review, raayan tamil movie public review, raayan tamil movie public opinion, raayan tamil movie public talk, raayan tamil movie public reaction, raayan interview, raayan review telugu, raayan review today, raayan review prasanth, raayan deleted scenes, raayan all promos, raayan movie all promos, raayan tamil talkies review, raayan blue sattai maran review, public review raayan, public talk raayan, public opinion raayan, raayan interval, raayan interval scene, raayan dhanush interval scene, raayan dhanush interval scene, raayan dhanush movie review, raayan tamil public review, raayan bangalore public review, thi cinemas public review raayan, tamil talkies raayan review, blue sattai maran raayan review,  raayan song whatsapp Status, raayan movie Tamil, raayan fdfs celebration, raayanfdfs celebration chennai, raayan dhanush fans reaction, raayan movie songs Whatsapp status, raayan movie Whatsapp status, raayan story, raayan dhanush mass scenes, raayan dhanush mass dialogue, ராயன், ராயன் விமர்சனம், ராயன் திரைவிமர்சனம், raayan fdfs rohini theatre celebration, capatain miller fdfs celebration chennai, raayan dhanush interval scene, raayan bangalore review, raayan celebrities review, raayan dhanush intro scene, raayan dhanush sj suryah mass scene, raayan dhanush selvaraghavan scene, dhanush, dhanush movies, dhanush latest movie, dhanush new movie, dhanush latest news, dhanush today news, dhanush raayan movie troll, dhanush raayan movie review, dhanush raayan audio launch speech, dhanush speech raayan audio launch, dhanush raayan audio launch, dhanush raayan audio launch emotional speech, raayan usure neethane, raayan usure neethane song, raayan usure neethane reels, raayan usure neethane shorts, raayan usure neethane video, raayan usure neethane whats app status, raayan usure neethane video song, raayan usure neethane song video, raayan movie usure neethane, raayan movie usure neethane song, raayan movie usure neethane reels, raayan movie usure neethane shorts, raayan movie usure neethane video, raayan movie usure neethane whats app status, raayan movie usure neethane video song, raayan movie usure neethane song video,",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/eyB67gJPJOc/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/eyB67gJPJOc/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/eyB67gJPJOc/hqdefault.jpg",
						width: 480,
						height: 360,
					},
					standard: {
						url: "https://i.ytimg.com/vi/eyB67gJPJOc/sddefault.jpg",
						width: 640,
						height: 480,
					},
					maxres: {
						url: "https://i.ytimg.com/vi/eyB67gJPJOc/maxresdefault.jpg",
						width: 1280,
						height: 720,
					},
				},
				channelTitle: "Thi Cinemas",
				tags: [
					"raayan",
					"raayan movie",
					"raayan review",
					"raayan movie review",
					"raayan public review",
					"raayan public review banglore",
					"raayan fdfs review",
					"raayan movie fdfs review",
					"raayan public talk",
					"raayan movie public talk",
					"raayan public reaction",
					"raayan movie public reaction",
					"raayan theatre response",
					"raayan blue sattai review",
					"raayan review its prasanth",
					"raayan public opinion",
					"raayan fdfs response",
					"raayan dhanush movie review",
					"raayan dhanush entry scene",
					"raayan movie fdfs celebration",
				],
				categoryId: "25",
				liveBroadcastContent: "none",
				defaultLanguage: "ta",
				localized: {
					title: "🔥Raayan Public Review | Raayan Review | Dhanush, SJ Suryah",
					description:
						"#raayanreview\n#raayanmoviereview\n#raayanpublicreview\n\n\nThis Review From Bangalore FDFS\n\n\n#raayan, #raayanfdfs, #raayandfsreview, #raayanfdfsresponse, #raayanfdfsbangalore, raayan, raayan movie, raayan review, raayan fdfs celebration, raayan fdfs whatsapp status, raayan fdfs live, raayan fdfs reaction, raayan movie fdfs, raayan move fdfs celebration, raayan movie fdfs whatsapp status, raayan fdfs celebrations, raayan fdfs movie celebrations, raayan fdfs review, raayan movie fdfs review, raayan fdfs reaction, raayan movie fdfs reaction, raayan fdfs public review, raayan movie fdfs public review,raayan public review, raayan public talk, raayan public opinion, raayan public review tamil, raayan public review telugu, raayan public review hindi, raayan public review whatsapp status, raayan public review today, raayan public review bangalore, raayan public review kerala, raayan public review blue sattai, raayan public review troll, raayan public review tamil today, raayan public review tamil whatsapp status, raayan public review tamil status, raayan public review tamil troll, raayan movie public review, raayan movie public review in tamil, raayan public talk, raayan public talk telugu, raayan public talk tamil, raayan public talk chennai, raayan public talk malayalam, raayan public talk today, raayan public opinion, raayan public opinion tamil, raayan public opinion telugu, raayan public opinion troll, raayan movie public opinion, raayan theatre public review, raayan new video, raayan new video, raayan danush ntry, raayan danush mass scenes, raayan theatre review, raayan theatre response,raayan its prasanth review, raayan movie reviews, tamil cinema review raayan, raayan review tamil cinema review, raayan panda review, raayan filmi craft review, raayan review by prashanth, raayan review empty hand, empty hand raayan review, filmi craft arun review raayan, raayan review filmi craft, raayan public review, raayan review, raayan movie review, raayan tamil movie review,raayan review public, raayan movie review public, raayan review tamil talkies, tamil talkies review raayan, raayan review by prasanth, raayan review memes, raayan movie public review chennai, raayan public review in hyderabad, raayan public review whatsapp status, raayan review blue sattai, raayan memes review, raayan review meme, raayan meme review, raayan movie meme review, raayan meme reviews, raayan review in tamil public, raayan reviews, raayan public reviews, raayan tamil movie reviews, raayan tamil movie public reviews, raayan public review overseas, raayan tamil deleted scenes, raayan tamil movie deleted scenes, raayan review tamil, raayan review today, raayan review blue sattai, raayan fans review, raayan movie fans review, raayan tamil movie public review, raayan tamil movie public opinion, raayan tamil movie public talk, raayan tamil movie public reaction, raayan interview, raayan review telugu, raayan review today, raayan review prasanth, raayan deleted scenes, raayan all promos, raayan movie all promos, raayan tamil talkies review, raayan blue sattai maran review, public review raayan, public talk raayan, public opinion raayan, raayan interval, raayan interval scene, raayan dhanush interval scene, raayan dhanush interval scene, raayan dhanush movie review, raayan tamil public review, raayan bangalore public review, thi cinemas public review raayan, tamil talkies raayan review, blue sattai maran raayan review,  raayan song whatsapp Status, raayan movie Tamil, raayan fdfs celebration, raayanfdfs celebration chennai, raayan dhanush fans reaction, raayan movie songs Whatsapp status, raayan movie Whatsapp status, raayan story, raayan dhanush mass scenes, raayan dhanush mass dialogue, ராயன், ராயன் விமர்சனம், ராயன் திரைவிமர்சனம், raayan fdfs rohini theatre celebration, capatain miller fdfs celebration chennai, raayan dhanush interval scene, raayan bangalore review, raayan celebrities review, raayan dhanush intro scene, raayan dhanush sj suryah mass scene, raayan dhanush selvaraghavan scene, dhanush, dhanush movies, dhanush latest movie, dhanush new movie, dhanush latest news, dhanush today news, dhanush raayan movie troll, dhanush raayan movie review, dhanush raayan audio launch speech, dhanush speech raayan audio launch, dhanush raayan audio launch, dhanush raayan audio launch emotional speech, raayan usure neethane, raayan usure neethane song, raayan usure neethane reels, raayan usure neethane shorts, raayan usure neethane video, raayan usure neethane whats app status, raayan usure neethane video song, raayan usure neethane song video, raayan movie usure neethane, raayan movie usure neethane song, raayan movie usure neethane reels, raayan movie usure neethane shorts, raayan movie usure neethane video, raayan movie usure neethane whats app status, raayan movie usure neethane video song, raayan movie usure neethane song video,",
				},
				defaultAudioLanguage: "ta",
			},
		},
		{
			kind: "youtube#video",
			etag: "2m-ndD7DA6QpVqIIBVM5aRWZsSU",
			id: "_grxPdD3zSE",
			snippet: {
				publishedAt: "2024-07-25T12:30:08Z",
				channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
				title:
					"KHEL KHEL MEIN: HAULI HAULI | Akshay K, Guru Randhawa, YO YO Honey Singh, Neha, Ammy, Taapsee, Vaani",
				description:
					'Get ready to move to the beats! Presenting the First Banger "Hauli Hauli" from The Much-Awaited Film "Khel Khel Mein". Starring Akshay Kumar, Ammy Virk, Taapsee Pannu, Vani Kapoor, Fardeen Khan, Aditya Seal & Pragya Jaiswal. Sung by Guru Randhawa, Yo Yo Honey Singh and Neha Kakkar, Composed & Written by Guru Randhawa. Choreographed by Piyush-Shazia.\n\nGulshan Kumar, T-Series & Wakaoo Films Present\nA T-Series Films, Wakaoo Films & KKM Film Ltd. Production\n\n#KhelKhelMein Coming on 15th August😍 2024. In Cinemas Near You!\n\n#AkshayKumar #GuruRandhawa #AmmyVirk #TaapseePannu #VaaniKapoor #FardeenKhan #AdityaSeal #YoyoHoneySingh #NehaKakkar\n\nMake Your Shorts on #HauliHauli 😍▶https://youtube.com/source/Kt2Hc3dvBUc/shorts\n\n♪Full Song Available on♪ \nJioSaavn: https://bit.ly/4d7KhIo\nSpotify: https://bit.ly/3WCW63N\nHungama: https://bit.ly/4cS4Bxq\nApple Music: https://bit.ly/4cVbdem\nGaana: https://bit.ly/3zYqiNX\nAmazon Prime Music: https://bit.ly/4dihlNU\nWynk: https://bit.ly/3Yhn55Y\nYouTube Music: https://bit.ly/3LDVBjx\n\nSong Credits:\nSingers: Guru Randhawa, Yo Yo Honey Singh, Neha Kakkar\nMusic: Guru Randhawa\nLyrics: Guru Randhawa\nArranged By: JSL Singh\nMixing & Mastering: Eric Pillai @ Future Sound of Bombay\nMix Assistant Engineer: Michael Edwin Pillai\nChoreographed by Piyush-Shazia.\nMusic Label: T-Series\n\nFilm Credits:\nDirected by - Mudassar Aziz\nProduced by - Bhushan Kumar, Krishan Kumar \nProduced by - Vipul D Shah, Ashwin Varde, Rajesh Bahl\nProduced by - Shashikant Sinha\nProduced by - Firuzi Khan\nCo-Producer - Shiv Chanana   \nPresident (T-Series) - Neeraj Kalyan\nStory & Dialogues - Mudassar Aziz \nScreenplay - Mudassar Aziz, Sara Bodinar \nDop - Manoj Kumar Khatoi \nProduction Designer - Rupin Suchak  \nEditor - Ninad Khanolkar\nCostume Designer - Sanam Ratansi  \nOriginal Background Score - John Stewart Eduri \nSound Designer - Arun Nambiar \nRe-Recording Mixer - Ajaykumar P.B.\nMusic - Tanishk Bagchi, Muhammad Sajid, Rochak Kohli, Guru Randhawa, Intense, Jassi Sidhu \nLyrics - Kumaar, Khadim Hussain, Guru Randhawa, Jassi Sidhu, Rahul Gill\nChoreographer - Raju Khan, Piyush - Shazia \nDi - Prime Focus Ltd.\nVfx Supervisor - Poya Shouhani, K V Sanjit \nVfx - Identical Brains Studios\nSupervising Producer - Mohammad S. Hyderabadwala \nExecutive Producer - Chander Bir Singh \nProject Head (wakaoo Films) - Barkha Thakur\nProject Head (T-Series) - Alok Kumar Shukla \nFilm & Content Team (T-Series) - Heett Savla, Shraddha Shrikant Ghanekar, Meghha Chheda\nMarketing & Promotions (T-Series) - Shivam Chanana,raj Chanana,prashant Shetty,mita Choudhary, Rahul Dubey,Amol Bhamare,Heett Savla\nDigital Team (T-Series) - Varun Arora, Juhi Singh, Praveen Sharma, Ratika Anand, Mohit Malik\nMusic on - T-Series  \nMusic Team (T-Series) - Raj Chanana,  Shivam Chanana, Sonal Chawla, Sonu Srivastava, Vivin Sachdeva\nPr Agency - Communique Film Pr  \nDigital Marketing - Everymedia \nPublicity Design - (ma+th)2   \nVisual Promotion - Just Right Studios Nx\n\nDownload Song Beat: https://bit.ly/3Cjh24R \n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official',
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/_grxPdD3zSE/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/_grxPdD3zSE/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/_grxPdD3zSE/hqdefault.jpg",
						width: 480,
						height: 360,
					},
					standard: {
						url: "https://i.ytimg.com/vi/_grxPdD3zSE/sddefault.jpg",
						width: 640,
						height: 480,
					},
					maxres: {
						url: "https://i.ytimg.com/vi/_grxPdD3zSE/maxresdefault.jpg",
						width: 1280,
						height: 720,
					},
				},
				channelTitle: "T-Series",
				tags: [
					"hindi songs 2024",
					"bollywood songs 2024",
					"bollywood movies 2024",
					"tseries",
					"tseries songs",
					"Hauli Hauli Song",
					"hauli hauli song akshay kumar",
					"akshay kumar hauli hauli song",
					"hauli hauli song yo yo honey singh",
					"hauli hauli song khel khel mein",
					"khel khel mein song",
					"khel khel mein akshay kumar",
					"hauli hauli khel khel mein song",
					"akshay kumar khel khel mein",
					"hauli hauli song guru randhawa",
					"honey singh hauli hauli",
					"khel khel mein hauli hauli song",
					"hauli hauli",
					"khel khel mein",
					"akshay kumar",
				],
				categoryId: "10",
				liveBroadcastContent: "none",
				localized: {
					title:
						"KHEL KHEL MEIN: HAULI HAULI | Akshay K, Guru Randhawa, YO YO Honey Singh, Neha, Ammy, Taapsee, Vaani",
					description:
						'Get ready to move to the beats! Presenting the First Banger "Hauli Hauli" from The Much-Awaited Film "Khel Khel Mein". Starring Akshay Kumar, Ammy Virk, Taapsee Pannu, Vani Kapoor, Fardeen Khan, Aditya Seal & Pragya Jaiswal. Sung by Guru Randhawa, Yo Yo Honey Singh and Neha Kakkar, Composed & Written by Guru Randhawa. Choreographed by Piyush-Shazia.\n\nGulshan Kumar, T-Series & Wakaoo Films Present\nA T-Series Films, Wakaoo Films & KKM Film Ltd. Production\n\n#KhelKhelMein Coming on 15th August😍 2024. In Cinemas Near You!\n\n#AkshayKumar #GuruRandhawa #AmmyVirk #TaapseePannu #VaaniKapoor #FardeenKhan #AdityaSeal #YoyoHoneySingh #NehaKakkar\n\nMake Your Shorts on #HauliHauli 😍▶https://youtube.com/source/Kt2Hc3dvBUc/shorts\n\n♪Full Song Available on♪ \nJioSaavn: https://bit.ly/4d7KhIo\nSpotify: https://bit.ly/3WCW63N\nHungama: https://bit.ly/4cS4Bxq\nApple Music: https://bit.ly/4cVbdem\nGaana: https://bit.ly/3zYqiNX\nAmazon Prime Music: https://bit.ly/4dihlNU\nWynk: https://bit.ly/3Yhn55Y\nYouTube Music: https://bit.ly/3LDVBjx\n\nSong Credits:\nSingers: Guru Randhawa, Yo Yo Honey Singh, Neha Kakkar\nMusic: Guru Randhawa\nLyrics: Guru Randhawa\nArranged By: JSL Singh\nMixing & Mastering: Eric Pillai @ Future Sound of Bombay\nMix Assistant Engineer: Michael Edwin Pillai\nChoreographed by Piyush-Shazia.\nMusic Label: T-Series\n\nFilm Credits:\nDirected by - Mudassar Aziz\nProduced by - Bhushan Kumar, Krishan Kumar \nProduced by - Vipul D Shah, Ashwin Varde, Rajesh Bahl\nProduced by - Shashikant Sinha\nProduced by - Firuzi Khan\nCo-Producer - Shiv Chanana   \nPresident (T-Series) - Neeraj Kalyan\nStory & Dialogues - Mudassar Aziz \nScreenplay - Mudassar Aziz, Sara Bodinar \nDop - Manoj Kumar Khatoi \nProduction Designer - Rupin Suchak  \nEditor - Ninad Khanolkar\nCostume Designer - Sanam Ratansi  \nOriginal Background Score - John Stewart Eduri \nSound Designer - Arun Nambiar \nRe-Recording Mixer - Ajaykumar P.B.\nMusic - Tanishk Bagchi, Muhammad Sajid, Rochak Kohli, Guru Randhawa, Intense, Jassi Sidhu \nLyrics - Kumaar, Khadim Hussain, Guru Randhawa, Jassi Sidhu, Rahul Gill\nChoreographer - Raju Khan, Piyush - Shazia \nDi - Prime Focus Ltd.\nVfx Supervisor - Poya Shouhani, K V Sanjit \nVfx - Identical Brains Studios\nSupervising Producer - Mohammad S. Hyderabadwala \nExecutive Producer - Chander Bir Singh \nProject Head (wakaoo Films) - Barkha Thakur\nProject Head (T-Series) - Alok Kumar Shukla \nFilm & Content Team (T-Series) - Heett Savla, Shraddha Shrikant Ghanekar, Meghha Chheda\nMarketing & Promotions (T-Series) - Shivam Chanana,raj Chanana,prashant Shetty,mita Choudhary, Rahul Dubey,Amol Bhamare,Heett Savla\nDigital Team (T-Series) - Varun Arora, Juhi Singh, Praveen Sharma, Ratika Anand, Mohit Malik\nMusic on - T-Series  \nMusic Team (T-Series) - Raj Chanana,  Shivam Chanana, Sonal Chawla, Sonu Srivastava, Vivin Sachdeva\nPr Agency - Communique Film Pr  \nDigital Marketing - Everymedia \nPublicity Design - (ma+th)2   \nVisual Promotion - Just Right Studios Nx\n\nDownload Song Beat: https://bit.ly/3Cjh24R \n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official',
				},
				defaultAudioLanguage: "hi",
			},
		},
		{
			kind: "youtube#video",
			etag: "x256OehP3XlP3YJuF-HH1AJSoy0",
			id: "T9d_JnE7y14",
			snippet: {
				publishedAt: "2024-07-24T11:31:12Z",
				channelId: "UCLbdVvreihwZRL6kwuEUYsA",
				title:
					"Demonte Colony 2 - Release Trailer | Arulnithi, Priya Bhavani Shankar | Ajay R Gnanamuthu | Sam CS",
				description:
					'#Demontecolony2 #AjayRGnanamuthu #Arulnithi\n#PriyaBhavaniShankar #BobbyBalachandran #BTGUniversal #GnanamuthuPattarai #WhiteNightsEntertainment #DemonteColony2ReleaseTrailer\n\nPeek into the journey to DARKNESS!!!\nHere\'s the Release Trailer of "Demonte Colony 2" Written & Directed by Ajay R Gnanamuthu, Starring Arulnithi and PriyaBhavaniShankar in the lead. Produced by Bobby Balachandran of BTG Universal in Association with White Nights Entertainment and Gnanamuthu Pattarai.\n\nMovie Credits:\n\nWriter & Director - Ajay R Gnanamuthu\nProducers - Bobby Balachandran, Vijayasubramanian, RC Rajkumar \nCreative Producer - Ajay R Gnanamuthu\nBTG - Dr. Manoj Beno\nStarring - Arulnithi, Priya Bhavanishankar, Antti Jaaskelainen, Tsering Dorjee, Arunpandian, Muthukumar, Meenakshi Govindarajan, Sarjano Khalid, Archana Ravichandran\nMusic - Sam CS\nDOP - Harish Kannan\nEditor - Kumaresh D\nProduction Design - Ravi Pandi\nStunt - Ganesh \nCostume Designer - Navadevi Rajkumar, Malini Karthikeyan\nCo-Writers - Venkatesh, Rajavel\nLyrics - Mohanrajan\nSet Master - G Ramalingam\nVFX Supervisor - Fazil \nChief Co-Director - Venkatesh\nCo-Directors - Baharudeen, Naveen Varadharajan, Sathish Kira\n2nd Unit Directors - Sharath Sha, VG Balasubramanian\nExecutive Producers - A R Mugesh Sharmaa, J.P, VG Balasubramanian\nStills - Anburaj A\nPRO - Suresh Chandra, Yuvaraaj\nSound Design - Sync Cinema \nSound Mix - Aravind Menon\nVFX - Pixel Light Studio \nDI - B2H Studios\nColourist - Raghunath Varma, Arun Sangameshwar \nPublicity Design - Prathool NT\n\nAudio Label : Think Music\n\n© 2024 SPI Music Pvt. Ltd.\n\nFor All Latest Updates:\nWebsite: https://thinkmusic.in/\nSubscribe to us on: http://www.youtube.com/thinkmusicindia\nFollow us on: https://twitter.com/thinkmusicindia\nLike us on: https://www.facebook.com/Thinkmusicofficial\nFollow us on: https://www.instagram.com/thinkmusicofficial',
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/T9d_JnE7y14/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/T9d_JnE7y14/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/T9d_JnE7y14/hqdefault.jpg",
						width: 480,
						height: 360,
					},
					standard: {
						url: "https://i.ytimg.com/vi/T9d_JnE7y14/sddefault.jpg",
						width: 640,
						height: 480,
					},
					maxres: {
						url: "https://i.ytimg.com/vi/T9d_JnE7y14/maxresdefault.jpg",
						width: 1280,
						height: 720,
					},
				},
				channelTitle: "Think Music India",
				tags: [
					"demonte colony 2",
					"arulnithi",
					"priya bhavani shankar",
					"sam cs",
					"ajay r gnanamuthu",
					"demonte colony 2 tamil movie",
					"arulnithi demonte colony 2",
					"demonte colony 2 arulnithi movie",
					"sam c s",
					"demonte colony 2 release trailer",
					"demonte colony 2 tamil movie release trailer",
					"arulnithi demonte colony 2 release trailer",
					"demonte colony 2 movie trailer tamil",
					"arulnithi demote colony 2",
					"demonte colony 2 movie release trailer",
					"arulnithi demonte colony 2 movie release trailer",
					"latest tamil movies 2024",
				],
				categoryId: "1",
				liveBroadcastContent: "none",
				defaultLanguage: "en",
				localized: {
					title:
						"Demonte Colony 2 - Release Trailer | Arulnithi, Priya Bhavani Shankar | Ajay R Gnanamuthu | Sam CS",
					description:
						'#Demontecolony2 #AjayRGnanamuthu #Arulnithi\n#PriyaBhavaniShankar #BobbyBalachandran #BTGUniversal #GnanamuthuPattarai #WhiteNightsEntertainment #DemonteColony2ReleaseTrailer\n\nPeek into the journey to DARKNESS!!!\nHere\'s the Release Trailer of "Demonte Colony 2" Written & Directed by Ajay R Gnanamuthu, Starring Arulnithi and PriyaBhavaniShankar in the lead. Produced by Bobby Balachandran of BTG Universal in Association with White Nights Entertainment and Gnanamuthu Pattarai.\n\nMovie Credits:\n\nWriter & Director - Ajay R Gnanamuthu\nProducers - Bobby Balachandran, Vijayasubramanian, RC Rajkumar \nCreative Producer - Ajay R Gnanamuthu\nBTG - Dr. Manoj Beno\nStarring - Arulnithi, Priya Bhavanishankar, Antti Jaaskelainen, Tsering Dorjee, Arunpandian, Muthukumar, Meenakshi Govindarajan, Sarjano Khalid, Archana Ravichandran\nMusic - Sam CS\nDOP - Harish Kannan\nEditor - Kumaresh D\nProduction Design - Ravi Pandi\nStunt - Ganesh \nCostume Designer - Navadevi Rajkumar, Malini Karthikeyan\nCo-Writers - Venkatesh, Rajavel\nLyrics - Mohanrajan\nSet Master - G Ramalingam\nVFX Supervisor - Fazil \nChief Co-Director - Venkatesh\nCo-Directors - Baharudeen, Naveen Varadharajan, Sathish Kira\n2nd Unit Directors - Sharath Sha, VG Balasubramanian\nExecutive Producers - A R Mugesh Sharmaa, J.P, VG Balasubramanian\nStills - Anburaj A\nPRO - Suresh Chandra, Yuvaraaj\nSound Design - Sync Cinema \nSound Mix - Aravind Menon\nVFX - Pixel Light Studio \nDI - B2H Studios\nColourist - Raghunath Varma, Arun Sangameshwar \nPublicity Design - Prathool NT\n\nAudio Label : Think Music\n\n© 2024 SPI Music Pvt. Ltd.\n\nFor All Latest Updates:\nWebsite: https://thinkmusic.in/\nSubscribe to us on: http://www.youtube.com/thinkmusicindia\nFollow us on: https://twitter.com/thinkmusicindia\nLike us on: https://www.facebook.com/Thinkmusicofficial\nFollow us on: https://www.instagram.com/thinkmusicofficial',
				},
				defaultAudioLanguage: "ta",
			},
		},
		{
			kind: "youtube#video",
			etag: "gkn-OiUswjvobG7Uu9YHi2D4O34",
			id: "d0Ja5uDGWsM",
			snippet: {
				publishedAt: "2024-07-25T15:34:09Z",
				channelId: "UCSncGB_s0tuWN-4l-58mmvQ",
				title: "MINECRAFT BUT I PLACE 1,000,000 BLOCKS...",
				description:
					"So today, I will play Minecraft, but my mission is to place 1,000,000 Blocks in my world and convert it into proboiz planet!\nLIKE KAROO!\n\nFOLLOW ME :\nInstagram - https://www.instagram.com/proboiz_95\nTwitter - https://twitter.com/proboiz95\n\nBusiness Inquiry - proboizofficial@gmail.com\n\nAbout me: I am Paresh, Aka ProBoiz and I make gaming videos that will surely make your day! So if you enjoyed watching this videos then SMASH that Like button :D",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/d0Ja5uDGWsM/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/d0Ja5uDGWsM/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/d0Ja5uDGWsM/hqdefault.jpg",
						width: 480,
						height: 360,
					},
					standard: {
						url: "https://i.ytimg.com/vi/d0Ja5uDGWsM/sddefault.jpg",
						width: 640,
						height: 480,
					},
					maxres: {
						url: "https://i.ytimg.com/vi/d0Ja5uDGWsM/maxresdefault.jpg",
						width: 1280,
						height: 720,
					},
				},
				channelTitle: "ProBoiz 95",
				tags: [
					"minecraft",
					"minecraft but",
					"minecraft but mod",
					"minecraft place blocks",
					"minecraft 1000000 blocks",
					"minecraft but proboiz",
					"minecraft hindi",
					"proboiz",
					"proboii",
					"proboiz 95",
				],
				categoryId: "20",
				liveBroadcastContent: "none",
				localized: {
					title: "MINECRAFT BUT I PLACE 1,000,000 BLOCKS...",
					description:
						"So today, I will play Minecraft, but my mission is to place 1,000,000 Blocks in my world and convert it into proboiz planet!\nLIKE KAROO!\n\nFOLLOW ME :\nInstagram - https://www.instagram.com/proboiz_95\nTwitter - https://twitter.com/proboiz95\n\nBusiness Inquiry - proboizofficial@gmail.com\n\nAbout me: I am Paresh, Aka ProBoiz and I make gaming videos that will surely make your day! So if you enjoyed watching this videos then SMASH that Like button :D",
				},
				defaultAudioLanguage: "hi",
			},
		},
		{
			kind: "youtube#video",
			etag: "kQbDPaMTf1tgKZoqLoq1GmV7lQ8",
			id: "PiRW6KOaM5c",
			snippet: {
				publishedAt: "2024-07-24T13:55:40Z",
				channelId: "UCk3JZr7eS3pg5AGEvBdEvFg",
				title:
					"CABBAGE with EGGS | Vegetables with Egg Recipe Cooking in Village | Quick and Easy Omelette Recipe",
				description:
					"We add an egg to the cabbage to make this delicious recipe. We use some fresh vegetables and cabbage, mix them together, and cook them in a big hot vessel. This is the trending omelet recipe for those who want to try new recipes.",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/PiRW6KOaM5c/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/PiRW6KOaM5c/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/PiRW6KOaM5c/hqdefault.jpg",
						width: 480,
						height: 360,
					},
					standard: {
						url: "https://i.ytimg.com/vi/PiRW6KOaM5c/sddefault.jpg",
						width: 640,
						height: 480,
					},
					maxres: {
						url: "https://i.ytimg.com/vi/PiRW6KOaM5c/maxresdefault.jpg",
						width: 1280,
						height: 720,
					},
				},
				channelTitle: "Village Cooking Channel",
				tags: [
					"egg recipes",
					"trendingrecipe",
					"cabbage recipes",
					"omelette recipe",
					"cabbage with egg",
				],
				categoryId: "26",
				liveBroadcastContent: "none",
				localized: {
					title:
						"CABBAGE with EGGS | Vegetables with Egg Recipe Cooking in Village | Quick and Easy Omelette Recipe",
					description:
						"We add an egg to the cabbage to make this delicious recipe. We use some fresh vegetables and cabbage, mix them together, and cook them in a big hot vessel. This is the trending omelet recipe for those who want to try new recipes.",
				},
				defaultAudioLanguage: "en-US",
			},
		},
		{
			kind: "youtube#video",
			etag: "KPBiXuq_jEX8TKSEFD8m_CPyX6E",
			id: "a2AD7Wa8Jx0",
			snippet: {
				publishedAt: "2024-07-24T04:00:01Z",
				channelId: "UCh9Ao0KLPNXGsHqvIU1pdVw",
				title:
					"Savi-Sai-Rajat ka रंगीला hug! | Ep.1284 | Latest | Ghum Hai Kisikey Pyaar Meiin | Mon-Sun | 8PM",
				description:
					"Click here to Subscribe Ghum Hai Kisikey Pyaar Meiin : https://www.youtube.com/channel/UCh9Ao0KLPNXGsHqvIU1pdVw\n\nClick here to Subscribe Star Plus : https://www.youtube.com/channel/UC-LPIU24bQXVljUXivKEeRQ\n\n\n*About* \n------------\n\n       Police officer Virat Chavan ne diya vaada apne marte hue junior ko ke rakhenge woh khayal unki beti, Sai ka. Virat aur Sai bandh gaye anchaahe shaadi ke bandhan mai. Virat ka dil tha Patralekha ke paas jiski shaadi hojati hai kisi aur se. Virat ne vaada kiya Pakhi se ke woh uski jagah kabhi kisi aur ko nahi dega. \n                Virat ne bhale nahi diya Sai ko ek pati ka pyaar par unke rishtey mai izzat hamesha thi. Waqt ke saath saath, Virat ne dekha Sai ka accha roop aur hogaya ussey Sai se pyaar. Yeh kahani hai Virat, Sai aur Patralekha ke pyaar ki.\n\n\n\n#starplus #starplusoriginal #starplusofficial #ghkpm #virat #sai #ayeshasingh #neilbhatt #aishwariya #savi #ishaan #reva #bhavikasharma #shaktiarora #sumitsingh #raosaheb #vaishalithakkar  #highlights #ghumhaikisikeypyaarmeiin #love-hatechemistry #lovestory #ghkpmofficial #love #lovetraingle #student #trending #trends #viral #trp #bestshow #saas #bahu #gossips #comingup #comingsoon #bestof #latest #viral #entertainment #serialupdate #entertainmentnews #dailyupdates #starplusoriginal #fun #trendingnow #starplusshow #tbt #comedy #humor #lol #funnyvideos #bestmoments #everyday #mondaytosunday#youtubedaily  #montosun #recap #precap #1284 #highlights #latest #favouriteshow  #indianserial #serial #tventertainment #tvserial #dailyepisodes #miniseries #family #favourite #how #what #where #why #bestseason #entertainmentfullday #dailysoap #explore #bestscenes #everydayentertainment \n\n\n\n\nConnect with Our More Channels :\n\n\nAnupama Official - https://www.youtube.com/channel/UCBmRoIwanX7NxzB6-Q_ahdA \n\nYeh Rishta Kya Kehlata Hai Official - https://www.youtube.com/channel/UCfqoYnGRFtrIOo5hVb0M_nw\n\nGhum Hai Kisikey Pyaar Meiin Official - https://www.youtube.com/channel/UCh9Ao0KLPNXGsHqvIU1pdVw\n\nStarPlus Classics Official - https://www.youtube.com/channel/UC-0Rh4XQdw2jV8N7rqDJj0Q\n\nStarPlus Thriller - https://www.youtube.com/channel/UC3E2Z2S-4eBGQE1UMDswplg\n\n Savi-Sai-Rajat ka रंगीला hug! | Ep.1284 | Latest | Ghum Hai Kisikey Pyaar Meiin | Mon-Sun | 8PM",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/a2AD7Wa8Jx0/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/a2AD7Wa8Jx0/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/a2AD7Wa8Jx0/hqdefault.jpg",
						width: 480,
						height: 360,
					},
					standard: {
						url: "https://i.ytimg.com/vi/a2AD7Wa8Jx0/sddefault.jpg",
						width: 640,
						height: 480,
					},
					maxres: {
						url: "https://i.ytimg.com/vi/a2AD7Wa8Jx0/maxresdefault.jpg",
						width: 1280,
						height: 720,
					},
				},
				channelTitle: "Ghum Hai Kisikey Pyaar Meiin ",
				tags: [
					"Sharktank & TV",
					"Amazon Prime",
					"Colors Tv",
					"Disney+Hotstar",
					"Netflix",
					"Sony Sab",
					"Sony Tv",
					"Taarak Mehta ka ulta chashma",
					"Tujhse Hai Raabta",
					"Zee Tv",
					"star plus",
					"cricket",
					"pranks",
					"gaming",
					"live streaming",
					"vlogs",
					"Songs",
					"Old songs",
					"the kapil show",
					"Coke Studio",
					"ASMR",
					"Viral",
					"Bigg Boss OTT Season 3",
					"Mr. Beast",
					"Bollywood stars",
					"Youtuber",
					"Gautam Gambhir",
					"Breaking News",
					"Stree 2 Official Trailer",
					"ghkpm",
					"ghum hai kisikey pyaar meiin",
					"ishvi",
					"exclusive",
					"ghkpmlive",
					"ghkpm todays episode ghkpm episode",
					"ghum",
					"drama",
				],
				categoryId: "24",
				liveBroadcastContent: "none",
				localized: {
					title:
						"Savi-Sai-Rajat ka रंगीला hug! | Ep.1284 | Latest | Ghum Hai Kisikey Pyaar Meiin | Mon-Sun | 8PM",
					description:
						"Click here to Subscribe Ghum Hai Kisikey Pyaar Meiin : https://www.youtube.com/channel/UCh9Ao0KLPNXGsHqvIU1pdVw\n\nClick here to Subscribe Star Plus : https://www.youtube.com/channel/UC-LPIU24bQXVljUXivKEeRQ\n\n\n*About* \n------------\n\n       Police officer Virat Chavan ne diya vaada apne marte hue junior ko ke rakhenge woh khayal unki beti, Sai ka. Virat aur Sai bandh gaye anchaahe shaadi ke bandhan mai. Virat ka dil tha Patralekha ke paas jiski shaadi hojati hai kisi aur se. Virat ne vaada kiya Pakhi se ke woh uski jagah kabhi kisi aur ko nahi dega. \n                Virat ne bhale nahi diya Sai ko ek pati ka pyaar par unke rishtey mai izzat hamesha thi. Waqt ke saath saath, Virat ne dekha Sai ka accha roop aur hogaya ussey Sai se pyaar. Yeh kahani hai Virat, Sai aur Patralekha ke pyaar ki.\n\n\n\n#starplus #starplusoriginal #starplusofficial #ghkpm #virat #sai #ayeshasingh #neilbhatt #aishwariya #savi #ishaan #reva #bhavikasharma #shaktiarora #sumitsingh #raosaheb #vaishalithakkar  #highlights #ghumhaikisikeypyaarmeiin #love-hatechemistry #lovestory #ghkpmofficial #love #lovetraingle #student #trending #trends #viral #trp #bestshow #saas #bahu #gossips #comingup #comingsoon #bestof #latest #viral #entertainment #serialupdate #entertainmentnews #dailyupdates #starplusoriginal #fun #trendingnow #starplusshow #tbt #comedy #humor #lol #funnyvideos #bestmoments #everyday #mondaytosunday#youtubedaily  #montosun #recap #precap #1284 #highlights #latest #favouriteshow  #indianserial #serial #tventertainment #tvserial #dailyepisodes #miniseries #family #favourite #how #what #where #why #bestseason #entertainmentfullday #dailysoap #explore #bestscenes #everydayentertainment \n\n\n\n\nConnect with Our More Channels :\n\n\nAnupama Official - https://www.youtube.com/channel/UCBmRoIwanX7NxzB6-Q_ahdA \n\nYeh Rishta Kya Kehlata Hai Official - https://www.youtube.com/channel/UCfqoYnGRFtrIOo5hVb0M_nw\n\nGhum Hai Kisikey Pyaar Meiin Official - https://www.youtube.com/channel/UCh9Ao0KLPNXGsHqvIU1pdVw\n\nStarPlus Classics Official - https://www.youtube.com/channel/UC-0Rh4XQdw2jV8N7rqDJj0Q\n\nStarPlus Thriller - https://www.youtube.com/channel/UC3E2Z2S-4eBGQE1UMDswplg\n\n Savi-Sai-Rajat ka रंगीला hug! | Ep.1284 | Latest | Ghum Hai Kisikey Pyaar Meiin | Mon-Sun | 8PM",
				},
				defaultAudioLanguage: "hi",
			},
		},
		{
			kind: "youtube#video",
			etag: "SEvGmUzHpqGvgPpWm2Wiv6xKlyY",
			id: "COQhETZcNYw",
			snippet: {
				publishedAt: "2024-07-24T04:35:00Z",
				channelId: "UCZT1WGS_kg2sg-kVpWZKEkg",
				title:
					"எந்த அம்மாவும் செய்யாததை துணிந்து செய்த Youtuber Nagaraj அம்மா | Sha boo three @nagarajsangeetha",
				description:
					"CLICK ON THE LINK TO GET EXCITING OFFERS\nDownload Link - https://kukufm.page.link/G6hUADGzBXV5eo386\nGet all the audiobooks for FREE for the next 7 Days!\n\nNote : For IOS Users, Kindly use the coupon code in Kuku FM Web Page to get the additional discount and login to Kuku FM App \n\n****************************************\n\nHi RJ Sha Family, even after her passing, she has left an irreplaceable impact on her family. This video will resonate with many of you. Watch the full video to know more. @nagarajsangeetha \n\n#rjsha #nagarajsangeetha #shaboothree #family #tamilyoutubers \n\n****************************************\n\nClick here to watch :\n\nDare To Talk❌ 5 G-னு சொல்லி ஏமாத்துறாங்க ❌|  25,00,000 New BSNL Sim விற்பனை : https://youtu.be/PWO6K7AVYlU\n\nகோடிக்கணக்கில் புரளும் Jabbar Bhai 🔥கடத்தல் OR பினாமி பணமா ? வெளிவந்த உண்மைகள் : https://youtu.be/j_rVkawRlmA\n\nநெஞ்சை பதறவைக்கும் Bruce Lee & Family கடைசி நிமிட ரகசியங்கள் : https://youtu.be/TsPyCaW_oBA\n\nDare to Talk ❌❌ Nepoleon Son Dhanush Marriage VS பணம் 10ம்  செய்யும் ? 💰 https://youtu.be/vmdWkjbS8bQ\n\n2வது மனைவியாக வந்த தமிழ் நடிகைக்கு குத்து விட்ட  Khalid Al ameri 1St Wife : https://youtu.be/eLB4OcTCh28\n\nஎந்த கணவரும் செய்யாததை துணிந்து செய்த Pandian Store 2 Shalini யின் கணவர் : https://youtu.be/cxsdEzGrhBI\n\nDare to Talk ❌ Varalakshmi Thailand marriage பேச வேண்டிய உண்மைகள் : https://youtu.be/PLn5Q4LnhO0\n\nSunitha Williams திக் திக் விண்வெளி பயணத்தில் 🛑 Twist மேல Twist  🛑 : https://youtu.be/slGC1bx9hP0\n\nடே மனசாட்சி இல்லாம பேசாதீங்க *** 😡 Surya & Pant மீது புகார் : https://youtu.be/w626Q1b5z1I\n\nRohit Sharma - CSK வருவது கிட்டத்தட்ட - 💛 CSK வீரர் சூசகம் : https://youtu.be/5MFGwlO0Wsw\n\n😭கண்ணீரை அடக்கும் Indian 🇮🇳 fans மட்டும் பார்க்கவும் : https://youtu.be/iOK7s8yg63I\n\n🛑 Thalapathy Vijay Speech - இந்த விஷயத்துல வயிறு எரிய வேணாமே 🔥Stop it 😡 : https://youtu.be/Tsn2el3ACyM\n\nDare to talk ❌ Jayam Ravi & Aarthi - Divorce Issue பேசவேண்டிய உண்மைகள் 👊🏽: https://youtu.be/RJAe7qniHrU\n\n****************************************\n\nFor More Updates : \n\nhttps://www.instagram.com/Rjsha007\nhttps://www.facebook.com/RJRJsha\n\n****************************************\n\nPowered by Trend Loud Digital \nWebsite   - https://trendloud.com/ \nInstagram - https://www.instagram.com/trendloud/\nFacebook  - https://www.facebook.com/Trendloud/\nTwitter   - https://twitter.com/trendloud",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/COQhETZcNYw/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/COQhETZcNYw/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/COQhETZcNYw/hqdefault.jpg",
						width: 480,
						height: 360,
					},
					standard: {
						url: "https://i.ytimg.com/vi/COQhETZcNYw/sddefault.jpg",
						width: 640,
						height: 480,
					},
					maxres: {
						url: "https://i.ytimg.com/vi/COQhETZcNYw/maxresdefault.jpg",
						width: 1280,
						height: 720,
					},
				},
				channelTitle: "Sha Boo Three",
				tags: [
					"Sha boo three",
					"Rj Sha",
					"with love nagaraj sangeetha youtube channel",
					"nagaraj sangeetha amma",
					"rj sha",
					"sha boo three youtube channel",
					"nagaraj sangeetha channel",
					"nagaraj sangeetha interview",
					"rj sha youtube channel",
					"nagaraj sangeetha vlogs",
					"nagaraj sangeetha video in tamil",
					"nagaraj sangeetha villupuram",
					"nagaraj sangeetha video",
					"Shaa boo three",
					"sha boo 3",
					"saa boo three",
					"nagaraj sangeetha mom",
					"nagaraj sangeetha love story video",
				],
				categoryId: "27",
				liveBroadcastContent: "none",
				defaultLanguage: "en-IN",
				localized: {
					title:
						"எந்த அம்மாவும் செய்யாததை துணிந்து செய்த Youtuber Nagaraj அம்மா | Sha boo three @nagarajsangeetha",
					description:
						"CLICK ON THE LINK TO GET EXCITING OFFERS\nDownload Link - https://kukufm.page.link/G6hUADGzBXV5eo386\nGet all the audiobooks for FREE for the next 7 Days!\n\nNote : For IOS Users, Kindly use the coupon code in Kuku FM Web Page to get the additional discount and login to Kuku FM App \n\n****************************************\n\nHi RJ Sha Family, even after her passing, she has left an irreplaceable impact on her family. This video will resonate with many of you. Watch the full video to know more. @nagarajsangeetha \n\n#rjsha #nagarajsangeetha #shaboothree #family #tamilyoutubers \n\n****************************************\n\nClick here to watch :\n\nDare To Talk❌ 5 G-னு சொல்லி ஏமாத்துறாங்க ❌|  25,00,000 New BSNL Sim விற்பனை : https://youtu.be/PWO6K7AVYlU\n\nகோடிக்கணக்கில் புரளும் Jabbar Bhai 🔥கடத்தல் OR பினாமி பணமா ? வெளிவந்த உண்மைகள் : https://youtu.be/j_rVkawRlmA\n\nநெஞ்சை பதறவைக்கும் Bruce Lee & Family கடைசி நிமிட ரகசியங்கள் : https://youtu.be/TsPyCaW_oBA\n\nDare to Talk ❌❌ Nepoleon Son Dhanush Marriage VS பணம் 10ம்  செய்யும் ? 💰 https://youtu.be/vmdWkjbS8bQ\n\n2வது மனைவியாக வந்த தமிழ் நடிகைக்கு குத்து விட்ட  Khalid Al ameri 1St Wife : https://youtu.be/eLB4OcTCh28\n\nஎந்த கணவரும் செய்யாததை துணிந்து செய்த Pandian Store 2 Shalini யின் கணவர் : https://youtu.be/cxsdEzGrhBI\n\nDare to Talk ❌ Varalakshmi Thailand marriage பேச வேண்டிய உண்மைகள் : https://youtu.be/PLn5Q4LnhO0\n\nSunitha Williams திக் திக் விண்வெளி பயணத்தில் 🛑 Twist மேல Twist  🛑 : https://youtu.be/slGC1bx9hP0\n\nடே மனசாட்சி இல்லாம பேசாதீங்க *** 😡 Surya & Pant மீது புகார் : https://youtu.be/w626Q1b5z1I\n\nRohit Sharma - CSK வருவது கிட்டத்தட்ட - 💛 CSK வீரர் சூசகம் : https://youtu.be/5MFGwlO0Wsw\n\n😭கண்ணீரை அடக்கும் Indian 🇮🇳 fans மட்டும் பார்க்கவும் : https://youtu.be/iOK7s8yg63I\n\n🛑 Thalapathy Vijay Speech - இந்த விஷயத்துல வயிறு எரிய வேணாமே 🔥Stop it 😡 : https://youtu.be/Tsn2el3ACyM\n\nDare to talk ❌ Jayam Ravi & Aarthi - Divorce Issue பேசவேண்டிய உண்மைகள் 👊🏽: https://youtu.be/RJAe7qniHrU\n\n****************************************\n\nFor More Updates : \n\nhttps://www.instagram.com/Rjsha007\nhttps://www.facebook.com/RJRJsha\n\n****************************************\n\nPowered by Trend Loud Digital \nWebsite   - https://trendloud.com/ \nInstagram - https://www.instagram.com/trendloud/\nFacebook  - https://www.facebook.com/Trendloud/\nTwitter   - https://twitter.com/trendloud",
				},
				defaultAudioLanguage: "ta",
			},
		},
		{
			kind: "youtube#video",
			etag: "go0Uml0WMVUuCPaGRnsL3Ypqo3Y",
			id: "CS7Wm46EXAA",
			snippet: {
				publishedAt: "2024-07-25T11:46:01Z",
				channelId: "UCnJjcn5FrgrOEp5_N45ZLEQ",
				title:
					"Reppal Dappul (Lyrical) | Mr Bachchan | Ravi Teja,Bhagyashri B | Mickey J Meyer | Harish Shankar S",
				description:
					"T-Series Telugu presents Reppal Dappul Lyrical Video Song from Mr. Bachchan New Telugu Movie  starring Ravi Teja,Jagapathi Babu,Bhagyashree Borse Music Director by Mickey J Meyer & Lyricist by Kasarla Shyam.\n\n#Reppaldappul #massmaharajraviteja #mrbachchan  \n------------------------------------------ \nConnect with T-Series Telugu: 👉 http://bit.ly/SubscribeToTseriesTelugu\n------------------------------------------\n🎶 Music Slate 🎶\nSong Name: Reppal Dappul\nMovie Name: Mr. Bachchan\nArtist: Ravi Teja,Bhagyashri Borse\nMusic Director: Mickey J Meyer \nLyric Writer: Kasarla Shyam\nSingers: Anurag Kulkarni,Mangli\nKeyboards Mickey J Meyer\nHorns, Trumpets and Trombone by Kelly O'Donohue (Berlin)\nBass Guitars - Sarah\nPercussion - Renjith George (London)\nPercussion: Karthikvamsi\nTapes: Ramana, kaviraj, Sampath, Pradeep, Rafi\nRhythm tech: mariappan\nPercussion recorded at Contrabass studios\nRecorded by Vysakh\nAdditional Rhythms - Ventakesh Patvari\n\nSong Mixed by Mickey J Meyer at Inspire Studios (Hyderabad) Song Mastered by Kyle Holland (Nashville)\nCast and Crew details\nCast: Raviteja, BhagyaShri Borse, Jagapathi babu\nDirected by: Harish Shankar.S\nDirector of Photography: Ayananka Bose\nMusic: Mickey J Meyer\nProducer: T G Vishwa Prasad\nCo-Producer: Vivek Kuchibotla\nCreative producer - Krithi Prasad\nEditor: Ujwal Kulkarni\nProduction Designer: Brahma kadali\nFight Masters: Ram Laxman, Pruthvi\nScreenplay Writers: Ramesh Reddy, Sathish Vegesna, Praveen Varma, Dattatreya, tanvi Kesari\nExecutive Producers: KRK Raju, Rahul Venkat\nChief Co-Director: Bobby Bandiguptapu\nPRO: Vamsi-Shekar\nVFX & DI - Deccan Dreams\nMarketing: First Show\n\nMusic Label: T-Series\n---------------------------\nEnjoy & stay connected with us!!\n\n👉Subscribe to T-Series Telugu: http://bit.ly/SubscribeToTseriesTelugu\n👉Like us on Facebook: http://www.facebook.com/Tseriestelugu\n👉Follow us on Instagram: http://bit.ly/InstagramT-SeriesSouthOffical\n👉Follow us on Twitter: http://bit.ly/TwitterT-SeriesSouthOffical\n\n\nThanks Everyone for Watching Our Latest Telugu Song 2024. If you like the song than Please SUBSCRIBE Our Channel With Bell Icon to get notification of all of our newest releases. Will Make Sure to provide best Telugu songs of all time.",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/CS7Wm46EXAA/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/CS7Wm46EXAA/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/CS7Wm46EXAA/hqdefault.jpg",
						width: 480,
						height: 360,
					},
					standard: {
						url: "https://i.ytimg.com/vi/CS7Wm46EXAA/sddefault.jpg",
						width: 640,
						height: 480,
					},
					maxres: {
						url: "https://i.ytimg.com/vi/CS7Wm46EXAA/maxresdefault.jpg",
						width: 1280,
						height: 720,
					},
				},
				channelTitle: "T-Series Telugu",
				tags: [
					"Telugu New song",
					"Telugu Song",
					"New Song",
					"Telugu Hit song",
					"Latest telugu Songs",
					"telugu super hit song",
					"telugu songs",
					"latest video",
					"mr bachchan song",
					"Reppal Dappul Lyrical",
					"Reppal Dappul Anurag Kulkarni",
					"Reppal Dappul Mangli",
					"Reppal Dappul Mickey J Meyer",
					"Reppal Dappul Kasarla Shyam",
					"Mr. Bachchan Reppal Dappul",
					"Ravi Teja Reppal Dappul",
					"Bhagyashri Borse Reppal Dappul",
					"Ravi Teja New Song 2024",
					"ravi teja new dance",
					"Reppal Dappul New Song",
					"Reppal Dappul latest Song",
					"Reppal Dappul",
				],
				categoryId: "10",
				liveBroadcastContent: "none",
				localized: {
					title:
						"Reppal Dappul (Lyrical) | Mr Bachchan | Ravi Teja,Bhagyashri B | Mickey J Meyer | Harish Shankar S",
					description:
						"T-Series Telugu presents Reppal Dappul Lyrical Video Song from Mr. Bachchan New Telugu Movie  starring Ravi Teja,Jagapathi Babu,Bhagyashree Borse Music Director by Mickey J Meyer & Lyricist by Kasarla Shyam.\n\n#Reppaldappul #massmaharajraviteja #mrbachchan  \n------------------------------------------ \nConnect with T-Series Telugu: 👉 http://bit.ly/SubscribeToTseriesTelugu\n------------------------------------------\n🎶 Music Slate 🎶\nSong Name: Reppal Dappul\nMovie Name: Mr. Bachchan\nArtist: Ravi Teja,Bhagyashri Borse\nMusic Director: Mickey J Meyer \nLyric Writer: Kasarla Shyam\nSingers: Anurag Kulkarni,Mangli\nKeyboards Mickey J Meyer\nHorns, Trumpets and Trombone by Kelly O'Donohue (Berlin)\nBass Guitars - Sarah\nPercussion - Renjith George (London)\nPercussion: Karthikvamsi\nTapes: Ramana, kaviraj, Sampath, Pradeep, Rafi\nRhythm tech: mariappan\nPercussion recorded at Contrabass studios\nRecorded by Vysakh\nAdditional Rhythms - Ventakesh Patvari\n\nSong Mixed by Mickey J Meyer at Inspire Studios (Hyderabad) Song Mastered by Kyle Holland (Nashville)\nCast and Crew details\nCast: Raviteja, BhagyaShri Borse, Jagapathi babu\nDirected by: Harish Shankar.S\nDirector of Photography: Ayananka Bose\nMusic: Mickey J Meyer\nProducer: T G Vishwa Prasad\nCo-Producer: Vivek Kuchibotla\nCreative producer - Krithi Prasad\nEditor: Ujwal Kulkarni\nProduction Designer: Brahma kadali\nFight Masters: Ram Laxman, Pruthvi\nScreenplay Writers: Ramesh Reddy, Sathish Vegesna, Praveen Varma, Dattatreya, tanvi Kesari\nExecutive Producers: KRK Raju, Rahul Venkat\nChief Co-Director: Bobby Bandiguptapu\nPRO: Vamsi-Shekar\nVFX & DI - Deccan Dreams\nMarketing: First Show\n\nMusic Label: T-Series\n---------------------------\nEnjoy & stay connected with us!!\n\n👉Subscribe to T-Series Telugu: http://bit.ly/SubscribeToTseriesTelugu\n👉Like us on Facebook: http://www.facebook.com/Tseriestelugu\n👉Follow us on Instagram: http://bit.ly/InstagramT-SeriesSouthOffical\n👉Follow us on Twitter: http://bit.ly/TwitterT-SeriesSouthOffical\n\n\nThanks Everyone for Watching Our Latest Telugu Song 2024. If you like the song than Please SUBSCRIBE Our Channel With Bell Icon to get notification of all of our newest releases. Will Make Sure to provide best Telugu songs of all time.",
				},
				defaultAudioLanguage: "te",
			},
		},
		{
			kind: "youtube#video",
			etag: "Wz9C6s8ngkkuCGlIMdBn3fbSQws",
			id: "tPGHoOMKkuI",
			snippet: {
				publishedAt: "2024-07-23T05:31:02Z",
				channelId: "UCzee67JnEcuvjErRyWP3GpQ",
				title:
					"Fire Song (Tamil) - Lyrical | Kanguva | Suriya | Devi Sri Prasad | Siva | Viveka",
				description:
					"For more latest songs & videos, subscribe 👉 https://bit.ly/Saregama_Tamil\n\nFeel the fierce of the \"Fire Song (Tamil)\" from 'Kanguva' starring Suriya, Disha Patani, Bobby Deol & others. Directed by Siva. Music Composed by 'Rockstar' Devi Sri Prasad.\n\nSong Credits:-\nFire Song (Tamil)\nSingers: VM. Mahalingam, Senthil Ganesh, Shenbagaraj & Deepthi Suresh\nLyrics: Viveka\n\nMusicians:\nKeyboards: KP & Vikas Badisa \nRhythm: Kalyan\nChorus: Aravind Srinivas, Deepak Blue, Saisharan, Prasanna Adhisesha\n\nAlbum Mixed & Mastered By A. Uday Kumar @ “Dsp Studio – Chennai”\nAlbum Recorded By A. Uday Kumar, T. Uday Kumar & Suresh Kumar Taddi\nVocal Supervision: S. P. Abhishek\nOrchestra In-Charge: V Murugan\nStudio Asst: Pugalendhi, Bharat & Dhinakaran\nAlbum Co-Ordinator: B. Manikandan\n\nMovie Credits:\nStarring : Suriya, Disha Patani, Bobby Deol & Others\nDirected by : Siva\nDirector of Photography : Vetri Palanisamy\nMusic : 'Rockstar' Devi Sri Prasad\nArt : Milan\nEditor: Nishad Yusuf\nAction : Supreme Sundar\nDialogues : Madan Karky\nWriter : Adi Narayana\nLyrics : Viveka - Madan Karky\nRecording Engineer-Lawrence Vishnu Sound and Vision Studios Pvt Ltd\nChief Co Director : R.Rajasekar\nCostume Designer : Anu Vardhan (Suriya) Dhatsha Pillai\nCostumes : Rajan\nMakeup : Serina (Suriya) , Kuppusamy\nSpecial Make up - Ranjith Ambadi\nADR: Vignesh Guru\nChoreography : Shobi – Prem Rakshith\nSound Design : T Udhayakumar\nStills : C.H. Balu Publicity Design : Kabilan Chelliah\nColorist: K S Rajasekaran (Igene)\nVFX Head : Harihara Suthan\nCo-Directors : Hemachandraprabhu - Thirumalai\nAssociate Director : S Kannan – R Thilipan- Rajaram – S Nagendran\nProduction Controller : R.S. Sureshmaniyan\nProduction Executive : Rama Doss\nProduction Co-ordination : EV Dinesh Kumar\nPRO : Suresh Chandra & Rekha D’One\nDigital Partner : Mango Mass Media Pvt Ltd\nDigital Promotions: Digitally & Whacked Out Media\nCreative Promotions: BeatRoute\nExecutive Producer: A.G. Raja\nStudio Green CEO G. Dhananjeyan\nCo-Producer: Neha Gnanavelraja\nProduced by : K.E. Gnanavelraja | Vamsi-Pramod\nBanner : Studio Green | UV Creations\n\nLyrics:-\nPALLAVI \nAAN:\nAADHI NERUPPAEY\nAARAATHE NERUPPAEY\nMAAYA NERUPPAEY \nMALAI NERUPPAEY....\nPAAYUM NERUPPAEY\nPAADHAALA NERUPPAEY\nKAAVAL NERUPPAEY\nKAATTU NERUPPAEY...\nAAN:\nAADHI NERUPPAEY\nAARAATHE NERUPPAEY\nMAAYA NERUPPAEY \nMALAI NERUPPAEY....\nPAAYUM NERUPPAEY\nPAADHAALA NERUPPAEY\nKAAVAL NERUPPAEY\nKAATTU NERUPPAEY...\nAAN:\nMAN THOONRAA KAALATHTHAEY\nMUN THOONRIYA MOOTHTHAK KUDI\nYAAMAEY YAAMAEY\nEN THOONRAA KAALATHTHAEY\nENNIKKAI PAARTHTHAK KUDI\nYAAMAEY YAAMAEY\nAADHITHTHEE CHOODARVELLAM\nANUYYAAMAL PAARTHTHAKKUDI\nTHEEMENRU THEETHTHINRU\nTHIEKKADAAI VAAZHUM KUDI\nAAN:\nVAA IRU THOOLEDUTHTHU VAA\nKURU VAALEDUTHTHU VAA\nORU SOOLURAITHTHU VAA VAA\n7\nAAN:\nVAA IRU THOOLEDUTHTHU VAA\nKURU VAALEDUTHTHU VAA\nORU SOOLURAITHTHU VAA VAA VAA VAA\nAAN:\nAADHI NERUPPAEY\nAARAATHE NERUPPAEY\nMAAYA NERUPPAEY \nMALAI NERUPPAEY....\nPAAYUM NERUPPAEY\nPAADHAALA NERUPPAEY\nKAAVAL NERUPPAEY\nKAATTU NERUPPAEY...\nAAN:\nIDI IDITHTHADHU MAZHAIYADITHTHADHU ADITHTHADHU PUYALUM\nMALAI UDAINTHEDHU ALAI ELUNTHEDHU ELUNTHEDHU PIRALAYAM\nKALLOODUM MULLOODUM KAATROODUM PORAADI\nPALLAANDU VAAZHUM INAM\nPORI VILUNTHEDHU VANAM ERINTHEDHU ERITHTHADHU NADHIYUM \nMUKIL KARINTHEDHU NILAM CHARINTHEDHU THIRINTHEDHU PARUVAM\nAANGAARA KOOTHTHAADI ANALUKKUL NEERAADI\nMELERI VANTHA INAM\nPEN:\nVANNIMARAK KELAIYADHIRA VAARANANGAL ANITHIRALA \nKANNIMOOLA KAVULIYONNU KAALANJOLLUTHEY \nVEPPAALAIYIL CHOTTUM ANDHA VENGURUDHI PAAKKAIYILA\nVEECHARUVAA VELKAMBU \nVEGAM KOODUDHE.....CHONAIYARUVI PAARAANGKALU MELIRUKKUM \nTEEKKURUVI\nKORALEDUTHTHU KATHTHUDHAMMAA THEKKU THESAIYILAEY\nCHENA PUDICHCHA NAATTU NARI\nKOLA NADUNGA OADUDHAMMAA \nCHADASADAKKUM PERU NERUPPAA PAARTHTHA NODIYILA \n8\nAAN:\nVAA IRU THOOLEDUTHTHU VAA\nKURU VAALEDUTHTHU VAA\nORU SOOLURAITHTHU VAA VAA\nPEN:\nVAA VAA\nAAN:\nVAA IRU THOOLEDUTHTHU VAA\nKURU VAALEDUTHTHU VAA\nORU SOOLURAITHTHU VAA VAA VAA VAA\nAAN:\nAADHI NERUPPAEY\nAARAATHE NERUPPAEY\nMAAYA NERUPPAEY \nMALAI NERUPPAEY....\nPAAYUM NERUPPAEY\nPAADHAALA NERUPPAEY\nKAAVAL NERUPPAEY\nKAATTU NERUPPAEY...\n\n\nLabel: Saregama India Limited, A RPSG Group Company\n\n \nTo buy Carvaan, visit https://www.saregama.com/carvaan/tamil\nTo buy virus free original tracks, visit  https://www.saregama.com/musicstore\nFollow us on: YouTube: https://www.youtube.com/user/Saregamatamil\nFacebook: http://www.facebook.com/Saregamatamil\nTwitter: https://twitter.com/saregamasouth​​\n\n#FireSong #Kanguva #Suriya #BobbyDeol #DishaPatani #DeviSriPrasad #SaregamaTamil",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/tPGHoOMKkuI/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/tPGHoOMKkuI/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/tPGHoOMKkuI/hqdefault.jpg",
						width: 480,
						height: 360,
					},
					standard: {
						url: "https://i.ytimg.com/vi/tPGHoOMKkuI/sddefault.jpg",
						width: 640,
						height: 480,
					},
					maxres: {
						url: "https://i.ytimg.com/vi/tPGHoOMKkuI/maxresdefault.jpg",
						width: 1280,
						height: 720,
					},
				},
				channelTitle: "Saregama Tamil",
				tags: [
					"fire song",
					"fire song tamil",
					"fire song video",
					"fire song kanguva",
					"Kanguva",
					"Kanguva Tamil movie",
					"Suriya 42",
					"Suriya",
					"Suriya movies",
					"Suriya Kanguva",
					"Disha Patani",
					"Kanguva movie",
					"actor suriya",
					"Devi Sri Prasad",
					"Devi Sri Prasad songs",
					"Tamil movies",
					"Tamil Films",
					"Tamil movies Latest",
					"Siruthai Siva",
					"kanguva songs",
					"kanguva tamil songs",
					"devi sri prasad songs",
					"devi sri prasad tamil songs",
					"devi sri prasad kanguva songs",
					"dsp tamil songs",
				],
				categoryId: "10",
				liveBroadcastContent: "none",
				defaultLanguage: "en",
				localized: {
					title:
						"Fire Song (Tamil) - Lyrical | Kanguva | Suriya | Devi Sri Prasad | Siva | Viveka",
					description:
						"For more latest songs & videos, subscribe 👉 https://bit.ly/Saregama_Tamil\n\nFeel the fierce of the \"Fire Song (Tamil)\" from 'Kanguva' starring Suriya, Disha Patani, Bobby Deol & others. Directed by Siva. Music Composed by 'Rockstar' Devi Sri Prasad.\n\nSong Credits:-\nFire Song (Tamil)\nSingers: VM. Mahalingam, Senthil Ganesh, Shenbagaraj & Deepthi Suresh\nLyrics: Viveka\n\nMusicians:\nKeyboards: KP & Vikas Badisa \nRhythm: Kalyan\nChorus: Aravind Srinivas, Deepak Blue, Saisharan, Prasanna Adhisesha\n\nAlbum Mixed & Mastered By A. Uday Kumar @ “Dsp Studio – Chennai”\nAlbum Recorded By A. Uday Kumar, T. Uday Kumar & Suresh Kumar Taddi\nVocal Supervision: S. P. Abhishek\nOrchestra In-Charge: V Murugan\nStudio Asst: Pugalendhi, Bharat & Dhinakaran\nAlbum Co-Ordinator: B. Manikandan\n\nMovie Credits:\nStarring : Suriya, Disha Patani, Bobby Deol & Others\nDirected by : Siva\nDirector of Photography : Vetri Palanisamy\nMusic : 'Rockstar' Devi Sri Prasad\nArt : Milan\nEditor: Nishad Yusuf\nAction : Supreme Sundar\nDialogues : Madan Karky\nWriter : Adi Narayana\nLyrics : Viveka - Madan Karky\nRecording Engineer-Lawrence Vishnu Sound and Vision Studios Pvt Ltd\nChief Co Director : R.Rajasekar\nCostume Designer : Anu Vardhan (Suriya) Dhatsha Pillai\nCostumes : Rajan\nMakeup : Serina (Suriya) , Kuppusamy\nSpecial Make up - Ranjith Ambadi\nADR: Vignesh Guru\nChoreography : Shobi – Prem Rakshith\nSound Design : T Udhayakumar\nStills : C.H. Balu Publicity Design : Kabilan Chelliah\nColorist: K S Rajasekaran (Igene)\nVFX Head : Harihara Suthan\nCo-Directors : Hemachandraprabhu - Thirumalai\nAssociate Director : S Kannan – R Thilipan- Rajaram – S Nagendran\nProduction Controller : R.S. Sureshmaniyan\nProduction Executive : Rama Doss\nProduction Co-ordination : EV Dinesh Kumar\nPRO : Suresh Chandra & Rekha D’One\nDigital Partner : Mango Mass Media Pvt Ltd\nDigital Promotions: Digitally & Whacked Out Media\nCreative Promotions: BeatRoute\nExecutive Producer: A.G. Raja\nStudio Green CEO G. Dhananjeyan\nCo-Producer: Neha Gnanavelraja\nProduced by : K.E. Gnanavelraja | Vamsi-Pramod\nBanner : Studio Green | UV Creations\n\nLyrics:-\nPALLAVI \nAAN:\nAADHI NERUPPAEY\nAARAATHE NERUPPAEY\nMAAYA NERUPPAEY \nMALAI NERUPPAEY....\nPAAYUM NERUPPAEY\nPAADHAALA NERUPPAEY\nKAAVAL NERUPPAEY\nKAATTU NERUPPAEY...\nAAN:\nAADHI NERUPPAEY\nAARAATHE NERUPPAEY\nMAAYA NERUPPAEY \nMALAI NERUPPAEY....\nPAAYUM NERUPPAEY\nPAADHAALA NERUPPAEY\nKAAVAL NERUPPAEY\nKAATTU NERUPPAEY...\nAAN:\nMAN THOONRAA KAALATHTHAEY\nMUN THOONRIYA MOOTHTHAK KUDI\nYAAMAEY YAAMAEY\nEN THOONRAA KAALATHTHAEY\nENNIKKAI PAARTHTHAK KUDI\nYAAMAEY YAAMAEY\nAADHITHTHEE CHOODARVELLAM\nANUYYAAMAL PAARTHTHAKKUDI\nTHEEMENRU THEETHTHINRU\nTHIEKKADAAI VAAZHUM KUDI\nAAN:\nVAA IRU THOOLEDUTHTHU VAA\nKURU VAALEDUTHTHU VAA\nORU SOOLURAITHTHU VAA VAA\n7\nAAN:\nVAA IRU THOOLEDUTHTHU VAA\nKURU VAALEDUTHTHU VAA\nORU SOOLURAITHTHU VAA VAA VAA VAA\nAAN:\nAADHI NERUPPAEY\nAARAATHE NERUPPAEY\nMAAYA NERUPPAEY \nMALAI NERUPPAEY....\nPAAYUM NERUPPAEY\nPAADHAALA NERUPPAEY\nKAAVAL NERUPPAEY\nKAATTU NERUPPAEY...\nAAN:\nIDI IDITHTHADHU MAZHAIYADITHTHADHU ADITHTHADHU PUYALUM\nMALAI UDAINTHEDHU ALAI ELUNTHEDHU ELUNTHEDHU PIRALAYAM\nKALLOODUM MULLOODUM KAATROODUM PORAADI\nPALLAANDU VAAZHUM INAM\nPORI VILUNTHEDHU VANAM ERINTHEDHU ERITHTHADHU NADHIYUM \nMUKIL KARINTHEDHU NILAM CHARINTHEDHU THIRINTHEDHU PARUVAM\nAANGAARA KOOTHTHAADI ANALUKKUL NEERAADI\nMELERI VANTHA INAM\nPEN:\nVANNIMARAK KELAIYADHIRA VAARANANGAL ANITHIRALA \nKANNIMOOLA KAVULIYONNU KAALANJOLLUTHEY \nVEPPAALAIYIL CHOTTUM ANDHA VENGURUDHI PAAKKAIYILA\nVEECHARUVAA VELKAMBU \nVEGAM KOODUDHE.....CHONAIYARUVI PAARAANGKALU MELIRUKKUM \nTEEKKURUVI\nKORALEDUTHTHU KATHTHUDHAMMAA THEKKU THESAIYILAEY\nCHENA PUDICHCHA NAATTU NARI\nKOLA NADUNGA OADUDHAMMAA \nCHADASADAKKUM PERU NERUPPAA PAARTHTHA NODIYILA \n8\nAAN:\nVAA IRU THOOLEDUTHTHU VAA\nKURU VAALEDUTHTHU VAA\nORU SOOLURAITHTHU VAA VAA\nPEN:\nVAA VAA\nAAN:\nVAA IRU THOOLEDUTHTHU VAA\nKURU VAALEDUTHTHU VAA\nORU SOOLURAITHTHU VAA VAA VAA VAA\nAAN:\nAADHI NERUPPAEY\nAARAATHE NERUPPAEY\nMAAYA NERUPPAEY \nMALAI NERUPPAEY....\nPAAYUM NERUPPAEY\nPAADHAALA NERUPPAEY\nKAAVAL NERUPPAEY\nKAATTU NERUPPAEY...\n\n\nLabel: Saregama India Limited, A RPSG Group Company\n\n \nTo buy Carvaan, visit https://www.saregama.com/carvaan/tamil\nTo buy virus free original tracks, visit  https://www.saregama.com/musicstore\nFollow us on: YouTube: https://www.youtube.com/user/Saregamatamil\nFacebook: http://www.facebook.com/Saregamatamil\nTwitter: https://twitter.com/saregamasouth​​\n\n#FireSong #Kanguva #Suriya #BobbyDeol #DishaPatani #DeviSriPrasad #SaregamaTamil",
				},
				defaultAudioLanguage: "ta",
			},
		},
	],
	nextPageToken: "CAwQAA",
	pageInfo: {
		totalResults: 143,
		resultsPerPage: 12,
	},
};
