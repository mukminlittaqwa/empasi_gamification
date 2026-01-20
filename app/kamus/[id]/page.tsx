import { notFound } from "next/navigation";
import { kamusDocs } from "@/data/kamus-docs";

export default async function KamusDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const index = parseInt(id, 10);
  const doc = kamusDocs[index];

  if (!doc || isNaN(index)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-blue-100 py-8 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-2xl font-bold text-blue-700 mb-6 text-center">
          {doc.title}
        </h1>
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-blue-200 bg-white">
          <div className="relative w-full" style={{ paddingTop: "140%" }}>
            <iframe
              src={doc.pdfUrl}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500 sm:hidden">
          <p>Di HP? Pinch-zoom atau putar landscape untuk baca lebih nyaman.</p>
        </div>
      </div>
    </div>
  );
}
