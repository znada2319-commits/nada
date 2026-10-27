# PRODUCT REQUIREMENT DOCUMENT (PRD)

## Website Pembelajaran Kimia Interaktif: Larutan Elektrolit dan Non-Elektrolit

| Metadata | Keterangan |
|---|---|
| Nama produk | Website Pembelajaran Kimia Interaktif |
| Versi dokumen | 1.0 |
| Status | Draft siap menjadi acuan pengembangan MVP |
| Target pengguna | Siswa dan guru Kimia SMA/MA |
| Materi utama | Larutan Elektrolit dan Non-Elektrolit |
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| Bahasa antarmuka | Bahasa Indonesia |
| Backend | Tidak diperlukan untuk MVP |
| Jenis aplikasi | Website responsif, client-side |

---

## 1. Ringkasan Proyek dan Tujuan Utama

### 1.1 Latar Belakang

Materi larutan elektrolit dan non-elektrolit menghubungkan fenomena yang dapat diamati secara langsung—misalnya lampu pada rangkaian uji daya hantar listrik—dengan penjelasan pada tingkat partikel, seperti keberadaan ion dan pergerakannya dalam medan listrik. Siswa dapat kesulitan memahami hubungan kedua tingkat representasi tersebut jika materi hanya disampaikan melalui teks.

Website ini dirancang sebagai media pembelajaran yang menggabungkan penjelasan ringkas, ilustrasi konsep, simulasi laboratorium virtual, serta kuis formatif. Siswa dapat membaca materi, memilih larutan pada simulasi, mengamati hasil visual, membaca penjelasan ilmiah, lalu menguji pemahamannya.

### 1.2 Pernyataan Produk

Website pembelajaran kimia interaktif yang membantu siswa SMA memahami perbedaan larutan elektrolit kuat, elektrolit lemah, dan non-elektrolit melalui materi yang mudah dipindai, simulasi uji daya hantar listrik, dan evaluasi dengan umpan balik instan.

### 1.3 Tujuan Produk

1. Menjelaskan pengertian larutan, elektrolit, dan non-elektrolit dengan bahasa yang sesuai untuk siswa SMA.
2. Membantu siswa membedakan elektrolit kuat, elektrolit lemah, dan non-elektrolit berdasarkan pembentukan ion dan kemampuan menghantarkan listrik.
3. Menampilkan hubungan kualitatif antara jenis larutan, ion bergerak, dan respons lampu pada rangkaian uji.
4. Menyediakan kuis pilihan ganda dengan perhitungan skor otomatis dan pembahasan jawaban.
5. Memungkinkan guru menggunakan website sebagai media penjelasan atau latihan di kelas.
6. Menyediakan pengalaman belajar yang responsif, mudah dinavigasi, dan dapat digunakan tanpa akun pengguna.

### 1.4 Prinsip Produk

- **Akurat secara ilmiah:** animasi harus mencerminkan konsep kimia dan tidak menyiratkan pengukuran nyata jika simulasi hanya bersifat kualitatif.
- **Interaktif dengan tujuan:** setiap interaksi harus membantu menjelaskan konsep atau memberi umpan balik.
- **Mudah digunakan:** navigasi, instruksi, dan status komponen jelas.
- **Mobile-first:** tampilan dirancang mulai dari layar kecil.
- **Mudah dipelihara:** data materi dan soal dipisahkan dari komponen antarmuka.
- **MVP dahulu:** tidak membangun fitur akun, backend, atau dashboard guru sebelum fitur inti stabil.

### 1.5 Indikator Keberhasilan

| Indikator | Kriteria minimum |
|---|---|
| Navigasi | Empat halaman inti dapat dibuka melalui menu dan tombol CTA. |
| Materi | Seluruh topik wajib tersedia dengan tata letak yang mudah dipindai. |
| Simulasi | Tiga kategori larutan menghasilkan visual, label, dan penjelasan yang sesuai. |
| Kuis | Jawaban dapat dipilih, skor dihitung secara benar, pembahasan ditampilkan. |
| Responsif | Tidak ada konten utama yang terpotong pada ponsel, tablet, dan laptop. |
| Aksesibilitas | Fokus keyboard terlihat, kontrol berlabel, status tidak disampaikan melalui warna saja. |
| Stabilitas | `npm run build` berjalan tanpa error dan tidak ada tombol utama yang inert. |
| Validasi konten | Persamaan kimia, kategori larutan, kunci jawaban, dan pembahasan diperiksa. |

---

## 2. Target Pengguna

### 2.1 Pengguna Utama: Siswa SMA/MA

**Kebutuhan utama**
- Memahami materi dengan penjelasan singkat, contoh, tabel, dan ilustrasi.
- Mengetahui perbedaan elektrolit kuat, elektrolit lemah, dan non-elektrolit.
- Mengamati eksperimen virtual tanpa harus menyiapkan bahan laboratorium.
- Mengetahui skor dan alasan jawaban yang benar atau salah.
- Mengakses seluruh fitur melalui ponsel atau laptop.

**Hambatan yang perlu diantisipasi**
- Istilah seperti ionisasi, disosiasi, dan ion bergerak belum familiar.
- Siswa dapat mengira semua larutan yang mengandung air menghantarkan listrik dengan baik.
- Siswa dapat menganggap lampu yang redup atau mati sebagai ukuran kuantitatif yang selalu pasti.
- Layar ponsel terbatas sehingga teks panjang dan tabel lebar perlu ditata dengan cermat.

### 2.2 Pengguna Sekunder: Guru Kimia SMA/MA

**Kebutuhan utama**
- Menampilkan konsep secara visual saat pembelajaran.
- Menggunakan simulasi untuk memantik diskusi dan prediksi siswa.
- Memberi latihan formatif tanpa perlu mengoreksi jawaban satu per satu.
- Mengakses konten tanpa login atau konfigurasi khusus.

**Batasan MVP**

Tidak tersedia akun guru, manajemen kelas, penyimpanan nilai server, ekspor nilai siswa, atau analitik individual. Guru dapat menggunakan satu perangkat untuk demonstrasi atau meminta siswa mengakses website dari perangkat masing-masing.

### 2.3 User Stories

| ID | Pengguna | User story |
|---|---|---|
| US-01 | Siswa | Sebagai siswa, saya ingin melihat tujuan pembelajaran agar tahu apa yang akan saya pelajari. |
| US-02 | Siswa | Saya ingin membaca materi dalam beberapa bagian agar mudah menemukan konsep penting. |
| US-03 | Siswa | Saya ingin memilih jenis larutan dan mengamati hasil uji daya hantar listrik. |
| US-04 | Siswa | Saya ingin melihat representasi ion dan molekul agar memahami hasil yang tampak pada lampu. |
| US-05 | Siswa | Saya ingin memperoleh skor segera setelah kuis selesai. |
| US-06 | Siswa | Saya ingin membaca pembahasan agar memahami alasan di balik jawaban. |
| US-07 | Guru | Saya ingin mendemonstrasikan perbedaan daya hantar listrik menggunakan layar kelas. |
| US-08 | Guru | Saya ingin mengarahkan siswa ke simulasi dan kuis tanpa membuat akun. |

