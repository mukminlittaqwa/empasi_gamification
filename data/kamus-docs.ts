export type DocItem = {
  title: string;
  description: string;
  embedUrl: string; // link pub?embedded=true
};

export const kamusDocs: DocItem[] = [
  {
    title: "Panduan MPASI 1000 Hari Pertama Kehidupan",
    description: `Konsep "1000 Hari Pertama Kehidupan" (1000 HPK) bukan sekadar slogan kesehatan masyarakat atau terminologi administratif semata, melainkan sebuah kerangka kerja biologis fundamental yang mendefinisikan arsitektur kesehatan manusia seumur hidup.`,
    embedUrl:
      "https://docs.google.com/document/d/e/2PACX-1vQWZaJGPGz_am5pndSavTj_NW623jJJw7lnhs-oCY1tfrZg5Z8XjHA6I4RCcM4x22QGjVn1sRwLMTXC/pub?embedded=true",
  },
];
