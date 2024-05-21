import formateToDollars from "@/utils/formateToDollars";
import { type Product } from "@/utils/types";

function ListLayout({ products }: { products: Product[] }) {
	return (
		<div className="grid grid-cols-1">
			{products.map(product => {
				const { image, price, title, company } = product.attributes;
				return (
					<ul>
						<li
							key={product.id}
							className="shadow p-4 border dark:border-slate-500 rounded-xl hover:bg-slate-50 dark:hover:bg-gray-800 my-4">
							<div className="flex items-center flex-col md:flex-row md:justify-between md:items-center">
								<img
									src={image}
									alt={title}
									className="rounded-xl w-[90%] h-[18rem] object-cover mb-4 md:w-[16rem] md:h-[16rem] "
								/>
								<div className="text-center">
									<p className="text-xl capitalize font-semibold">{title}</p>
									<p>{company}</p>
								</div>

								<p className="mt-4 md:mt-0 text-blue-500">
									{formateToDollars(price)}
								</p>
							</div>
						</li>
					</ul>
				);
			})}
		</div>
	);
}
export default ListLayout;
