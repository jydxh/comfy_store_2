import { LoaderFunction, useLoaderData } from "react-router-dom";
import type { ProductsRespone } from "@/utils/types";
import { customeFetch } from "@/utils/api";

import GridLayout from "../Products/GridLayout";

export const loader: LoaderFunction =
	async (): Promise<ProductsRespone | null> => {
		try {
			const response = await customeFetch<ProductsRespone>(
				"/products?featured=true"
			);
			return response.data;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

function FeatureProducts() {
	const products = useLoaderData() as ProductsRespone;

	return <GridLayout products={products.data} />;
}

export default FeatureProducts;
