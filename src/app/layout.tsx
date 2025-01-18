import type { Metadata } from "next";
import { IBM_Plex_Sans_Condensed, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/layouts/Footer/Footer";

const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  variable: "--font-ibm-plex-sans-condensed",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"]
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "600", "700"],
  subsets: ["latin"],
  style: ["normal"]
});

export const metadata: Metadata = {
  title: "Meet Magento France 2025",
  description: "Meet Magento est une conférence annuelle axée sur la plateforme de e-commerce Magento. Elle rassemble des professionnels de Magento, des développeurs, des commerçants et des leaders du secteur de tout le pays pour discuter des dernières tendances, innovations et meilleures pratiques en matière de e-commerce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${ibmPlexSansCondensed.variable} ${montserrat.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
