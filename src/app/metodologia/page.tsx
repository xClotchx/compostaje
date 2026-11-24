import type { Metadata } from "next";
import Divisor from "@/components/Divisor";
import FotoPlaceholder from "@/components/FotoPlaceholder";
import MapaEmbed from "@/components/MapaEmbed";
import PageHeader from "@/components/PageHeader";
import TarjetaDescarga from "@/components/TarjetaDescarga";

export const metadata: Metadata = { title: "Metodología | Compostaje" };

const pasos = [
  { t: "Caracterización de materiales", d: "Se clasifican los residuos en verdes (ricos en nitrógeno) y marrones (ricos en carbono) y se estima su C/N y humedad." },
  { t: "Formulación de la mezcla", d: "Se mezclan en proporción aproximada 1 parte de verdes por 2–3 de marrones en volumen, buscando C/N de 25–35:1." },
  { t: "Montaje de la pila", d: "Pila de 1 m × 1 m × 1 m sobre suelo nivelado, en capas alternadas y con una base gruesa de ramas para aireación." },
  { t: "Monitoreo", d: "Temperatura a 30 cm de profundidad (diaria las dos primeras semanas, luego semanal), humedad por prueba del puño y pH en extracto 1:5." },
  { t: "Volteo y riego", d: "Se voltea cuando la temperatura supera 65 °C o cae de forma sostenida, y se riega si la humedad baja del 50 %." },
  { t: "Cribado y evaluación", d: "Al finalizar se criba a 10 mm y se valora madurez: olor a tierra, color oscuro, temperatura estable y prueba de germinación." },
];

export default function Metodologia() {
  return (
    <>
      <PageHeader titulo="Metodología" resumen="Diseño experimental, montaje de la pila y variables de seguimiento." />

      <section className="bloque">
        <div className="contenedor grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Procedimiento</h2>
            <ol className="mt-6 space-y-5">
              {pasos.map((p, i) => (
                <li key={p.t} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bosque text-sm font-semibold text-white">{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{p.t}</h3>
                    <p className="mt-1">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-6">
            {/* PLACEHOLDERS: public/images/foto-2.jpg y public/images/foto-3.jpg */}
            <FotoPlaceholder src="/images/foto-2.jpg" alt="Montaje de la pila por capas" pie="Montaje por capas." />
            <FotoPlaceholder src="/images/foto-3.jpg" alt="Medición de temperatura" pie="Medición de temperatura con termómetro de sonda." />
          </div>
        </div>
      </section>

      <Divisor />

      <section className="bloque">
        <div className="contenedor">
          <h2 className="text-3xl font-semibold">Área de estudio</h2>
          <p className="parrafo mt-3 mb-6">Ubicación del sitio de compostaje y puntos de muestreo.</p>
          {/* Para pegar la URL del mapa (Google My Maps o ArcGIS), edita src/components/MapaEmbed.tsx */}
          <MapaEmbed />
        </div>
      </section>

      <Divisor />

     
    </>
  );
}
