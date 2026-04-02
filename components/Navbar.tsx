'use client'

import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { useSidebar } from "@/components/SidebarContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { isOpen, toggle } = useSidebar();
  const { user } = useUser();

  return (
    <nav className="navbar">
      <div className="flex items-center gap-4">
        {user && (
          <button
            onClick={toggle}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        )}
        <Link href="/">
          <div className="flex items-center gap-2.5 cursor-pointer">
            <span className="text-2xl text-muted-foreground text-purple-600">Learnova AI</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 rounded-2xl border border-border px-3 py-1.5 text-xs text-muted-foreground">
          <span>Credits</span>
          <span className="text-foreground font-medium">—</span>
          <Link href="/subscription" className="text-primary hover:underline">Upgrade</Link>
        </div>
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar
