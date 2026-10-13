import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "xthxr — Developer Portfolio",
  description: "Athar Akram — developer, builder, researcher. Selected achievements, experience, and work.",
  metadataBase: new URL("https://xthxr.athar-datascience.chatgpt.site"),
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
