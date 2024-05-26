import { OrderRespone } from "@/utils/types";
import { useLoaderData } from "react-router-dom";

function OrderTables() {
	const { data, meta } = useLoaderData() as OrderRespone;
	const { total, pageSize } = meta.pagination;

	return (
		<div className="mt-8">
			<div>Total Orders: {total}</div>
			<table className="mt-8 table-auto w-full border-collapse border-spacing-1">
				<caption className="caption-bottom mt-6 text-sm ">
					A list of your recent orders
				</caption>
				<thead>
					<tr className="border-b h-14 text-sm font-light text-center">
						<th>Name</th>
						<th>Address</th>
						<th>Prodcuts</th>
						<th>Cost</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{data.map((orders, index) => {
						const { address, name, numItemsInCart, orderTotal, createdAt } =
							orders.attributes;
						const date = new Date(createdAt);
						const formateDate = (date: Date) => {
							const options: Intl.DateTimeFormatOptions = {
								weekday: "short", // Short form of the day (e.g., "Sat")
								year: "numeric", // Numeric year (e.g., "2024")
								month: "short", // Short form of the month (e.g., "May")
								day: "numeric", // Numeric day (e.g., "25")
							};
							return new Intl.DateTimeFormat("en-US", options).format(date);
						};
						return (
							<tr
								key={orders.id}
								className={`h-14 text-center text-sm dark:hover:bg-gray-700 hover:bg-slate-200 ${
									index === pageSize - 1 ? "" : "border-b"
								}`}>
								<td>{name}</td>
								<td>{address}</td>
								<td>{numItemsInCart}</td>
								<td>{orderTotal}</td>
								<td>{formateDate(date)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
export default OrderTables;
