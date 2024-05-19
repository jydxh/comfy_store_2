import SelectedNav from "./SelectedNav";
import NavInLine from "./NavInLine";
import ToggleTheme from "./ToggleTheme";
import ShoppingCart from "./ShoppingCart";
import NavLogo from "./NavLogo";
function Navigation() {
	return (
		<div className="bg-slate-100">
			<div className="flex items-center justify-between py-4 px-8 mx-auto max-w-[1280px] ">
				<div className="md:hidden col-span-3">
					<SelectedNav />
				</div>
				<div className="md:block hidden">
					<NavLogo />
				</div>
				<div className="hidden md:block col-span-9 mx-auto">
					<NavInLine />
				</div>
				<div className="col-span-9 md:col-span-3 flex items-center justify-end gap-x-4">
					<ToggleTheme />
					<ShoppingCart />
				</div>
			</div>
		</div>
	);
}
export default Navigation;
