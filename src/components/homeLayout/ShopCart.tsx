import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function ShopCart() {
	const cartTotalItems = 0;
	return (
		<div className="relative">
			<Link to="/cart">
				<button className="bg-white p-2 rounded-xl hover:bg-slate-50 dark:text-white dark:bg-slate-900">
					<ShoppingCart className="w-6 h-6" />
					<span
						className="absolute bg-blue-500 text-white font-semibold text-sm
				 w-6 h-6 rounded-full bottom-7 left-7 text-center leading-6 mx-auto">
						{cartTotalItems}
					</span>
				</button>
			</Link>
		</div>
	);
}
export default ShopCart;
