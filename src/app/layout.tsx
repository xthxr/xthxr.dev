import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "xthxr.dev | Athar Akram",
  description: "Engineering Student, Developer, and Creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn("font-body antialiased", inter.variable, spaceGrotesk.variable)}>
        <Header />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
