"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { jenis: "Bridesmaid", jumlah: 4,},
  { jenis: "Kameja", jumlah: 3, },
  { jenis: "Jarik Modern", jumlah: 3, },
  { jenis: "Gamis Muslim", jumlah: 6, },
  { jenis: "Kebaya", jumlah: 2, },
  { jenis: "Jarik", jumlah: 2, },
  { jenis: "Kameja batik", jumlah: 7, },
  { jenis: "Kameja polos", jumlah: 2, },
  { jenis: "Gaun", jumlah: 3, },
  { jenis: "Blouse tunik", jumlah: 8, },
  { jenis: "Dress", jumlah: 5, },
  { jenis: "Gamis", jumlah: 3, },
  { jenis: "Blouse brokat", jumlah: 2, },
]

const chartConfig = {
  jumlah: {
    label: "jumlah",
    color: "hsl(var(--chart-1))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

export function ChartCustomLabel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tren Pemesanan per Jenis Pakaian</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
                right: 16,
              }}
              barSize={100}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="jenis"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="jumlah" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="jumlah"
              layout="vertical"
              fill="var(--color-jumlah)"
              radius={4}
            >
              <LabelList
                dataKey="jenis"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="jumlah"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
