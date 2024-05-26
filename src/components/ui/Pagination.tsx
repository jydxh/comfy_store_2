import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const className =
	"bg-slate-200 p-2 rounded-full hover:bg-slate-100 dark:bg-slate-700 hover:dark:bg-slate-800 disabled:bg-gray-100 disabled:hover:bg-gray-100 dark:disabled:bg-gray-500 dark:disabled:hover:bg-gray-500  ";

const currentPageClass = " bg-blue-400";

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

	let start = 1;
	let pageArray = Array.from({ length: pageSize }, (_, index) => start + index);

	const pageCount = Math.ceil(totalItem / pageSize);

	const handleClick = (item: number) => {
		if (current === item) return;
		navigate(`${pathName}?page=${item}&${searchParams}`);
	};

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

	if (pageCount <= 10) {
		pageArray = Array.from({ length: pageCount }, (_, index) => start + index);
	}

	if (pageCount > 10) {
		if (current < 10) {
			pageArray = Array.from({ length: pageSize }, (_, index) => start + index);
		} else if (current % pageSize === 0) {
			start = (Math.floor(current / pageSize) - 1) * pageSize + 1;
			pageArray = Array.from({ length: pageSize }, (_, index) => start + index);
		} else if (
			Math.floor(current / pageSize) === Math.floor(pageCount / pageSize)
		) {
			start = Math.floor(current / pageSize) * pageSize + 1;
			const length = pageCount % pageSize;
			pageArray = Array.from({ length }, (_, index) => start + index);
		} else {
			start = Math.floor(current / pageSize) * pageSize + 1;
			pageArray = Array.from({ length: pageSize }, (_, index) => start + index);
		}
	}
	return (
		<div className="mx-auto mt-28 mb-8 text-center flex justify-center items-center gap-4">
			{current > 10 && (
				<Link
					className="hover:underline text-blue-600 capitalize"
					to={`${pathName}?page=1&${searchParams}`}>
					1
				</Link>
			)}
			<button
				onClick={handlePrev}
				disabled={current === 1}
				className={className}>
				<ArrowLeft />
			</button>

			<ul className="flex">
				{pageArray.map(item => {
					return (
						<li key={item}>
							<button
								className={` py-[0.5rem] px-[1rem] rounded-full hover:bg-slate-200 dark:hover:bg-slate-600  + ${
									current === item && currentPageClass
								}`}
								onClick={() => handleClick(item)}
								disabled={item === current}>
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

			{pageCount > 10 && current !== pageCount && (
				<Link
					className="hover:underline text-blue-600 capitalize"
					to={`${pathName}?page=${pageCount}&${searchParams}`}>
					{pageCount}
				</Link>
			)}
		</div>
	);
}
export default Pagination;
