"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DataTable from "@/components/DataTable";

interface FileData {
	name: string;
	size: number;
	type: string;
}

export default function Page() {
	const [files, setFiles] = useState<FileData[]>([]);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const fileList = Array.from(e.target.files);
			const newFiles = fileList.map((file) => ({
				name: file.name,
				size: file.size,
				type: file.type,
			}));
			setFiles(newFiles);
		}
	};

	return (
		<div className="px-12 pt-6 pb-12">
			<div className="space-y-2">
				<h1 className="text-3xl font-bold">Data Pemesanan</h1>
				<p className="text-gray-400 font-medium">Daftar data pemesanan Isna Collection yang telah diupload</p>
			</div>
			<div className="grid grid-cols-4 gap-10 mt-10">
				<div className="col-span-3">
					<DataTable />
				</div>
				<div className="mb-4 w-full">
					<h1 className="text-xl font-semibold mb-4">Upload Data</h1>
					<Label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-2">
						Pilih file untuk diunggah
					</Label>
					<Input
						id="file-upload"
						type="file"
						onChange={handleFileChange}
						accept=".pdf,.doc,.docx,.txt"
						multiple
						className="w-full"
					/>
					<p className="mt-1 text-sm text-gray-500 italic">
						Mohon upload file berformat .csv dengan ketentuan kolom Bulan, Jenis Kelamin, Jenis Baju, dan Jumlah.
					</p>
				</div>
			</div>
		</div>
	);
}
