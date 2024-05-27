import ProdcutsFilter from "@/components/Products/ProdcutsFilter";
import ProdcutsList from "@/components/Products/ProdcutsList";
import Pagination from "@/components/ui/Pagination";

import objTosearchParams from "@/utils/objTosearchParams";
import { SearchParams } from "@/utils/types";
import useProducts from "@/utils/useProducts";
import { useSearchParams } from "react-router-dom";

/* export const loader: LoaderFunction = async ({
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
}; */

function Products() {
	const [searchParams] = useSearchParams();
	const searchParamsObj = Object.fromEntries(
		searchParams.entries()
	) as SearchParams;
	const serachParamsString = objTosearchParams<SearchParams>(searchParamsObj);

	const { data, error, isLoading } = useProducts(searchParamsObj);

	if (isLoading) {
		return (
			<main className="max-w-[1280px] mx-auto px-8 dark:text-white grid place-items-center h-[100vh]">
				Loading...
			</main>
		);
	}
	if (error) {
		return (
			<main className="max-w-[1280px] mx-auto px-8 dark:text-white grid place-items-center h-[100vh]">
				failed loading products
			</main>
		);
	}
	if (data) {
		const meta = data.meta;
		const { page, total, pageSize } = meta.pagination;
		return (
			<main className="max-w-[1280px] mx-auto px-8 dark:text-white">
				<ProdcutsFilter serachParam={searchParamsObj} meta={data.meta} />
				<ProdcutsList products={data} />
				<Pagination current={page} totalItem={total} pageSize={pageSize} />
			</main>
		);
	}
}
export default Products;
