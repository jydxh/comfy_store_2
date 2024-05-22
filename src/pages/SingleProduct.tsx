import SingleProductDetail from "@/components/singleProduct/SingleProductDetail";
import SingleProductNav from "@/components/singleProduct/SingleProductNav";
import { LoaderFunction } from "react-router-dom";
import { type SingleProductResponse } from "@/utils/types";
import { customeFetch } from "@/utils/api";
import { AxiosError } from "axios";

export const loader: LoaderFunction = async ({
	params,
}): Promise<SingleProductResponse | null> => {
	//console.log("params:", params);
	try {
		const response = await customeFetch<SingleProductResponse>(
			"/products/" + params.id
		);
		return { ...response.data };
	} catch (error) {
		console.log(error);
		if (error instanceof AxiosError) {
			throw new Response(
				error.response?.data.message || "Failed to load product",
				{
					status: error.response?.status || 500,
				}
			);
		}
		throw new Response("Failed to load product", { status: 500 });
	}
};

export default function SingleProduct() {
	return (
		<main className="max-w-[1280px] mx-auto  dark:text-white my-10 p-10">
			<SingleProductNav />
			<SingleProductDetail />
		</main>
	);
}
