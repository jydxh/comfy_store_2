import { useEffect } from "react";
import { useActionData, useNavigate } from "react-router-dom";
function OrderFeedBack() {
	const navigate = useNavigate();
	const actionData = useActionData() as { success?: string };

	useEffect(() => {
		if (actionData?.success) {
			const timer = setTimeout(() => {
				navigate("/orders");
			}, 3000);
			return () => {
				clearTimeout(timer);
			};
		}
	}, [navigate, actionData]);
	return (
		<div className="text-center w-full">
			{actionData?.success && (
				<>
					<p>{actionData.success}</p>{" "}
					<p className="font-semibold text-orange-500 text-xl">
						redirecting to orders page...
					</p>
				</>
			)}
		</div>
	);
}
export default OrderFeedBack;
