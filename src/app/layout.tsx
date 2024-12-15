import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
	display: "swap",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Business Intelligence Dashboard",
	description: "Dashboard Statistik Pemesanan Baju Isna Collection",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
			<body className="antialiased">
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
					<SidebarProvider>
						<AppSidebar />
						<main>
							<SidebarTrigger />
							{children}
						</main>
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
