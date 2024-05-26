import { useState } from "react";

type SelectListProps = {
	selection: string[];
	defaultValue: string;
	name: string;
	title: string;
};

function SelectList({ selection, defaultValue, name, title }: SelectListProps) {
	const [value, setValue] = useState(defaultValue);
	return (
		<div className="flex flex-col ">
			<label htmlFor={name}>{title}</label>
			<select
				id={name}
				name={name}
				value={value}
				onChange={evt => {
					setValue(evt.target.value);
				}}
				className="dark:bg-slate-900 border p-2 rounded-xl mt-2">
				{selection.map(item => {
					return (
						<option key={item} value={item}>
							{item}
						</option>
					);
				})}
			</select>
		</div>
	);
}
export default SelectList;
