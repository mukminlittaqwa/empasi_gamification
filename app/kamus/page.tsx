import Link from "next/link";
import { kamusDocs } from "@/data/kamus-docs";

export default function KamusList() {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-blue-100 py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 text-center mb-4">
          Kamus MPASI 📚
        </h1>
        <p className="text-center text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Pilih topik untuk baca panduan lengkapnya tentang MPASI
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kamusDocs.map((doc, index) => (
            <Link
              key={index}
              href={`/kamus/${index}`}
              className="bg-white rounded-2xl p-6 shadow-md border border-blue-200 hover:shadow-xl hover:border-blue-400 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                {doc.title}
              </h3>
              <p className="text-gray-600 grow">{doc.description}</p>
            </Link>
          ))}

          <Link
            href="/chef-tna"
            className="bg-white rounded-2xl p-6 shadow-md border border-blue-200 hover:shadow-xl hover:border-blue-400 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-3">
              Resep Praktis Chef TNA 🍲
            </h3>
            <p className="text-gray-600 grow">
              Inspirasi menu MPASI sehat, mudah dibuat, dan bergizi tinggi ala{" "}
              <b>dr tauhid nur azhar</b>. Cocok untuk cegah GTM dan tambah berat
              badan bayi!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
