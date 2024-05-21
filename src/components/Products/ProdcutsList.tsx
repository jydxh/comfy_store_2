import { ProductsRespone } from "@/utils/types";
import { LayoutGrid, List } from "lucide-react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import GridLayout from "./GridLayout";
import ListLayout from "./ListLayout";
function ProdcutsList() {
	type Layout = "grid" | "list";
	const [layout, setLayout] = useState<Layout>("grid");

	const { data: products, meta } = useLoaderData() as ProductsRespone;
	console.log("products:", products);
	console.log("meta:", meta);
	const productNumber = meta.pagination.total;
	return (
		<>
			<section className="flex justify-between items-center my-4">
				<div> {productNumber} products</div>
				<div className="flex gap-6">
					<button
						disabled={layout === "grid"}
						onClick={() => {
							setLayout("grid");
						}}
						className={`p-2 rounded-lg ${
							layout === "grid" ? " bg-blue-500 text-white" : ""
						}`}>
						<LayoutGrid />
					</button>
					<button
						disabled={layout === "list"}
						onClick={() => {
							setLayout("list");
						}}
						className={`p-2 rounded-lg ${
							layout === "list" ? " bg-blue-500 text-white" : ""
						}`}>
						<List />
					</button>
				</div>
			</section>
			<hr />
			{layout === "grid" && <GridLayout products={products} />}
			{layout === "list" && <ListLayout products={products} />}
		</>
	);
}
export default ProdcutsList;