---

## 3. Ruang Lingkup Produk (Scope)

### 3.1 Cakupan MVP

MVP adalah versi awal yang layak digunakan dan memiliki alur belajar lengkap dari pengenalan hingga evaluasi.

| Fitur | Prioritas | Termasuk MVP |
|---|---:|---|
| Beranda/landing page | P0 | Ya |
| Navbar dan navigasi halaman | P0 | Ya |
| Halaman materi | P0 | Ya |
| Simulasi uji daya hantar listrik | P0 | Ya |
| Kuis pilihan ganda | P0 | Ya |
| Skor dan pembahasan | P0 | Ya |
| Animasi dasar | P1 | Ya, jika tidak mengganggu kinerja |
| Penyimpanan progres di browser | P2 | Tidak |
| Login siswa/guru | P2 | Tidak |
| Backend dan database nilai | P2 | Tidak |
| Dashboard guru | P2 | Tidak |
| Pengukuran konduktivitas numerik | P2 | Tidak |

### 3.2 Struktur Halaman dan URL

| Halaman | URL | Tujuan |
|---|---|---|
| Beranda | `/` | Memperkenalkan website dan mengarahkan pengguna ke fitur utama. |
| Materi | `/materi` | Menjelaskan teori, karakteristik, persamaan, dan contoh. |
| Simulasi Lab | `/simulasi` | Menjalankan uji daya hantar listrik secara virtual. |
| Kuis | `/kuis` | Mengukur pemahaman melalui soal pilihan ganda. |

Hasil kuis ditampilkan pada halaman `/kuis` setelah pengerjaan selesai agar routing tetap sederhana untuk MVP.

### 3.3 Alur Penggunaan Utama

**Alur pembelajaran yang disarankan:**

`Beranda → Materi → Simulasi Lab → Kuis → Hasil dan Pembahasan`

Pengguna tidak diwajibkan menyelesaikan halaman secara berurutan. Navbar tetap dapat digunakan untuk berpindah halaman kapan saja.

### 3.4 Di Luar Cakupan MVP

- Login, profil, dan autentikasi.
- Penyimpanan data pada server.
- Papan peringkat siswa.
- Pengumpulan tugas dan pengelolaan kelas.
- Simulasi elektrokimia tingkat lanjut.
- Pengukuran konduktivitas dengan satuan numerik.
- Sistem CMS untuk mengubah materi tanpa mengubah kode.

---

## 4. Persyaratan Halaman Beranda

### 4.1 Tujuan

Membuat pengguna memahami fungsi website dalam beberapa detik pertama dan menyediakan akses cepat ke materi, simulasi, dan kuis.

### 4.2 Struktur Komponen

#### A. Navbar

Konten:
- Logo/nama website.
- Menu `Beranda`, `Materi`, `Simulasi Lab`, `Kuis`.
- Tombol CTA `Mulai Belajar`.
- Menu hamburger pada layar kecil.

Perilaku:
- Tautan aktif diberi indikator visual dan semantik.
- Menu mobile dapat dibuka dan ditutup dengan mouse maupun keyboard.
- Menu mobile ditutup setelah pengguna memilih tautan.
- Tombol logo/nama website mengarah ke beranda.
- Jika memakai navbar sticky, navbar tidak menutupi judul bagian saat pengguna melakukan navigasi anchor.

#### B. Hero Section

**Judul yang disarankan:**

> Kenali Rahasia Larutan di Sekitar Kita!

**Deskripsi:**

> Jelajahi dunia larutan elektrolit dan non-elektrolit melalui materi visual, eksperimen virtual, dan kuis interaktif.

CTA:
- `Mulai Belajar` → `/materi`.
- `Coba Simulasi` → `/simulasi`.

Visual:
- Ilustrasi gelas kimia atau erlenmeyer.
- Partikel ion positif dan negatif.
- Rangkaian listrik sederhana dengan lampu sebagai indikator.
- Bentuk dekoratif sederhana yang tidak mengganggu teks.

Animasi:
- Elemen hero muncul dengan transisi ringan.
- Partikel bergerak perlahan atau memiliki efek mengambang.
- Tombol mempunyai hover/focus state.
- Hormati preferensi `prefers-reduced-motion` dan hindari animasi berulang yang berat.

#### C. Pengenalan Singkat

Tampilkan pengantar tentang pertanyaan utama materi: mengapa larutan tertentu menghantarkan listrik dan larutan lain tidak?

Isi:
- Ringkasan satu atau dua kalimat.
- Visual sederhana yang membandingkan larutan dengan ion bergerak dan larutan dengan molekul netral.
- CTA `Pelajari Materi`.

#### D. Kartu Fitur

Tampilkan tiga kartu:

1. **Materi Interaktif** — ringkasan teori, tabel perbedaan, persamaan, dan contoh sehari-hari.
2. **Simulasi Lab Virtual** — pilih larutan dan amati perubahan visual rangkaian.
3. **Kuis Kimia** — kerjakan pertanyaan dan baca pembahasannya.

Setiap kartu harus memiliki ikon/ilustrasi, judul, deskripsi singkat, dan tautan yang berfungsi.

#### E. Tujuan Pembelajaran

Setelah menggunakan website, siswa diharapkan mampu:
1. Menjelaskan pengertian larutan elektrolit dan non-elektrolit.
2. Membedakan elektrolit kuat dan lemah berdasarkan pembentukan ion.
3. Menghubungkan keberadaan ion bergerak dengan daya hantar listrik.
4. Menginterpretasikan hasil uji daya hantar listrik secara kualitatif.
5. Memberikan contoh zat elektrolit dan non-elektrolit.

#### F. Footer

Memuat:
- Nama website.
- Deskripsi ringkas.
- Tautan navigasi.
- Keterangan bahwa website merupakan media pembelajaran.
- Tahun pengembangan, dapat diisi dinamis melalui JavaScript jika diperlukan.

### 4.3 Kriteria Penerimaan Beranda

- Semua CTA membawa pengguna ke halaman yang benar.
- Tidak ada tautan placeholder `#` tanpa tujuan.
- Navigasi desktop dan mobile berfungsi.
- Hero tetap terbaca jika animasi tidak berjalan.
- Tidak ada horizontal scroll yang tidak disengaja.
- Konten inti terlihat dan dapat digunakan di ponsel.

---

## 5. Persyaratan Halaman Materi

### 5.1 Tujuan

