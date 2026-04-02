"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import { useSidebar } from "@/components/SidebarContext";
import { SheetContent, SheetTitle } from "@/components/ui/sheet";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const { setIsOpen } = useSidebar();

  return (
    <div className="flex w-full max-w-[1400px] mx-auto relative">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex sticky top-[72px] h-[calc(100dvh-72px)] w-64 shrink-0 border-r border-sidebar-border bg-sidebar/80 backdrop-blur text-sidebar-foreground">
        <Sidebar />
      </aside>

      {/* Mobile sheet content */}
      <SheetContent
        side="left"
        className="w-64 p-0 bg-[#0B0F19] border-r border-[#1F2937]"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <Sidebar onClose={() => setIsOpen(false)} />
      </SheetContent>

      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
