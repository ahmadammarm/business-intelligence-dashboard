"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

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
  { jenis: "bridesmaid", jumlah: 4, fill: "var(--color-bridesmaid)" },
  { jenis: "kameja", jumlah: 3, fill: "var(--color-kameja)" },
  { jenis: "jarikModern", jumlah: 3, fill: "var(--color-jarikModern)" },
  { jenis: "gamis", jumlah: 6, fill: "var(--color-bridesmaid)" },
  { jenis: "kebaya", jumlah: 2, fill: "var(--color-kebaya)" },
  { jenis: "jarik", jumlah: 2, fill: "var(--color-jarik)" },
  { jenis: "kamejaBatik", jumlah: 7, fill: "var(--color-bridesmaid)" },
  { jenis: "kamejaPolos", jumlah: 2, fill: "var(--color-kameja)" },
  { jenis: "gaun", jumlah: 3, fill: "var(--color-jarikModern)" },
  { jenis: "blouseTunik", jumlah: 8, fill: "var(--color-kebaya)" },
  { jenis: "dress", jumlah: 5, fill: "var(--color-jarik)" },
  { jenis: "gamis", jumlah: 3, fill: "var(--color-bridesmaid)" },
  { jenis: "blouseBrokat", jumlah: 2, fill: "var(--color-kameja)" },
]

const chartConfig = {
  jumlah: {
    label: "jumlah",
  },
  bridesmaid: {
    label: "bridesmaid",
    color: "hsl(var(--chart-1))",
  },
  kameja: {
    label: "kameja",
    color: "hsl(var(--chart-2))",
  },
  jarikModern: {
    label: "jarikModern",
    color: "hsl(var(--chart-3))",
  },
  kebaya: {
    label: "kebaya",
    color: "hsl(var(--chart-4))",
  },
  jarik: {
    label: "jarik",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function TotalPemesananChart() {
  const totaljumlah = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.jumlah, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total Jumlah Pemesanan</CardTitle>
        <CardDescription>Agustus - Desember 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="jumlah"
              nameKey="jenis"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totaljumlah.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          pemesanan
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
