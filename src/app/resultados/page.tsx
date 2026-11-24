import type { Metadata } from "next";
import Divisor from "@/components/Divisor";
import FotoPlaceholder from "@/components/FotoPlaceholder";
import MapaEmbed from "@/components/MapaEmbed";
import PageHeader from "@/components/PageHeader";
import VideoEmbed from "@/components/VideoEmbed";

export const metadata: Metadata = { title: "Resultados | Compostaje" };

const esperados = [
  ["Temperatura máxima", "55–70 °C entre la semana 1 y 3", "≥ 55 °C durante 3 días o más indica higienización"],
  ["Reducción de volumen", "40–60 %", "Pérdida de agua y de carbono como CO₂"],
  ["Relación C/N final", "≤ 20:1 (ideal 10–15:1)", "Indicador clásico de madurez"],
  ["pH final", "6,5–8,0", "Estabilización del proceso"],
  ["Humedad final", "30–40 %", "Adecuada para almacenar y aplicar"],
  ["Índice de germinación", "> 80 %", "Ausencia de fitotoxicidad"],
];

export default function Resultados() {
  return (
    <>
      <PageHeader titulo="Resultados" resumen="Valores esperados y registro visual del proceso. Reemplaza con tus datos medidos." />

      <section className="bloque">
        <div className="contenedor">
          <h2 className="text-3xl font-semibold">Resultados esperados</h2>
          <div className="mt-6 overflow-x-auto rounded-xl border border-hoja-suave bg-white">
            <table className="tabla">
              <thead><tr><th>Parámetro</th><th>Valor esperado</th><th>Interpretación</th></tr></thead>
              <tbody>
                {esperados.map((r) => (
                  <tr key={r[0]}><td className="font-semibold">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="parrafo mt-6">
            Un compost maduro es de color pardo oscuro, de olor a tierra húmeda, con estructura
            granular y temperatura estable cercana a la del ambiente.
          </p>
        </div>
      </section>

      <Divisor />

      <section className="bloque">
        <div className="contenedor">
          <h2 className="text-3xl font-semibold">Registro fotográfico</h2>
          {/* PLACEHOLDERS: public/images/resultado-1.jpg, resultado-2.jpg y resultado-3.jpg */}
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <FotoPlaceholder src="/images/resultado-1.jpg" alt="Material al inicio" pie="Semana 1" />
            <FotoPlaceholder src="/images/resultado-2.jpg" alt="Material a mitad del proceso" pie="Semana 6" />
            <FotoPlaceholder src="/images/resultado-3.jpg" alt="Compost maduro" pie="Semana 12" />
          </div>
        </div>
      </section>

      <Divisor />

      <section className="bloque">
        <div className="contenedor grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold">Mapa de resultados</h2>
            {/* Pega la URL del mapa en src/components/MapaEmbed.tsx */}
            <MapaEmbed />
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-semibold">Video</h2>
            <VideoEmbed titulo="Video de resultados del compostaje" />
          </div>
        </div>
      </section>
    </>
  );
}
