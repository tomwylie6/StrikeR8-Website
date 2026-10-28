import type { Metadata } from "next";
import { Inter, Saira_Condensed } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const saira = Saira_Condensed({ weight: ["600", "700"], subsets: ["latin"], variable: "--font-saira" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: site.name,
  description: site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${saira.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
