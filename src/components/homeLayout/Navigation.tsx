import SelectedNav from "./SelectedNav";
import NavInLine from "./NavInLine";
import ToggleTheme from "./ToggleTheme";
import ShoppingCart from "./ShoppingCart";

function Navigation() {
	return (
		<div className="bg-slate-100">
			<div className="grid grid-cols-12  py-4 px-8 mx-auto max-w-[1280px] ">
				<div className="md:hidden col-span-3">
					<SelectedNav />
				</div>
				<div className="hidden md:block col-span-9">
					<NavInLine />
				</div>
				<div className="col-span-3 flex items-center justify-end gap-x-4">
					<ToggleTheme />
					<ShoppingCart />
				</div>
			</div>
		</div>
	);
}
export default Navigation;
