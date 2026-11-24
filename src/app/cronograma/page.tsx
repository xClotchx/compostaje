import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Cronograma | Compostaje" };

const filas = [
  ["1", "Recolección y clasificación de residuos; montaje de la pila", "Mesófila inicial", "Temperatura inicial, humedad"],
  ["2", "Monitoreo diario; primer volteo si T > 65 °C", "Termófila", "Temperatura diaria, pH"],
  ["3", "Monitoreo diario; riego según humedad", "Termófila", "Temperatura, humedad"],
  ["4", "Volteo y registro fotográfico", "Termófila", "Temperatura, olor, humedad"],
  ["5–6", "Monitoreo semanal; volteo cada 7–10 días", "Enfriamiento", "Temperatura, pH"],
  ["7–8", "Monitoreo semanal; control de humedad", "Mesófila final", "Temperatura, humedad"],
  ["9–10", "Reposo de la pila; volteo de aireación", "Maduración", "Temperatura, color, olor"],
  ["11", "Cribado a 10 mm; muestreo del producto", "Maduración", "pH, conductividad, textura"],
  ["12", "Prueba de germinación; análisis y redacción de resultados", "Evaluación", "Índice de germinación"],
];

export default function Cronograma() {
  return (
    <>
      <PageHeader titulo="Cronograma" resumen="Actividades semana a semana durante 12 semanas de proceso." />
      <section className="bloque">
        <div className="contenedor">
          <div className="overflow-x-auto rounded-xl border border-hoja-suave bg-white">
            <table className="tabla">
              <thead><tr><th>Semana</th><th>Actividad</th><th>Fase</th><th>Variables</th></tr></thead>
              <tbody>
                {filas.map((f) => (
                  <tr key={f[0]}>
                    <td className="font-semibold text-bosque">{f[0]}</td><td>{f[1]}</td><td>{f[2]}</td><td>{f[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-tierra/70">La duración real depende del clima, el tamaño de partícula y la frecuencia de volteo.</p>
        </div>
      </section>
    </>
  );
}
