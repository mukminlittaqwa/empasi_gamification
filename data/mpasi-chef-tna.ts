export type KomponenMpasi = {
  kategori: string;
  items: string[];
};

export type TeksturUsia = {
  usia: string;
  deskripsi: string;
};

export type MenuMingguan = {
  hari: string;
  nama: string;
  bahanUtama: string[];
  lemak: string[];
  aromaBumbu?: string[];
  catatan?: string;
};

export type ResepAndalan = {
  nama: string;
  deskripsi: string;
  bahan: string[];
  bumbuAromatik?: string[];
  caraMembuat: string[];
  catatan?: string;
};

export type TipsPengolahan = {
  judul: string;
  isi: string;
};

export const mpasiChefTna = {
  komponenUtama: [
    {
      kategori: "Karbohidrat",
      items: [
        "Beras (putih/merah)",
        "Jagung",
        "Ubi (ungu/cilembu)",
        "Singkong",
        "Kentang",
        "Sagu",
      ],
    },
    {
      kategori: "Protein Hewani",
      items: [
        "Ikan kembung",
        "Lele",
        "Belut",
        "Patin",
        "Hati ayam",
        "Telur (ayam/bebek/puyuh)",
        "Daging sapi",
        "Ayam kampung",
      ],
    },
    {
      kategori: "Protein Nabati (Prona)",
      items: ["Tempe", "Tahu", "Kacang merah", "Kacang hijau", "Edamame lokal"],
    },
    {
      kategori: "Sayuran",
      items: [
        "Bayam",
        "Kangkung",
        "Wortel",
        "Labu siam",
        "Daun kelor",
        "Brokoli",
        "Buncis",
      ],
    },
    {
      kategori: "Lemak Tambahan",
      items: [
        "Santan (sangat baik!)",
        "Minyak kelapa",
        "Minyak ayam (kulit ayam)",
        "Mentega",
      ],
    },
  ] as KomponenMpasi[],

  teksturUsia: [
    {
      usia: "6-8 Bulan",
      deskripsi:
        "Bubur lumat (saring 100%). Tekstur kental, tidak jatuh jika sendok dibalik.",
    },
    {
      usia: "9-11 Bulan",
      deskripsi: "Bubur kasar, nasi tim, atau makanan cincang kasar (minced).",
    },
    {
      usia: "12-23 Bulan",
      deskripsi: "Makanan keluarga (nasi utuh dengan lauk dipotong kecil).",
    },
  ] as TeksturUsia[],

  menuMingguan: [
    {
      hari: "Senin",
      nama: "Si Kuning Lele",
      bahanUtama: ["Nasi", "Ikan Lele", "Tahu Putih", "Labu Kuning"],
      lemak: ["Santan segar", "Minyak untuk menumis bumbu kuning"],
      aromaBumbu: ["Daun salam", "Jeruk (menghilangkan amis)"],
    },
    {
      hari: "Selasa",
      nama: "Sop Bola Daging Tempe",
      bahanUtama: [
        "Kentang (kukus lalu lumatkan)",
        "Daging Sapi Giling",
        "Tempe",
      ],
      sayur: ["Wortel", "Buncis"],
      lemak: ["Minyak bawang putih (garlic oil)", "Mentega"],
    },
    {
      hari: "Rabu",
      nama: "Tim Hati Ayam Manis",
      bahanUtama: [
        "Nasi",
        "Hati Ayam (sangat tinggi zat besi)",
        "Kacang Merah (rebus empuk)",
      ],
      sayur: ["Labu Siam (parut)"],
      lemak: ["Minyak kelapa", "Santan"],
      bumbu: [
        "Kecap manis (sedikit, opsional untuk 1th+)",
        "Bawang merah/putih",
      ],
    },
    {
      hari: "Kamis",
      nama: "Bubur Ikan Kembung Daun Kelor",
      bahanUtama: ["Nasi", "Ikan Kembung (kukus, ambil dagingnya)", "Tahu"],
      sayur: ["Daun Kelor (rebus sebentar agar nutrisi terjaga)"],
      lemak: ["Santan kental", "Minyak Canola/Jagung/Kelapa"],
      catatan: "Ikan kembung adalah sumber Omega-3 terbaik lokal.",
    },
    {
      hari: "Jumat",
      nama: "Ubi Ungu Telur Puyuh",
      bahanUtama: ["Ubi Ungu (kukus)", "Telur Puyuh (rebus)"],
      prona: ["Edamame (haluskan)"],
      lemak: [
        "Keju (opsional)",
        "Santan (Ubi ungu sangat cocok dengan santan)",
      ],
      catatan: "Menu snack berat/sarapan, rasanya manis alami.",
    },
    {
      hari: "Sabtu",
      nama: "Soto Ayam Kampung Ceria",
      bahanUtama: ["Nasi/Lontong", "Ayam Kampung suwir/cincang"],
      prona: ["Tauge pendek (rebus matang)"],
      bumbu: ["Kuah soto bening (kunyit, jahe, serai)"],
      lemak: [
        "Kuah kaldu ayam asli",
        "Taburan bawang goreng (haluskan jika perlu)",
      ],
    },
    {
      hari: "Minggu",
      nama: "Pepes Patin Tahu (Tidak Pedas)",
      bahanUtama: ["Ikan Patin (lemak tinggi)", "Tahu Putih"],
      bumbu: [
        "Bumbu dasar putih (bawang merah, putih, kemiri)",
        "Tomat (untuk rasa segar)",
      ],
      cara: ["Bungkus daun pisang, kukus hingga matang"],
      karbo: ["Nasi putih hangat"],
    },
  ] as MenuMingguan[],

  resepAndalan: [
    {
      nama: "Bubur Kembung Santan (Tinggi Omega-3 & Lemak)",
      deskripsi: "Cocok untuk mengejar berat badan (BB) anak.",
      bahan: [
        "2 sdm beras (cuci bersih)",
        "1 ekor ikan kembung (kukus, suwir dagingnya, pastikan tidak ada duri)",
        "1 potong tahu putih",
        "Segenggam bayam",
        "60ml Santan segar/kemasan",
      ],
      bumbuAromatik: ["1 lembar daun salam", "1 siung bawang putih geprek"],
      caraMembuat: [
        "Masak beras dengan air, daun salam, dan bawang putih hingga menjadi bubur.",
        "Masukkan suwiran ikan kembung dan tahu (hancurkan).",
        "Masukkan santan, aduk rata hingga mendidih.",
        "Terakhir masukkan bayam, masak sebentar hingga layu.",
        "Sesuaikan tekstur (saring/blender untuk 6-8 bln, ulek kasar untuk 9+ bln).",
        "Sajikan selagi hangat.",
      ],
    },
    {
      nama: "Nasi Tim Hati Ayam Kecap (Tinggi Zat Besi)",
      deskripsi: "Penting untuk mencegah anemia pada bayi.",
      bahan: [
        "Nasi aron (nasi setengah matang)",
        "1 pasang hati ayam (rebus dengan jahe untuk hilangkan amis, cincang)",
        "1 potong tempe (potong dadu kecil)",
        "Parutan wortel",
        "Minyak ayam atau mentega",
      ],
      caraMembuat: [
        "Tumis bawang merah & putih cincang dengan minyak/mentega hingga harum.",
        "Masukkan hati ayam dan tempe, tumis hingga berubah warna.",
        "Tambahkan sedikit air dan kecap manis (sedikit saja untuk rasa).",
        "Siapkan wadah tahan panas. Tata nasi aron, lalu siram dengan tumisan hati ayam dan wortel di atasnya.",
        "Tambahkan sedikit kaldu/air agar tidak kering.",
        "Kukus selama 20-30 menit hingga matang dan lunak.",
      ],
    },
    {
      nama: "Puree Ubi Ngantang & Telur",
      deskripsi:
        "Menu Snack Berat/Sarapan. Rasanya manis alami, biasanya disukai anak yang sedang GTM (Gerakan Tutup Mulut).",
      bahan: [
        "1 buah ubi Ngantang ukuran sedang (oven/kukus)",
        "1 butir telur ayam (rebus matang)",
        "1 sdt minyak kelapa murni (VCO) atau mentega cair",
      ],
      caraMembuat: [
        "Keruk daging ubi cilembu yang sudah matang.",
        "Campurkan dengan kuning telur dan putih telur (seluruh bagian).",
        "Lumatkan/saring hingga tekstur yang diinginkan.",
        "Jika terlalu kental, tambahkan air matang hangat atau ASIP/Sufor.",
        "Aduk dengan lemak tambahan (minyak/mentega) sebelum disajikan.",
      ],
      catatan: "Cocok untuk anak yang sedang GTM.",
    },
  ] as ResepAndalan[],

  tipsPengolahan: [
    {
      judul: "Ikan Lokal",
      isi: "Selalu periksa duri dengan teliti. Ikan sungai/lokal (Mas, Lele, Patin, Gabus) sangat baik untuk penyembuhan luka dan pertumbuhan.",
    },
    {
      judul: "Santan",
      isi: "Jangan takut menggunakan santan. Santan mengandung asam laurat yang mirip dengan kandungan ASI, sangat baik untuk perkembangan otak bayi.",
    },
    {
      judul: "Menghilangkan Amis",
      isi: "Gunakan bumtik (bumbu aromatik) alami Indonesia seperti jahe, kunyit, daun salam, daun jeruk, dan serai saat merebus protein hewani.",
    },
    {
      judul: "Kacang-kacangan",
      isi: "Rendam kacang merah/hijau semalaman sebelum dimasak agar empuk dan tidak menyebabkan kembung.",
    },
  ] as TipsPengolahan[],
};