Menyampaikan materi yang benar secara ilmiah dalam bagian pendek, terstruktur, dan mudah dipindai (*scannable*).

### 5.2 Struktur Materi

#### Bagian 1 — Pengertian Larutan

Jelaskan bahwa larutan adalah campuran homogen yang terdiri atas zat terlarut dan pelarut. Berikan contoh sederhana, seperti larutan garam, larutan gula, dan larutan cuka.

Bedakan konsep larutan dari konsep daya hantar listrik: tidak semua larutan memiliki kemampuan menghantarkan arus listrik yang sama.

#### Bagian 2 — Larutan Elektrolit

Larutan elektrolit dapat menghantarkan arus listrik karena mengandung ion bergerak yang membawa muatan.

Istilah yang wajib dijelaskan:
- **Disosiasi:** pemisahan ion yang telah ada dalam senyawa ionik ketika senyawa larut.
- **Ionisasi:** pembentukan ion dari molekul, misalnya ketika asam bereaksi dengan air.
- **Ion bergerak:** partikel bermuatan yang dapat berpindah dalam larutan ketika terdapat medan listrik.

Contoh yang dapat digunakan:
- NaCl(aq)
- HCl(aq)
- NaOH(aq)
- CH₃COOH(aq)

#### Bagian 3 — Larutan Non-Elektrolit

Larutan non-elektrolit tidak menghasilkan ion dalam jumlah berarti ketika zat terlarut berada dalam larutan, sehingga tidak menghantarkan arus listrik secara berarti pada uji sederhana.

Contoh:
- Larutan gula/sukrosa.
- Larutan urea.
- Larutan etanol dalam air.

Tekankan bahwa zat dapat larut dalam air tanpa membentuk ion. Kelarutan tidak selalu berarti kemampuan menghantarkan listrik.

#### Bagian 4 — Elektrolit Kuat, Elektrolit Lemah, dan Non-Elektrolit

Gunakan tabel responsif.

| Aspek | Elektrolit kuat | Elektrolit lemah | Non-elektrolit |
|---|---|---|---|
| Perilaku dalam air | Terdisosiasi/terionisasi hampir sempurna | Terionisasi sebagian (untuk elektrolit lemah molekuler) | Tetap sebagai molekul netral dalam jumlah berarti |
| Ion bergerak | Relatif banyak pada kondisi sebanding | Relatif lebih sedikit pada kondisi sebanding | Tidak ada ion dari zat terlarut dalam jumlah berarti |
| Respons lampu pada ilustrasi | Terang | Redup | Mati |
| Contoh | NaCl(aq), HCl(aq), NaOH(aq) | CH₃COOH(aq), NH₃(aq) | Larutan gula, larutan urea |

**Keterangan penting:** respons lampu adalah indikator kualitatif. Intensitas cahaya dipengaruhi konsentrasi, jenis ion, mobilitas ion, suhu, elektroda, sumber tegangan, dan karakteristik lampu. Perbandingan pada simulasi mengasumsikan kondisi alat serta konsentrasi yang sebanding.

#### Bagian 5 — Mengapa Elektrolit Menghantarkan Listrik?

Jelaskan secara berurutan:
1. Zat dilarutkan dalam air.
2. Zat elektrolit menghasilkan ion melalui disosiasi atau ionisasi.
3. Ketika ada medan listrik, ion bergerak menuju elektroda dengan muatan berlawanan.
4. Pergerakan ion membawa muatan melalui larutan.
5. Jika rangkaian tertutup, arus dapat mengalir.

Contoh persamaan:

`NaCl(s) → Na⁺(aq) + Cl⁻(aq)`

Contoh ionisasi asam asetat secara sederhana:

`CH₃COOH(aq) ⇌ H⁺(aq) + CH₃COO⁻(aq)`

Untuk pembahasan yang lebih teliti, asam asetat mendonorkan proton ke molekul air dan persamaannya dapat ditulis:

`CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq)`

Gunakan format persamaan yang konsisten di seluruh halaman.

#### Bagian 6 — Contoh dalam Kehidupan Sehari-hari

Gunakan kartu berisi nama bahan, kategori, dan alasan.

- **Air garam:** elektrolit karena mengandung ion hasil disosiasi garam.
- **Larutan cuka:** elektrolit lemah karena asam asetat terionisasi sebagian.
- **Larutan gula:** non-elektrolit karena gula terlarut sebagai molekul netral.
- **Larutan soda kue:** elektrolit karena menghasilkan ion dalam air.

Hindari menggeneralisasi air murni, air keran, atau semua cairan sebagai penghantar yang setara. Konduktivitas bergantung pada ion yang ada dan kondisi larutan.

#### Bagian 7 — Rangkuman

Tampilkan tiga sampai lima poin utama:
- Daya hantar listrik larutan berkaitan dengan keberadaan ion bergerak.
- Elektrolit kuat menghasilkan ion secara hampir sempurna pada kondisi yang sesuai.
- Elektrolit lemah menghasilkan ion melalui ionisasi sebagian.
- Non-elektrolit tidak menghasilkan ion dari zat terlarut dalam jumlah berarti.
- Hasil uji harus ditafsirkan berdasarkan kondisi alat dan larutan.

Tambahkan CTA `Coba Simulasi Lab` dan `Kerjakan Kuis`.

### 5.3 Persyaratan UI Halaman Materi

- Setiap submateri memiliki judul yang konsisten.
- Gunakan paragraf pendek, daftar, penekanan istilah penting, dan kartu seperlunya.
- Sediakan daftar isi atau navigasi bagian jika halaman sangat panjang.
- Persamaan kimia harus dapat dibaca di layar kecil.
- Tabel dibungkus dalam kontainer yang dapat digulir horizontal jika diperlukan.
- Ilustrasi memiliki teks alternatif yang bermakna atau ditandai dekoratif bila tidak menambah informasi.
- Jangan mengandalkan warna sebagai satu-satunya pembeda kategori.

### 5.4 Kriteria Penerimaan Materi

- Semua bagian wajib tersedia dan tidak menggunakan teks placeholder.
- Kategori contoh zat dan penjelasan konsisten.
- Persamaan kimia memiliki simbol dan keadaan zat yang sesuai.
- Tabel dapat digunakan di perangkat mobile.
- CTA menuju simulasi dan kuis berfungsi.

---

## 6. Persyaratan Simulasi Laboratorium Virtual

### 6.1 Tujuan

Menyajikan eksperimen konseptual uji daya hantar listrik. Pengguna memilih larutan, mengaktifkan rangkaian, lalu mengamati representasi lampu dan partikel serta membaca interpretasi hasilnya.

### 6.2 Klarifikasi Representasi Eksperimen

