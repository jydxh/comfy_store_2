import { useState } from "react";

function ColorSelect({
	colors,
	value,
	setColorValue,
}: {
	colors: string[];
	value: string;
	setColorValue: (color: string) => void;
}) {
	const [colorState, setColorState] = useState(value);
	return (
		<div>
			<p className="font-semibold text-xl tracking-wide">Colors</p>
			<div className="mt-2">
				{colors.map(color => {
					return (
						<button
							className={`w-[1.2rem] h-[1.2rem] rounded-full mx-1 border-2 ${
								color === colorState ? "  border-amber-800" : "border-slate-200"
							}`}
							onClick={() => {
								setColorState(color);
								setColorValue(color);
							}}
							key={color}
							style={{ backgroundColor: color }}></button>
					);
				})}
			</div>
		</div>
	);
}
export default ColorSelect;
