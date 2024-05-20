import type { Slide } from "@/utils/slides";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

function Carousel({ slides }: { slides: Slide[] }) {
	/* 	const [current, setCurrent] = useState(0);

	const handlePrev = () => {
		setCurrent(current === 0 ? slides.length - 1 : current - 1);
	};

	const handleNext = () => {
		setCurrent(current === slides.length - 1 ? 0 : current + 1);
	};

	return (
		<div className="w-[90%] h-[18rem] mx-auto my-20">
			<div className="overflow-hidden h-full w-full relative">
				<div
					className="flex transition-transform ease-in-out duration-500"
					style={{
						transform: `translateX(-${current * 100}%)`,
					}}>
					{slides.map(slide => {
						const { desc, url } = slide;
						return (
							<img
								key={url}
								src={url}
								alt={desc}
								className="rounded-xl h-full w-full object-cover"
							/>
						);
					})}
				</div>
				<button
					onClick={handlePrev}
					className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-slate-500 hover:bg-slate-400 rounded-full p-2">
					<ChevronLeft className="text-white" />
				</button>
				<button
					onClick={handleNext}
					className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-slate-500 hover:bg-slate-400 rounded-full p-2">
					<ChevronRight className="text-white" />
				</button>
			</div>
		</div>
	); */

	const [current, setCurrent] = useState(0);
	const handlePrev = () => {
		if (current === 0) {
			setCurrent(slides.length - 1);
		} else {
			setCurrent(state => state - 1);
		}
	};

	const handleNext = () => {
		if (current === slides.length - 1) setCurrent(0);
		else setCurrent(state => state + 1);
	};
	return (
		<div className="w-full  lg:mt-10 h-[24rem]  lg:w-[24rem] mx-auto my-20 ">
			<div className="overflow-hidden h-full w-full rounded-xl relative">
				<div
					className={`flex transition-transform h-full ease-in-out duration-500`}
					style={{
						transform: `translateX(-${(current * 100) / slides.length}%)`,
						width: `${slides.length * 100}% `,
					}}>
					{slides.map(slide => {
						const { desc, url } = slide;
						return (
							<div
								key={url}
								className="w-full flex-shrink-0 h-full"
								style={{ flex: `0 0 ${100 / slides.length}%` }}>
								<img
									src={url}
									alt={desc}
									className="rounded-xl h-full w-full object-cover"
								/>
							</div>
						);
					})}
				</div>
				<button
					onClick={handlePrev}
					className="absolute top-[50%] transform -translate-y-1/2 left-4 bg-slate-200 hover:bg-slate-100  dark:bg-slate-500 dark:hover:bg-slate-400 rounded-full p-1">
					<ChevronLeft />
				</button>
				<button
					onClick={handleNext}
					className="absolute top-[50%]  transform -translate-y-1/2 right-4 bg-slate-200 hover:bg-slate-100 dark:bg-slate-500  dark:hover:bg-slate-400 rounded-full p-1">
					<ChevronRight />
				</button>
			</div>
		</div>
	);
}
export default Carousel;
