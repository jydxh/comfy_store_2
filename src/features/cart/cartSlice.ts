import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { taxRate } from "@/utils/taxRate";

export type CartItem = {
	id: string;
	cartId: string;
	image: string;
	title: string;
	company: string;
	price: string;
	description: string;
	color: string;
	amount: number;
};

type CartState = {
	cartItems: CartItem[];
	totalQuantity: number;
	orderTotalPrice: number;
	shipping: number;
	tax: number;
	subOrderPrice: number;
};

const defaultState = {
	cartItems: [],
	totalQuantity: 0,
	orderTotalPrice: 0,
	shipping: 500,
	tax: 0,
	subOrderPrice: 0,
};

const initialState: CartState = (() => {
	const localCart = localStorage.getItem("cart");
	if (localCart === null) {
		return defaultState;
	} else {
		return JSON.parse(localCart) as CartState;
	}
})();

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<CartItem>) {
			const cartItem = action.payload;
			const theItem = state.cartItems.find(
				item => item.cartId === cartItem.cartId
			);
			if (theItem) {
				theItem.amount += cartItem.amount;
			} else {
				state.cartItems.push(cartItem);
			}
			state.totalQuantity += cartItem.amount;
			state.subOrderPrice += cartItem.amount * Number(cartItem.price);
			state.tax = (state.subOrderPrice + state.shipping) * taxRate;
			state.orderTotalPrice = state.subOrderPrice + state.tax;
			localStorage.setItem("cart", JSON.stringify(state));
		},
		clearCart() {
			localStorage.setItem("cart", JSON.stringify(defaultState));
			return defaultState;
		},
	},
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
