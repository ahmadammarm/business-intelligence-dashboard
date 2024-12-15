"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface ClothingData {
  no: number
  bulan: string
  jenisKelamin: string
  jenisBaju: string
  jumlah: number
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
]

export default function DataTable() {
  return (
    <div className="container mx-auto p-4">
      <Table className="border border-border">
        <TableHeader>
          <TableRow className="bg-primary">
            <TableHead className="text-primary-foreground font-bold border border-primary-foreground">No</TableHead>
            <TableHead className="text-primary-foreground font-bold border border-primary-foreground">Bulan</TableHead>
            <TableHead className="text-primary-foreground font-bold border border-primary-foreground">Jenis Kelamin</TableHead>
            <TableHead className="text-primary-foreground font-bold border border-primary-foreground">Jenis Baju</TableHead>
            <TableHead className="text-primary-foreground font-bold border border-primary-foreground">Jumlah</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clothingData.map((item, index) => (
            <TableRow
              key={item.no}
              className={index % 2 === 0 ? "bg-secondary/50" : "bg-background"}
            >
              <TableCell className="border border-border">{item.no}</TableCell>
              <TableCell className="border border-border">{item.bulan}</TableCell>
              <TableCell className="border border-border">{item.jenisKelamin}</TableCell>
              <TableCell className="border border-border">{item.jenisBaju}</TableCell>
              <TableCell className="border border-border">{item.jumlah}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

