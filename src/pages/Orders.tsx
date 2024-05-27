import Pagination from "@/components/ui/Pagination";
import TitleSeperate from "@/components/ui/TitleSeperate";
import OrderTables from "@/components/orders/OrderTables";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { customeFetch } from "@/utils/api";
import { OrderRespone } from "@/utils/types";
import { store } from "@/store";

export const loader: LoaderFunction = async ({
	request,
}): Promise<OrderRespone | null> => {
	const { jwt } = store.getState().user.user;
	const params = Object.fromEntries(new URL(request.url).searchParams);
	const url = "/orders";
	try {
		const res = await customeFetch<OrderRespone>(url, {
			params,
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		});
		//console.log(res);
		return res.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

function Orders() {
	const { meta } = useLoaderData() as OrderRespone;
	const { page, pageSize, total } = meta.pagination;

	return (
		<main className="mt-10 p-8 dark:text-white max-w-[1280px] mx-auto min-w-[680px]">
			<TitleSeperate title="your orders" />
			<OrderTables />
			<Pagination current={page} pageSize={pageSize} totalItem={total} />
		</main>
	);
}
export default Orders;
