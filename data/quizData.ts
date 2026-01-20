export type QuizQuestion = {
  id: number;
  title: string;
  description: string;
  type:
    | "single-select"
    | "multi-select-market"
    | "sub-questions"
    | "portion-slider";
  options?: {
    title: string;
    info?: string;
    examples?: string;
    isCorrect?: boolean;
  }[];
  marketItems?: {
    emoji: string;
    name: string;
    isHealthy: boolean;
    reason?: string;
  }[];
  maxSelections?: number;
  buttonText: string;
  subQuestions?: {
    age: string;
    question: string;
    tip: string;
    options: { title: string; isCorrect: boolean }[];
  }[];
  idealPortions?: {
    karbo: { min: number; max: number };
    prohe: { min: number; max: number };
    pronab: { min: number; max: number };
    lemak: { min: number; max: number };
    sayurBuah: { min: number; max: number };
  };
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "Mengenal Kebutuhan Nutrisi",
    description:
      "Pilih nutrisi utama yang paling penting untuk mencegah stunting pada bayi!",
    type: "single-select",
    options: [
      {
        title: "Karbohidrat",
        info: "Sumber energi utama untuk aktivitas sehari-hari, tapi bukan yang paling kritis untuk mencegah stunting.",
        examples: "Nasi, kentang, ubi, jagung, pasta",
      },
      {
        title: "Protein Hewani (Prohe)",
        info: "Paling penting! Membantu pertumbuhan otak, tulang, otot, dan mencegah stunting secara signifikan.",
        examples:
          "Daging ayam kampung, ikan segar, telur ayam kampung, hati sapi",
        isCorrect: true,
      },
      {
        title: "Protein Nabati",
        info: "Bagus sebagai pelengkap dan alternatif kalau prohe sulit didapat, tapi tidak sekuat prohe.",
        examples: "Tahu, tempe, kacang hijau, kacang merah, kacang tanah",
      },
      {
        title: "Lemak Tambahan",
        info: "Sangat penting untuk perkembangan otak dan penyerapan vitamin A, D, E, K.",
        examples: "Minyak kelapa, minyak zaitun, alpukat, santan encer",
      },
      {
        title: "Sayuran & Buah",
        info: "Sumber vitamin, mineral & serat penting, tapi bukan pencegah utama stunting.",
        examples: "Bayam, wortel, labu kuning, pisang, pepaya, apel",
      },
    ],
    buttonText: "Lanjut ke Pasar Seru!",
  },
  {
    id: 2,
    title: "Pasar Bahan Pangan",
    description:
      "Pilih 5 bahan terbaik & aman untuk MPASI bayi 6+ bulan. Hindari jebakan berbahaya ya Bunda!",
    type: "multi-select-market",
    marketItems: [
      {
        emoji: "🍯",
        name: "Madu Murni",
        isHealthy: false,
        reason: "Dilarang untuk bayi <1 tahun! Risiko botulisme tinggi.",
      },
      { emoji: "🥩", name: "Daging Ayam Kampung", isHealthy: true },
      { emoji: "🥚", name: "Telur Ayam Kampung", isHealthy: true },
      { emoji: "🍚", name: "Beras Merah Organik", isHealthy: true },
      { emoji: "🐟", name: "Ikan Kembung", isHealthy: true },
      { emoji: "🥑", name: "Alpukat Matang", isHealthy: true },
      { emoji: "🥕", name: "Wortel Organik", isHealthy: true },
      {
        emoji: "🧂",
        name: "Garam Berlebih",
        isHealthy: false,
        reason: "Ginjal bayi belum siap! Hindari tambahan garam.",
      },
      {
        emoji: "🍞",
        name: "Roti Tawar Putih",
        isHealthy: false,
        reason: "Kurang nutrisi, tinggi gula & pengawet.",
      },
      { emoji: "🥬", name: "Bayam Segar", isHealthy: true },
      { emoji: "🍠", name: "Ubi Jalar Ungu", isHealthy: true },
      { emoji: "🍚", name: "Beras Putih Organik", isHealthy: true },
    ],
    maxSelections: 5,
    buttonText: "Lanjut ke Dapur Ajaib!",
  },
  {
    id: 3,
    title: "Olahan Tekstur Tepat",
    description:
      "Pilih tekstur makanan yang paling sesuai untuk bayi usia 6-8 bulan.",
    type: "single-select",
    options: [
      {
        title: "Halus seperti bubur kental",
        info: "Tekstur terbaik untuk tahap awal MPASI agar bayi belajar menelan tanpa tersedak.",
        isCorrect: true,
      },
      {
        title: "Kasar dengan gumpalan besar",
        info: "Terlalu kasar untuk usia ini, risiko tersedak tinggi.",
      },
      {
        title: "Lumat dengan garpu kasar",
        info: "Masih terlalu kasar untuk awal MPASI, bisa bikin bayi tersedak.",
      },
      {
        title: "Potongan besar & keras",
        info: "Sangat berbahaya! Bayi belum bisa mengunyah dengan baik.",
      },
    ],
    buttonText: "Mari Mengolah!",
  },
  {
    id: 4,
    title: "Teknik Mengolah",
    description: "Pilih jawaban yang paling tepat untuk setiap usia bayi.",
    type: "sub-questions",
    subQuestions: [
      {
        age: "6-8 Bulan",
        question: "Tekstur awal MPASI yang paling direkomendasikan?",
        tip: "Mulai dengan tekstur halus agar bayi belajar menelan tanpa tersedak.",
        options: [
          { title: "Makanan keluarga cincang kasar", isCorrect: false },
          { title: "Puree kental atau mashed halus", isCorrect: true },
          { title: "Finger food besar & keras", isCorrect: false },
        ],
      },
      {
        age: "9-11 Bulan",
        question: "Tekstur yang paling sesuai sekarang?",
        tip: "Bayi sudah mulai bisa mengunyah makanan lembut dan finger food kecil.",
        options: [
          { title: "Puree halus seperti 6 bulan", isCorrect: false },
          { title: "Nasi tim lembek atau cincang halus", isCorrect: true },
          { title: "Makanan keluarga utuh & keras", isCorrect: false },
        ],
      },
      {
        age: "12 Bulan+",
        question: "Bolehkah memberikan menu keluarga?",
        tip: "Ya, tapi sesuaikan rasa: kurangi garam, gula, dan pedas secara signifikan.",
        options: [
          { title: "Belum boleh sama sekali", isCorrect: false },
          { title: "Boleh, dengan penyesuaian rasa", isCorrect: true },
          { title: "Hanya bubur halus selamanya", isCorrect: false },
        ],
      },
    ],
    buttonText: "Menuju Lab Takaran!",
  },
  {
    id: 5,
    title: "Lab Takaran Gizi",
    description:
      "Geser slider untuk menyusun piring MPASI ideal. Bayi butuh banyak protein & lemak, tapi serat secukupnya saja.",
    type: "portion-slider",
    buttonText: "Simpan & Selesai!",
    idealPortions: {
      karbo: { min: 30, max: 40 },
      prohe: { min: 20, max: 30 },
      pronab: { min: 10, max: 15 },
      lemak: { min: 15, max: 20 },
      sayurBuah: { min: 15, max: 25 },
    },
  },
  {
    id: 6,
    title: "Pantangan MPASI",
    description:
      "Pilih makanan yang **boleh** diberikan pada bayi 6-12 bulan (pilih semua yang benar!).",
    type: "multi-select-market",
    marketItems: [
      {
        emoji: "🥛",
        name: "Susu Sapi Murni",
        isHealthy: false,
        reason:
          "Belum boleh sebelum 12 bulan, risiko alergi & ganggu penyerapan zat besi.",
      },
      { emoji: "🍌", name: "Pisang Matang", isHealthy: true },
      { emoji: "🥚", name: "Telur Rebus Kuningnya", isHealthy: true },
      {
        emoji: "🍯",
        name: "Madu",
        isHealthy: false,
        reason: "Risiko botulisme tinggi pada bayi <1 tahun.",
      },
      { emoji: "🥦", name: "Brokoli Kukus", isHealthy: true },
      {
        emoji: "🧂",
        name: "Garam Tambahan",
        isHealthy: false,
        reason: "Ginjal bayi belum siap, hindari tambahan garam.",
      },
      { emoji: "🍠", name: "Ubi Jalar Kukus", isHealthy: true },
    ],
    maxSelections: 4, // 4 yang benar
    buttonText: "Lanjut ke Bonus Level!",
  },
  {
    id: 7,
    title: "Jadwal MPASI Harian",
    description:
      "Pilih jumlah kali makan MPASI yang tepat untuk bayi usia 6-8 bulan.",
    type: "single-select",
    options: [
      {
        title: "1 kali sehari",
        info: "Terlalu sedikit, bayi butuh lebih banyak nutrisi.",
      },
      {
        title: "2–3 kali sehari",
        info: "Benar! Mulai 2 kali lalu naik jadi 3 kali sehari.",
        isCorrect: true,
      },
      {
        title: "5–6 kali sehari",
        info: "Terlalu banyak untuk usia ini, perut bayi masih kecil.",
      },
      {
        title: "Hanya ASI saja",
        info: "MPASI sudah mulai diperlukan setelah 6 bulan.",
      },
    ],
    buttonText: "Selesai Petualangan!",
  },
  {
    id: 8,
    title: "Pengenalan Alergi",
    description:
      "Pilih makanan yang sebaiknya **diperkenalkan satu per satu** untuk mengantisipasi alergi pada bayi.",
    type: "single-select",
    options: [
      {
        title: "Semua makanan langsung diberikan sekaligus",
        info: "Tidak tepat! Risiko alergi sulit dilacak.",
      },
      {
        title:
          "Makanan berpotensi alergen diperkenalkan satu per satu (telur, ikan, kacang, susu sapi setelah 12 bulan)",
        info: "Benar sekali! Perkenalkan satu jenis setiap 3–5 hari untuk pantau reaksi alergi.",
        isCorrect: true,
      },
      {
        title: "Hindari semua makanan berprotein hewani",
        info: "Tidak dianjurkan. Prohe sangat penting untuk pertumbuhan.",
      },
      {
        title: "Berikan madu sejak 6 bulan",
        info: "Sangat berbahaya! Risiko botulisme.",
      },
    ],
    buttonText: "Lanjut ke Level Akhir!",
  },
  {
    id: 9,
    title: "Mengatasi GTM (Gerakan Tutup Mulut)",
    description:
      "Pilih semua cara yang efektif untuk mengatasi GTM pada bayi (pilih semua yang benar!).",
    type: "multi-select-market",
    marketItems: [
      {
        emoji: "🎨",
        name: "Beri makanan dengan bentuk & warna menarik",
        isHealthy: true,
      },
      {
        emoji: "👶",
        name: "Biarkan bayi memegang makanan sendiri (finger food)",
        isHealthy: true,
      },
      {
        emoji: "🍽️",
        name: "Paksa makan sampai habis",
        isHealthy: false,
        reason: "Justru bikin trauma & semakin GTM.",
      },
      {
        emoji: "😊",
        name: "Makan bersama keluarga dengan suasana menyenangkan",
        isHealthy: true,
      },
      {
        emoji: "📺",
        name: "Beri makan sambil nonton gadget",
        isHealthy: false,
        reason: "Mengganggu fokus makan & bisa bikin overeating.",
      },
      {
        emoji: "⏰",
        name: "Jadwal makan teratur tapi tidak dipaksa",
        isHealthy: true,
      },
    ],
    maxSelections: 4,
    buttonText: "Petualangan selanjutnya!",
  },
  {
    id: 10,
    title: "Superfood Lokal untuk MPASI",
    description:
      "Pilih bahan lokal Indonesia yang sangat kaya nutrisi untuk MPASI bayi.",
    type: "single-select",
    options: [
      {
        title: "Daun Kelor",
        info: "Kaya zat besi, vitamin A, C, kalsium – disebut superfood untuk cegah anemia.",
        isCorrect: true,
      },
      {
        title: "Beras Putih Biasa",
        info: "Baik sebagai karbo, tapi kurang nutrisi dibanding beras merah atau ubi.",
      },
      { title: "Gula Pasir", info: "Tidak dianjurkan untuk bayi <2 tahun." },
      {
        title: "Minyak Goreng Biasa",
        info: "Kurang optimal. Lebih baik minyak kelapa atau santan.",
      },
    ],
    buttonText: "Selesai & Lihat Hasil!",
  },
];

