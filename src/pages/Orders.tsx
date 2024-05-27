import Pagination from "@/components/ui/Pagination";
import TitleSeperate from "@/components/ui/TitleSeperate";
import OrderTables from "@/components/orders/OrderTables";

import { OrdersParams } from "@/utils/types";
import useFetchOrders from "@/utils/useFetchOrders";
import { useLocation } from "react-router-dom";

/*  */
function Orders() {
	const { search } = useLocation();

	let searchParam = search;

	if (searchParam === "") {
		searchParam = "?page=1";
	}

	const searchParamObj = Object.fromEntries(
		new URLSearchParams(searchParam).entries()
	) as OrdersParams;

	const { data, error, isLoading } = useFetchOrders(searchParamObj);

	if (isLoading) {
		return (
			<main className="mt-10 p-8 font-semibold text-2xl dark:text-white grid place-items-center h-[100vh]">
				...Loading Order...
			</main>
		);
	}

	if (error) {
		return (
			<main className="mt-10 p-8  text-red-600 text-2xl font-semibold grid place-items-center h-[100vh]">
				Failed Loading Orders
			</main>
		);
	}

	if (data) {
		const { meta, data: orders } = data;
		const { page, pageSize, total } = meta.pagination;
		return (
			<main className="mt-10 p-8 dark:text-white max-w-[1280px] mx-auto min-w-[680px]">
				<TitleSeperate title="your orders" />
				<OrderTables orders={orders} total={total} pageSize={pageSize} />
				<Pagination current={page} pageSize={pageSize} totalItem={total} />
			</main>
		);
	}
}
export default Orders;
