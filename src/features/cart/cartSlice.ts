import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: "cart",
	reducers: {},
});

export default cartSlice.reducer;
export const {} = cartSlice.actions;