Pada rangkaian uji daya hantar listrik, **dua elektroda (misalnya paku logam dalam ilustrasi sederhana) dicelupkan ke dalam larutan**. Lampu berada di luar wadah dan terhubung ke rangkaian listrik; lampu tidak dicelupkan ke dalam larutan. Visualisasi harus menunjukkan susunan tersebut agar tidak menimbulkan miskonsepsi.

Simulasi bersifat visual dan kualitatif, bukan alat ukur laboratorium nyata. Jangan menampilkan angka konduktivitas atau mengklaim hasil pengukuran aktual.

### 6.3 Elemen Antarmuka

**Panel kontrol**
- Judul `Pilih Larutan`.
- Pilihan larutan/kategori.
- Contoh zat terlarut.
- Tombol `Mulai Uji`.
- Tombol `Reset`.
- Instruksi singkat.

**Area eksperimen**
- Wadah berisi larutan.
- Dua elektroda yang masuk ke larutan.
- Kabel dan sumber tegangan.
- Lampu eksternal sebagai indikator.
- Partikel ion/molekul dalam wadah.
- Label kondisi lampu.
- Panel interpretasi hasil.

**Tata letak responsif**
- Desktop: panel kontrol dan eksperimen berdampingan.
- Mobile: panel kontrol terlebih dahulu, eksperimen di bawahnya.
- Hindari teks atau kontrol penting yang hanya muncul saat hover.

### 6.4 Pilihan Larutan dan Perilaku Visual

#### A. Elektrolit kuat — contoh NaCl(aq)

- Lampu: menyala terang pada model kualitatif.
- Partikel: ion Na⁺ dan Cl⁻ ditampilkan relatif banyak.
- Setelah rangkaian diaktifkan, ion menunjukkan gerak terarah menuju elektroda bermuatan berlawanan.
- Penjelasan: NaCl terdisosiasi hampir sempurna menjadi ion dalam air; ion bergerak membawa muatan.

#### B. Elektrolit lemah — contoh CH₃COOH(aq)

- Lampu: digambarkan lebih redup pada model kualitatif.
- Partikel: campuran molekul CH₃COOH dan sebagian ion ditampilkan.
- Hanya ion yang digambarkan mengalami migrasi terarah akibat medan listrik; molekul netral tetap dapat mengalami gerak acak.
- Penjelasan: asam asetat terionisasi sebagian sehingga jumlah ion relatif lebih sedikit pada kondisi sebanding.

#### C. Non-elektrolit — contoh larutan gula

- Lampu: mati dalam model uji sederhana.
- Partikel: molekul gula netral ditampilkan; jangan menggambarkan molekul gula sebagai ion.
- Molekul bergerak acak, tetapi tidak ada migrasi ion yang berasal dari zat terlarut.
- Penjelasan: gula larut sebagai molekul dan tidak menghasilkan ion dalam jumlah berarti.

**Catatan akurasi:** jumlah partikel visual merupakan simbol konseptual, bukan perbandingan angka derajat ionisasi atau konduktivitas. Respons lampu nyata dapat berbeda karena konsentrasi, konduktivitas larutan, jenis elektroda, sumber tegangan, dan sensitivitas lampu.

### 6.5 Alur Interaksi Simulasi

1. Pengguna membuka `/simulasi`.
2. Sistem menampilkan keadaan awal dengan instruksi singkat.
3. Pengguna memilih salah satu kategori/larutan.
4. Area eksperimen memperbarui nama zat dan gambaran partikel sesuai pilihan.
5. Pengguna menekan `Mulai Uji`.
6. Sistem menampilkan animasi singkat pergerakan ion dan perubahan lampu.
7. Setelah transisi, panel interpretasi menampilkan hasil dan alasan kimia.
8. Pengguna dapat memilih larutan lain atau menekan `Reset`.

Perilaku yang disarankan: pergantian larutan mengatur ulang status pengujian agar simulasi tidak menampilkan hasil dari pilihan sebelumnya.

### 6.6 State Simulasi

State minimum:
- `selectedSolution`: pilihan larutan yang aktif.
- `isRunning`: apakah animasi uji sedang berjalan.
- `hasResult`: apakah hasil uji sudah ditampilkan.

Aturan:
- Ketika `isRunning` bernilai `true`, cegah klik ganda pada `Mulai Uji` atau tangani secara idempoten.
- Ketika `Reset` ditekan, `isRunning` dan `hasResult` kembali ke keadaan awal.
- Ketika larutan diganti, hapus hasil lama dan perbarui tampilan.
- Hasil tetap dapat dipahami tanpa animasi, termasuk ketika `prefers-reduced-motion` aktif.

### 6.7 Contoh Struktur Data Larutan

```js
export const solutions = [
  {
    id: "strong-electrolyte",
    label: "Elektrolit Kuat",
    compound: "NaCl(aq)",
    bulbState: "bright",
    particleModel: "many-ions",
    explanation:
      "NaCl terdisosiasi menjadi ion Na⁺ dan Cl⁻ yang dapat bergerak dalam larutan.",
  },
  {
    id: "weak-electrolyte",
    label: "Elektrolit Lemah",
    compound: "CH₃COOH(aq)",
    bulbState: "dim",
    particleModel: "molecules-and-some-ions",
    explanation:
      "Asam asetat terionisasi sebagian sehingga larutan mengandung molekul dan ion.",
  },
  {
    id: "nonelectrolyte",
    label: "Non-Elektrolit",
    compound: "Larutan gula",
    bulbState: "off",
    particleModel: "neutral-molecules",
    explanation:
      "Gula larut sebagai molekul netral dan tidak menghasilkan ion dalam jumlah berarti.",
  },
];
```

Nilai `bulbState` dan `particleModel` digunakan untuk menentukan tampilan; jangan menulis kondisi yang sama secara terpisah di banyak komponen.

### 6.8 Kriteria Penerimaan Simulasi

- Pengguna dapat memilih ketiga kategori larutan.
- Nama larutan, visual partikel, status lampu, dan penjelasan saling konsisten.
- Dua elektroda terlihat berada dalam larutan dan lampu berada di luar wadah.
- Tombol `Mulai Uji` memicu respons visual yang jelas.
- Tombol `Reset` mengembalikan kondisi awal.
- Mengubah larutan tidak meninggalkan hasil yang keliru dari pilihan sebelumnya.
- Simulasi tetap dapat dipahami tanpa animasi.
- Tidak ada klaim bahwa hasil simulasi merupakan pengukuran konduktivitas nyata.

---

## 7. Persyaratan Halaman Kuis/Evaluasi

### 7.1 Tujuan

Memeriksa pemahaman siswa melalui pilihan ganda dan memberikan umpan balik segera setelah kuis selesai.

### 7.2 Spesifikasi Kuis MVP

