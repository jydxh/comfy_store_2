import { Form } from "react-router-dom";

function ShippingInfoForm() {
	return (
		<Form method="POST" className="mt-4 p-2">
			<p className="font-semibold text-xl mb-8">Shipping Information</p>
			<div className="flex flex-col capitalize mb-4">
				<label htmlFor="name">first name</label>
				<input
					type="text"
					name="name"
					className="mt-2 rounded-md dark:bg-slate-900 border outline-none border-slate-500 p-1 focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<div className="flex flex-col capitalize">
				<label htmlFor="name">Address</label>
				<input
					type="text"
					name="address"
					className="mt-2 rounded-md dark:bg-slate-900 border outline-none border-slate-500 p-1 focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<button
				type="submit"
				className="capitalize bg-blue-500 w-full mt-8 p-2 rounded-xl hover:bg-blue-400">
				place your order
			</button>
		</Form>
	);
}
export default ShippingInfoForm;
