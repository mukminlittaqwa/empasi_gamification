import Link from "next/link";
import { kamusDocs } from "@/data/kamus-docs";
import { Book, ChefHat, ArrowRight } from "lucide-react";

export default function KamusList() {
  return (
    <div className="min-h-screen bg-[#FFF9F5] pb-20">
      <div className="bg-linear-to-b from-orange-500 to-orange-400 pt-12 pb-16 px-6 rounded-b-[40px] shadow-lg mb-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-white mb-2 leading-tight">
            Kamus MPASI 📚
          </h1>
          <p className="text-orange-50 text-sm opacity-90">
            Pilih topik untuk baca panduan lengkap{" "}
            <br className="hidden sm:block" />
            MPASI sehat untuk si kecil.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {kamusDocs.map((doc, index) => (
            <Link
              key={index}
              href={`/kamus/${index}`}
              className="group bg-white rounded-3xl p-5 shadow-sm border border-orange-100 hover:shadow-md transition-all active:scale-95 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <Book size={40} className="text-orange-500" />
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2 pr-8 group-hover:text-orange-600 transition-colors">
                {doc.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                {doc.description}
              </p>

              <div className="mt-4 flex items-center text-orange-500 text-xs font-bold">
                Baca Selengkapnya{" "}
                <ArrowRight
                  size={14}
                  className="ml-1 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}

          <Link
            href="/chef-tna"
            className="group bg-orange-600 rounded-3xl p-5 shadow-lg shadow-orange-200 border-none hover:bg-orange-700 transition-all active:scale-95 flex flex-col relative overflow-hidden text-white"
          >
            <div className="absolute -top-2 -right-2 p-3 opacity-20">
              <ChefHat size={60} />
            </div>

            <span className="bg-white/20 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md w-fit mb-3">
              Rekomendasi Utama
            </span>

            <h3 className="text-lg font-bold mb-2">
              Resep Praktis Chef TNA 🍲
            </h3>
            <p className="text-orange-100 text-xs leading-relaxed mb-4">
              Inspirasi menu MPASI sehat ala <b>dr. Tauhid Nur Azhar</b>. Cegah
              GTM sekarang!
            </p>

            <div className="mt-auto flex items-center font-bold text-sm">
              Lihat Resep{" "}
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
