import {
	useNavigation,
	Form,
	Link,
	ActionFunction,
	json,
	redirect,
	useNavigate,
} from "react-router-dom";
import FormRow from "@/components/ui/FormRow";
import { customeFetch } from "@/utils/api";
import { store } from "@/store";
import { login } from "@/features/user/userSlice";
import { type User } from "@/features/user/userSlice";
import { useAppDispatch } from "@/hooks";

export const action: ActionFunction = async ({
	request,
}): Promise<Response> => {
	const formData = await request.formData();
	const param = Object.fromEntries(formData);
	try {
		const response = await customeFetch.post("/auth/local", param);
		console.log(response);
		const jwt = response.data.jwt;
		const username = response.data.user.username;
		store.dispatch(login({ jwt, username }));

		return redirect("/");
	} catch (error) {
		console.log(error);
		return json({ error: "some error" });
	}
};

function Login() {
	const { state } = useNavigation();

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const loginGuest = async (): Promise<Response | undefined> => {
		const data = {
			identifier: "test@test.com",
			password: "secret",
		};
		try {
			const res = await customeFetch.post("/auth/local", data);
			const user: User = {
				jwt: res.data.jwt,
				username: res.data.user.username,
			};
			dispatch(login(user));
			navigate("/");
		} catch (error) {
			console.log(error);
			return json({ error: "some error" });
		}
	};
	return (
		<main className="grid place-items-center h-[100vh] ">
			<div className="dark:bg-slate-800 bg-slate-300 dark:text-white  p-4 rounded-xl w-[22rem]">
				<Form method="POST">
					<div className="font-semibold mb-4 text-center text-2xl">Login</div>
					<FormRow label="email" name="identifier" type="email" />
					<FormRow label="password" name="password" type="text" />
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
							onClick={loginGuest}
							className="dark:bg-slate-700 dark:hover:bg-slate-900 bg-slate-400 hover:bg-slate-500 w-full p-2 rounded-xl mt-8">
							Guest User
						</button>
					)}

					<div className="flex justify-center gap-x-4 mt-8">
						<p>Not a member yet?</p>
						<Link to="/register" className="text-blue-500 hover:underline">
							Register
						</Link>
					</div>
				</Form>
			</div>
		</main>
	);
}
export default Login;
