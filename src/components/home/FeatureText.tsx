import { Link } from "react-router-dom";

function FeatureText() {
	return (
		<div className="pt-4 text-center ">
			<h2 className="font-bold text-6xl">
				We're changing the way people shop.
			</h2>
			<article className="mt-8 text-xl text-start w-[70%] mx-auto">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius officiis
				ratione, dolor dolorem magni, error veniam sed earum optio impedit quis
				labore sit laborum eum.
			</article>
			<button className="mt-6 bg-blue-400 px-6 py-4 rounded-xl hover:bg-blue-300 ">
				<Link to="/products"> Our Product</Link>
			</button>
		</div>
	);
}
export default FeatureText;
