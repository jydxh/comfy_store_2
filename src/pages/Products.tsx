import ProdcutsFilter from "@/components/Products/ProdcutsFilter";
import ProdcutsList from "@/components/Products/ProdcutsList";
import Pagination from "@/components/ui/Pagination";
import { customeFetch } from "@/utils/api";
import { ProductsRespone } from "@/utils/types";
import { AxiosError } from "axios";
import { LoaderFunction, useLoaderData } from "react-router-dom";

export const loader: LoaderFunction =
	async (): Promise<ProductsRespone | null> => {
		try {
			const response = await customeFetch<ProductsRespone>("/products");
			console.log(response);
			return response.data;
		} catch (error) {
			console.log(error);
			throw new Response("failed to loaded products", {
				status:
					error instanceof AxiosError ? error.response?.data.error.status : 404,
			});
		}
	};

function Products() {
	const { meta } = useLoaderData() as ProductsRespone;
	const { page, total, pageSize } = meta.pagination;
	return (
		<main className="max-w-[1280px] mx-auto px-8 dark:text-white">
			<ProdcutsFilter />
			<ProdcutsList />
			<Pagination current={page} totalItem={total} pageSize={pageSize} />
		</main>
	);
}
export default Products;
