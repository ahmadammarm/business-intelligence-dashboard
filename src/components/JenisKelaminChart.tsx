"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "Agustus", pria: 1, wanita: 3 },
  { month: "September", pria: 2, wanita: 5 },
  { month: "Oktober", pria: 1, wanita: 3 },
  { month: "November", pria: 1, wanita: 3 },
  { month: "Desember", pria: 1, wanita: 3 },
]

const chartConfig = {
  pria: {
    label: "pria",
    color: "hsl(var(--chart-1))",
  },
  wanita: {
    label: "wanita",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function JenisKelaminChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tren Pemesanan Berdasarkan Jenis Kelamin</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="wanita"
              type="natural"
              fill="var(--color-wanita)"
              fillOpacity={0.4}
              stroke="var(--color-wanita)"
              stackId="a"
            />
            <Area
              dataKey="pria"
              type="natural"
              fill="var(--color-pria)"
              fillOpacity={0.4}
              stroke="var(--color-pria)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
