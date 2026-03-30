import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import clerkAppearance from "@/components/clerkAppearance";
import { auth } from "@clerk/nextjs/server";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learnova AI",
  description: "Real-time AI Teaching Platform",
  icons: {
    icon: "/images/logo.svg",
    apple: "/images/logo.svg",
    other: {
      rel: "shortcut icon",
      url: "/images/logo.svg",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();
  const isAuthed = !!userId;
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased dark bg-[var(--background)] text-[var(--foreground)]`}>
        <ClerkProvider appearance={clerkAppearance}>
          <Navbar />
          {isAuthed ? (
            <div className="flex w-full max-w-[1400px] mx-auto">
              <Sidebar />
              <div className="flex-1 min-w-0">{children}</div>
            </div>
          ) : (
            <div className="w-full max-w-[1400px] mx-auto">{children}</div>
          )}
        </ClerkProvider>
      </body>
    </html>
  );
}
