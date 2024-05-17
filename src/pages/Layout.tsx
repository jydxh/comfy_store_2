import { Outlet } from "react-router-dom";
import UserLog from "../components/homeLayout/UserLog.tsx";
import Navigation from "../components/homeLayout/Navigation.tsx";

function Layout() {
	return (
		<>
			<header>
				<UserLog />
				<Navigation />
			</header>
			<Outlet />
		</>
	);
}
export default Layout;
