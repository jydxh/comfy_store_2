type SelectListProps = {
	selection: string[];
	defaultValue: string;
	name: string;
	title: string;
};

function SelectList({ selection, defaultValue, name, title }: SelectListProps) {
	return (
		<div className="flex flex-col ">
			<label htmlFor={name}>{title}</label>
			<select className="dark:bg-slate-900 border p-2 rounded-xl mt-2">
				{selection.map(item => {
					return <option value={item}>{item}</option>;
				})}
			</select>
		</div>
	);
}
export default SelectList;
