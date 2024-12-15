import CardStatistik from "@/components/CardStatistik";
import Charts from "@/components/Charts";

export default function Page() {
	return (
		<>
			<div className="px-12 pt-6 pb-12">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold">Dashboard</h1>
					<p className="text-gray-400 font-medium">Statistik Pemesanan Isna Collection</p>
				</div>
				<CardStatistik />
				<Charts />
			</div>
		</>
	);
}
