import CardStatistik from "@/components/CardStatistik";
import Charts from "@/components/Charts";

export default function Page() {
    return (
        <>
        <h1 className="mt-10 text-xl font-semibold text-center">
            Dashboard Statistik Pemesanan Baju Isna Collection
        </h1>
        <CardStatistik />
        <div className="flex items-center justify-center py-4 px-4">
            <Charts />
        </div>
        </>
    )
}