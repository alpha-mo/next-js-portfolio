import "@/style/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type DocMode } from "@/utils/types";
import Navbar from "@/components/nav/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Max Ojail",
    template: "%s | Max Ojail",
  },
  description: "Portfolio for potential jobbs",
  keywords: ["Max Ojail", "fullstack developer", "java developer"],
};

let mode: DocMode = "dark";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme={mode}>
      <body className={`${inter.className} bg-base-300 grid grid-rows-[72px,1fr,24px] min-h-screen`}>
        <Navbar />
        {children}
        <footer className="bg-base-100 border-t border-divider-100 p-1">
          <p className="text-content-200 text-xs leading-none text-right">©M. Ojail 2023</p>
        </footer>
      </body>
    </html>
  );
}
