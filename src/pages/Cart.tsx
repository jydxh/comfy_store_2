import TitleSeperate from "@/components/ui/TitleSeperate";
import CartItemInfo from "@/components/Cart/CartItemInfo";
import { useAppSelector } from "@/hooks";
import OrderSummary from "@/components/ui/OrderSummary";
import { Link } from "react-router-dom";

function Cart() {
	const className = "bg-blue-500 w-full p-2 rounded-xl font-semibold";
	const { cartItems } = useAppSelector(state => state.cart);
	//const user = 1;
	const user = null;
	return (
		<main className="max-w-[1280px] mx-auto px-8 dark:text-white mt-16">
			{cartItems.length === 0 && (
				<p className="capitalize">
					no item in the cart. please add more items. go to{" "}
					<Link to="/products" className="text-blue-500 hover:underline">
						products
					</Link>
				</p>
			)}
			{cartItems.length > 0 && (
				<>
					<TitleSeperate title="Shopping Cart" />
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
						<section className="lg:col-span-2">
							{cartItems.map(item => {
								return <CartItemInfo item={item} key={item.cartId} />;
							})}
						</section>
						<section className="lg:col-span-1">
							<OrderSummary />
							{user ? (
								<button className={className}>
									<Link to="/checkout">Process to Checkout</Link>
								</button>
							) : (
								<button className={className}>
									<Link to="/login">Login to Checkout</Link>
								</button>
							)}
						</section>
					</div>
				</>
			)}
		</main>
	);
}
export default Cart;
