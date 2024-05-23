import { useAppDispatch } from "@/hooks";
import { updateCart } from "@/features/cart/cartSlice";
export enum Mode {
	SingleProduct = "singleProduct",
	Cart = "cart",
}

function AmountSelect({
	amount,
	mode,
	setAmount,
	id,
}: {
	amount: number;
	mode: Mode;
	setAmount: (value: number) => void;
	id?: string;
}) {
	const dispatch = useAppDispatch();
	let array = Array.from({ length: 10 }, (_, index) => index + 1);

	if (mode === Mode.Cart && amount > 9) {
		array = Array.from({ length: 20 }, (_, index) => index + amount - 9);
	}
	if (mode === Mode.Cart && amount < 9) {
		array = Array.from({ length: 20 }, (_, index) => index + 1);
	}
	return (
		<div className="flex flex-col gap-y-2">
			<label>Amount: </label>
			<select
				value={amount}
				onChange={evt => {
					setAmount(Number(evt.target.value));
					if (Mode.Cart && id) {
						dispatch(updateCart({ id, amount: evt.target.value }));
					}
				}}
				name="amount"
				id="amount"
				className="bg-white dark:bg-slate-800 w-[6rem] p-2 rounded-xl border">
				{array.map(item => {
					return (
						<option key={item} value={item}>
							{item}
						</option>
					);
				})}
			</select>
		</div>
	);
}
export default AmountSelect;
