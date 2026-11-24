export default function TarjetaDescarga() {
  // CAMBIA esta ruta: puede ser un PDF en public/docs/ (ej. "/docs/informe.pdf")
  // o un enlace de Google Drive (ej. "https://drive.google.com/file/d/ID/view").
  const urlDocumento = "/docs/documento-apoyo.pdf";

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-hoja bg-white p-6 sm:flex-row sm:items-center">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-hoja-suave text-xl font-bold text-bosque">
        PDF
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold">Documento de apoyo</h3>
        <p className="text-sm text-tierra/80">
          Protocolo de monitoreo y registros del proceso de compostaje.
        </p>
      </div>
      <div className="flex gap-2">
        <a href={urlDocumento} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-bosque px-4 py-2 text-sm font-medium text-bosque hover:bg-hoja-suave">
          Ver
        </a>
        <a href={urlDocumento} download className="rounded-lg bg-bosque px-4 py-2 text-sm font-medium text-white hover:bg-bosque-claro">
          Descargar
        </a>
      </div>
    </div>
  );
}
