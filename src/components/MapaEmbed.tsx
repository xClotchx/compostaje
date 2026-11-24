export default function MapaEmbed() {
  // PEGA AQUÍ la URL de incrustación de tu mapa.
  // Google My Maps: Compartir > Incorporar en mi sitio > copia el valor de src="..."
  //   (formato: https://www.google.com/maps/d/embed?mid=XXXXXXXX)
  // ArcGIS Online: Compartir > Incrustar en sitio web > copia el valor de src="..."
  const mapaUrl = "https://www.google.com/maps/d/u/0/embed?mid=1WmavDnbEm4y5GFh7p4UeNBSNgFVNbgs&ehbc=2E312";

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-hoja bg-hoja-suave sm:aspect-video">
      {mapaUrl ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={mapaUrl}
          title="Mapa interactivo del área de estudio"
          loading="lazy"
          allowFullScreen
        />
      ) : (
        <div className="flex h-full items-center justify-center p-6 text-center text-bosque-claro">
          Define mapaUrl en src/components/MapaEmbed.tsx para mostrar tu mapa.
        </div>
      )}
    </div>
  );
}
