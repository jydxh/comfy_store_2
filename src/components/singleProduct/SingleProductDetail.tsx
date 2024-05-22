import { useLoaderData } from "react-router-dom";
import { type SingleProductResponse } from "@/utils/types";
import formateToDollars from "@/utils/formateToDollars";
function SingleProductDetail() {
	const data = useLoaderData() as SingleProductResponse;
	console.log(data);
	const { image, title, company, price, description, colors } =
		data.data.attributes;
	return (
		<div className="my-8">
			<div>
				<img src={image} alt={title} />
			</div>
			<div>
				<p>{title}</p>
				<p>{company}</p>
				<p>{formateToDollars(price)}</p>
				<p>{description}</p>
				<div>
					<p>Color</p>
					<button>color1</button>
					<button>color1</button>
				</div>
				<div>
					<label>Amount</label>
					<select name="amount" id="amount">
						<option value="1">1</option>
						<option value="2">2</option>
					</select>
				</div>
			</div>
		</div>
	);
}
export default SingleProductDetail;
