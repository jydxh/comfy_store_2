import { NavLink } from "react-router-dom";
import { options } from "../../utils/navigaitionOptions";

function NavInLine() {
	return (
		<ul className="flex gap-x-4 capitalize">
			{options.map(opt => {
				const { content, href } = opt;
				return (
					<li key={content}>
						<NavLink
							to={href}
							className={({ isActive }) => (isActive ? "text-blue-600 font-normal" : "")}>
							{content}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
}
export default NavInLine;
