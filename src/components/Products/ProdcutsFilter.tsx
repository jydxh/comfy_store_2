import { Form } from "react-router-dom";
import SelectList from "./SelectList";
import PriceBar from "./PriceBar";
import Freeshipping from "./Freeshipping";
function ProdcutsFilter() {
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
						className="border rounded-xl mt-2 p-2 focus:ring-blue-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-blue-500 focus:outline-0 dark:bg-slate-900"
					/>
				</div>
				<div>
					<SelectList
						title="Select Category"
						name="category"
						selection={["a", "b", "c"]}
						defaultValue="a"
					/>
				</div>
				<div>
					<SelectList
						title="Select Category"
						name="category"
						selection={["a", "b", "c"]}
						defaultValue="a"
					/>
				</div>
				<div>
					<SelectList
						title="Select Category"
						name="category"
						selection={["a", "b", "c"]}
						defaultValue="a"
					/>
				</div>
				<div>
					<PriceBar />
				</div>
				<div className="mt-2">
					<Freeshipping />
				</div>
				<button
					type="submit"
					className="w-full bg-blue-600 p-2 rounded-xl hover:bg-blue-500">
					Search
				</button>
				<button
					type="reset"
					className="w-full border border-slate-500 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800">
					Reset
				</button>
			</Form>
		</div>
	);
}
export default ProdcutsFilter;
