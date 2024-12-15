"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
	{ month: "Agustus", jumlah: 10 },
	{ month: "September", jumlah: 12 },
	{ month: "Oktober", jumlah: 11 },
	{ month: "November", jumlah: 10 },
	{ month: "Desember", jumlah: 9 },
];

const chartConfig = {
	jumlah: {
		label: "Jumlah",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;

export function PemesananChart() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Tren Pemesanan Per Bulan</CardTitle>
			</CardHeader>
			<CardContent className="mt-5">
				<ChartContainer config={chartConfig}>
					<BarChart
						accessibilityLayer
						data={chartData}
						margin={{
							top: 20,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
						<Bar dataKey="jumlah" fill="var(--color-jumlah)" radius={8}>
							<LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
