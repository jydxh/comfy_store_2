import ProdcutsFilter from "@/components/Products/ProdcutsFilter";
import ProdcutsList from "@/components/Products/ProdcutsList";
import Pagination from "@/components/ui/Pagination";
import { customeFetch } from "@/utils/api";
import objTosearchParams from "@/utils/objTosearchParams";
import {
	ProductsRespone,
	ProductsResponeWithSearchParams,
	SearchParams,
} from "@/utils/types";
import { AxiosError } from "axios";
import { LoaderFunction, useLoaderData } from "react-router-dom";

export const loader: LoaderFunction = async ({
	request,
}): Promise<ProductsResponeWithSearchParams | null> => {
	const searchParams = Object.fromEntries(
		new URL(request.url).searchParams
	) as SearchParams;

	try {
		const response = await customeFetch<ProductsRespone>("/products", {
			params: searchParams,
		});
		console.log(response);
		const productRespone = response.data as ProductsRespone;
		return { ...productRespone, ...searchParams };
	} catch (error) {
		console.log(error);
		throw new Response("failed to loaded products", {
			status:
				error instanceof AxiosError ? error.response?.data.error.status : 404,
		});
	}
};

function Products() {
	const { category, company, order, price, search, shipping } =
		useLoaderData() as ProductsResponeWithSearchParams;
	const params = { category, company, order, price, search, shipping };
	const searchParams = objTosearchParams<SearchParams>(params);
	const { meta } = useLoaderData() as ProductsRespone;
	const { page, total, pageSize } = meta.pagination;
	return (
		<main className="max-w-[1280px] mx-auto px-8 dark:text-white">
			<ProdcutsFilter />
			<ProdcutsList />
			<Pagination
				current={page}
				totalItem={total}
				pageSize={pageSize}
				pathName="/products"
				searchParams={searchParams}
			/>
		</main>
	);
}
export default Products;
