import { logout } from "@/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Link, useNavigate } from "react-router-dom";

function UserLog() {
	//const user = "jydxh";
	//const user = null;
	const { username } = useAppSelector(state => state.user.user);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const handleLogout = () => {
		dispatch(logout());
		navigate("/");
	};
	return (
		<div className="flex justify-center i my-4 mx-auto gap-x-12 md:justify-end max-w-[1280px] md:pe-12  ">
			{username && (
				<>
					<p className="dark:text-white">Hello, {username}</p>
					<button
						className="text-blue-600 hover:underline hover:text-blue-700"
						onClick={handleLogout}>
						Logout
					</button>
				</>
			)}
			{!username && (
				<>
					<Link to="/login">
						<button className="bg-blue-500 text-white py-2 px-3 rounded-2xl hover:bg-blue-400">
							Sign in/ Guest
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
