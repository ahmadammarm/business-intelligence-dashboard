"use client";

import { Home, Inbox } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
	{
		title: "Dashboard",
		url: "/",
		icon: Home,
	},
	{
		title: "Data Pemesanan",
		url: "/data-pemesanan",
		icon: Inbox,
	},
];

export function AppSidebar() {
	const pathname = usePathname();

	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem
									key={item.title}
									className={pathname === item.url ? "rounded-md bg-gray-300 dark:bg-black" : ""}
								>
									<SidebarMenuButton asChild>
										<Link href={item.url}>
											<item.icon />
											<span className="text-black dark:text-white">{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
