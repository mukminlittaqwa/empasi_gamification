"use client";

import { mpasiChefTna } from "@/data/mpasi-chef-tna";

export default function KamusMpasi() {
  return (
    <div className="min-h-screen bg-orange-50 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 text-center mb-8">
          Kamus MPASI by Chef TNA 🥣✨
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">
            Komponen Utama Setiap Porsi MPASI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mpasiChefTna.komponenUtama.map((kat, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md border border-orange-200"
              >
                <h3 className="text-xl font-bold text-orange-600 mb-3">
                  {kat.kategori}
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {kat.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tekstur Sesuai Usia */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">
            Tekstur Sesuai Usia
          </h2>
          <div className="space-y-6">
            {mpasiChefTna.teksturUsia.map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md border border-orange-200"
              >
                <h3 className="text-xl font-bold text-orange-600 mb-2">
                  {t.usia}
                </h3>
                <p className="text-gray-700">{t.deskripsi}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Menu Mingguan */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">
            Contoh Jadwal Menu Mingguan (Bahan Lokal)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mpasiChefTna.menuMingguan.map((menu, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md border border-orange-200"
              >
                <h3 className="text-xl font-bold text-orange-600 mb-2">
                  {menu.hari}: {menu.nama}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Bahan Utama:</strong> {menu.bahanUtama.join(", ")}
                  </p>
                  {menu.lemak && (
                    <p>
                      <strong>Lemak:</strong> {menu.lemak.join(", ")}
                    </p>
                  )}
                  {menu.aromaBumbu && (
                    <p>
                      <strong>Aroma:</strong> {menu.aromaBumbu.join(", ")}
                    </p>
                  )}
                  {menu.catatan && (
                    <p className="text-sm italic text-orange-700">
                      {menu.catatan}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resep Andalan */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">
            3 Resep Andalan Chef TNA
          </h2>
          <div className="space-y-8">
            {mpasiChefTna.resepAndalan.map((resep, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md border border-orange-200"
              >
                <h3 className="text-2xl font-bold text-orange-600 mb-3">
                  {resep.nama}
                </h3>
                <p className="text-gray-700 mb-4 italic">{resep.deskripsi}</p>
                <div className="space-y-3">
                  <p>
                    <strong className="text-orange-500">Bahan:</strong>
                  </p>
                  <ul className="list-disc pl-5 text-gray-700">
                    {resep.bahan.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                  {resep.bumbuAromatik && (
                    <>
                      <p>
                        <strong className="text-orange-500">
                          Bumbu Aromatik:
                        </strong>
                      </p>
                      <ul className="list-disc pl-5 text-gray-700">
                        {resep.bumbuAromatik.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <p>
                    <strong className="text-orange-500">Cara Membuat:</strong>
                  </p>
                  <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                    {resep.caraMembuat.map((step, j) => (
                      <li key={j}>{step}</li>
                    ))}
                  </ol>
                  {resep.catatan && (
                    <p className="text-sm italic text-orange-700 mt-3">
                      {resep.catatan}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Pengolahan */}
        <section>
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">
            Tips Pengolahan Bahan Lokal
          </h2>
          <div className="space-y-6">
            {mpasiChefTna.tipsPengolahan.map((tip, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md border border-orange-200"
              >
                <h3 className="text-xl font-bold text-orange-600 mb-2">
                  {tip.judul}
                </h3>
                <p className="text-gray-700">{tip.isi}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
