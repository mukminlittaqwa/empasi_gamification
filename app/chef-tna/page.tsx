"use client";

import React, { useState } from "react";
import { mpasiChefTna } from "@/data/mpasi-chef-tna";
import {
  BookOpen,
  Utensils,
  Clock,
  ThumbsUp,
  ChevronRight,
} from "lucide-react";

export default function KamusMpasi() {
  const [activeTab, setActiveTab] = useState("komponen");

  const sections = [
    { id: "komponen", label: "Komponen", icon: <Utensils size={18} /> },
    { id: "tekstur", label: "Tekstur", icon: <Clock size={18} /> },
    { id: "menu", label: "Menu", icon: <BookOpen size={18} /> },
    { id: "tips", label: "Tips", icon: <ThumbsUp size={18} /> },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] pb-20">
      <div className="bg-linear-to-b from-orange-500 to-orange-400 pt-12 pb-20 px-6 rounded-b-[40px] shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-4">
            Edisi Bahan Lokal 🌿
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Kamus MPASI <br className="md:hidden" />
            <span className="text-orange-100 italic">Chef TNA</span> 🥣
          </h1>
          <p className="text-orange-50 max-w-xl mx-auto text-sm md:text-base opacity-90">
            Panduan nutrisi lengkap untuk buah hati dengan bahan yang mudah
            ditemukan di sekitar kita.
          </p>
        </div>
      </div>

      <div className="sticky top-4 z-50 px-4 -mt-8">
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-xl shadow-xl shadow-orange-200/50 rounded-2xl p-1.5 flex justify-between items-center border border-white">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`flex-1 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-2.5 rounded-xl transition-all ${
                activeTab === sec.id
                  ? "bg-orange-500 text-white shadow-inner"
                  : "text-gray-500 hover:bg-orange-50"
              }`}
            >
              {sec.icon}
              <span className="text-[10px] md:text-sm font-bold">
                {sec.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-12 space-y-16">
        <section id="komponen" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-2 bg-orange-500 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800">Komponen Utama</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mpasiChefTna.komponenUtama.map((kat, i) => (
              <div
                key={i}
                className="group bg-white p-6 rounded-4xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-orange-100"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">
                    {kat.kategori.includes("Karbo")
                      ? "🍚"
                      : kat.kategori.includes("Hewani")
                        ? "🍗"
                        : kat.kategori.includes("Nabati")
                          ? "🍱"
                          : kat.kategori.includes("Lemak")
                            ? "🥑"
                            : "🥦"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-orange-600 mb-4">
                  {kat.kategori}
                </h3>
                <ul className="space-y-3">
                  {kat.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <ChevronRight
                        size={16}
                        className="text-orange-400 mt-0.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="tekstur" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 px-2 flex items-center gap-3">
            <div className="h-8 w-2 bg-orange-500 rounded-full" />
            Tekstur Sesuai Usia
          </h2>
          <div className="bg-orange-600 rounded-[2.5rem] p-4 md:p-8 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="grid gap-4 relative z-10">
              {mpasiChefTna.teksturUsia.map((t, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-white"
                >
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80">
                    Fase Usia
                  </span>
                  <h3 className="text-xl font-bold mb-2">{t.usia}</h3>
                  <p className="text-orange-50 text-sm leading-relaxed">
                    {t.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="menu" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-2 bg-orange-500 rounded-full" />
              <h2 className="text-2xl font-bold text-gray-800">Menu & Resep</h2>
            </div>
          </div>

          <div className="space-y-10">
            <div className="flex overflow-x-auto pb-6 -mx-4 px-4 gap-4 no-scrollbar">
              {mpasiChefTna.menuMingguan.map((menu, i) => (
                <div
                  key={i}
                  className="min-w-70 bg-white p-6 rounded-3xl shadow-sm border border-orange-50 flex flex-col"
                >
                  <div className="bg-orange-50 text-orange-600 font-bold px-3 py-1 rounded-lg text-xs w-fit mb-3">
                    {menu.hari}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-4 h-12 line-clamp-2 leading-snug">
                    {menu.nama}
                  </h3>
                  <div className="text-xs space-y-2 text-gray-500 mb-4 grow">
                    <p>
                      <span className="font-semibold text-gray-700">
                        Utama:
                      </span>{" "}
                      {menu.bahanUtama.join(", ")}
                    </p>
                    {menu.aromaBumbu && <p>🌿 {menu.aromaBumbu.join(", ")}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {mpasiChefTna.resepAndalan.map((resep, i) => (
                <div
                  key={i}
                  className="bg-white rounded-4xl overflow-hidden border border-orange-100 shadow-sm"
                >
                  <div className="bg-orange-50 px-6 py-4 border-b border-orange-100 flex justify-between items-center">
                    <h3 className="font-bold text-orange-700">{resep.nama}</h3>
                    <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-md font-bold">
                      Resep Populer
                    </span>
                  </div>
                  <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-tighter mb-4">
                        Bahan-bahan
                      </h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {resep.bahan.map((b, j) => (
                          <li
                            key={j}
                            className="text-sm text-gray-700 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />{" "}
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-tighter mb-4">
                        Cara Memasak
                      </h4>
                      <ol className="space-y-4">
                        {resep.caraMembuat.map((step, j) => (
                          <li key={j} className="flex gap-4">
                            <span className="shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-xs font-bold flex items-center justify-center">
                              {j + 1}
                            </span>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {step}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tips" className="pb-10 scroll-mt-24">
          <div className="bg-yellow-50 rounded-[2.5rem] p-8 border border-yellow-100 relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-200/50 rounded-full blur-3xl" />
            <h2 className="text-2xl font-bold text-yellow-800 mb-8 relative z-10 flex items-center gap-2">
              <ThumbsUp className="text-yellow-600" /> Tips Pengolahan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {mpasiChefTna.tipsPengolahan.map((tip, i) => (
                <div key={i} className="bg-white/60 p-5 rounded-2xl">
                  <h3 className="font-bold text-yellow-900 mb-2">
                    {tip.judul}
                  </h3>
                  <p className="text-sm text-yellow-800/80 leading-relaxed">
                    {tip.isi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="text-center py-10 opacity-50">
        <p className="text-sm text-gray-500 font-medium italic">
          Dibuat dengan penuh cinta untuk kesehatan si kecil ❤️
        </p>
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
