import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type User = {
	username: string;
	jwt: string;
};

type UserState = {
	user: User;
};
const defaultState = { user: { jwt: "", username: "" } };

function getUserFromLocal(): UserState {
	const localUser = localStorage.getItem("user");
	if (localUser) return JSON.parse(localUser) as UserState;
	return defaultState;
}

export const userSlice = createSlice({
	name: "user",
	initialState: getUserFromLocal(),
	reducers: {
		login(state, action: PayloadAction<{ jwt: string; username: string }>) {
			const { jwt, username } = action.payload;
			state.user.jwt = jwt;
			state.user.username = username;
			localStorage.setItem("user", JSON.stringify(state));
		},
		logout(state) {
			state.user.jwt = "";
			state.user.username = "";
		},
	},
});
export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
