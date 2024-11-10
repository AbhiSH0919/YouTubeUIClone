// ==============================REACT-REDUX-TOOLKIT===========================
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isRelativeState: true,
	isAbsoluteState: false,
	menubarFull: true,
};

export const menubarSlice = createSlice({
	name: "YouTube menubar",
	initialState,
	reducers: {
		/**
		 * Changes the menubar relative state providing only boolean value
		 * @param {object} state - The current state of the menubar.
		 * @param {boolean} action.payload - The new relative state value.
		 */
		funMenubarRelativeState: (state, action) => {
			state.isRelativeState = action.payload;
		},

		/**
		 * Changes the menubar absolute state providing only boolean value
		 * @param {object} state - The current state of the menubar.
		 * @param {boolean} action.payload - The new absolute state value.
		 */
		funMenubarAbsoluteState: (state, action) => {
			state.isAbsoluteState = action.payload;
		},

		/**
		 * Toggle the menubar size to full or small.
		 * @param {object} state - The current state of the menubar.
		 * @param {boolean} action.payload - The new menubarFull state value.
		 */
		funSwitchMenubar: (state, action) => {
			state.menubarFull = action.payload;
		},

		/**
		 * Toggles the menubar's relative, absolute, and menubarFull states.
		 * When the payload is true, sets the menubar to relative state & switches the menubar to full size.
		 * sets the menubar to absolute state when the payload is false.
		 * @param {object} state - The current state of the menubar.
		 * @param {boolean} action.payload - The new state value.
		 */
		funMenubarSwitchHandler: (state, action) => {
			state.isRelativeState = action.payload;
			state.isAbsoluteState = !action.payload;
			state.menubarFull = action.payload;
		},
	},
});

// ==============================MENUBAR-ACTIONS============================
export const {
	funMenubarRelativeState,
	funMenubarAbsoluteState,
	funSwitchMenubar,
	funMenubarSwitchHandler,
} = menubarSlice.actions;

export const menubarReducers = menubarSlice.reducer;
