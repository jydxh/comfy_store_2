import { useQuery } from "@tanstack/react-query";
import { customeFetch } from "./api";
import { OrderRespone, OrdersParams } from "@/utils/types";
import { store } from "@/store";

const fetchOrders = async (
	params: OrdersParams
): Promise<OrderRespone | null> => {
	const { jwt } = store.getState().user.user;
	const url = "/orders";

	try {
		const res = await customeFetch<OrderRespone>(url, {
			params,
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		});
		return { ...res.data };
	} catch (error) {
		console.log(error);
		throw error;
	}
};

function useFetchOrders(params: OrdersParams) {
	return useQuery({
		queryKey: ["orders", params],
		queryFn: () => fetchOrders(params),
		staleTime: 5 * 60000, // set to cache data for 5 mins
	});
}
export default useFetchOrders;
