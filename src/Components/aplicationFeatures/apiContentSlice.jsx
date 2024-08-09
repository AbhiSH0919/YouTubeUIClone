import { createSlice } from "@reduxjs/toolkit";

// =================================================================

const initialState2 = {
	api_key: "AIzaSyDa_GO4m-VwQlA8fjp6uf7npNpYmHsGQk8",
	base_url: "https://youtube.googleapis.com/youtube/v3/videos",
	maxResults: 12,
	regionCode: "IN",
	// api_url: `${base_url}?part=snippet&chart=mostPopular&regionCode=${this.regionCode}&maxResults=${this.maxResults}&key=${this.api_key}`,
};

export const apiContentSlice = createSlice({
	name: "YouTube Api data",
	initialState2,
	reducers: {
		getApiData: (state, action) => {
			state.api_key = state.api_key;
		},
	},
});

export const { getApiData } = apiContentSlice.actions;
export const apiContentReducers = apiContentSlice.reducer;
