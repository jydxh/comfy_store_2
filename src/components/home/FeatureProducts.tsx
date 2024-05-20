import { LoaderFunction, useLoaderData } from "react-router-dom";
import type { ProductsRespone } from "@/utils/types";
import { customeFetch } from "@/utils/api";
import formateToDollars from "@/utils/formateToDollars";
import { Link } from "react-router-dom";

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
	console.log(products);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
			{products.data.map(product => {
				const { price, image, title } = product.attributes;
				return (
					<Link to={`/products/${product.id}`} key={title}>
						<div className="shadow p-4 border dark:border-slate-500 rounded-xl hover:bg-slate-50 dark:hover:bg-gray-800">
							<img
								src={image}
								className="rounded-xl h-[16rem] w-full object-cover"
							/>
							<p className="mt-4 capitalize text-center font-semibold">
								{title}
							</p>
							<p className="text-center mt-4 text-blue-500">
								{formateToDollars(price)}
							</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default FeatureProducts;
