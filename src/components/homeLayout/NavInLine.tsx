import { NavLink } from "react-router-dom";
import { options } from "../../utils/navigaitionOptions";
import { useAppSelector } from "@/hooks";

function NavInLine() {
	const { username } = useAppSelector(state => state.user.user);
	const filteredOptions = username ? options : options.slice(0, 4);

	return (
		<ul className="flex gap-x-4 capitalize dark:text-white">
			{filteredOptions.map(opt => {
				const { content, href } = opt;
				return (
					<li key={content}>
						<NavLink
							to={href}
							className={({ isActive }) =>
								isActive ? "text-blue-600 dark:text-blue-500 font-normal" : ""
							}>
							{content}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
}
export default NavInLine;
