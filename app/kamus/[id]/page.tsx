import { notFound } from "next/navigation";
import { kamusDocs } from "@/data/kamus-docs";
import Link from "next/link";
import { ChevronLeft, Info, Maximize, ExternalLink } from "lucide-react";

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
    <div className="min-h-screen bg-[#FFF9F5] pb-10">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/kamus"
            className="flex items-center text-orange-600 font-bold text-sm active:scale-95 transition-transform"
          >
            <ChevronLeft size={20} />
            Kembali
          </Link>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Panduan Materi
          </span>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl font-black text-gray-800 leading-tight px-4">
            {doc.title}
          </h1>
          <div className="flex justify-center mt-3">
            <div className="h-1 w-12 bg-orange-400 rounded-full"></div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 mb-6 flex gap-3 items-start">
          <Info className="text-orange-500 shrink-0 mt-0.5" size={18} />
          <p className="text-xs md:text-sm text-orange-800 leading-relaxed italic">
            {doc.description}
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-4xl shadow-2xl shadow-orange-200/50 border-4 border-white bg-gray-100">
          <div className="relative w-full" style={{ paddingTop: "150%" }}>
            <iframe
              src={doc.pdfUrl}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="absolute bottom-4 right-4 sm:hidden">
            <a
              href={doc.pdfUrl.replace("/preview", "/view")}
              target="_blank"
              className="bg-orange-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center active:scale-90"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-[11px] font-medium">
            <Maximize size={14} />
            <span>Gunakan mode landscape untuk tampilan lebih besar</span>
          </div>

          <Link
            href="/kamus"
            className="text-orange-500 font-bold text-sm hover:underline"
          >
            Lihat Materi Lainnya
          </Link>
        </div>
      </div>
    </div>
  );
}
