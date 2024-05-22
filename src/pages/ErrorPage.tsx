import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();
	console.log(error);
	if (isRouteErrorResponse(error) && error.status === 404) {
		return (
			<main className="grid min-h-[100vh] place-items-center px-8 dark:text-white">
				<div className="text-center">
					<p className="text-9xl font-semibold">{error.status}</p>
					<h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
						{error.status === 404 ? "Page not found" : "An error occurred"}
					</h1>
					<p className="mt-6 text-lg leading-7">
						{error.statusText ||
							"Sorry, we could not find the page you are looking for"}
					</p>
					{error.data && (
						<p className="mt-2 text-sm text-red-500">{error.data}</p>
					)}

					<div className="mt-10">
						<button className="bg-green-600 p-2 rounded-xl">
							<Link to="/"> Go back home</Link>
						</button>
					</div>
				</div>
			</main>
		);
	} else {
		return (
			<main className="grid min-h-[100vh] place-items-center px-8 dark:text-white">
				Cannot find the page!
			</main>
		);
	}
}
export default ErrorPage;
