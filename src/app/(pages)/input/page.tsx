"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import DataTable from '@/components/DataTable'

interface FileData {
  name: string
  size: number
  type: string
}

export default function Page() {
  const [files, setFiles] = useState<FileData[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files)
      const newFiles = fileList.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type
      }))
      setFiles(newFiles)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload File</h1>
      <div className="mb-4 w-full">
        <Label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-2">
          Pilih file untuk diunggah
        </Label>
        <Input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.txt"
          multiple
          className="w-[60rem]"
        />
        <p className="mt-1 text-sm text-gray-500 italic">
          Mohon upload file berformat .csv dengan ketentuan kolom Bulan, Jenis Kelamin, Jenis Baju, dan Jumlah.
        </p>
      </div>
      <DataTable />
    </div>
  )
}

