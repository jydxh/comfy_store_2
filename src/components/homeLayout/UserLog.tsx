import { Link } from "react-router-dom";

function UserLog() {
	const user = "jydxh";
	//const user = null;
	const handleLogout = () => {};
	return (
		<div className="flex justify-center my-4 mx-auto gap-x-6 md:justify-end max-w-[1280px] md:pe-12  ">
			{user && (
				<>
					<p>Hello, {user}</p>
					<button
						className="text-blue-600 underline hover:text-blue-700"
						onClick={handleLogout}>
						Logout
					</button>
				</>
			)}
			{!user && (
				<>
					<Link to="/login">
						<button className="bg-blue-500 text-white py-2 px-3 rounded-2xl hover:bg-blue-400">
							Sign in/ Geust
						</button>
					</Link>
					<Link to="/register">
						<button className="bg-slate-100 hover:bg-slate-50 py-2 px-3  rounded-2xl">
							Register
						</button>
					</Link>
				</>
			)}
		</div>
	);
}
export default UserLog;