- Jumlah soal awal: 10 soal.
- Format: pilihan ganda dengan empat opsi (A–D).
- Satu jawaban benar per soal.
- Nilai maksimum: 100.
- Bobot: 10 poin per jawaban benar untuk kuis 10 soal.
- Jawaban salah: 0 poin.
- Tidak ada penalti untuk jawaban salah.
- Pengguna dapat berpindah antarsoal dan meninjau jawaban sebelum menyelesaikan kuis.
- Nilai dan pembahasan ditampilkan setelah kuis dikirim.

Implementasi harus menghitung skor dari jumlah soal dan bobot yang terdefinisi, bukan mengandalkan angka tetap yang akan salah jika jumlah soal berubah.

### 7.3 Cakupan Kompetensi

| Kompetensi | Alokasi awal |
|---|---:|
| Pengertian larutan elektrolit dan non-elektrolit | 2 soal |
| Elektrolit kuat dan lemah | 2 soal |
| Ionisasi dan disosiasi | 2 soal |
| Interpretasi uji daya hantar listrik | 2 soal |
| Penerapan dalam kehidupan sehari-hari | 2 soal |

Jumlah ini merupakan rancangan awal dan dapat diubah melalui data soal.

### 7.4 Antarmuka Kuis

Komponen yang ditampilkan:
- Judul dan instruksi.
- Indikator `Soal X dari N`.
- Progress bar dengan label yang dapat dibaca pembaca layar.
- Teks pertanyaan.
- Empat pilihan jawaban.
- Tombol `Sebelumnya` dan `Berikutnya`.
- Tombol `Selesaikan Kuis` pada tahap akhir.
- Indikator soal yang telah dijawab jika menggunakan navigasi nomor soal.

Satu soal ditampilkan pada satu waktu untuk mengurangi beban visual.

### 7.5 Alur Interaksi Kuis

1. Sistem menampilkan soal pertama.
2. Pengguna memilih opsi jawaban.
3. Pilihan disimpan di state React.
4. Pengguna dapat berpindah soal; pilihan yang sudah dibuat tetap tersimpan.
5. Ketika pengguna memilih `Selesaikan Kuis`, sistem memeriksa apakah masih ada soal kosong.
6. Jika ada soal kosong, tampilkan peringatan yang jelas dan beri kesempatan kembali, atau minta konfirmasi sebelum mengumpulkan.
7. Setelah dikumpulkan, kunci jawaban dinilai dan hasil ditampilkan.
8. Hasil menampilkan skor, jumlah benar/salah, serta pembahasan tiap soal.
9. Tombol `Ulangi Kuis` mengosongkan jawaban dan memulai sesi baru.

### 7.6 Aturan Penilaian

Rumus umum:

`Skor = (Jumlah jawaban benar / Jumlah seluruh soal) × 100`

Gunakan pembulatan yang konsisten, misalnya ke bilangan bulat terdekat. Untuk kuis dengan bobot atau jumlah soal berbeda, perhitungan harus tetap benar.

### 7.7 Halaman Hasil

Tampilkan:
- Skor akhir.
- Jumlah jawaban benar dan salah.
- Pesan umpan balik motivasional.
- Daftar setiap soal, jawaban pengguna, jawaban benar, dan pembahasan.
- Tombol `Ulangi Kuis`.
- Tombol `Pelajari Materi`.
- Tombol `Kembali ke Beranda`.

Contoh pesan motivasional:
- 80–100: “Bagus! Kamu sudah memahami sebagian besar konsep.”
- 60–79: “Cukup baik. Tinjau kembali konsep yang masih membingungkan.”
- Di bawah 60: “Terus berlatih. Pelajari kembali materi, lalu coba lagi.”

Rentang tersebut bersifat umpan balik pembelajaran dan bukan keputusan kelulusan formal.

### 7.8 Contoh Struktur Data Soal

```js
export const questions = [
  {
    id: "q1",
    topic: "Daya hantar listrik",
    question: "Mengapa larutan NaCl dapat menghantarkan arus listrik?",
    options: [
      "Karena hanya mengandung molekul netral",
      "Karena menghasilkan ion yang dapat bergerak",
      "Karena semua zat terlarut selalu menghasilkan elektron bebas",
      "Karena larutan tidak memerlukan rangkaian tertutup",
    ],
    correctAnswer: 1,
    explanation:
      "NaCl terdisosiasi menjadi ion Na⁺ dan Cl⁻ dalam air. Ion-ion ini membawa muatan ketika bergerak dalam medan listrik.",
  },
];
```

`correctAnswer` pada contoh merupakan indeks opsi berbasis nol. Pilihan yang tampak oleh pengguna harus tetap berlabel A–D secara konsisten.

### 7.9 State Kuis Minimum

- `currentQuestionIndex`: indeks soal aktif.
- `answers`: jawaban yang dipilih pengguna, dikaitkan dengan ID soal.
- `isSubmitted`: apakah kuis sudah dikumpulkan.
- `score`: skor hasil penilaian setelah pengumpulan.

Aturan:
- Jangan menghitung hasil akhir berdasarkan indeks soal aktif.
- Jangan mengubah jawaban pengguna ketika berpindah soal.
- Setelah pengumpulan, cegah perubahan jawaban kecuali pengguna memilih `Ulangi Kuis`.
- Reset harus menghapus jawaban, skor, dan status submit.
- Tangani kondisi data soal kosong agar aplikasi tidak crash.

### 7.10 Kriteria Penerimaan Kuis

- Soal dan opsi ditampilkan dengan benar.
- Pengguna dapat memilih atau mengubah jawaban sebelum submit.
- Jawaban tetap ada saat berpindah soal.
- Skor dihitung sesuai rumus.
- Pembahasan sesuai dengan kunci dan materi.
- Soal kosong ditangani secara jelas.
- Pengulangan memulai sesi baru tanpa membawa hasil lama.

---

## 8. Persyaratan UI/UX

### 8.1 Arah Visual

Gaya visual bersih, modern, ramah untuk siswa, dan terinspirasi dari suasana laboratorium. Gunakan latar terang, warna biru sebagai aksen utama, kartu dengan batas halus, ilustrasi kimia, dan ruang kosong yang cukup. Hindari tampilan terlalu ramai atau dekorasi yang mengalahkan konten.

### 8.2 Palet Warna

| Token | HEX | Pemakaian |
|---|---|---|
| Primary | `#38BDF8` | Tombol utama dan aksen visual |
| Primary Dark | `#0369A1` | Hover/active dan teks pada aksen tertentu |
| Background | `#F8FAFC` | Latar utama |
| Surface | `#FFFFFF` | Kartu, panel, dan modal |
| Text Primary | `#0F172A` | Judul dan isi utama |
| Text Secondary | `#475569` | Deskripsi dan teks pendukung |
| Border | `#E2E8F0` | Pembatas kartu dan input |
| Success | `#15803D` | Status benar/berhasil |
| Warning | `#B45309` | Peringatan |
| Error | `#B91C1C` | Status salah atau error |

