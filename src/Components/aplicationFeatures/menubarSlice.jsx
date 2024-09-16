import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	menuWidth: 240,
	menubarFull: true,
	menubarFlowShow: false,
	menubarFlowHide: false,
	isVideoWatching: false,
};

export const menubarSlice = createSlice({
	name: "YouTube menubar",
	initialState,
	reducers: {
		funMenubarSwitch: (state, action) => {
			// action.payload ? (state.menuWidth = 240) : (state.menuWidth = 70);
			state.menubarFull = action.payload;
		},

		funMenubarFlowShow: (state, action) => {
			state.menubarFlowShow = action.payload;
		},

		funMenubarFlowHide: (state, action) => {
			state.menubarFlowHide = action.payload;
		},

		funIsVideoWatching: (state, action) => {
			state.isVideoWatching = action.payload;
		},
	},
});

export const {
	funMenubarSwitch,
	funMenubarFlowShow,
	funMenubarFlowHide,
	funIsVideoWatching,
} = menubarSlice.actions;
export const menubarReducers = menubarSlice.reducer;
