import ProdcutsFilter from "@/components/Products/ProdcutsFilter";
import ProdcutsList from "@/components/Products/ProdcutsList";
import Pagination from "@/components/ui/Pagination";

import { SearchParams } from "@/utils/types";
import useProducts from "@/utils/useProducts";
import { useSearchParams } from "react-router-dom";

function Products() {
	const [searchParams] = useSearchParams();
	const searchParamsObj = Object.fromEntries(
		searchParams.entries()
	) as SearchParams;

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
