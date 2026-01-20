"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Trophy,
  RotateCcw,
  Home,
  Gift,
  Star,
  Sparkles,
  Heart,
  ArrowRight,
} from "lucide-react";
import { FooterBrand } from "@/components/ui/FooterBrand";

export default function QuizResult() {
  const [points, setPoints] = useState(0);
  const [breakdown, setBreakdown] = useState<Record<string, number>>({});
  const router = useRouter();

  useEffect(() => {
    const savedPoints = localStorage.getItem("quizPoints") || "0";
    const savedBreakdown = localStorage.getItem("quizBreakdown") || "{}";
    setPoints(Number(savedPoints));
    setBreakdown(JSON.parse(savedBreakdown));
  }, []);

  const totalMax = 1000;
  const voucherThreshold = 950;
  const hasVoucher = points >= voucherThreshold;

  return (
    <div className="min-h-screen bg-[#FFF9F5] flex flex-col items-center p-6 relative overflow-hidden">
      {/* Dekorasi Latar Belakang Lembut */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[5%] right-[-5%] w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl" />

      <div className="w-full max-w-md z-10 mt-4">
        {/* Card Utama Berbentuk Lembut */}
        <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-orange-200/50 overflow-hidden border border-white">
          {/* Bagian Atas: Selebrasi Visual */}
          <div
            className={`relative pt-12 pb-20 px-6 text-center ${
              hasVoucher
                ? "bg-linear-to-br from-emerald-400 to-teal-500"
                : "bg-linear-to-br from-orange-400 to-pink-500"
            }`}
          >
            {/* Ikon Mengambang */}
            <div className="absolute top-4 left-6 animate-bounce opacity-40">
              <Star size={24} fill="white" className="text-white" />
            </div>
            <div className="absolute top-10 right-8 animate-pulse opacity-40">
              <Sparkles size={24} fill="white" className="text-white" />
            </div>

            <div className="inline-flex bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-widest uppercase mb-4">
              Misi Selesai
            </div>

            <h1 className="text-3xl font-extrabold text-white leading-tight">
              {hasVoucher ? "Bunda Luar Biasa! 🌟" : "Hebat, Bunda! ❤️"}
            </h1>
            <p className="text-white/80 text-sm mt-2 font-medium px-8">
              Terima kasih sudah belajar demi nutrisi terbaik si Kecil
            </p>

            {/* Emblem Skor Melayang */}
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-28 h-28 bg-white rounded-full p-2 shadow-xl border-4 border-[#FFF9F5]">
              <div className="w-full h-full rounded-full bg-orange-50 flex flex-col items-center justify-center border border-orange-100">
                <span className="text-3xl font-black text-orange-600 leading-none">
                  {points}
                </span>
                <span className="text-[10px] font-bold text-orange-400 uppercase mt-1">
                  Poin
                </span>
              </div>
            </div>
          </div>

          {/* Bagian Tengah: Detail & Voucher */}
          <div className="pt-20 pb-10 px-8 text-center">
            {/* Voucher Section */}
            <div
              className={`relative p-6 rounded-[2.5rem] border-2 border-dashed transition-all mb-8 ${
                hasVoucher
                  ? "bg-emerald-50 border-emerald-200"
                  : "bg-orange-50 border-orange-200"
              }`}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`p-3 rounded-2xl mb-3 ${hasVoucher ? "bg-emerald-500 text-white" : "bg-orange-500 text-white"}`}
                >
                  <Gift size={28} />
                </div>
                {hasVoucher ? (
                  <>
                    <h2 className="text-xl font-black text-emerald-800">
                      Voucher Rp20.000!
                    </h2>
                    <p className="text-xs text-emerald-600 mt-2 font-medium leading-relaxed">
                      Hadiah spesial untuk Bunda yang teliti. <br /> Screenshot
                      layar ini & klaim ke Admin ya!
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl font-black text-orange-800">
                      Dikit Lagi Dapat Hadiah!
                    </h2>
                    <p className="text-xs text-orange-600 mt-2 font-medium leading-relaxed">
                      Hanya kurang{" "}
                      <span className="font-black text-orange-700">
                        {voucherThreshold - points} poin
                      </span>{" "}
                      lagi <br />
                      untuk dapat voucher belanja.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Breakdown Ringkas */}
            <div className="text-left space-y-3 px-2">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-4 flex items-center gap-2">
                <Heart size={14} className="text-pink-400 fill-pink-400" />{" "}
                Hasil Belajar Bunda
              </h3>
              {Object.entries(breakdown).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center group"
                >
                  <span className="text-sm font-bold text-gray-600">{key}</span>
                  <div className="h-px flex-1 mx-4 bg-gray-100 group-hover:bg-orange-100 transition-colors" />
                  <span className="text-sm font-black text-orange-500">
                    +{value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4">
          <button
            onClick={() => router.push("/quiz")}
            className="group w-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-3 py-5 rounded-3xl shadow-xl shadow-orange-200 transition-all active:scale-95"
          >
            <RotateCcw
              size={20}
              className="group-hover:-rotate-45 transition-transform"
            />
            <span className="text-lg font-black tracking-tight">
              Main Lagi Yuk!
            </span>
          </button>

          <button
            onClick={() => router.push("/")}
            className="w-full bg-white text-gray-400 flex items-center justify-center gap-2 py-4 rounded-3xl font-bold text-sm transition-all active:scale-95 border border-transparent hover:border-gray-100"
          >
            <Home size={18} />
            <span>Ke Halaman Utama</span>
          </button>
        </div>

        <FooterBrand />
      </div>
    </div>
  );
}
