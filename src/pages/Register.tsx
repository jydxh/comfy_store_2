import {
	ActionFunction,
	Form,
	useNavigation,
	json,
	useActionData,
	useNavigate,
} from "react-router-dom";
import { Link } from "react-router-dom";
import FormRow from "@/components/ui/FormRow";
import { customeFetch } from "@/utils/api";
import { AxiosError } from "axios";
import { useEffect } from "react";

export const action: ActionFunction = async ({
	request,
}): Promise<Response> => {
	const formData = await request.formData();
	const param = Object.fromEntries(formData);
	try {
		const response = await customeFetch.post("/auth/local/register", param);
		console.log(response.data);
		return json({
			success: "Registration successful! Redirecting to login...",
		});
		//return redirect("/login");
	} catch (error) {
		//console.log(error);
		const errorMessage =
			error instanceof AxiosError
				? error.response?.data.error.message
				: "failed to regester";
		return json({ error: errorMessage });
	}
};

type ActionData = {
	error?: string;
	success?: string;
};

function Register() {
	const { state } = useNavigation();
	const actiondata = useActionData() as ActionData;
	const navigate = useNavigate();

	useEffect(() => {
		if (actiondata?.success) {
			const timer = setTimeout(() => {
				navigate("/login");
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [actiondata, navigate]);

	return (
		<main className="grid place-items-center h-[100vh]">
			<Form
				method="POST"
				className="dark:bg-slate-800 bg-slate-200 dark:text-white  p-4 rounded-xl w-[22rem]">
				<div className="font-semibold mb-4 text-center text-2xl">Register</div>
				<FormRow label="username" name="username" type="text" required />
				<FormRow label="email" name="email" type="email" required />
				<FormRow label="password" name="password" type="password" required />
				{state === "idle" && (
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-600 w-full p-2 rounded-xl mt-8">
						Register
					</button>
				)}
				{state === "submitting" && (
					<button className=" w-full p-2 rounded-xl mt-8" disabled>
						...Registering...
					</button>
				)}

				{actiondata?.error && (
					<div className="mt-4 text-center text-red-600 font-semibold">
						{actiondata.error}
					</div>
				)}
				{actiondata?.success && (
					<div className="mt-4 text-center text-blue-600 font-semibold">
						{actiondata.success}
					</div>
				)}

				<div className="flex justify-center gap-x-4 mt-8 ">
					<p>Already a member?</p>
					<Link to="/login" className="text-blue-500 hover:underline">
						Login
					</Link>
				</div>
			</Form>
		</main>
	);
}
export default Register;
