import { Product } from "@/utils/types";
import { Link } from "react-router-dom";
import formateToDollars from "@/utils/formateToDollars";
function GridLayout({ products }: { products: Product[] }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
			{products.map(product => {
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
export default GridLayout;
