export type QuizQuestion = {
  id: number;
  title: string;
  description: string;
  type:
    | "single-select"
    | "multi-select-market"
    | "sub-questions"
    | "portion-slider";
  options?: { title: string; info?: string; examples?: string }[];
  marketItems?: { emoji: string; name: string; isHealthy: boolean }[];
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
    title: "Mengenal kebutuhan nutrisi",
    description:
      "Pilih satu nutrisi utama yang paling penting untuk mencegah stunting",
    type: "single-select",
    options: [
      { title: "Karbohidrat", info: "...", examples: "..." },
      {
        title: "Protein Hewani (Prohe)",
        info: "Paling penting untuk mencegah stunting & otak",
        examples: "Daging, telur, ikan",
      },
      { title: "Protein Nabati", info: "...", examples: "..." },
      { title: "Lemak Tambahan", info: "...", examples: "..." },
      { title: "Sayuran & Buah", info: "...", examples: "..." },
    ],
    buttonText: "Lanjut ke Pasar",
  },
  {
    id: 2,
    title: "Pasar Bahan Pangan",
    description:
      "Pilih 5 bahan yang bernutrisi tinggi & aman untuk MPASI bayi 6+ bulan. Hindari jebakan!",
    type: "multi-select-market",
    marketItems: [
      { emoji: "🍯", name: "Madu (Raw)", isHealthy: false },
      { emoji: "🥩", name: "Daging Ayam", isHealthy: true },
      { emoji: "🥚", name: "Telur Ayam", isHealthy: true },
      { emoji: "🍚", name: "Beras", isHealthy: true },
      { emoji: "🐟", name: "Ikan Salmon", isHealthy: true },
      { emoji: "🥑", name: "Alpukat", isHealthy: true },
      { emoji: "🥕", name: "Wortel", isHealthy: true },
    ],
    maxSelections: 5,
    buttonText: "Lanjut ke Dapur",
  },
  {
    id: 3,
    title: "Olahan Tekstur Tepat",
    description: "Pilih tekstur yang sesuai untuk bayi usia 6-8 bulan",
    type: "single-select",
    options: [
      { title: "Halus seperti bubur" },
      { title: "Kasar dengan gumpalan kecil" },
      { title: "Lumat dengan garpu" },
      { title: "Potongan besar" },
    ],
    buttonText: "Selesai Quiz!",
  },
  {
    id: 4,
    title: "Teknik Mengolah",
    description: "Pilih jawaban yang tepat untuk usia bayi tertentu",
    type: "sub-questions",
    subQuestions: [
      {
        age: "12 Bulan+",
        question: "Menu keluarga sudah boleh diberikan?",
        tip: "Tips: Anak 1 tahun sudah bisa makan menu keluarga dengan rasa yang disesuaikan (kurangi garam/gula/pedas).",
        options: [
          { title: "Belum boleh", isCorrect: false },
          { title: "Boleh menu sama dengan keluarga", isCorrect: true },
          { title: "Hanya bubur", isCorrect: false },
        ],
      },
      {
        age: "9-11 Bulan",
        question: "Tekstur makanan yang paling tepat?",
        tip: "Tips: Mulai dari nasi tim lembek atau cincang halus, finger food lunak.",
        options: [
          { title: "Puree halus seperti 6 bulan", isCorrect: false },
          { title: "Cincang halus atau nasi tim", isCorrect: true },
          { title: "Makanan keluarga utuh", isCorrect: false },
        ],
      },
      {
        age: "6-8 Bulan",
        question: "Tekstur awal MPASI yang direkomendasikan?",
        tip: "Tips: Mulai dengan puree kental/lumat halus untuk adaptasi.",
        options: [
          { title: "Makanan keluarga cincang", isCorrect: false },
          { title: "Puree kental atau mashed", isCorrect: true },
          { title: "Finger food besar", isCorrect: false },
        ],
      },
    ],
    buttonText: "Selesai Quiz!",
  },
  {
    id: 5,
    title: "Lab Takaran Gizi",
    description:
      "Geser slider untuk menakar porsi 'piring MPASI' yang ideal. Ingat: Bayi butuh banyak protein & lemak, tapi serat sedikit saja.",
    type: "portion-slider",
    buttonText: "Simpan & Lanjut",
    idealPortions: {
      karbo: { min: 30, max: 40 },
      prohe: { min: 20, max: 30 },
      pronab: { min: 10, max: 15 },
      lemak: { min: 15, max: 20 },
      sayurBuah: { min: 15, max: 25 },
    },
  },
];