// "use client";

// import { useState, useEffect } from "react";
// import Card from "@/components/Card";
// import { XpHeader } from "@/components/XpHeader";
// import { SingleSelectQuestion } from "@/components/quiz/SingleSelectQuestion";
// import { MultiSelectMarket } from "@/components/quiz/MultiSelectMarket";
// import { SubQuestions } from "@/components/quiz/SubQuestions";
// import { Portions, PortionSlider } from "@/components/quiz/PortionSlider";
// import { quizQuestions } from "@/data/quizData";

// export default function Quiz() {
//   const xp = 100;
//   const baseProgress = 0;

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const currentQuestion = quizQuestions[currentQuestionIndex];
//   const [points, setPoints] = useState(0);
//   const [level, setLevel] = useState(1);

//   const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
//     null,
//   );
//   const [selectedMarketIndices, setSelectedMarketIndices] = useState<number[]>(
//     [],
//   );
//   const [subIndex, setSubIndex] = useState(0);
//   const [subFeedback, setSubFeedback] = useState<string | null>(null);

//   const [portions, setPortions] = useState<Portions>({
//     karbo: 35,
//     prohe: 25,
//     pronab: 12,
//     lemak: 18,
//     sayurBuah: 20,
//   });

//   const totalQuestions = quizQuestions.length;
//   const subCount = currentQuestion.subQuestions?.length || 0;

