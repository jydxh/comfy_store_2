import { AlignLeft } from "lucide-react";
import { useState } from "react";
import { options } from "../../utils/navigaitionOptions";
import { NavLink } from "react-router-dom";
enum DisplayType {
	show = "show",
	hidden = "hidden",
}
type ShowSelectOptionsState = DisplayType.show | DisplayType.hidden;
//const baseClass = "border-2 ";
function SelectedNav() {
	const [showSelectOptions, setShowSelectOptions] =
		useState<ShowSelectOptionsState>(DisplayType.hidden);
	const toggleSelectOptions = () => {
		setShowSelectOptions(prev => {
			if (prev === DisplayType.show) {
				return DisplayType.hidden;
			} else {
				return DisplayType.show;
			}
		});
	};
	return (
		<>
			<div className="relative ">
				<button
					className="p-2 rounded-xl bg-white hover:bg-gray-300 md:hidden dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 "
					onClick={toggleSelectOptions}>
					<AlignLeft />
				</button>
				<ul
					className={
						showSelectOptions +
						" absolute border-1 rounded-xl p-2 text-start bg-white capitalize top-14 left-5  shadow-md dark:bg-slate-800 dark:text-white"
					}>
					{options.map(opt => {
						const { href, content } = opt;
						const baseClass = " block ps-4 w-[12rem]";
						return (
							<li
								key={content}
								className="cursor-pointer hover:bg-slate-100  rounded-xl py-2 hover:dark:bg-slate-700 ">
								<NavLink
									to={href}
									className={({ isActive }) =>
										isActive
											? "text-blue-500 " + baseClass
											: (baseClass as string)
									}>
									{content}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
export default SelectedNav;
