import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Theme = "dark" | "light";
type themeState = {
	theme: Theme;
};
const initialState: themeState = {
	theme: "light",
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme(state) {
			if (state.theme === "dark") {
				state.theme = "light";
			} else {
				state.theme = "dark";
			}
		},
	},
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
