import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const className =
	"bg-slate-200 p-2 rounded-full hover:bg-slate-100 dark:bg-slate-700 hover:dark:bg-slate-800 disabled:bg-gray-100 disabled:hover:bg-gray-100 dark:disabled:bg-gray-500 dark:disabled:hover:bg-gray-500  ";

function Pagination({
	current,
	totalItem,
	pageSize,
	pathName,
	searchParams,
}: {
	current: number;
	totalItem: number;
	pageSize: number;
	pathName: string;
	searchParams?: string;
}) {
	const navigate = useNavigate();

	// console.log(searchParams);
	const start = 1;
	let pageArray = Array.from({ length: pageSize }, (_, index) => start + index);

	const pageCount = Math.ceil(totalItem / pageSize);

	const handleNext = () => {
		if (current === pageCount) {
			navigate(`${pathName}?page=1&${searchParams}`);
		} else {
			navigate(`${pathName}?page=${current + 1}&${searchParams}`);
		}
	};
	const handlePrev = () => {
		if (current === 1) {
			navigate(`${pathName}?page=${pageCount}&${searchParams}`);
		} else {
			navigate(`${pathName}?page=${current - 1}&${searchParams}`);
		}
	};

	if (pageCount < 10) {
		pageArray = Array.from({ length: pageCount }, (_, index) => start + index);
	}
	/* below logic has bug need to the fix later when the page is over 10 */
	if (pageCount > 10) {
		pageArray = Array.from(
			{ length: pageSize },
			(_, index) => current - 5 + index
		);
	}
	return (
		<div className="mx-auto mt-28 mb-8 text-center flex justify-center gap-4">
			<button
				onClick={handlePrev}
				disabled={current === 1}
				className={className}>
				<ArrowLeft />
			</button>

			<ul className="flex gap-4">
				{pageArray.map(item => {
					return (
						<li key={item} className={className}>
							<Link to={`/products?page=${item}&${searchParams}`}>{item}</Link>
						</li>
					);
				})}
			</ul>

			<button
				onClick={handleNext}
				disabled={current === pageCount}
				className={className}>
				<ArrowRight />
			</button>
		</div>
	);
}
export default Pagination;
