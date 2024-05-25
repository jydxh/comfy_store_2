function TitleSeperate({ title }: { title: string }) {
	return (
		<div>
			<h3 className="text-2xl font-semibold mb-6 capitalize">{title}</h3>
			<hr />
		</div>
	);
}
export default TitleSeperate;
