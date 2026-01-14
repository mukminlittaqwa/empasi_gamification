"use client";

import Image from "next/image";
import { HeartIcon, ShoppingCart, Utensils, Scale } from "lucide-react";
import Card from "@/components/Card";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-orange-100">
      <main className="p-4 w-full max-w-md md:max-w-lg">
        <Card>
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-orange-300 p-4 shadow-md mt-2">
              <div className="text-5xl">🍲</div>
            </div>

            <h1 className="text-2xl md:text-6xl font-extrabold text-orange-400 text-center tracking-tight">
              Petualangan MPASI
            </h1>

            <p className="text-center text-black text-sm md:text-sm sm:text-sm max-w-prose">
              Belajar menyusun Makanan Pendamping ASI yang sehat, tepat, dan
              lezat lewat permainan seru!
            </p>

            <div className="w-full space-y-4 mt-4">
              <FeatureItem icon={HeartIcon} title="Kenali Kebutuhan Gizi" />
              <FeatureItem icon={ShoppingCart} title="Belanja Bahan Pangan" />
              <FeatureItem icon={Utensils} title="Olahan Tekstur Tepat" />
              <FeatureItem icon={Scale} title="Takar Porsi Ideal" />
            </div>

            <button
              onClick={() => router.push("/quiz")}
              className="mt-1 w-full max-w-xs bg-orange-600 hover:bg-orange-700 text-white text-xl font-bold py-5 rounded-2xl shadow-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-400"
            >
              Mulai Petualangan !
            </button>

            <button
              // onClick={() => router.push("/quiz")}
              className="mt-1 w-full max-w-xs bg-green-500 hover:bg-green-800 text-white text-xl font-bold py-5 rounded-2xl shadow-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-400"
            >
              Kamus Empasi
            </button>
          </div>
        </Card>
      </main>
    </div>
  );
}