//   const progress =
//     ((currentQuestionIndex + (subIndex + 1) / (subCount || 1)) /
//       totalQuestions) *
//     100;

//   useEffect(() => {
//     const completedQuestions =
//       currentQuestionIndex +
//       (currentQuestion.type === "sub-questions" ? subIndex / subCount : 0);
//     setLevel(Math.floor(completedQuestions / 2) + 1);
//   }, [currentQuestionIndex, subIndex, currentQuestion.type, subCount]);

//   const handleNext = () => {
//     let addedPoints = 0;

//     if (currentQuestion.type === "single-select" && currentQuestion.options) {
//       const selected = currentQuestion.options[selectedOptionIndex!];
//       if (selected?.isCorrect) addedPoints += 150;
//     }

//     if (
//       currentQuestion.type === "multi-select-market" &&
//       currentQuestion.marketItems
//     ) {
//       selectedMarketIndices.forEach((idx) => {
//         if (currentQuestion.marketItems![idx].isHealthy) {
//           addedPoints += 40;
//         } else {
//           addedPoints -= 30;
//         }
//       });
//       if (selectedMarketIndices.length === currentQuestion.maxSelections)
//         addedPoints += 50;
//     }

//     if (currentQuestion.type === "sub-questions") {
//       if (
//         currentQuestion.subQuestions?.[subIndex].options[selectedOptionIndex!]
//           ?.isCorrect
//       ) {
//         addedPoints += 70;
//       } else {
//         addedPoints -= 20;
//       }
//     }

