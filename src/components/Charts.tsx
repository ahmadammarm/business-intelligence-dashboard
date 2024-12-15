import React from 'react'
import { PemesananChart } from './PemesananChart'
import { JenisKelaminChart } from './JenisKelaminChart'
import { JenisPakaianChart } from './JenisPakaianChart'
import { TotalPemesananChart } from './TotalPemesananChart'

const Charts = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <PemesananChart />
            <JenisKelaminChart />
            <JenisPakaianChart />
            <TotalPemesananChart />
        </div>
    )
}

export default Charts
