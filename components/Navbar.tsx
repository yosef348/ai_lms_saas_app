import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <span className="text-2xl text-muted-foreground text-purple-600">Converso</span>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <NavItems />
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
