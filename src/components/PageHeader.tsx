export default function PageHeader({ titulo, resumen }: { titulo: string; resumen: string }) {
  return (
    <section className="bg-bosque py-14 sm:py-20">
      <div className="contenedor">
        <h1 className="max-w-3xl text-4xl font-semibold text-white sm:text-5xl">{titulo}</h1>
        <p className="mt-4 max-w-2xl text-lg text-hoja-suave">{resumen}</p>
      </div>
    </section>
  );
}
