import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import StickyPhone from "@/components/StickyPhone";
import LenisProvider from "@/components/LenisProvider";
import PropertyBackdrop from "@/components/PropertyBackdrop";
import PageTransition from "@/components/PageTransition";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    template: "Les Barrys | %s",
    default: "Les Barrys",
  },
  description:
    "Agence immobilière de prestige dans le Golfe de Saint-Tropez depuis plus de 20 ans. Villas de luxe à vendre et en location saisonnière à Gassin, Ramatuelle, Saint-Tropez.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${manrope.variable} bg-[#F7F3EE] text-[#1F1D1A]`}
      >
        <LenisProvider>
          <CustomCursor />
          <PropertyBackdrop />
          <Nav />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
          <StickyPhone />
        </LenisProvider>
      </body>
    </html>
  );
}
