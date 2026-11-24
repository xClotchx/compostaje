import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Referencias | Compostaje" };

const refs = [
  "Bernal, M. P., Alburquerque, J. A. y Moral, R. (2009). Composting of animal manures and chemical criteria for compost maturity assessment. A review. Bioresource Technology, 100(22), 5444–5453.",
  "Cooperband, L. (2002). The art and science of composting: A resource for farmers and compost producers. University of Wisconsin–Madison, Center for Integrated Agricultural Systems.",
  "Epstein, E. (2011). Industrial composting: Environmental engineering and facilities management. CRC Press.",
  "Haug, R. T. (1993). The practical handbook of compost engineering. Lewis Publishers.",
  "Román, P., Martínez, M. M. y Pantoja, A. (2013). Manual de compostaje del agricultor: Experiencias en América Latina. FAO, Oficina Regional para América Latina y el Caribe.",
  "US Department of Agriculture y US Composting Council (2002). Test methods for the examination of composting and compost (TMECC).",
];

export default function Referencias() {
  return (
    <>
      <PageHeader titulo="Referencias" resumen="Bibliografía base del proyecto." />
      <section className="bloque">
        <div className="contenedor">
          <ul className="space-y-5">
            {refs.map((r) => (
              <li key={r} className="max-w-3xl border-l-4 border-hoja pl-4 leading-relaxed">{r}</li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-tierra/70">Verifica los datos de cada referencia (año, páginas, DOI) antes de entregar.</p>
        </div>
      </section>
    </>
  );
}
