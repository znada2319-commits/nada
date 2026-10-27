export const questions = [
  {
    id: "q1",
    topic: "Daya Hantar Listrik Larutan",
    competency: "Pengertian Larutan Elektrolit & Non-Elektrolit",
    question: "Mengapa larutan garam dapur (NaCl) dapat menghantarkan arus listrik, sedangkan larutan gula pasir (sukrosa) tidak?",
    options: [
      "Gula tidak larut dalam air, sedangkan garam larut sempurna",
      "NaCl terurai menjadi ion Na⁺ dan Cl⁻ yang bebas bergerak membawa muatan",
      "Gula memiliki massa jenis lebih besar dibanding garam dapur",
      "Arus listrik dialirkan oleh elektron bebas yang terlepas dari molekul air"
    ],
    correctAnswer: 1,
    explanation:
      "NaCl adalah senyawa ionik yang terdisosiasi dalam air menjadi kation Na⁺ dan anion Cl⁻. Ion-ion bebas bergerak inilah yang bertindak sebagai pembawa muatan listrik. Sementara itu, gula larut sebagai molekul netral yang tidak bermuatan listrik."
  },
  {
    id: "q2",
    topic: "Konsep Dasar Kelarutan",
    competency: "Pengertian Larutan Elektrolit & Non-Elektrolit",
    question: "Pernyataan manakah di bawah ini yang paling tepat mengenai hubungan antara kelarutan suatu zat dan daya hantar listriknya?",
    options: [
      "Semua zat yang larut sempurna dalam air pasti tergolong elektrolit kuat",
      "Zat yang larut dalam air hanya menghantarkan listrik jika suhunya mendekati titik didih",
      "Kelarutan zat tidak selalu menjamin daya hantar listrik; zat yang larut sebagai molekul netral tetap merupakan non-elektrolit",
      "Semakin cepat suatu zat terlarut, semakin banyak elektron bebas yang dihasilkan dalam larutan"
    ],
    correctAnswer: 2,
    explanation:
      "Kelarutan hanya menyatakan kemampuan suatu zat bercampur homogen dengan pelarut. Sukrosa dan urea larut sangat baik dalam air, namun keduanya adalah non-elektrolit karena partikelnya tetap berupa molekul netral tanpa pembentukan ion."
  },
  {
    id: "q3",
    topic: "Elektrolit Kuat vs Lemah",
    competency: "Klasifikasi Elektrolit",
    question: "Pada konsentrasi yang sama, larutan asam klorida (HCl) membuat lampu uji menyala terang, sedangkan larutan asam cuka (CH₃COOH) menyala redup. Hal ini disebabkan oleh...",
    options: [
      "HCl memiliki derajat ionisasi mendekati 1 (α ≈ 1), sedangkan CH₃COOH terionisasi hanya sebagian kecil (0 < α < 1)",
      "CH₃COOH memiliki ikatan kovalen yang tidak bisa putus sama sekali",
      "Molekul air menolak bereaksi dengan asam cuka",
      "HCl menghasilkan gelembung gas nitrogen yang mempercepat aliran listrik"
    ],
    correctAnswer: 0,
    explanation:
      "HCl tergolong asam kuat yang terionisasi hampir sempurna (α ≈ 1) menghasilkan konsentrasi ion yang tinggi. Sebaliknya, CH₃COOH adalah asam lemah yang hanya terionisasi sebagian kecil sehingga konsentrasi ionnya jauh lebih sedikit, menyebabkan daya hantar listrik lebih lemah dan lampu redup."
  },
  {
    id: "q4",
    topic: "Derajat Ionisasi",
    competency: "Klasifikasi Elektrolit",
    question: "Suatu zat terlarut dilarutkan ke dalam air. Jika nilai derajat ionisasinya adalah α = 0, maka zat tersebut tergolong ke dalam kelompok...",
    options: [
      "Elektrolit kuat",
      "Elektrolit lemah",
      "Non-elektrolit",
      "Superkonduktor larutan"
    ],
    correctAnswer: 2,
    explanation:
      "Nilai α = 0 menunjukkan bahwa zat tersebut sama sekali tidak mengalami ionisasi atau disosiasi di dalam air (100% tetap sebagai molekul netral), sehingga zat tersebut merupakan larutan non-elektrolit."
  },
  {
    id: "q5",
    topic: "Mekanisme Ionisasi dan Disosiasi",
    competency: "Ionisasi & Disosiasi",
    question: "Manakah perbedaan yang benar antara proses 'disosiasi' dan 'ionisasi' dalam larutan?",
    options: [
      "Disosiasi hanya terjadi pada gas, sedangkan ionisasi hanya terjadi pada logam padat",
      "Disosiasi adalah pemisahan ion yang sudah ada pada kristal senyawa ionik, sedangkan ionisasi adalah pembentukan ion baru dari molekul kovalen polar",
      "Disosiasi menghasilkan molekul netral, sedangkan ionisasi menghasilkan kristal endapan",
      "Keduanya adalah istilah yang persis sama tanpa perbedaan mekanisme kimia"
    ],
    correctAnswer: 1,
    explanation:
      "Disosiasi mengacu pada terurainya kisi kristal senyawa ionik (seperti NaCl, KOH) yang sudah memiliki ion sebelum larut. Ionisasi mengacu pada pemutusan ikatan kovalen polar (seperti HCl, CH₃COOH) oleh molekul air sehingga membentuk ion-ion baru yang sebelumnya belum ada."
  },
  {
    id: "q6",
    topic: "Persamaan Reaksi Ionisasi",
    competency: "Ionisasi & Disosiasi",
    question: "Persamaan reaksi yang tepat untuk menunjukkan sifat asam asetat sebagai elektrolit lemah dalam air adalah...",
    options: [
      "CH₃COOH(aq) → C(s) + 2H₂O(l) + CO(g)",
      "CH₃COOH(aq) ⇌ H⁺(aq) + CH₃COO⁻(aq)",
      "CH₃COOH(aq) → CH₃⁺(aq) + COOH⁻(aq)",
      "CH₃COOH(s) + H₂O(l) → CH₄(g) + CO₂(g)"
    ],
    correctAnswer: 1,
    explanation:
      "Asam asetat adalah elektrolit lemah yang mengalami kesetimbangan ionisasi reversibel (ditandai dengan panah bolak-balik ⇌) menghasilkan ion H⁺ (atau ion hidronium H₃O⁺) dan ion asetat CH₃COO⁻."
  },
  {
    id: "q7",
    topic: "Interpretasi Uji Alat Daya Hantar Listrik",
    competency: "Interpretasi Uji Laboratorium",
    question: "Saat menguji suatu larutan X dengan alat uji elektrolit, lampu indikator tidak menyala sama sekali, namun di sekitar kedua elektroda terlihat gelembung-gelembung gas halus. Kesimpulan yang paling tepat adalah...",
    options: [
      "Larutan X pasti merupakan larutan non-elektrolit murni",
      "Larutan X adalah elektrolit lemah dengan konsentrasi ion yang belum cukup kuat menyalakan filamen lampu",
      "Rangkaian alat uji mengalami korsleting total",
      "Elektroda mengalami karat yang menyerap seluruh daya baterai"
    ],
    correctAnswer: 1,
    explanation:
      "Adanya gelembung gas di elektroda menunjukkan telah terjadi reaksi elektrolisis (ada arus listrik yang mengalir). Karena arus listriknya kecil akibat konsentrasi ion yang rendah, daya listrik tidak cukup memanaskan filamen lampu sehingga lampu tidak tampak menyala. Zat tersebut adalah elektrolit lemah."
  },
  {
    id: "q8",
    topic: "Prinsip Susunan Alat Uji",
    competency: "Interpretasi Uji Laboratorium",
    question: "Pada alat uji daya hantar listrik sederhana di laboratorium sekolah, komponen manakah yang harus dicelupkan langsung ke dalam larutan?",
    options: [
      "Lampu pijar indikator",
      "Batu baterai / sumber tegangan",
      "Dua buah elektroda konduktor (misalnya batang karbon atau paku besi)",
      "Sakelar pemutus arus"
    ],
    correctAnswer: 2,
    explanation:
      "Dua batang elektroda konduktor berfungsi sebagai kutub positif (anoda) dan kutub negatif (katoda) yang dicelupkan ke dalam larutan untuk menciptakan celah medan listrik. Lampu dan baterai berada di luar wadah sebagai bagian dari rangkaian tertutup."
  },
  {
    id: "q9",
    topic: "Elektrolit dalam Tubuh dan Medis",
    competency: "Penerapan Sehari-hari",
    question: "Mengapa larutan oralit atau cairan isotonik sangat penting diberikan kepada orang yang mengalami dehidrasi akibat diare atau olahraga berat?",
    options: [
      "Menggantikan molekul sukrosa yang hilang agar darah lebih kental",
      "Menggantikan ion-ion elektrolit penting tubuh (seperti Na⁺, K⁺, Cl⁻) yang hilang untuk menjaga keseimbangan cairan dan fungsi saraf",
      "Menetralkan asam lambung secara instan",
      "Mencegah air dalam tubuh membeku pada suhu dingin"
    ],
    correctAnswer: 1,
    explanation:
      "Cairan tubuh manusia mengandung elektrolit vital (ion Na⁺, K⁺, Cl⁻, HCO₃⁻) yang esensial untuk transmisi impuls saraf, kontraksi otot jantung, dan mempertahankan tekanan osmotik sel. Dehidrasi menguras ion-ion ini sehingga perlu digantikan dengan cairan oralit/isotonik."
  },
  {
    id: "q10",
    topic: "Bahan Rumah Tangga",
    competency: "Penerapan Sehari-hari",
    question: "Di antara bahan-bahan rumah tangga berikut, manakah pasangan yang keduanya tergolong sebagai larutan non-elektrolit?",
    options: [
      "Air garam dapur dan larutan cuka",
      "Larutan pembersih lantai (HCl) dan air aki (H₂SO₄)",
      "Larutan sirup gula dan larutan alkohol 70%",
      "Air kapur dan air soda kue"
    ],
    correctAnswer: 2,
    explanation:
      "Sirup gula (sukrosa) dan larutan alkohol 70% (etanol) keduanya merupakan senyawa kovalen yang larut dalam air tanpa menghasilkan ion bebas (keduanya molekul netral), sehingga keduanya merupakan larutan non-elektrolit."
  }
];
