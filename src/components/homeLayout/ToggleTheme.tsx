import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleTheme } from "../../features/theme/themeSlice";
import { Sun } from "lucide-react";
import { MoonStar } from "lucide-react";

function ToggleTheme() {
	const theme = useAppSelector(state => state.theme.theme);
	const dispatch = useAppDispatch();
	// const [showSelect, setShowSelect] = useState(false);
	const handleClick = () => {
		dispatch(toggleTheme());
	};

	return (
		<div className="relative">
			<button className="bg-white p-2 rounded-xl hover:bg-slate-50" onClick={handleClick}>
				{theme === "light" && <Sun className="w-5 h-5" />}
				{theme === "dark" && <MoonStar />}
			</button>
			{/* {showSelect && (
				<ul
					className="absolute bg-white  rounded-xl p-2  shadow-md top-12 text-sm right-1
				">
					<li>
						<button
							className="w-24 hover:bg-slate-50 p-2 rounded-lg text-start capitalize"
							onClick={handleLight}>
							light
						</button>
					</li>
					<li>
						<button
							className="w-24 hover:bg-slate-50 p-2 rounded-lg text-start capitalize"
							onClick={handleDark}>
							dark
						</button>
					</li>
				</ul>
			)} */}
		</div>
	);
}
export default ToggleTheme;
