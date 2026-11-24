import type { Metadata } from "next";
import Divisor from "@/components/Divisor";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Antecedentes | Compostaje" };

const fases = [
  { nombre: "Mesófila inicial", temp: "15–40 °C", dur: "1–3 días", desc: "Bacterias y hongos consumen azúcares y aminoácidos solubles. La temperatura sube por el calor metabólico y el pH baja por la producción de ácidos orgánicos." },
  { nombre: "Termófila", temp: "45–70 °C", dur: "Días a semanas", desc: "Dominan microorganismos termófilos y actinomicetos que degradan celulosa y hemicelulosa. Se higieniza el material: se eliminan patógenos y semillas de arvenses (≥ 55 °C durante varios días)." },
  { nombre: "Mesófila final (enfriamiento)", temp: "40 → 25 °C", dur: "Semanas", desc: "Al agotarse los compuestos fáciles, la actividad baja. Reaparecen mesófilos y hongos que degradan lignina y compuestos más resistentes." },
  { nombre: "Maduración", temp: "Ambiente", dur: "1–3 meses", desc: "Se humifica la materia orgánica, el pH se estabiliza cerca de la neutralidad y aparece la macro y mesofauna (lombrices, ácaros, colémbolos)." },
];

const materiales = [
  ["Aserrín", "200–500:1", "Marrón"],
  ["Paja de cereales", "60–100:1", "Marrón"],
  ["Hojas secas", "40–80:1", "Marrón"],
  ["Posos de café", "~20:1", "Verde"],
  ["Estiércol vacuno", "15–25:1", "Verde"],
  ["Restos de cocina (vegetales)", "12–20:1", "Verde"],
  ["Césped fresco", "15–20:1", "Verde"],
];

export default function Antecedentes() {
  return (
    <>
      <PageHeader titulo="Antecedentes" resumen="Fundamentos biológicos y parámetros que controlan el proceso de compostaje." />

      <section className="bloque">
        <div className="contenedor">
          <h2 className="text-3xl font-semibold">Fases del compostaje</h2>
          <p className="parrafo mt-3">
            El proceso se reconoce por la evolución de la temperatura, resultado de la actividad
            microbiana. Se distinguen cuatro fases.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {fases.map((f, i) => (
              <article key={f.nombre} className="rounded-xl border border-hoja-suave bg-white p-6">
                <p className="text-sm font-semibold text-hoja">Fase {i + 1}</p>
                <h3 className="mt-1 text-xl font-semibold">{f.nombre}</h3>
                <p className="mt-1 text-sm text-tierra/70">{f.temp} · {f.dur}</p>
                <p className="mt-3">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Divisor />

      <section className="bloque">
        <div className="contenedor">
          <h2 className="text-3xl font-semibold">Relación carbono/nitrógeno (C/N)</h2>
          <p className="parrafo mt-3">
            Los microorganismos usan unas 25–30 partes de carbono (energía y estructura celular) por
            cada parte de nitrógeno (proteínas). Por eso la mezcla inicial óptima ronda
            una relación C/N de 25–35:1. Con valores altos el proceso se enlentece por falta de
            nitrógeno; con valores bajos el exceso se pierde como amoníaco (olor y pérdida de nutrientes).
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-hoja-suave bg-white">
            <table className="tabla">
              <thead><tr><th>Material</th><th>C/N aproximada</th><th>Aporte</th></tr></thead>
              <tbody>
                {materiales.map(([m, cn, t]) => (
                  <tr key={m}><td>{m}</td><td>{cn}</td><td>{t}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm text-tierra/70">Valores orientativos; varían según origen y grado de humedad del material.</p>
        </div>
      </section>

      <Divisor />

      <section className="bloque">
        <div className="contenedor">
          <h2 className="text-3xl font-semibold">Otros parámetros de control</h2>
          <ul className="parrafo mt-4 list-disc space-y-2 pl-5">
            <li><strong>Humedad:</strong> 50–60 %. Por debajo de 40 % la actividad cae; por encima de 65 % se desplaza el aire y aparecen condiciones anaerobias.</li>
            <li><strong>Oxígeno:</strong> mantener más de 5 % en los poros mediante volteos y material estructurante.</li>
            <li><strong>pH:</strong> 6,5–8,0 durante el proceso; el producto final suele estar entre 6,5 y 7,5.</li>
            <li><strong>Tamaño de partícula:</strong> 1–5 cm favorece aireación y superficie de ataque.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
