import TitleSeperate from "@/components/ui/TitleSeperate";
import CartItemInfo from "@/components/Cart/CartItemInfo";
import { useAppSelector } from "@/hooks";
import OrderSummary from "@/components/ui/OrderSummary";
function Cart() {
	const { cartItems } = useAppSelector(state => state.cart);

	return (
		<main className="max-w-[1280px] mx-auto px-8 dark:text-white mt-16">
			<TitleSeperate title="Shopping Cart" />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
				<section className="lg:col-span-2">
					{cartItems.map(item => {
						return <CartItemInfo item={item} key={item.cartId} />;
					})}
				</section>
				<section className="lg:col-span-1">
					<OrderSummary />
					<button> Process to Checkout</button>
				</section>
			</div>
		</main>
	);
}
export default Cart;
