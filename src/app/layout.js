import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";



export const metadata = {
  title: "Behland",
  description: "Behland-teaching platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#1a1a1a]">
        <Header />
        {children}
      </body>
    </html>
  );
}
