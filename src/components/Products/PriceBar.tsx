import formateToDollars from "@/utils/formateToDollars";
import { useState } from "react";

function PriceBar() {
	// const price = "100000";
	const [value, setValue] = useState("100000");
	return (
		<>
			<div className="flex  justify-between">
				<p>Price</p>
				<p>{formateToDollars(value)}</p>
			</div>
			<div>
				<input
					className="w-full mt-2 cursor-pointer "
					step="5000"
					type="range"
					min="0"
					max="100000"
					value={value}
					onChange={e => {
						setValue(e.currentTarget.value);
					}}
				/>
			</div>
		</>
	);
}
export default PriceBar;
