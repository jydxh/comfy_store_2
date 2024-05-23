import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { type SingleProductResponse } from "@/utils/types";
import formateToDollars from "@/utils/formateToDollars";
import ColorSelect from "./ColorSelect";
import AmountSelect from "../ui/AmountSelect";
import { Mode } from "@/components/ui/AmountSelect";
import { useAppDispatch } from "@/hooks";
import { addToCart, type CartItem } from "@/features/cart/cartSlice";

function SingleProductDetail() {
	const data = useLoaderData() as SingleProductResponse;
	const dispatch = useAppDispatch();

	const [amount, setAmount] = useState(1);
	//console.log(data);
	const { image, title, company, price, description, colors } =
		data.data.attributes;
	const [colorValue, setColorValue] = useState(colors[0]);
	const obj: CartItem = {
		id: data.data.id,
		image,
		title,
		company,
		price,
		description,
		color: colorValue,
		cartId: colorValue + data.data.id,
		amount,
	};
	const handleClick = () => {
		dispatch(addToCart(obj));
	};
	return (
		<div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-4">
			<div>
				<img
					src={image}
					alt={title}
					className="rounded-xl w-[24rem] h-[24rem] lg:w-[80%] lg:object-cover"
				/>
			</div>
			<div className="flex flex-col gap-y-4">
				<p className="capitalize text-3xl font-bold">{title}</p>
				<p className="text-xl">{company}</p>
				<p className="p-2 bg-slate-200 dark:bg-slate-800 w-[5rem] text-center rounded-xl">
					{formateToDollars(price)}
				</p>
				<p className="leading-8">{description}</p>

				<ColorSelect
					colors={colors}
					value={colorValue}
					setColorValue={setColorValue}
				/>
				<AmountSelect
					mode={Mode.SingleProduct}
					amount={amount}
					setAmount={setAmount}
				/>
				<button
					onClick={handleClick}
					className="bg-blue-500 hover:bg-blue-400 w-[8rem] p-2 rounded-xl mt-4">
					Add to Cart
				</button>
			</div>
		</div>
	);
}
export default SingleProductDetail;
