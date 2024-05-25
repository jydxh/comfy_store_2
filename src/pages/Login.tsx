import { useNavigation, Form, Link } from "react-router-dom";
import FormRow from "@/components/ui/FormRow";

function Login() {
	const { state } = useNavigation();
	//let state = "submitting";
	return (
		<main className="grid place-items-center h-[100vh] ">
			<Form
				method="POST"
				className="dark:bg-slate-800 bg-slate-300 dark:text-white  p-4 rounded-xl w-[22rem]">
				<div className="font-semibold mb-4 text-center text-2xl">Login</div>
				<FormRow label="email" name="email" type="email" required />
				<FormRow label="password" name="username" type="text" required />
				{state === "idle" && (
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-600 w-full p-2 rounded-xl mt-8">
						Login
					</button>
				)}
				{state === "submitting" && (
					<button className=" w-full p-2 rounded-xl mt-8" disabled>
						...Logining...
					</button>
				)}
				{state === "idle" && (
					<button
						type="submit"
						className="dark:bg-slate-700 dark:hover:bg-slate-900 bg-slate-400 hover:bg-slate-500 w-full p-2 rounded-xl mt-8">
						Guest User
					</button>
				)}
				{state === "submitting" && (
					<button className=" w-full p-2 rounded-xl mt-8 capitalize" disabled>
						...Logining as guest user...
					</button>
				)}
				<div className="flex justify-center gap-x-4 mt-8">
					<p>Not a member yet?</p>
					<Link to="/register" className="text-blue-500 hover:underline">
						Register
					</Link>
				</div>
			</Form>
		</main>
	);
}
export default Login;
