import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const sans = Public_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Compostaje: del residuo al suelo vivo",
  description:
    "Proyecto sobre compostaje: antecedentes, metodología, cronograma, resultados y referencias.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <footer className="bg-bosque py-8 text-center text-sm text-hoja-suave">
          Proyecto de compostaje · {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
