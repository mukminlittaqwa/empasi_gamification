"use client";

import {
  HeartIcon,
  ShoppingCart,
  Utensils,
  Scale,
  PlayCircle,
  BookOpen,
  Sparkles,
  Baby,
} from "lucide-react";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { useRouter } from "next/navigation";
import { FooterBrand } from "@/components/ui/FooterBrand";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[#FFF9F5] p-4 relative overflow-hidden">
      <div className="absolute top-[-5%] right-[-10%] w-64 h-64 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[10%] left-[-10%] w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl" />

      <main className="w-full max-w-md mx-auto z-10">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-orange-200/40 border border-white overflow-hidden relative">
          <div className="bg-linear-to-b from-orange-50/80 to-white pt-12 pb-6 px-6 flex flex-col items-center relative">
            <div className="absolute top-8 left-12 animate-bounce opacity-30">
              <Sparkles className="text-orange-400" size={20} />
            </div>
            <div className="absolute top-16 right-12 animate-pulse opacity-30">
              <Baby className="text-orange-400" size={24} />
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-orange-100 rounded-4xl rotate-6 scale-110 opacity-50"></div>
              <div className="relative rounded-4xl bg-white p-6 shadow-sm border border-orange-100 text-5xl">
                🍲
              </div>
            </div>

            <h1 className="mt-8 text-3xl font-black text-gray-800 text-center leading-[1.1] tracking-tight">
              Petualangan <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-pink-500">
                MPASI Pintar
              </span>
            </h1>

            <p className="mt-4 text-center text-gray-500 text-[14px] font-medium leading-relaxed px-6">
              Panduan lengkap Bunda & Ayah untuk si Kecil yang{" "}
              <span className="text-orange-400 font-bold">
                Sehat, Lahap, & Ceria!
              </span>
            </p>
          </div>

          <div className="px-8 py-4">
            <div className="bg-orange-50/30 rounded-4xl p-4 space-y-2 border border-orange-100/50">
              <FeatureItem
                icon={HeartIcon}
                title="Kenali Kebutuhan Gizi"
                color="text-rose-400"
              />
              <FeatureItem
                icon={ShoppingCart}
                title="Belanja Bahan Pangan"
                color="text-sky-400"
              />
              <FeatureItem
                icon={Utensils}
                title="Olahan Tekstur Tepat"
                color="text-amber-500"
              />
              <FeatureItem
                icon={Scale}
                title="Takar Porsi Ideal"
                color="text-emerald-500"
              />
            </div>
          </div>

          <div className="px-8 pb-4 pt-2 space-y-4">
            <button
              onClick={() => router.push("/quiz")}
              className="group w-full flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-3xl shadow-xl shadow-orange-200 transition-all active:scale-95 active:shadow-inner"
            >
              <PlayCircle className="w-6 h-6 fill-white/20" />
              <span className="text-lg font-black tracking-tight">
                Mulai Belajar!
              </span>
            </button>

            <button
              onClick={() => router.push("/kamus")}
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-orange-100 text-orange-600 hover:bg-orange-50 py-5 rounded-3xl transition-all active:scale-95"
            >
              <BookOpen className="w-6 h-6 opacity-70" />
              <span className="text-lg font-bold">Kamus MPASI</span>
            </button>
          </div>

          <FooterBrand />
        </div>

        {/* <p className="mt-6 text-center text-gray-400 text-[11px] font-medium">
          Dukung Tumbuh Kembang Optimal 1000 HPK
        </p> */}
      </main>
    </div>
  );
}
