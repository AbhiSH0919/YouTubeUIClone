import { configureStore } from "@reduxjs/toolkit";

import { menubarReducers } from "../aplicationFeatures/menubarSlice";
import { apiContentReducers } from "../aplicationFeatures/apiContentSlice";

export const store = configureStore({
	// reducer: menubarReducers,
	// reducer: apiContentReducers,

	// combine multiple reducers
	reducer: {
		menubar: menubarReducers,
		apiContent: apiContentReducers,
	},
});
