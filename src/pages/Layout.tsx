import { Outlet, useNavigation } from "react-router-dom";
import UserLog from "../components/homeLayout/UserLog.tsx";
import Navigation from "../components/homeLayout/Navigation.tsx";
import Loading from "@/components/ui/Loading.tsx";

function Layout() {
	const { state } = useNavigation();
	return (
		<>
			<header>
				<UserLog />
				<Navigation />
			</header>
			{state === "loading" ? <Loading /> : <Outlet />}
		</>
	);
}
export default Layout;
