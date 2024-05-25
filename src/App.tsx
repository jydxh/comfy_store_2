import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	Home,
	Login,
	Register,
	Layout,
	About,
	Products,
	SingleProduct,
	Cart,
	Checkout,
	Orders,
	ErrorPage,
} from "./pages";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setTheme } from "./features/theme/themeSlice";
import { useEffect } from "react";
import { loader as FeatureProductsLoader } from "@/components/home/FeatureProducts";
import { loader as ProdcutsLoader } from "@/pages/Products";
import { loader as SingleProductLoader } from "@/pages/SingleProduct";

import { action as RegisterAction } from "@/pages/Register";
import { action as LoginAction } from "@/pages/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home />, loader: FeatureProductsLoader },
			{ path: "about", element: <About /> },
			{ path: "products", element: <Products />, loader: ProdcutsLoader },
			{
				path: "products/:id",
				element: <SingleProduct />,
				loader: SingleProductLoader,
			},
			{ path: "cart", element: <Cart /> },
			{ path: "checkout", element: <Checkout /> },
			{ path: "orders", element: <Orders /> },
		],
	},
	{
		path: "/login",
		element: <Login />,
		action: LoginAction,
	},
	{
		path: "/register",
		element: <Register />,
		action: RegisterAction,
	},
]);

function App() {
	const theme = useAppSelector(state => state.theme.theme);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setTheme(theme));
	}, [theme, dispatch]);

	return <RouterProvider router={router} />;
}

export default App;
