import { ArrowLeft, ArrowRight } from "lucide-react";

const className =
	"bg-slate-200 p-2 rounded-full hover:bg-slate-100 dark:bg-slate-700 hover:dark:bg-slate-800";

function Pagination({
	current,
	totalItem,
	pageSize,
}: {
	current: number;
	totalItem: number;
	pageSize: number;
}) {
	const handleClick = (item: number) => {
		console.log(item);
	};
	const handleNext = () => {};
	const handlePrev = () => {};
	const start = 1;
	let pageArray = Array.from({ length: pageSize }, (_, index) => start + index);

	const pageCount = Math.ceil(totalItem / pageSize);
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
		<div className="mx-auto mt-28 text-center flex justify-center gap-4">
			<button
				onClick={handlePrev}
				disabled={current === 1}
				className={className}>
				<ArrowLeft />
			</button>
			<ul className="flex gap-4">
				{pageArray.map(item => {
					return (
						<li key={item}>
							<button onClick={() => handleClick(item)} className={className}>
								{item}
							</button>
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
