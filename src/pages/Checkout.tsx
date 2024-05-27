import OrderSummary from "@/components/ui/OrderSummary";
import TitleSeperate from "@/components/ui/TitleSeperate";
import { useAppSelector } from "@/hooks";
import ShippingInfoForm from "@/components/checkout/ShippingInfoForm";
import { ActionFunction, json } from "react-router-dom";
import { store } from "@/store";
import formateToDollars from "@/utils/formateToDollars";
import { customeFetch } from "@/utils/api";
import OrderFeedBack from "@/components/checkout/OrderFeebBack";

export const action: ActionFunction = async ({
	request,
}): Promise<null | Response> => {
	const formData = await request.formData();

	const data = Object.fromEntries(formData);
	const { name, address } = data;
	const { cartItems } = store.getState().cart;
	const { orderTotalPrice: chargeTotal, totalQuantity: numItemsInCart } =
		store.getState().cart;
	const orderTotal = formateToDollars(chargeTotal);
	const params = {
		data: {
			address,
			cartItems,
			chargeTotal,
			name,
			numItemsInCart,
			orderTotal,
		},
	};
	const { jwt } = store.getState().user.user;
	try {
		const res = await customeFetch.post("/orders", params, {
			headers: {
				Authorization: `Bearer ${jwt}`,
				"Content-Type": "application/json", // or any other content type as needed
			},
		});
		//	console.log(res);
		return json({
			success: `Placed the order success! Your Order ID: ${res.data.id}, please keep the ID for reference`,
		});
	} catch (error) {
		console.log(error);
		return json(
			{
				error: "Failed to place the order, please try again",
			},
			{ status: 400 }
		);
	}
};

function Checkout() {
	const { cartItems } = useAppSelector(state => state.cart);

	return (
		<main className="mt-8 p-8 dark:text-white">
			{cartItems.length === 0 ? (
				<TitleSeperate title="your cart is empty" />
			) : (
				<TitleSeperate title="place your order" />
			)}

			{cartItems.length > 0 && (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
					<ShippingInfoForm />
					<OrderSummary />
				</div>
			)}
			<OrderFeedBack />
		</main>
	);
}
export default Checkout;
