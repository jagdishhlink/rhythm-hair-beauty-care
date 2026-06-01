import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const headingFont = Playfair_Display({ subsets: ["latin"], variable: "--font-heading", weight: ["600"] });
const bodyFont = Jost({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Rhythm Hair & Beauty Care - Premium Beauty Parlour in Gota, Ahmedabad",
  description: "Expert hair styling, color, facials & beauty treatments at Rhythm Hair & Beauty Care in ICB Flora, Gota. Book your appointment today!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={headingFont.variable + " " + bodyFont.variable}>
      <body>{children}</body>
    </html>
  );
}
