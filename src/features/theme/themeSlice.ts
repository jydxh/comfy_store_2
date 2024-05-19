import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Theme = "dark" | "light";
type themeState = {
	theme: Theme;
};
const getThemeFromLocal = (): Theme => {
	const themeFromLocal = localStorage.getItem("theme");
	if (!themeFromLocal) {
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	} else {
		return themeFromLocal as Theme;
	}
};

const setThemeToLocal = (theme: Theme) => {
	localStorage.setItem("theme", theme);
};

const initialState: themeState = {
	theme: getThemeFromLocal(),
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme(state) {
			const htmlEle = document.documentElement;
			if (state.theme === "dark") {
				state.theme = "light";
				htmlEle.classList.remove("dark");
				setThemeToLocal("light");
			} else {
				state.theme = "dark";
				htmlEle.classList.add("dark");
				setThemeToLocal("dark");
			}
		},
		setTheme(state, action: PayloadAction<Theme>) {
			const htmlEle = document.documentElement;
			const body = document.querySelector("body");
			state.theme = action.payload;
			if (state.theme === "dark") {
				htmlEle.classList.add("dark");
				body?.classList.add("bg-slate-900");
			} else {
				htmlEle.classList.remove("dark");
				body?.classList.remove("bg-slate-900");
			}
			setThemeToLocal(state.theme);
		},
	},
});

export default themeSlice.reducer;
export const { toggleTheme, setTheme } = themeSlice.actions;
