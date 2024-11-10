// ==============================REACT-REDUX-TOOLKIT===========================
import { configureStore } from "@reduxjs/toolkit";

// ==============================REDUCERS-SLICCESS==========================
import { menubarReducers } from "../aplicationFeatures/menubarSlice";
import { apiContentReducers } from "../aplicationFeatures/apiContentSlice";
import { globalUtilityReducers } from "../aplicationFeatures/globalUtilitySlice";

export const store = configureStore({
	// reducer: menubarReducers,
	// reducer: apiContentReducers,

	// ==========combine-multiple-reducers==================================
	reducer: {
		menubar: menubarReducers,
		apiContent: apiContentReducers,
		globalUtility: globalUtilityReducers,
	},
});
