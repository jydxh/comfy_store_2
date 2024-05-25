import { store } from "@/store";
import { Checkout } from "@/pages";

import { Navigate } from "react-router-dom";

function ProtecedCheckout() {
	const { username } = store.getState().user.user;
	if (!username) return <Navigate to="/" />;
	else {
		return <Checkout />;
	}
}
export default ProtecedCheckout;
