import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type User = {
	username: string;
	jwt: string;
};

type UserState = {
	user: User;
};

function getUserFromLocal(): UserState | null {
	const localUser = localStorage.getItem("user");
	if (localUser) return JSON.parse(localUser) as UserState;
	return null;
}

export const userSlice = createSlice({
	name: "user",
	initialState: getUserFromLocal(),
	reducers: {
		login() {},
		logout() {},
	},
});
export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
