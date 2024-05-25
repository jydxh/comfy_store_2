import { store } from "@/store";
import { Orders } from "@/pages";

import { Navigate } from "react-router-dom";

function ProtecedOrders() {
	const { username } = store.getState().user.user;
	if (!username) return <Navigate to="/" />;
	else {
		return <Orders />;
	}
}
export default ProtecedOrders;
