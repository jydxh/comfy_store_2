function FormRow({
	label,
	name,
	type,
	required,
}: {
	label: string;
	name: string;
	type: string;
	required?: true;
}) {
	return (
		<div className="flex flex-col mt-2">
			<label htmlFor={name} className="capitalize">
				{label}
			</label>
			<input
				type={type}
				name={name}
				required={required}
				className="rounded-xl p-1 mt-2 dark:bg-slate-900"
			/>
		</div>
	);
}
export default FormRow;
