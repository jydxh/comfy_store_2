import { Form } from "react-router-dom";
import SelectList from "./SelectList";
import PriceBar from "./PriceBar";
import Freeshipping from "./Freeshipping";
import { Meta, SearchParams } from "@/utils/types";
import { useState } from "react";
function ProdcutsFilter({
	serachParam,
	meta,
}: {
	serachParam: SearchParams;
	meta: Meta;
}) {
	const { order, company, category, price, search, shipping } = serachParam;
	const { categories, companies } = meta;
	const orderBy = ["a-z", "z-a", "high", "low"];
	const [inputValue, setInputValue] = useState(search);
	return (
		<div className="mt-12 border shadow-slate-800 p-4 rounded-xl ">
			<Form
				method="GET"
				className="text-sm font-medium grid grid-cols-1 gap-y-4 sm:grid-cols-2 gap-x-4 md:grid-cols-3 lg:grid-cols-4">
				<div className="flex flex-col  ">
					<label htmlFor="search">Search Product</label>
					<input
						type="text"
						id="search"
						name="search"
						onChange={evt => {
							setInputValue(evt.target.value);
						}}
						value={inputValue}
						className="border rounded-xl mt-2 p-2 focus:ring-blue-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-blue-500 focus:outline-0 dark:bg-slate-900"
					/>
				</div>
				<div>
					<SelectList
						title="Select Category"
						name="category"
						selection={categories}
						defaultValue={category || categories[0]}
					/>
				</div>
				<div>
					<SelectList
						title="Select Company"
						name="company"
						selection={companies}
						defaultValue={company || companies[0]}
					/>
				</div>
				<div>
					<SelectList
						title="Select Category"
						name="order"
						selection={orderBy}
						defaultValue={order || orderBy[0]}
					/>
				</div>
				<div>
					<PriceBar name="price" defaultValue={price || 100000} />
				</div>
				<div className="mt-2">
					<Freeshipping name="shipping" defaultValue={shipping || false} />
				</div>
				<button
					type="submit"
					className="w-full bg-blue-600 p-2 rounded-xl hover:bg-blue-500 text-white">
					Search
				</button>
				<button
					type="reset"
					className="w-full dark:text-white border border-slate-500 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800">
					Reset
				</button>
			</Form>
		</div>
	);
}
export default ProdcutsFilter;
