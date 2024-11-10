// ==============================REACT-REDUX-TOOLKIT===========================
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: true,
	isSigned: false,
};
export const globalUtilitySlice = createSlice({
	name: "globalUtiliityStates",
	initialState,
	reducers: {
		/**
		 * Changes the loading state providing only boolean value
		 * @param {object} state - The current state of the loading state.
		 * @param {boolean} action.payload - The new loading state value.
		 */
		funLoadingHandler: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

export const { funLoadingHandler } = globalUtilitySlice.actions;
export const globalUtilityReducers = globalUtilitySlice.reducer;
