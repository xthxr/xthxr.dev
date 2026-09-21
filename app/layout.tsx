import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CODEFIELD — Athar Akram",
  description: "Software, systems and experiments by Athar Akram, rendered as a computational field.",
  metadataBase: new URL("https://athar-codefield.vivid-coot-5404.chatgpt.site"),
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
