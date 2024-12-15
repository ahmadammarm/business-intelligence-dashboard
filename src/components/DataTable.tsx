import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"

const invoices = [
    {
        bulan: "Agustus",
        jenisKelamin: "Wanita",
        jenisBaju: "Bridesmaid",
        jumlah: "4",
    },
    {
        bulan: "Agustus",
        jenisKelamin: "Pria",
        jenisBaju: "Kameja",
        jumlah: "2",
    },
    {
        bulan: "Agustus",
        jenisKelamin: "Wanita",
        jenisBaju: "Jarik modern",
        jumlah: "3",
    },
    {
        bulan: "Agustus",
        jenisKelamin: "Wanita",
        jenisBaju: "Gamis muslim",
        jumlah: "1",
    },
    {
        bulan: "September",
        jenisKelamin: "Wanita",
        jenisBaju: "Kebaya",
        jumlah: "2",
    },
    {
        bulan: "September",
        jenisKelamin: "Wanita",
        jenisBaju: "Jarik",
        jumlah: "2",
    },
    {
        bulan: "September",
        jenisKelamin: "Pria",
        jenisBaju: "Kameja batik",
        jumlah: "2",
    },
]

export function DataTable() {
    return (
        <div>
            <h1 className="mb-3 font-semibold">
                Data Penjualan Isna Collection
            </h1>
            <Table>
                <TableCaption>
                    <Link href="/input">
                        Lihat semua data
                    </Link>
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Bulan</TableHead>
                        <TableHead>Jenis Kelamin</TableHead>
                        <TableHead>Jenis Baju</TableHead>
                        <TableHead className="text-right">Jumlah</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.bulan}>
                            <TableCell className="font-medium">{invoice.bulan}</TableCell>
                            <TableCell>{invoice.jenisKelamin}</TableCell>
                            <TableCell>{invoice.jumlah}</TableCell>
                            <TableCell className="text-right">{invoice.jenisBaju}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableBody>
                    <TableRow>
                        <TableCell>...</TableCell>
                        <TableCell>...</TableCell>
                        <TableCell>...</TableCell>
                        <TableCell className="text-right">...</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}
