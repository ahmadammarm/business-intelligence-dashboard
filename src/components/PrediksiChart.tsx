"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
const chartData = [
	{ month: "Oktober", data: 11 },
	{ month: "November", data: 10 },
	{ month: "Desember", data: 9 },
	{ month: "Januari", data: 10, predict: 10 },
	{ month: "Februari", predict: 12 },
	{ month: "Maret", predict: 9 },
];

const chartConfig = {
	data: {
		label: "Data Pemesanan",
		color: "hsl(var(--chart-3))",
	},
	predict: {
		label: "Prediksi Pemesanan",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

export function PrediksiChart() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Prediksi Pemesanan Bulan Berikutnya</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							top: 20,
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
						<ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
						<Line
							dataKey="data"
							type="natural"
							stroke="var(--color-data)"
							strokeWidth={2}
							dot={{
								fill: "var(--color-data)",
							}}
							activeDot={{
								r: 6,
							}}
						>
							<LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
						</Line>
						<Line
							dataKey="predict"
							type="natural"
							stroke="var(--color-predict)"
							strokeWidth={2}
							dot={{
								fill: "var(--color-data)",
							}}
							activeDot={{
								r: 6,
							}}
						>
							<LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
						</Line>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
