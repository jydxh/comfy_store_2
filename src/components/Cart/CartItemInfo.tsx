import { CartItem, removeItem } from "@/features/cart/cartSlice";
import AmountSelect from "../ui/AmountSelect";
import { Mode } from "../ui/AmountSelect";
import { useState } from "react";
import formateToDollars from "@/utils/formateToDollars";
import { useAppDispatch } from "@/hooks";

function CartItemInfo({ item }: { item: CartItem }) {
	const {
		amount: quantity,
		color,
		company,
		image,
		price,
		title,
		cartId,
	} = item;
	const dispatch = useAppDispatch();
	const [amount, setAmount] = useState(quantity);
	const handleRemove = () => {
		dispatch(removeItem({ id: cartId }));
	};
	return (
		<div className="border rounded-xl dark:border-white border-state-500 p-4 grid grid-cols-1 mt-8 md:grid-cols-4 gap-x-8">
			<img
				src={image}
				alt={title}
				className="w-[60%] max-w-[16rem] h-[14rem] rounded-xl object-cover md:w-full lg:h-[10rem]"
			/>
			<div>
				<p className="capitalize text-lg font-medium mt-4 ">{title}</p>
				<p className="mt-2 font-medium">{company}</p>
				<p className="flex items-center gap-x-4 mt-4">
					Color:
					<span
						className="w-4 h-4 rounded-full"
						style={{ background: color }}></span>
				</p>
			</div>
			<div>
				<AmountSelect
					mode={Mode.Cart}
					setAmount={setAmount}
					amount={amount}
					id={item.cartId}
				/>
				<button
					onClick={handleRemove}
					className="w-4 mt-4 text-blue-500 hover:underline">
					Remove
				</button>
			</div>

			<p className="mt-4 md:text-right">{formateToDollars(price)}</p>
		</div>
	);
}
export default CartItemInfo;
