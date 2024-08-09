import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	menuWidth: 240,
	menubarFull: true,
};

export const menubarSlice = createSlice({
	name: "YouTube menubar",
	initialState,
	reducers: {
		menubarSwitch: (state, action) => {
			// action.payload ? (state.menuWidth = 240) : (state.menuWidth = 70);
			state.menubarFull = action.payload;
		},
	},
});

export const { menubarSwitch } = menubarSlice.actions;
export const menubarReducers = menubarSlice.reducer;
