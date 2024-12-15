import CardStatistik from "@/components/CardStatistik";
import Charts from "@/components/Charts";
import { DatePickerWithRange } from "@/components/DateRangePicker";

export default function Page() {
	return (
		<>
			<div className="px-12 pt-6 pb-12">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold">Dashboard</h1>
					<p className="text-gray-400 font-medium">Statistik Pemesanan Isna Collection</p>
				</div>
				<div className="mt-10 space-y-10">
					<CardStatistik />
					<div className="space-y-4">
						<div className="space-y-2">
							<p className="font-semibold">Filter Berdasarkan Bulan & Tahun</p>
							<DatePickerWithRange />
						</div>
						<Charts />
					</div>
				</div>
			</div>
		</>
	);
}
