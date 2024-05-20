import FeatureText from "@/components/home/FeatureText";
import FeatureProducts from "@/components/home/FeatureProducts";
import Carousel from "@/components/ui/Carousel";
import { slides } from "@/utils/slides";
import TitleSeperate from "@/components/ui/TitleSeperate";
function Home() {
	return (
		<main className="max-w-[1280px] mx-auto p-10 dark:text-white">
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
				<div className="lg:col-span-1">
					<FeatureText />
				</div>
				<div className="lg:col-span-1">
					<Carousel slides={slides} />
				</div>
			</section>
			<TitleSeperate title="Featured Produces" />
			<section>
				<FeatureProducts />
			</section>
		</main>
	);
}
export default Home;
