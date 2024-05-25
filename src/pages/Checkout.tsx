import OrderSummary from "@/components/ui/OrderSummary";
import TitleSeperate from "@/components/ui/TitleSeperate";
import { useAppSelector } from "@/hooks";
import ShippingInfoForm from "@/components/checkout/ShippingInfoForm";

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
		</main>
	);
}
export default Checkout;
