import formateToDollars from "@/utils/formateToDollars";
import { useState } from "react";

function PriceBar({
	name,
	defaultValue,
}: {
	name: string;
	defaultValue: string | number;
}) {
	// const price = "100000";
	const [value, setValue] = useState(defaultValue);
	return (
		<>
			<div className="flex  justify-between">
				<p>Price</p>
				<p>{formateToDollars(value) + ".00"}</p>
			</div>
			<div>
				<input
					className="w-full mt-2 cursor-pointer "
					step="5000"
					name={name}
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
