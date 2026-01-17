// export type QuizQuestion = {
//   id: number;
//   title: string;
//   description: string;
//   type:
//     | "single-select"
//     | "multi-select-market"
//     | "sub-questions"
//     | "portion-slider";
//   options?: { title: string; info?: string; examples?: string }[];
//   marketItems?: { emoji: string; name: string; isHealthy: boolean }[];
//   maxSelections?: number;
//   buttonText: string;
//   subQuestions?: {
//     age: string;
//     question: string;
//     tip: string;
//     options: { title: string; isCorrect: boolean }[];
//   }[];
//   idealPortions?: {
//     karbo: { min: number; max: number };
//     prohe: { min: number; max: number };
//     pronab: { min: number; max: number };
//     lemak: { min: number; max: number };
//     sayurBuah: { min: number; max: number };
//   };
// };

// export const quizQuestions: QuizQuestion[] = [
//   {
//     id: 1,
//     title: "Mengenal kebutuhan nutrisi",
//     description:
//       "Pilih satu nutrisi utama yang paling penting untuk mencegah stunting",
//     type: "single-select",
//     options: [
//       { title: "Karbohidrat", info: "...", examples: "..." },
//       {
//         title: "Protein Hewani (Prohe)",
//         info: "Paling penting untuk mencegah stunting & otak",
//         examples: "Daging, telur, ikan",
//       },
//       { title: "Protein Nabati", info: "...", examples: "..." },
//       { title: "Lemak Tambahan", info: "...", examples: "..." },
//       { title: "Sayuran & Buah", info: "...", examples: "..." },
//     ],
//     buttonText: "Lanjut ke Pasar",
//   },
//   {
//     id: 2,
//     title: "Pasar Bahan Pangan",
//     description:
//       "Pilih 5 bahan yang bernutrisi tinggi & aman untuk MPASI bayi 6+ bulan. Hindari jebakan!",
//     type: "multi-select-market",
//     marketItems: [
//       { emoji: "🥗", name: "Kacang ijo", isHealthy: true },
//       { emoji: "🥩", name: "Daging Ayam", isHealthy: true },
//       { emoji: "🥚", name: "Telur Ayam", isHealthy: true },
//       { emoji: "🍚", name: "Beras", isHealthy: true },
//       { emoji: "🐟", name: "Ikan Kembung", isHealthy: true },
//       { emoji: "🥑", name: "Alpukat", isHealthy: true },
//       { emoji: "🥕", name: "Wortel", isHealthy: true },
//     ],
//     maxSelections: 5,
//     buttonText: "Lanjut ke Dapur",
//   },
//   {
//     id: 3,
//     title: "Olahan Tekstur Tepat",
//     description: "Pilih tekstur yang sesuai untuk bayi usia 6-8 bulan",
//     type: "single-select",
//     options: [
//       { title: "Halus seperti bubur" },
//       { title: "Kasar dengan gumpalan kecil" },
//       { title: "Lumat dengan garpu" },
//       { title: "Potongan besar" },
//     ],
//     buttonText: "Mari mengolah",
//   },
//   {
//     id: 4,
//     title: "Teknik Mengolah",
//     description: "Pilih jawaban yang tepat untuk usia bayi tertentu",
//     type: "sub-questions",
//     subQuestions: [
//       {
//         age: "12 Bulan+",
//         question: "Menu keluarga sudah boleh diberikan?",
//         tip: "Tips: Anak 1 tahun sudah bisa makan menu keluarga dengan rasa yang disesuaikan (kurangi garam/gula/pedas).",
//         options: [
//           { title: "Belum boleh", isCorrect: false },
//           { title: "Boleh menu sama dengan keluarga", isCorrect: true },
//           { title: "Hanya bubur", isCorrect: false },
//         ],
//       },
//       {
//         age: "9-11 Bulan",
//         question: "Tekstur makanan yang paling tepat?",
//         tip: "Tips: Mulai dari nasi tim lembek atau cincang halus, finger food lunak.",
//         options: [
//           { title: "Puree halus seperti 6 bulan", isCorrect: false },
//           { title: "Cincang halus atau nasi tim", isCorrect: true },
//           { title: "Makanan keluarga utuh", isCorrect: false },
//         ],
//       },
//       {
//         age: "6-8 Bulan",
//         question: "Tekstur awal MPASI yang direkomendasikan?",
//         tip: "Tips: Mulai dengan puree kental/lumat halus untuk adaptasi.",
//         options: [
//           { title: "Makanan keluarga cincang", isCorrect: false },
//           { title: "Puree kental atau mashed", isCorrect: true },
//           { title: "Finger food besar", isCorrect: false },
//         ],
//       },
//     ],
//     buttonText: "Lab Takaran Gizi",
//   },
//   {
//     id: 5,
//     title: "Lab Takaran Gizi",
//     description:
//       "Geser slider untuk menakar porsi 'piring MPASI' yang ideal. Ingat: Bayi butuh banyak protein & lemak, tapi serat sedikit saja.",
//     type: "portion-slider",
//     buttonText: "Simpan & Lanjut",
//     idealPortions: {
//       karbo: { min: 30, max: 40 },
//       prohe: { min: 20, max: 30 },
//       pronab: { min: 10, max: 15 },
//       lemak: { min: 15, max: 20 },
//       sayurBuah: { min: 15, max: 25 },
//     },
//   },
// ];

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
  // Soal baru 6: Pantangan MPASI
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
  // Soal baru 7: Jadwal MPASI
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
];
