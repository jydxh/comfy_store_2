import { Link } from "react-router-dom";
import { Armchair } from "lucide-react";
function NavLogo() {
	return (
		<div className="bg-blue-500 p-2 rounded-xl ">
			<Link to="/">
				<Armchair className="text-white w-8 h-8" />
			</Link>
		</div>
	);
}
export default NavLogo;
