import { Armchair } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { options } from "../../utils/navigaitionOptions";

function NavInLine() {
	return (
		<div className="flex justify-between  items-center">
			<div className="bg-blue-500 p-2 rounded-xl">
				<Link to="/">
					<Armchair className="text-white w-8 h-8" />
				</Link>
			</div>
			<ul className="flex gap-x-4 capitalize">
				{options.map(opt => {
					const { content, href } = opt;
					return (
						<li key={content}>
							<NavLink to={href}>{content}</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
export default NavInLine;
