export type ProductsRespone = {
	data: Product[];
	meta: Meta;
};

export type Meta = {
	pagination: Pagination;
};

export type Pagination = {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
};

export type Product = {
	id: string;
	attributes: {
		title: string;
		company: string;
		description: string;
		featured: boolean;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		category: string;
		image: string;
		price: string;
		shipping: boolean;
		colors: string[];
	};
};
