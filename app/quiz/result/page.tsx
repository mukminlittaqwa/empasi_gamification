"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";

export default function QuizResult() {
  const [points, setPoints] = useState(0);
  const [breakdown, setBreakdown] = useState<Record<string, number>>({});

  useEffect(() => {
    const savedPoints = localStorage.getItem("quizPoints");
    const savedBreakdown = localStorage.getItem("quizBreakdown");

    if (savedPoints) setPoints(Number(savedPoints));
    if (savedBreakdown) setBreakdown(JSON.parse(savedBreakdown));
  }, []);

  const totalMax = 1000;
  const voucherThreshold = 800;
  const hasVoucher = points >= voucherThreshold;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-orange-100 p-6">
      <Card className="w-full max-w-lg border-orange-300 border-4 shadow-2xl">
        <div className="flex flex-col items-center gap-8 text-center p-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500">
            Selamat, Bunda! 🎉
          </h1>

          <div className="text-2xl font-bold text-orange-400">
            Kamu berhasil menyelesaikan Petualangan MPASI!
          </div>

          <div className="w-full bg-orange-50 rounded-2xl p-6 shadow-inner">
            <p className="text-5xl font-black text-orange-600 mb-2">
              {points} <span className="text-3xl">/ {totalMax}</span>
            </p>
            <p className="text-xl text-gray-700">Poin Petualanganmu</p>
          </div>

          {Object.keys(breakdown).length > 0 && (
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-3">Rincian Poin:</h3>
              <div className="space-y-2 text-left">
                {Object.entries(breakdown).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span>{key}</span>
                    <span className="font-medium">+{value} poin</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="w-full bg-white rounded-2xl p-5 shadow-md border border-orange-200">
            {hasVoucher ? (
              <>
                <p className="text-xl font-bold text-green-600 mb-2">
                  🎁 Selamat! Kamu dapat Voucher 20.000
                </p>
                <p className="text-sm text-gray-600">Karena poinmu ≥ 800.</p>
              </>
            ) : (
              <>
                <p className="text-xl font-bold text-orange-600 mb-2">
                  Hampir dapat voucher 20rb!
                </p>
                <p className="text-sm text-gray-600">
                  Butuh {voucherThreshold - points} poin lagi. Coba lagi yuk,
                  Bunda!
                </p>
              </>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link href="/quiz" className="w-full">
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold py-4 rounded-2xl shadow-lg transition-all hover:scale-105">
                Main Lagi!
              </button>
            </Link>
            <Link href="/" className="w-full">
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-lg font-bold py-4 rounded-2xl shadow-lg transition-all">
                Kembali ke Beranda
              </button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