Kontras aktual harus diuji; kombinasi warna tidak otomatis memenuhi standar hanya karena memakai palet di atas. Pada tombol biru muda, gunakan teks gelap jika teks putih tidak cukup kontras.

### 8.3 Tipografi

Gunakan font sans-serif yang mudah dibaca, misalnya Inter atau font sistem.

Ukuran awal:
- H1 desktop: 36–48 px.
- H1 mobile: 28–34 px.
- H2: 24–32 px.
- H3: 18–24 px.
- Body: sekitar 16 px.
- Caption: minimum sekitar 14 px jika memungkinkan.

Jaga panjang baris isi agar tidak terlalu lebar; gunakan container dan line-height yang nyaman.

### 8.4 Grid dan Spacing

Rekomendasi kelas Tailwind:
- Container: `mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`.
- Padding section: `py-12 md:py-20`.
- Kartu: `rounded-2xl border border-slate-200 bg-white`.
- Layout kartu fitur: `grid gap-6 md:grid-cols-2 lg:grid-cols-3`.
- Fokus keyboard: gunakan `focus-visible:outline` atau ring yang terlihat.

Kelas di atas merupakan panduan awal; sesuaikan dengan komponen dan breakpoint aktual.

### 8.5 Responsivitas

**Mobile**
- Navbar menjadi menu hamburger.
- Kartu tersusun satu kolom.
- Simulasi menampilkan kontrol di atas area eksperimen.
- Opsi kuis disusun vertikal dan mudah diketuk.
- Tabel dapat digulir horizontal di dalam container.

**Tablet**
- Kartu dapat menjadi dua kolom.
- Simulasi dapat berdampingan jika lebar mencukupi.

**Desktop**
- Hero dapat memakai dua kolom.
- Fitur beranda menggunakan tiga kolom.
- Simulasi menggunakan panel kontrol dan eksperimen berdampingan.

### 8.6 Aksesibilitas

Gunakan praktik aksesibilitas web yang baik dengan WCAG 2.2 AA sebagai acuan:
- Elemen interaktif menggunakan elemen HTML semantik.
- Semua kontrol dapat dijangkau menggunakan keyboard.
- Fokus keyboard terlihat jelas.
- Tombol dan input memiliki nama aksesibel.
- Status tidak dibedakan hanya lewat warna; sertakan teks/ikon.
- Gambar informatif memiliki `alt`.
- Animasi menghormati `prefers-reduced-motion`.
- Perubahan hasil kuis dapat diumumkan menggunakan area `aria-live` jika sesuai.
- Target klik/tap memiliki ukuran yang nyaman.
- Jangan memindahkan fokus secara mengejutkan.

### 8.7 Bahasa dan Microcopy

- Gunakan bahasa Indonesia yang lugas dan sesuai tingkat SMA.
- Gunakan satu istilah secara konsisten.
- Instruksi tombol harus berupa tindakan, seperti `Mulai Uji`, `Reset`, `Berikutnya`, dan `Ulangi Kuis`.
- Pesan error menjelaskan masalah dan langkah yang dapat dilakukan pengguna.
- Jangan menampilkan pesan yang merendahkan siswa berdasarkan skor.

---

## 9. Persyaratan Teknis dan Arsitektur

### 9.1 Stack

| Teknologi | Peran |
|---|---|
| React | Komponen UI dan pengelolaan state |
| Vite | Development server dan build tool |
| Tailwind CSS | Styling dan responsive design |
| React Router | Navigasi antarhalaman |
| Lucide React (opsional) | Ikon antarmuka |
| JavaScript | Logika interaksi dan penilaian |

Pilih versi stabil dan kompatibel ketika proyek dimulai. Konfigurasi Tailwind CSS v3 dan v4 berbeda; ikuti petunjuk instalasi yang cocok dengan versi yang benar-benar dipasang.

### 9.2 Struktur Folder yang Disarankan

```text
chemistry-learning-website/
├── public/
│   ├── images/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MainLayout.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── SectionTitle.jsx
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeatureCards.jsx
│   │   │   └── LearningObjectives.jsx
│   │   ├── materi/
│   │   │   ├── MaterialSection.jsx
│   │   │   ├── ComparisonTable.jsx
│   │   │   └── EquationBlock.jsx
│   │   ├── simulasi/
│   │   │   ├── SolutionSelector.jsx
│   │   │   ├── CircuitScene.jsx
│   │   │   ├── Electrode.jsx
│   │   │   ├── BulbIndicator.jsx
│   │   │   ├── ParticleView.jsx
│   │   │   └── ResultExplanation.jsx
│   │   └── kuis/
│   │       ├── QuizQuestion.jsx
│   │       ├── QuizProgress.jsx
│   │       ├── QuizNavigation.jsx
│   │       ├── QuizResult.jsx
│   │       └── AnswerReview.jsx
│   ├── data/
│   │   ├── materials.js
│   │   ├── solutions.js
│   │   └── questions.js
│   ├── hooks/
│   │   └── useQuiz.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── MateriPage.jsx
│   │   ├── SimulasiPage.jsx
│   │   └── KuisPage.jsx
│   ├── utils/
│   │   └── calculateScore.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── PRD.md
```

Struktur ini dapat disederhanakan. Buat komponen terpisah saat memiliki tanggung jawab jelas atau digunakan ulang; jangan memecah setiap elemen kecil tanpa alasan.

### 9.3 Aturan Arsitektur

- `pages/` menangani komposisi halaman dan pengambilan data lokal.
- `components/` berisi komponen UI yang dapat digunakan ulang.
- `data/` berisi konten materi, definisi larutan, dan soal.
- `utils/` berisi fungsi murni, seperti perhitungan skor.
- `hooks/` berisi logika state yang dapat dipakai ulang jika dibutuhkan.
- Hindari duplikasi konten/aturan ilmiah di banyak komponen.
- Simpan state pada komponen terdekat yang memerlukannya, lalu turunkan data lewat props.
- MVP tidak perlu menggunakan Redux atau global state library lain.

### 9.4 Navigasi

Gunakan React Router agar perpindahan halaman tidak memuat ulang seluruh dokumen. Pastikan konfigurasi hosting mendukung fallback ke `index.html` untuk rute client-side.

### 9.5 Kinerja

- Gunakan CSS/SVG untuk ilustrasi sederhana.
- Batasi jumlah partikel yang dianimasikan.
- Hindari interval atau animasi JavaScript yang terus berjalan ketika komponen tidak terlihat.
- Gunakan CSS animation/transition jika cukup.
- Hindari dependensi besar yang tidak diperlukan.
- Pastikan build produksi berjalan sebelum deployment.

### 9.6 Privasi dan Keamanan

