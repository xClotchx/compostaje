"use client";

import { useState } from "react";

type Props = {
  /** Ruta pública, por ejemplo "/images/foto-1.jpg" (archivo en public/images/). */
  src: string;
  alt: string;
  pie?: string;
};

/**
 * Muestra la imagen si existe en public/images/. Si aún no la has copiado,
 * se ve un recuadro punteado que te indica el nombre de archivo esperado.
 */
export default function FotoPlaceholder({ src, alt, pie }: Props) {
  const [falla, setFalla] = useState(false);

  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-dashed border-hoja bg-hoja-suave">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-4 text-center text-sm text-bosque-claro">
          <span className="font-semibold">Coloca tu foto aquí</span>
          <code className="rounded bg-white/70 px-2 py-0.5">public{src}</code>
        </div>
        {!falla && (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFalla(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
      {pie && <figcaption className="mt-2 text-sm text-tierra/70">{pie}</figcaption>}
    </figure>
  );
}
