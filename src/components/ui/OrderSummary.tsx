import { useAppSelector } from "@/hooks";
import formateToDollars from "@/utils/formateToDollars";

function Row({
	title,
	price,
	lastLine,
}: {
	title: string;
	price: number;
	lastLine?: boolean;
}) {
	return (
		<>
			<div
				className={`${
					lastLine ? " mt-4 font-semibold " : " font-normal"
				} flex justify-between items-center  p-4 mb-1  `}>
				<p>{title}</p> <p>{formateToDollars(price)}</p>
			</div>
			{!lastLine ? <hr className="bg-slate-300 h-[1px]" /> : ""}
		</>
	);
}

function OrderSummary() {
	const { orderTotalPrice, shipping, subOrderPrice, tax } = useAppSelector(
		state => state.cart
	);
	return (
		<section className="border bg-slate-100 p-4 rounded-xl my-10 lg:mt-8 dark:bg-slate-800">
			<Row title="Subtotal" price={subOrderPrice} />
			<Row title="Shipping" price={shipping} />
			<Row title="Tax" price={tax} />
			<Row title="Order Total" price={orderTotalPrice} lastLine={true} />
		</section>
	);
}
export default OrderSummary;