//     // Portion-slider (5)
//     if (currentQuestion.type === "portion-slider") {
//       const ideal = currentQuestion.idealPortions;
//       if (ideal) {
//         if (totalPortion !== 100) {
//           addedPoints += 0;
//         } else {
//           const inRange =
//             portions.karbo >= ideal.karbo.min &&
//             portions.karbo <= ideal.karbo.max &&
//             portions.prohe >= ideal.prohe.min &&
//             portions.prohe <= ideal.prohe.max &&
//             portions.pronab >= ideal.pronab.min &&
//             portions.pronab <= ideal.pronab.max &&
//             portions.lemak >= ideal.lemak.min &&
//             portions.lemak <= ideal.lemak.max &&
//             portions.sayurBuah >= ideal.sayurBuah.min &&
//             portions.sayurBuah <= ideal.sayurBuah.max;
//           addedPoints += inRange ? 150 : 60;
//         }
//       }
//     }

//     // Bonus akhir kalau semua soal selesai dengan baik (opsional)
//     // if (currentQuestionIndex === quizQuestions.length - 1) {
//     //   if (points + addedPoints >= 900) addedPoints += 100; // bonus kalau hampir maks
//     // }

//     setPoints((prev) => Math.max(0, prev + addedPoints));

//     if (currentQuestion.type === "sub-questions") {
//       if (subIndex < (currentQuestion.subQuestions?.length || 0) - 1) {
//         setSubIndex(subIndex + 1);
//         setSelectedOptionIndex(null);
//         setSubFeedback(null);
//       } else {
//         if (currentQuestionIndex < quizQuestions.length - 1) {
//           setCurrentQuestionIndex(currentQuestionIndex + 1);
//         } else {
//           localStorage.setItem("quizPoints", (points + addedPoints).toString());
//           window.location.href = "/quiz/result";
//         }
//         setSubIndex(0);
//       }
//     } else if (currentQuestion.type === "portion-slider") {
//       setPortions({
//         karbo: 30,
//         prohe: 20,
//         pronab: 10,
//         lemak: 15,
//         sayurBuah: 25,
//       });
//       if (currentQuestionIndex < quizQuestions.length - 1) {
//         setCurrentQuestionIndex(currentQuestionIndex + 1);
//       } else {
//         localStorage.setItem("quizPoints", (points + addedPoints).toString());
//         window.location.href = "/quiz/result";
//       }
//     } else {
//       if (currentQuestionIndex < quizQuestions.length - 1) {
//         setCurrentQuestionIndex(currentQuestionIndex + 1);
//       } else {
//         localStorage.setItem("quizPoints", (points + addedPoints).toString());
//         window.location.href = "/quiz/result";
//       }
//     }
//     setSelectedOptionIndex(null);
//     setSelectedMarketIndices([]);
//     setSubFeedback(null);
//   };

