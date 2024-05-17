import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: "user",
	reducers: {},
});
export default userSlice.reducer;
export const {} = userSlice.actions;
