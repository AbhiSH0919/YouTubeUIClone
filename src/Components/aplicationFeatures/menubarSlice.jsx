import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	// menuWidth: 240,
	// menubarFull: true,
	// menubarFlowShow: false,
	// menubarFlowHide: false,
	// isVideoWatching: false,
	isRelativeState: true,
	isAbsoluteState: false,
	menubarFull: true,
};

export const menubarSlice = createSlice({
	name: "YouTube menubar",
	initialState,
	reducers: {
		// funMenubarSwitch: (state, action) => {
		// 	// action.payload ? (state.menuWidth = 240) : (state.menuWidth = 70);
		// 	state.menubarFull = action.payload;
		// },
		// funMenubarFlowShow: (state, action) => {
		// 	state.menubarFlowShow = action.payload;
		// },
		// funMenubarFlowHide: (state, action) => {
		// 	state.menubarFlowHide = action.payload;
		// },
		// funIsVideoWatching: (state, action) => {
		// 	state.isVideoWatching = action.payload;
		// },

		funMenubarRelativeState: (state, action) => {
			state.isRelativeState = action.payload;
		},

		funMenubarAbsoluteState: (state, action) => {
			state.isAbsoluteState = action.payload;
		},

		funSwitchMenubar: (state, action) => {
			state.menubarFull = action.payload;
		},

		funMenubarSwitchHandler: (state, action) => {
			state.isRelativeState = action.payload;
			state.isAbsoluteState = !action.payload;
			state.menubarFull = action.payload;
		},
	},
});

export const {
	// funMenubarSwitch,
	// funMenubarFlowShow,
	// funMenubarFlowHide,
	// funIsVideoWatching,

	funMenubarRelativeState,
	funMenubarAbsoluteState,
	funSwitchMenubar,
	funMenubarSwitchHandler,
} = menubarSlice.actions;
export const menubarReducers = menubarSlice.reducer;
