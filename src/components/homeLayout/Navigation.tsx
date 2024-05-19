import SelectedNav from "./SelectedNav";
import NavInLine from "./NavInLine";
import ToggleTheme from "./ToggleTheme";
import ShopCart from "./ShopCart";
import NavLogo from "./NavLogo";
function Navigation() {
	return (
		<div className="bg-slate-100 dark:bg-slate-700">
			<div className="flex items-center justify-between py-4 px-8 mx-auto max-w-[1280px] ">
				<div className="md:hidden ">
					<SelectedNav />
				</div>
				<div className="md:block hidden">
					<NavLogo />
				</div>
				<div className="hidden md:block col-span-9 mx-auto">
					<NavInLine />
				</div>
				<div className="flex items-center justify-end gap-x-4">
					<ToggleTheme />
					<ShopCart />
				</div>
			</div>
		</div>
	);
}
export default Navigation;
