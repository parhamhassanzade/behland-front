import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";



export const metadata = {
  title: "Behland",
  description: "Behland-teaching platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#151515]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
