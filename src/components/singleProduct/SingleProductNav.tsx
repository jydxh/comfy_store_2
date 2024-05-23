import { Link } from "react-router-dom";
function SingleProductNav() {
	const linkClass =
		"cursor-pointer hover:underline text-blue-500 hover:text-blue-600";
	return (
		<div className="flex ">
			<Link to="/" className={linkClass}>
				Home
			</Link>
			<span className=" border-l-2 dark:border-white border-slate-500 shadow-md mx-6"></span>
			<Link to="/products" className={linkClass}>
				Products
			</Link>
		</div>
	);
}
export default SingleProductNav;
