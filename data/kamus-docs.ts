export type DocItem = {
  title: string;
  description: string;
  pdfUrl: string; // link PDF direct atau Google Drive preview
};

export const kamusDocs: DocItem[] = [
  {
    title: "Panduan MPASI 1000 Hari Pertama Kehidupan",
    description: `Konsep "1000 Hari Pertama Kehidupan" (1000 HPK) bukan sekadar slogan kesehatan masyarakat atau terminologi administratif semata, melainkan sebuah kerangka kerja biologis fundamental yang mendefinisikan arsitektur kesehatan manusia seumur hidup.`,
    pdfUrl:
      "https://drive.google.com/file/d/1bDGXNGN0_E1AXSpvUfV1FVD5mImuIeZy/preview",
  },
];
