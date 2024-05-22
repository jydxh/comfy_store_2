export default function formateToDollars(price: string | number): string {
	return `$${Number(price) / 100}`;
}