//   const totalPortion = Object.values(portions).reduce((a, b) => a + b, 0);
//   const isTotal100 = totalPortion === 100;

//   const getStatus = () => {
//     if (!isTotal100)
//       return { text: "Total harus 100%", color: "text-red-500", hint: "" };
//     const ideal = currentQuestion.idealPortions;
//     if (!ideal) return { text: "Seimbang!", color: "text-green-600", hint: "" };

//     const issues: string[] = [];
//     if (portions.karbo < ideal.karbo.min || portions.karbo > ideal.karbo.max)
//       issues.push("karbohidrat");
//     if (portions.prohe < ideal.prohe.min || portions.prohe > ideal.prohe.max)
//       issues.push("protein hewani");
//     if (
//       portions.pronab < ideal.pronab.min ||
//       portions.pronab > ideal.pronab.max
//     )
//       issues.push("protein nabati");
//     if (portions.lemak < ideal.lemak.min || portions.lemak > ideal.lemak.max)
//       issues.push("lemak");
//     if (
//       portions.sayurBuah < ideal.sayurBuah.min ||
//       portions.sayurBuah > ideal.sayurBuah.max
//     )
//       issues.push("sayur & buah");

//     if (issues.length === 0)
//       return {
//         text: "Seimbang!",
//         color: "text-green-600",
//         hint: "Bagus sekali, Bunda!",
//       };
//     return {
//       text: "Belum Seimbang",
//       color: "text-red-500",
//       hint: `kurang ${issues.join(", ")}`,
//     };
//   };

