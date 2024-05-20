import hero1 from "@/assets/hero1.webp";
import hero2 from "@/assets/hero2.webp";
import hero3 from "@/assets/hero3.webp";
import hero4 from "@/assets/hero4.webp";

export type Slide = {
	url: string;
	desc: string;
};

export const slides: Slide[] = [
	{ url: hero1, desc: "hero1" },
	{ url: hero2, desc: "hero2" },
	{ url: hero3, desc: "hero3" },
	{ url: hero4, desc: "hero4" },
];
