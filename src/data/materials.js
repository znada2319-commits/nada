export const materialSections = [
  {
    id: "pengertian-larutan",
    title: "1. Pengertian Larutan",
    badge: "Konsep Dasar",
    summary: "Larutan adalah campuran homogen antara zat terlarut (solute) dan pelarut (solvent).",
    content: `
Larutan terbentuk ketika partikel zat terlarut tersebar merata di antara partikel pelarut hingga berukuran molekul atau ion sehingga tidak dapat dibedakan lagi secara kasat mata maupun mikroskop cahaya.

Dalam kehidupan sehari-hari, pelarut yang paling umum digunakan adalah air (pelarut universal). Namun, meskipun dua zat sama-sama larut sempurna dalam air, kemampuan larutan tersebut dalam menghantarkan arus listrik bisa sangat berbeda!

Contohnya:
- **Larutan garam dapur (NaCl dalam air):** sangat mudah menghantarkan listrik.
- **Larutan gula pasir (sukrosa dalam air):** larut sempurna dan jernih, tetapi tidak menghantarkan arus listrik sama sekali.
    `,
    takeaway: "Kemampuan larut (kelarutan) tidak selalu berarti dapat menghantarkan listrik."
  },
  {
    id: "larutan-elektrolit",
    title: "2. Larutan Elektrolit & Pembentukan Ion",
    badge: "Mekanisme Ionik",
    summary: "Larutan elektrolit dapat menghantarkan arus listrik karena mengandung partikel bermuatan (ion) yang bebas bergerak.",
    content: `
Dua mekanisme utama pembentukan ion saat zat dilarutkan dalam air:

1. **Disosiasi (Penguraian Ion):**
   Terjadi pada senyawa ionik (seperti NaCl, NaOH, KOH). Senyawa ini sudah tersusun dari kation (+) dan anion (-) dalam kisi kristal padatnya. Saat masuk ke air, molekul air yang bersifat polar menarik dan memisahkan ion-ion tersebut sehingga terlepas dan bebas bergerak.
   *Contoh:* NaCl(s) → Na⁺(aq) + Cl⁻(aq)

2. **Ionisasi (Pembentukan Ion Baru):**
   Terjadi pada senyawa kovalen polar (seperti asam klorida HCl, asam asetat CH₃COOH, amonia NH₃). Senyawa ini awalnya berupa molekul netral. Ketika bereaksi dengan molekul air, terjadi pemutusan ikatan kovalen polar menghasilkan ion-ion baru.
   *Contoh:* HCl(g) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq)

**Peran Ion Bergerak:**
Di dalam larutan, yang membawa muatan listrik bukanlah elektron bebas (seperti pada kabel tembaga), melainkan **ion-ion positif (kation) dan ion-ion negatif (anion) yang bermigrasi** menuju elektroda yang berlawanan muatannya saat diberi tegangan listrik.
    `,
    takeaway: "Arus listrik dalam larutan dihantarkan oleh aliran ion-ion bebas, bukan elektron bebas."
  },
  {
    id: "larutan-non-elektrolit",
    title: "3. Larutan Non-Elektrolit",
    badge: "Molekul Netral",
    summary: "Larutan yang tidak dapat menghantarkan arus listrik karena zat terlarut tetap berupa molekul netral.",
    content: `
Senyawa kovalen non-polar atau senyawa kovalen polar tertentu larut dalam air dengan membentuk ikatan hidrogen, namun tidak mengalami ionisasi sama sekali.

Partikel yang terdispersi dalam air seluruhnya berupa **molekul netral** yang tidak memiliki muatan listrik. Karena tidak ada pembawa muatan yang dapat ditarik oleh medan listrik antar elektroda, arus listrik tidak dapat mengalir.

*Contoh senyawa non-elektrolit:*
- Gula pasir / Sukrosa (C₁₂H₂₂O₁₁)
- Urea (CO(NH₂)₂)
- Glukosa (C₆H₁₂O₆)
- Etanol / Alkohol (C₂H₅OH)
    `,
    takeaway: "Molekul netral tidak memiliki muatan, sehingga tidak mampu mengalirkan arus listrik."
  },
  {
    id: "perbandingan-kategori",
    title: "4. Perbandingan Tiga Jenis Larutan",
    badge: "Tabel Inti",
    summary: "Klasifikasi berdasarkan derajat ionisasi (α), jumlah ion, dan respons visual alat uji.",
    tableData: [
      {
        aspect: "Derajat Ionisasi (α)",
        strong: "α ≈ 1 (Hampir 100%)",
        weak: "0 < α < 1 (Hanya sebagian kecil)",
        none: "α = 0 (Sama sekali tidak terionisasi)"
      },
      {
        aspect: "Keberadaan Partikel",
        strong: "Banyak ion bebas, hampir tidak ada molekul sisa",
        weak: "Dominan molekul netral, sedikit ion bebas",
        none: "Seluruhnya molekul netral tanpa ion dari zat terlarut"
      },
      {
        aspect: "Nyala Lampu Indikator",
        strong: "Menyala terang",
        weak: "Menyala redup",
        none: "Mati (tidak menyala)"
      },
      {
        aspect: "Gelembung Gas di Elektroda",
        strong: "Banyak gelembung gas",
        weak: "Sedikit gelembung gas",
        none: "Tidak ada gelembung gas"
      },
      {
        aspect: "Contoh Senyawa",
        strong: "NaCl, HCl, H₂SO₄, NaOH, KOH",
        weak: "CH₃COOH, HF, NH₃(aq), H₂CO₃",
        none: "Sukrosa (gula), Urea, Glukosa, Etanol"
      }
    ],
    takeaway: "Respons nyala lampu dan gelembung gas adalah indikator kualitatif yang mencerminkan konsentrasi ion bebas dalam larutan."
  },
  {
    id: "sehari-hari",
    title: "5. Penerapan & Contoh dalam Kehidupan Nyata",
    badge: "Aplikasi Nyata",
    summary: "Peran larutan elektrolit dalam tubuh manusia, teknologi, dan alam sekitar.",
    cards: [
      {
        title: "Cairan Isotonik & Tubuh Manusia",
        desc: "Tubuh kita membutuhkan elektrolit seperti Na⁺, K⁺, dan Cl⁻ untuk transmisi impuls saraf otak dan kontraksi otot jantung.",
        type: "Elektrolit Kuat / Lemah"
      },
      {
        title: "Aki Kendaraan Bermotor (Accu)",
        desc: "Menggunakan larutan asam sulfat (H₂SO₄) sebagai larutan elektrolit kuat untuk reaksi transfer elektron timbal-asam.",
        type: "Elektrolit Kuat"
      },
      {
        title: "Cuka Dapur untuk Masakan",
        desc: "Asam asetat encer (CH₃COOH 4-5%) terionisasi sebagian, memberikan rasa asam segar yang aman bagi makanan.",
        type: "Elektrolit Lemah"
      },
      {
        title: "Sirup & Minuman Manis",
        desc: "Gula pasir larut membentuk larutan kental manis yang tidak menghantarkan listrik karena tersusun dari molekul sukrosa.",
        type: "Non-Elektrolit"
      }
    ]
  }
];
