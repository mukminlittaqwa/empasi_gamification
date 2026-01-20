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
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 text-center sm:text-left">
          {doc.title}
        </h1>

        <p className="text-lg text-gray-700 mb-8 text-center sm:text-left max-w-prose mx-auto sm:mx-0">
          {doc.description}
        </p>

        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-blue-300 bg-white">
          <div
            className="relative w-full"
            style={{
              paddingTop: "140%",
            }}
          >
            <iframe
              src={doc.embedUrl}
              className="absolute top-0 left-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Font terlalu kecil di mobile? Coba pinch-zoom atau putar ke
            landscape.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <a
            href="/kamus"
            className="text-blue-600 hover:text-blue-800 font-medium text-lg underline"
          >
            ← Kembali ke Daftar Kamus
          </a>
          <a
            href="/chef-tna"
            className="text-orange-600 hover:text-orange-800 font-medium text-lg underline"
          >
            Lihat Resep Chef TNA →
          </a>
        </div>
      </div>
    </div>
  );
}