- Tidak mengumpulkan data pribadi pada MVP.
- Tidak diperlukan akun pengguna.
- Jangan meletakkan API key atau kredensial rahasia pada kode frontend.
- Hindari pelacakan pengguna yang tidak diperlukan.
- Jika fitur analitik ditambahkan kelak, jelaskan data yang dikumpulkan dan minimalkan pengumpulan data.

---

## 10. Milestones dan Urutan Implementasi

Pengerjaan dilakukan bertahap dari fondasi paling sederhana hingga semua fitur terintegrasi. Selesaikan dan uji satu milestone sebelum masuk ke milestone berikutnya.

### Milestone 1 — Inisialisasi Proyek

**File utama:** `package.json`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/index.css`.

Tugas:
1. Buat proyek React dengan Vite.
2. Pasang dan konfigurasi Tailwind CSS.
3. Pastikan entry point React bekerja.
4. Buat style dasar dan font.
5. Jalankan development server.

Output: website awal dapat dijalankan tanpa error.

Kriteria selesai:
- `npm run dev` berhasil.
- Komponen React tampil.
- Kelas Tailwind diterapkan dengan benar.

### Milestone 2 — Komponen UI Dasar dan Layout

**Urutan file:**
1. `components/ui/Button.jsx`
2. `components/ui/Card.jsx`
3. `components/ui/SectionTitle.jsx`
4. `components/layout/Navbar.jsx`
5. `components/layout/Footer.jsx`
6. `components/layout/MainLayout.jsx`
7. Konfigurasi route di `App.jsx`.

Tugas:
- Tentukan desain tombol, kartu, dan heading.
- Buat navbar desktop/mobile.
- Buat footer.
- Buat layout yang dipakai semua halaman.
- Tambahkan halaman sementara untuk menguji rute.

Output: kerangka website dengan navigasi konsisten.

### Milestone 3 — Beranda

**Urutan file:**
1. `components/home/HeroSection.jsx`
2. `components/home/FeatureCards.jsx`
3. `components/home/LearningObjectives.jsx`
4. `pages/HomePage.jsx`.

Tugas:
- Isi hero dan dua CTA.
- Buat kartu menuju materi, simulasi, dan kuis.
- Tampilkan tujuan pembelajaran.
- Tambahkan ilustrasi dan animasi ringan.

Output: landing page yang dapat digunakan.

### Milestone 4 — Materi

**Urutan file:**
1. `data/materials.js`
2. `components/materi/MaterialSection.jsx`
3. `components/materi/ComparisonTable.jsx`
4. `components/materi/EquationBlock.jsx`
5. `pages/MateriPage.jsx`.

Tugas:
- Masukkan materi yang sudah divalidasi.
- Susun bagian pengertian, kategori, proses, contoh, dan rangkuman.
- Pastikan tampilan tabel serta persamaan responsif.
- Hubungkan CTA menuju simulasi dan kuis.

Output: halaman materi selesai dan dapat ditinjau secara ilmiah.

### Milestone 5 — Simulasi Lab

**Urutan file:**
1. `data/solutions.js`
2. `components/simulasi/SolutionSelector.jsx`
3. `components/simulasi/BulbIndicator.jsx`
4. `components/simulasi/Electrode.jsx`
5. `components/simulasi/ParticleView.jsx`
6. `components/simulasi/CircuitScene.jsx`
7. `components/simulasi/ResultExplanation.jsx`
8. `pages/SimulasiPage.jsx`.

Tugas:
- Buat data tiga kategori larutan.
- Rancang rangkaian visual dengan elektroda di dalam larutan dan lampu di luar wadah.
- Hubungkan pilihan larutan dengan visual partikel dan lampu.
- Tambahkan tombol mulai, reset, dan penjelasan hasil.
- Uji perubahan larutan dan reduced motion.

Output: simulasi dapat dimainkan berulang kali.

### Milestone 6 — Kuis dan Penilaian

**Urutan file:**
1. `data/questions.js`
2. `utils/calculateScore.js`
3. `components/kuis/QuizQuestion.jsx`
4. `components/kuis/QuizProgress.jsx`
5. `components/kuis/QuizNavigation.jsx`
6. `components/kuis/QuizResult.jsx`
7. `components/kuis/AnswerReview.jsx`
8. `hooks/useQuiz.js` jika logika membutuhkan ekstraksi.
9. `pages/KuisPage.jsx`.

Tugas:
- Tulis dan validasi soal.
- Buat pemilihan jawaban serta navigasi.
- Hitung skor.
- Tampilkan hasil dan pembahasan.
- Implementasikan reset kuis.

Output: sistem evaluasi berjalan lengkap.

### Milestone 7 — Integrasi, Responsivitas, dan Aksesibilitas

Tugas:
- Samakan skema warna dan spacing.
- Uji semua tautan dan tombol.
- Uji layar ponsel, tablet, laptop, dan desktop.
- Periksa fokus keyboard, label kontrol, dan kontras.
- Pastikan animasi tidak wajib untuk memahami konten.
- Perbaiki peringatan/error pada console.

Output: pengalaman konsisten dari beranda hingga kuis.

### Milestone 8 — Validasi Ilmiah, QA, dan Deployment

Tugas:
- Tinjau ulang konsep dan persamaan kimia.
- Uji setiap state simulasi.
- Uji perhitungan skor dengan kasus benar, salah, dan tidak lengkap.
- Jalankan build produksi.
- Siapkan README dan deployment.

Perintah verifikasi dasar:

```bash
npm run build
npm run preview
```

Output: versi MVP siap dipublikasikan pada hosting statis, seperti Vercel, Netlify, atau GitHub Pages dengan konfigurasi rute yang sesuai.

---

## 11. Strategi Pengujian dan QA

### 11.1 Functional Testing

| ID | Skenario | Hasil yang diharapkan |
|---|---|---|
| FT-01 | Klik logo | Beranda terbuka. |
| FT-02 | Klik `Mulai Belajar` | Halaman materi terbuka. |
| FT-03 | Klik `Coba Simulasi` | Halaman simulasi terbuka. |
| FT-04 | Pilih elektrolit kuat lalu mulai uji | Lampu terang, ion ditampilkan, penjelasan sesuai. |
| FT-05 | Pilih elektrolit lemah lalu mulai uji | Lampu redup, campuran molekul dan ion ditampilkan. |
| FT-06 | Pilih non-elektrolit lalu mulai uji | Lampu mati dan molekul netral ditampilkan. |
| FT-07 | Tekan reset simulasi | Status kembali ke keadaan awal. |
| FT-08 | Ganti larutan setelah simulasi | Hasil lama dihapus dan hasil baru tidak tercampur. |
| FT-09 | Pilih jawaban kuis | Pilihan terpilih ditandai. |
| FT-10 | Berpindah soal | Jawaban sebelumnya tetap tersimpan. |
| FT-11 | Submit semua jawaban benar | Skor maksimum tampil. |
| FT-12 | Submit beberapa jawaban salah | Skor sesuai jumlah jawaban benar. |
| FT-13 | Submit dengan soal kosong | Peringatan jelas ditampilkan atau konfirmasi diberikan. |
| FT-14 | Ulangi kuis | Jawaban, skor, dan status submit direset. |
| FT-15 | Gunakan navigasi keyboard | Semua menu dan kontrol utama dapat dijangkau. |
| FT-16 | Buka di layar ponsel | Tidak ada overflow horizontal yang tidak disengaja. |

### 11.2 Usability Testing

Jika memungkinkan, minta beberapa siswa mencoba tugas berikut:
1. Temukan penjelasan elektrolit lemah.
2. Pilih larutan pada simulasi.
3. Jalankan uji dan jelaskan arti lampu.
4. Ganti ke larutan gula.
5. Kerjakan beberapa soal kuis.
6. Temukan pembahasan jawaban.

Catat bagian yang membingungkan, tombol yang sulit ditemukan, kesalahan navigasi, serta masukan terkait keterbacaan dan visualisasi.

### 11.3 Validasi Isi

Periksa:
- Definisi elektrolit dan non-elektrolit.
- Perbedaan disosiasi dan ionisasi.
- Persamaan kimia dan muatan ion.
- Kategori contoh larutan.
- Hubungan hasil uji dan penjelasan partikel.
- Kunci jawaban dan pembahasan.
- Kesesuaian bahasa dengan tingkat siswa SMA.

Sangat disarankan meminta guru Kimia atau dosen pembimbing meninjau isi sebelum website digunakan sebagai media pembelajaran.

---

## 12. Persyaratan Nonfungsional

### 12.1 Kompatibilitas

Targetkan browser modern seperti Chrome, Edge, Firefox, dan Safari versi yang masih didukung.

### 12.2 Responsivitas

Setiap halaman harus tetap dapat digunakan pada ponsel, tablet, laptop, dan desktop. Kontrol penting tidak boleh memerlukan hover untuk terlihat.

### 12.3 Keandalan

- Materi dan data soal tersedia lokal dalam bundle aplikasi.
- Fitur inti tidak tergantung backend.
- Kondisi kosong atau data yang tidak valid ditangani dengan pesan yang sesuai.
- Error pada satu fitur sebaiknya tidak merusak navigasi seluruh website.

### 12.4 Pemeliharaan

- Gunakan nama variabel dan komponen yang deskriptif.
- Pisahkan data dari komponen presentasi.
- Hindari duplikasi aturan penilaian dan simulasi.
- Dokumentasikan instalasi, perintah, dan struktur proyek di `README.md`.

---

## 13. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Materi kimia tidak akurat | Siswa memahami konsep yang salah | Validasi materi dengan guru/dosen kimia. |
| Lampu disalahartikan sebagai alat ukur kuantitatif | Interpretasi hasil keliru | Labeli simulasi sebagai model kualitatif dan sebutkan faktor yang memengaruhi hasil nyata. |
| Simulasi terlalu rumit | MVP sulit selesai | Gunakan ilustrasi 2D berbasis CSS/SVG. |
| Animasi terlalu berat | Website lambat pada ponsel | Batasi partikel dan gunakan animasi CSS sederhana. |
| State kuis tidak konsisten | Skor salah atau jawaban hilang | Uji navigasi, submit, dan reset. |
| Layout mobile pecah | Pengalaman pengguna menurun | Terapkan mobile-first dan QA pada beberapa ukuran layar. |
| Lingkup proyek meluas | Fitur inti tertunda | Tunda login, backend, dan dashboard hingga MVP selesai. |
| Konfigurasi Tailwind tidak cocok | Utility class tidak bekerja | Ikuti panduan versi Tailwind yang terpasang. |

---

## 14. Pengembangan Berikutnya

### Versi 1.1
- Menambah bank soal.
- Menambah mode latihan tanpa skor akhir.
- Memperbaiki visualisasi partikel dan instruksi eksperimen.

### Versi 1.2
- Menyimpan progres lokal menggunakan `localStorage` jika benar-benar dibutuhkan.
- Menambahkan penanda materi yang sudah dipelajari.
- Menyediakan ringkasan hasil belajar di perangkat yang sama.

### Versi 2.0
- Login siswa/guru.
- Dashboard guru.
- Penyimpanan hasil kuis pada database.
- Pengelolaan kelas dan rekap hasil siswa.
- Integrasi LMS.

Prioritaskan pengembangan lanjutan berdasarkan hasil pengujian pengguna, bukan hanya karena fitur tersebut memungkinkan dibuat.

---

## 15. Definition of Done

MVP dapat dinyatakan selesai apabila semua hal berikut terpenuhi:

- [ ] Proyek React + Vite berjalan.
- [ ] Tailwind CSS terkonfigurasi dengan benar.
- [ ] Seluruh rute utama berfungsi.
- [ ] Navbar responsif dan dapat dioperasikan dengan keyboard.
- [ ] Beranda selesai dengan CTA yang berfungsi.
- [ ] Halaman materi memuat semua submateri utama.
- [ ] Konten dan persamaan kimia telah ditinjau.
- [ ] Simulasi mendukung elektrolit kuat, elektrolit lemah, dan non-elektrolit.
- [ ] Visual menunjukkan elektroda tercelup dan lampu berada di luar larutan.
- [ ] Status lampu, partikel, dan pembahasan konsisten.
- [ ] Tombol mulai dan reset simulasi bekerja.
- [ ] Kuis memuat 10 soal pilihan ganda dengan empat opsi.
- [ ] Jawaban tersimpan saat berpindah soal.
- [ ] Skor dihitung otomatis dengan benar.
- [ ] Pembahasan tersedia untuk seluruh soal.
- [ ] Kuis dapat diulang tanpa membawa state lama.
- [ ] Tampilan diuji pada ponsel dan laptop.
- [ ] Status dan interaksi utama dapat dipahami tanpa mengandalkan warna saja.
- [ ] `npm run build` berhasil.
- [ ] README menjelaskan instalasi dan cara menjalankan proyek.

---

## 16. Kesimpulan

Website ini dirancang sebagai media belajar yang menggabungkan materi, simulasi, dan evaluasi untuk membantu siswa memahami larutan elektrolit dan non-elektrolit. Urutan pengembangan dimulai dari fondasi aplikasi dan komponen dasar, lalu berlanjut ke beranda, materi, simulasi, kuis, integrasi, pengujian, dan deployment.

Prioritas produk adalah membuat setiap fitur benar-benar berfungsi dan membantu pemahaman konsep. Tampilan yang menarik penting, tetapi harus tetap mendukung akurasi ilmiah, aksesibilitas, dan kemudahan penggunaan.

**Akhir dokumen — PRD v1.0**

