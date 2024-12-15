"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ClothingData {
	no: number;
	bulan: string;
	jenisKelamin: string;
	jenisBaju: string;
	jumlah: number;
}

const clothingData: ClothingData[] = [
	{ no: 1, bulan: "Agustus", jenisKelamin: "Wanita", jenisBaju: "Bridesmaid", jumlah: 4 },
	{ no: 2, bulan: "Agustus", jenisKelamin: "Pria", jenisBaju: "Kameja", jumlah: 2 },
	{ no: 3, bulan: "Agustus", jenisKelamin: "Wanita", jenisBaju: "Jarik modern", jumlah: 3 },
	{ no: 4, bulan: "Agustus", jenisKelamin: "Wanita", jenisBaju: "Gamis muslim", jumlah: 2 },
	{ no: 5, bulan: "September", jenisKelamin: "Wanita", jenisBaju: "Kebaya", jumlah: 2 },
	{ no: 6, bulan: "September", jenisKelamin: "Wanita", jenisBaju: "Jarik", jumlah: 2 },
	{ no: 7, bulan: "September", jenisKelamin: "Pria", jenisBaju: "Kameja batik", jumlah: 2 },
	{ no: 8, bulan: "September", jenisKelamin: "Pria", jenisBaju: "Kameja polos", jumlah: 2 },
	{ no: 9, bulan: "September", jenisKelamin: "Wanita", jenisBaju: "Gamis", jumlah: 2 },
	{ no: 10, bulan: "September", jenisKelamin: "Wanita", jenisBaju: "Blouse tunik", jumlah: 2 },
	{ no: 11, bulan: "September", jenisKelamin: "Wanita", jenisBaju: "Gamis muslim", jumlah: 2 },
	{ no: 12, bulan: "Oktober", jenisKelamin: "Wanita", jenisBaju: "Dress", jumlah: 5 },
	{ no: 13, bulan: "Oktober", jenisKelamin: "Wanita", jenisBaju: "Blouse tunik", jumlah: 2 },
	{ no: 14, bulan: "Oktober", jenisKelamin: "Wanita", jenisBaju: "Gamis", jumlah: 2 },
	{ no: 15, bulan: "Oktober", jenisKelamin: "Pria", jenisBaju: "Kameja", jumlah: 1 },
	{ no: 16, bulan: "November", jenisKelamin: "Wanita", jenisBaju: "Gamis muslim", jumlah: 3 },
	{ no: 17, bulan: "November", jenisKelamin: "Wanita", jenisBaju: "Gamis muslim", jumlah: 1 },
	{ no: 18, bulan: "November", jenisKelamin: "Pria", jenisBaju: "Kameja batik", jumlah: 2 },
	{ no: 19, bulan: "November", jenisKelamin: "Wanita", jenisBaju: "Blouse tunik", jumlah: 2 },
	{ no: 20, bulan: "Desember", jenisKelamin: "Wanita", jenisBaju: "Gaun", jumlah: 2 },
	{ no: 21, bulan: "Desember", jenisKelamin: "Wanita", jenisBaju: "Blouse batik", jumlah: 2 },
	{ no: 22, bulan: "Desember", jenisKelamin: "Wanita", jenisBaju: "Gamis", jumlah: 2 },
	{ no: 23, bulan: "Desember", jenisKelamin: "Pria", jenisBaju: "Kameja batik", jumlah: 3 },
];

const ITEMS_PER_PAGE = 10;

export default function DataTable() {
	const [currentPage, setCurrentPage] = useState(1);

	// Hitung total halaman
	const totalPages = Math.ceil(clothingData.length / ITEMS_PER_PAGE);

	// Dapatkan data untuk halaman saat ini
	const currentData = clothingData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

	// Fungsi navigasi halaman
	const goToPage = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	return (
		<>
			<Table className="border border-border">
				<TableHeader>
					<TableRow className="bg-primary hover:bg-primary/80">
						<TableHead className="text-primary-foreground font-bold border border-primary-foreground">No</TableHead>
						<TableHead className="text-primary-foreground font-bold border border-primary-foreground">Bulan</TableHead>
						<TableHead className="text-primary-foreground font-bold border border-primary-foreground">
							Jenis Kelamin
						</TableHead>
						<TableHead className="text-primary-foreground font-bold border border-primary-foreground">
							Jenis Baju
						</TableHead>
						<TableHead className="text-primary-foreground font-bold border border-primary-foreground">Jumlah</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{currentData.map((item, index) => (
						<TableRow key={item.no} className={index % 2 === 0 ? "bg-secondary/50" : "bg-background"}>
							<TableCell className="border border-border">{item.no}</TableCell>
							<TableCell className="border border-border">{item.bulan}</TableCell>
							<TableCell className="border border-border">{item.jenisKelamin}</TableCell>
							<TableCell className="border border-border">{item.jenisBaju}</TableCell>
							<TableCell className="border border-border">{item.jumlah}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<div className="flex items-center justify-end mt-4 space-x-4">
				<Button
					size="icon"
					onClick={() => goToPage(currentPage - 1)}
					disabled={currentPage === 1}
					className="disabled:opacity-50"
				>
					<ChevronLeft />
				</Button>
				<span className="text-sm text-muted-foreground">
					Halaman {currentPage} dari {totalPages}
				</span>
				<Button
					size="icon"
					onClick={() => goToPage(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="disabled:opacity-50"
				>
					<ChevronRight />
				</Button>
			</div>
		</>
	);
}