//   const status = getStatus();

//   const canProceed =
//     currentQuestion.type === "single-select"
//       ? selectedOptionIndex !== null
//       : currentQuestion.type === "multi-select-market"
//         ? selectedMarketIndices.length === (currentQuestion.maxSelections || 5)
//         : currentQuestion.type === "sub-questions"
//           ? // ? selectedOptionIndex !== null &&
//             //   currentQuestion.subQuestions?.[subIndex].options[selectedOptionIndex]
//             //     .isCorrect
//             selectedOptionIndex !== null
//           : currentQuestion.type === "portion-slider"
//             ? isTotal100 && status.text === "Seimbang!"
//             : true;

//   return (
//     <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-orange-100">
//       <main className="flex p-4 w-full max-w-md md:max-w-lg text-black flex-col gap-6">
//         <Card className="border-0 border-none!">
//           <XpHeader
//             points={points}
//             level={level}
//             progressPercentage={progress}
//           />
//         </Card>

//         <Card>
//           <div className="flex flex-col items-center gap-6">
//             <h1 className="text-2xl md:text-4xl font-medium text-center tracking-tight mb-2">
//               {currentQuestion.id}. {currentQuestion.title}
//             </h1>

//             <p className="text-center text-black text-sm max-w-prose mb-6">
//               {currentQuestion.description}
//             </p>

//             {currentQuestion.type === "single-select" &&
//               currentQuestion.options && (
//                 <SingleSelectQuestion
//                   question={currentQuestion}
//                   selectedIndex={selectedOptionIndex}
//                   onSelect={setSelectedOptionIndex}
//                 />
//               )}

//             {currentQuestion.type === "multi-select-market" &&
//               currentQuestion.marketItems && (
//                 <MultiSelectMarket
//                   question={currentQuestion}
//                   selectedIndices={selectedMarketIndices}
//                   onToggle={(idx) => {
//                     if (selectedMarketIndices.includes(idx)) {
//                       setSelectedMarketIndices(
//                         selectedMarketIndices.filter((i) => i !== idx),
//                       );
//                     } else if (
//                       selectedMarketIndices.length <
//                       (currentQuestion.maxSelections || 5)
//                     ) {
//                       setSelectedMarketIndices([...selectedMarketIndices, idx]);
//                     }
//                   }}
//                 />
//               )}

//             {currentQuestion.type === "sub-questions" &&
//               currentQuestion.subQuestions && (
//                 <SubQuestions
//                   question={currentQuestion}
//                   subIndex={subIndex}
//                   selectedIndex={selectedOptionIndex}
//                   feedback={null}
//                   // onSelect={handleSubSelect}
//                   onSelect={(idx) => setSelectedOptionIndex(idx)}
//                 />
//               )}

//             {currentQuestion.type === "portion-slider" && (
//               <PortionSlider
//                 portions={portions}
//                 setPortions={setPortions}
//                 status={status}
//                 totalPortion={totalPortion}
//               />
//             )}

//             {canProceed && (
//               <button
//                 onClick={handleNext}
//                 className="mt-8 w-full max-w-xs bg-orange-600 hover:bg-orange-700 text-white text-xl font-bold py-5 rounded-2xl shadow-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-400"
//               >
//                 {currentQuestion.type === "portion-slider"
//                   ? "Simpan & Lanjut"
//                   : currentQuestion.type === "sub-questions" &&
//                       subIndex < (currentQuestion.subQuestions?.length || 0) - 1
//                     ? "Selanjutnya"
//                     : currentQuestion.buttonText}
//               </button>
//             )}
//           </div>
//         </Card>
//       </main>
//     </div>
//   );
// }
