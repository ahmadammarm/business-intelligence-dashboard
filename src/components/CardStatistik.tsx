'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Users, Clock, Award } from 'lucide-react'

const CardStatistik = () => {
    const items = [
        {
            title: 'Jenis Pakaian dengan Pemesanan Terbanyak',
            value: "Blouse Tunik",
            icon: ShoppingCart,
            color: 'bg-blue-500'
        },
        {
            title: 'Jenis Pakaian dengan Pemesanan Paling Sedikit',
            value: "Kebaya",
            icon: Users,
            color: 'bg-green-500'
        },
        {
            title: 'Bulan Paling Banyak Pemesanan',
            value: "September",
            icon: Clock,
            color: 'bg-yellow-500'
        },
        {
            title: 'Prediksi Pemesanan Bulan Depan',
            value: 100,
            icon: Award,
            color: 'bg-red-500'
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-4">
            {items.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <div className={`p-3 w-12 h-12 rounded-full ${item.color} flex items-center justify-center`}>
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
                            </div>
                        </div>
                        <p className="text-2xl font-bold mt-10">{item.value}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default CardStatistik

