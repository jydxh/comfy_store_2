export default function formateToDollars(price: string): string {
	return `$${Number(price) / 100}`;
}
