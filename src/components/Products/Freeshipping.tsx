import { useState } from "react";

function Freeshipping({
	name,
	defaultValue,
}: {
	name: string;
	defaultValue: boolean;
}) {
	const [value, setValue] = useState(defaultValue);

	return (
		<div className="flex justify-between items-center">
			<label htmlFor={name}>Free Shipping</label>
			<input
				id={name}
				type="checkbox"
				name={name}
				checked={value}
				onChange={() => {
					setValue(prev => !prev);
				}}
				className="rounded-checkbox"
			/>
		</div>
	);
}
export default Freeshipping;
