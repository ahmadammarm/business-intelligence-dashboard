import React from 'react'
import { ChartPie } from './ui/chart-pie'
import { ChartLabel } from './ui/chart-label'
import { ChartCustomLabel } from './ui/chart-custom-label'
import { DataTable } from './DataTable'

const Charts = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-32">
            <ChartLabel />
            <ChartPie />
            <ChartCustomLabel />
            <DataTable />
        </div>
    )
}

export default Charts
