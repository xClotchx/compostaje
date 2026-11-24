export default function VideoEmbed({ titulo }: { titulo: string }) {
  // PEGA AQUÍ el ID de tu video de YouTube (lo que va después de "v=" en la URL).
  // Ejemplo: https://www.youtube.com/watch?v=XXXXXXXXXXX  ->  "XXXXXXXXXXX"
  const youtubeId = "";

  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl bg-bosque shadow-lg">
      {youtubeId ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="flex h-full items-center justify-center p-6 text-center text-hoja-suave">
          Define youtubeId en src/components/VideoEmbed.tsx para mostrar el video.
        </div>
      )}
    </div>
  );
}
