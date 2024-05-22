export default function objTosearchParams<T>(obj: T): string {
	const searchParams = new URLSearchParams();
	for (const key in obj) {
		if (obj[key]) {
			searchParams.append(key, obj[key] as string);
		}
	}
	return searchParams.toString();
}
