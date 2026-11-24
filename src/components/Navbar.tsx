"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const enlaces = [
  { href: "/", texto: "Introducción" },
  { href: "/antecedentes", texto: "Antecedentes" },
  { href: "/metodologia", texto: "Metodología" },
  { href: "/cronograma", texto: "Cronograma" },
  { href: "/resultados", texto: "Resultados" },
  { href: "/referencias", texto: "Referencias" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hoja-suave bg-musgo/95 backdrop-blur">
      <nav className="contenedor flex h-16 items-center justify-between" aria-label="Principal">
        <Link href="/" className="font-display text-xl font-semibold text-bosque">
          Compost<span className="text-hoja">a</span>je
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-bosque md:hidden"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          onClick={() => setAbierto(!abierto)}
        >
          <span className="sr-only">{abierto ? "Cerrar menú" : "Abrir menú"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {abierto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <ul
          id="menu-principal"
          className={`${abierto ? "flex" : "hidden"} absolute inset-x-0 top-16 flex-col gap-1 border-b border-hoja-suave bg-musgo p-4 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0`}
        >
          {enlaces.map((e) => {
            const activo = pathname === e.href;
            return (
              <li key={e.href}>
                <Link
                  href={e.href}
                  onClick={() => setAbierto(false)}
                  aria-current={activo ? "page" : undefined}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    activo ? "bg-bosque text-white" : "text-tierra hover:bg-hoja-suave"
                  }`}
                >
                  {e.texto}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
