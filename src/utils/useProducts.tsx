import { useQuery } from "@tanstack/react-query";
import { ProductsRespone } from "./types";
import { customeFetch } from "./api";
import { type SearchParams } from "./types";

const fetchProducts = async (
	searchParams: SearchParams
): Promise<ProductsRespone | null> => {
	try {
		console.log("fetching products!");
		const response = await customeFetch<ProductsRespone>("/products", {
			params: searchParams,
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

function useProducts(searchParams: SearchParams) {
	return useQuery({
		queryKey: ["products", searchParams],
		queryFn: () => fetchProducts(searchParams),
		staleTime: 5 * 60000, // set to cache data for 5 mins
	});
}
export default useProducts;
