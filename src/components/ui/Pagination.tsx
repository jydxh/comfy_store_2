import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import objTosearchParams from "@/utils/objTosearchParams";

const className =
	"bg-slate-200 p-2 rounded-full hover:bg-slate-100 dark:bg-slate-700 hover:dark:bg-slate-800 disabled:bg-gray-100 disabled:hover:bg-gray-100 dark:disabled:bg-gray-500 dark:disabled:hover:bg-gray-500  ";

const currentPageClass = " bg-blue-400";

function Pagination({
	current,
	totalItem,
	pageSize,
}: {
	current: number;
	totalItem: number;
	pageSize: number;
}) {
	const navigate = useNavigate();
	const { pathname, search } = useLocation();

	console.log("pathname:", pathname, "search:", search);
	const searchParamsObj = Object.fromEntries(
		new URLSearchParams(search).entries()
	);

	console.log(searchParamsObj);
	let start = 1;
	let pageArray = Array.from({ length: pageSize }, (_, index) => start + index);

	const pageCount = Math.ceil(totalItem / pageSize);

	const navigateHeler = () => {
		const serach = objTosearchParams(searchParamsObj);
		navigate(`${pathname}?${serach}`);
	};

	const handleClick = (item: number) => {
		if (current === item) return;
		searchParamsObj["page"] = item.toString();
		navigateHeler();
	};

	const toFirstpage = () => {
		searchParamsObj["page"] = "1";
		navigateHeler();
	};
	const toLastPage = () => {
		searchParamsObj["page"] = pageCount.toString();
		navigateHeler();
	};

	const handleNext = () => {
		if (current === pageCount) {
			toFirstpage();
		} else {
			searchParamsObj["page"] = (current + 1).toString();
			navigateHeler();
		}
	};
	const handlePrev = () => {
		if (current === 1) {
			toLastPage();
		} else {
			searchParamsObj["page"] = (current - 1).toString();
			navigateHeler();
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
				<button
					className="hover:underline text-blue-600 capitalize"
					onClick={toFirstpage}>
					1
				</button>
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
				<button
					className="hover:underline text-blue-600 capitalize"
					onClick={toLastPage}>
					{pageCount}
				</button>
			)}
		</div>
	);
}
export default Pagination;
