import Divisor from "@/components/Divisor";
import FotoPlaceholder from "@/components/FotoPlaceholder";
import VideoEmbed from "@/components/VideoEmbed";

export default function Inicio() {
  return (
    <>
      {/* HERO. IMAGEN DE FONDO: guarda tu foto del ecosistema en public/images/portada.jpg
          (si el archivo no existe, se muestra el degradado verde de respaldo). */}
      <section
        className="relative flex min-h-[78vh] items-center bg-bosque bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(30,59,44,.55), rgba(30,59,44,.85)), url('/images/portada.jpg')",
        }}
      >
        <div className="contenedor py-20">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Del residuo al suelo vivo: compostaje como regreso de la materia al ciclo
          </h1>
          <p className="mt-6 max-w-xl text-lg text-hoja-suave">
            Estudio del proceso de compostaje aerobio de residuos orgánicos: cómo se transforma,
            cómo se mide y qué aporta al suelo.
          </p>
        </div>
      </section>

      <section className="bloque">
        <div className="contenedor grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">¿Qué es el compostaje?</h2>
            <p className="parrafo mt-4">
              El compostaje es la descomposición biológica, aerobia y controlada de materia orgánica
              por microorganismos (bacterias, actinomicetos y hongos). El resultado es el compost:
              un material estable, rico en humus, con menor volumen y sin patógenos activos.
            </p>
            <p className="parrafo mt-4">
              Entre 30 % y 50 % de los residuos domiciliarios es materia orgánica. Compostarla evita
              emisiones de metano en vertederos y devuelve nutrientes y carbono al suelo.
            </p>
          </div>
          {/* PLACEHOLDER: public/images/foto-1.jpg */}
          <FotoPlaceholder src="/images/foto-1.jpg" alt="Pila de compostaje en el sitio de estudio" pie="Pila de compostaje en el sitio de estudio." />
        </div>
      </section>

      <Divisor />

      <section className="bloque">
        <div className="contenedor">
          <h2 className="text-3xl font-semibold">Objetivos</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6">
              <h3 className="text-xl font-semibold">General</h3>
              <p className="mt-2">Evaluar la transformación de residuos orgánicos en compost maduro mediante un proceso aerobio monitoreado.</p>
            </div>
            <div className="rounded-xl bg-white p-6">
              <h3 className="text-xl font-semibold">Específicos</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Ajustar la relación C/N inicial de la mezcla.</li>
                <li>Registrar temperatura, humedad y pH semanalmente.</li>
                <li>Identificar las fases del proceso y valorar la madurez del producto.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Divisor />

      <section className="bloque">
        <div className="contenedor">
          <h2 className="text-3xl font-semibold">Video del proyecto</h2>
          <p className="parrafo mt-3 mb-6">Recorrido por el montaje y seguimiento de las pilas.</p>
          <VideoEmbed titulo="Video del proyecto de compostaje" />
        </div>
      </section>
    </>
  );
}
