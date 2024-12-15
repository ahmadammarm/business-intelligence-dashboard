"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

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
    { browser: "pria", jumlah: 12, fill: "var(--color-pria)" },
    { browser: "wanita", jumlah: 40, fill: "var(--color-wanita)" },
]

const chartConfig = {
    jumlah: {
        label: "Jumlah",
    },
    pria: {
        label: "Pria",
        color: "hsl(var(--chart-1))",
    },
    wanita: {
        label: "Wanita",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function ChartPie() {
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Pemesanan Berdasarkan Jenis Kelamin</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
                >
                    <PieChart>
                        <ChartTooltip
                            content={<ChartTooltipContent nameKey="jumlah" hideLabel />}
                        />
                        <Pie data={chartData} dataKey="jumlah">
                            <LabelList
                                dataKey="browser"
                                className="fill-background"
                                stroke="none"
                                fontSize={12}
                                formatter={(value: keyof typeof chartConfig) =>
                                    chartConfig[value]?.label
                                }
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                    <p className="mb-3">
                        Pria : <span className="font-bold">12</span>
                    </p>
                    <p>
                        Wanita : <span className="font-bold">40</span>
                    </p>
                </div>
            </CardFooter>
        </Card>
    )
}
