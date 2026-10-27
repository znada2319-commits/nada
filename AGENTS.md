# AGENTS.md — Aturan Kerja Agent AI
## Proyek Chemora Lab: Website Pembelajaran Kimia Interaktif

Dokumen ini berisi aturan kerja yang wajib diikuti oleh Agent AI selama mengembangkan, memperbaiki, dan memelihara website Chemora Lab.

Tujuan utama aturan ini adalah memastikan kode tetap rapi, modular, responsif, mudah dikembangkan, dan sesuai dengan kebutuhan pembelajaran kimia.

---

## 1. SUMBER ACUAN PROYEK

Sebelum melakukan perubahan kode, Agent AI WAJIB membaca dan memahami:

1. `AGENTS.md` sebagai pedoman kerja dan standar pengembangan.
2. `PRD.md` sebagai sumber utama kebutuhan fitur, alur pengguna, desain, serta spesifikasi website.

Jika terdapat ketidaksesuaian antara implementasi yang sudah ada dan kebutuhan pada `PRD.md`, identifikasi perbedaannya terlebih dahulu.

Jangan mengubah ruang lingkup proyek, menghilangkan fitur, atau mengganti desain utama tanpa alasan yang jelas.

Jika perubahan yang dibutuhkan berpotensi mengubah kebutuhan utama produk, jelaskan dampaknya dan minta persetujuan pengguna sebelum melanjutkan.

---

## 2. TEKNOLOGI YANG WAJIB DIGUNAKAN

Pengembangan website harus menggunakan teknologi berikut.

### 2.1 React.js

Gunakan React untuk membangun antarmuka berbasis komponen.

Aturan:
- Gunakan functional components.
- Gunakan React Hooks seperti `useState` dan `useEffect` apabila diperlukan.
- Pisahkan komponen berdasarkan fungsi dan tanggung jawabnya.
- Gunakan props untuk mengirimkan data antarkomponen.
- Hindari manipulasi DOM secara langsung jika dapat dilakukan melalui mekanisme React.
- Hindari penggunaan state global jika state lokal sudah mencukupi.
- Hindari penggunaan `useEffect` untuk menghitung nilai turunan yang dapat dihitung langsung saat render.
- Jangan membuat komponen terlalu besar dan sulit dipelihara.

### 2.2 Vite

Gunakan Vite sebagai development server dan build tool.

Aturan:
- Pertahankan konfigurasi proyek yang sudah ada.
- Periksa `package.json` sebelum menambahkan dependensi atau mengubah perintah.
- Gunakan perintah proyek yang telah tersedia.
- Pastikan build produksi berhasil sebelum menyatakan pekerjaan selesai.
- Jangan mengubah konfigurasi Vite tanpa kebutuhan yang jelas.

### 2.3 Tailwind CSS

Gunakan Tailwind CSS sebagai metode utama styling.

Aturan:
- Gunakan utility classes Tailwind untuk mengatur layout, warna, tipografi, spacing, dan responsivitas.
- Gunakan sistem warna dan desain yang konsisten di seluruh halaman.
- Hindari penulisan CSS khusus yang berlebihan jika dapat diselesaikan menggunakan Tailwind CSS.
- CSS khusus diperbolehkan untuk animasi, efek visual, atau kebutuhan yang tidak praktis dilakukan menggunakan utility classes.
- Jangan mencampur konfigurasi dari Tailwind CSS v3 dan v4.
- Periksa versi Tailwind CSS yang terpasang sebelum mengubah konfigurasi.
- Jangan mengganti versi dependensi hanya untuk mengikuti tutorial atau pola konfigurasi tertentu.

### 2.4 Lucide React

Gunakan `lucide-react` untuk ikon antarmuka.

Contoh:

    import { FlaskConical, BookOpen, BrainCircuit } from "lucide-react";

Aturan:
- Gunakan ikon yang sesuai dengan fungsi dan konteks antarmuka.
- Jangan menggunakan emoji sebagai pengganti ikon antarmuka utama apabila ikon Lucide yang sesuai tersedia.
- Gunakan ukuran ikon yang konsisten.
- Berikan label atau teks pendamping untuk tombol ikon yang fungsinya tidak langsung jelas.
- Hindari penggunaan ikon yang tidak diperlukan.

### 2.5 Bahasa Pemrograman

Gunakan JavaScript dengan JSX sesuai konfigurasi proyek saat ini.

Jangan mengonversi proyek ke TypeScript atau mengganti sistem modul tanpa persetujuan pengguna.

---

## 3. STRUKTUR FOLDER DAN FILE

Gunakan struktur folder yang modular dan mudah dipelihara.

Struktur rekomendasi:

    chemora-lab/
    ├── public/
    │   ├── images/
    │   └── icons/
    ├── src/
    │   ├── assets/
    │   │   ├── images/
    │   │   └── styles/
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
    │   │   │   ├── Hero.jsx
    │   │   │   └── FeatureCards.jsx
    │   │   ├── materi/
    │   │   │   ├── MaterialSection.jsx
    │   │   │   └── ComparisonTable.jsx
    │   │   ├── simulasi/
    │   │   │   ├── SolutionSelector.jsx
    │   │   │   ├── CircuitView.jsx
    │   │   │   ├── LampIndicator.jsx
    │   │   │   ├── ParticleView.jsx
    │   │   │   └── SimulationExplanation.jsx
    │   │   └── kuis/
    │   │       ├── QuizQuestion.jsx
    │   │       ├── QuizProgress.jsx
    │   │       ├── QuizResult.jsx
    │   │       └── AnswerReview.jsx
    │   ├── pages/
    │   │   ├── HomePage.jsx
    │   │   ├── MateriPage.jsx
    │   │   ├── SimulasiPage.jsx
    │   │   └── KuisPage.jsx
    │   ├── data/
    │   │   ├── materials.js
    │   │   ├── solutions.js
    │   │   └── questions.js
    │   ├── hooks/
    │   │   └── useQuiz.js
    │   ├── utils/
    │   │   └── calculateScore.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── PRD.md
    ├── AGENTS.md
    └── README.md

Struktur tersebut adalah acuan, bukan alasan untuk membuat semua file sekaligus.

### Aturan Pengelolaan File

1. Periksa struktur folder yang sudah ada sebelum membuat file baru.
2. Gunakan kembali komponen yang sudah tersedia jika sesuai.
3. Buat file baru hanya jika memiliki tanggung jawab yang jelas.
4. Jangan membuat banyak komponen kecil yang tidak memberikan manfaat nyata.
5. Jangan menumpuk seluruh logika aplikasi dalam `App.jsx`.
6. Jangan menyimpan data materi atau kumpulan soal dalam komponen halaman apabila lebih tepat diletakkan di folder `data/`.
7. Jangan membuat duplikasi komponen yang memiliki fungsi sama.
8. Jangan mengubah nama file atau folder tanpa alasan yang jelas.
9. Jika struktur proyek yang sudah ada berbeda tetapi masih rapi dan berfungsi, pertahankan struktur tersebut kecuali ada kebutuhan nyata untuk mengubahnya.

---

## 4. ATURAN MODULARITAS DAN KUALITAS KODE

Kode harus mudah dipahami, diuji, diperbaiki, dan dikembangkan.

### 4.1 Pemisahan Tanggung Jawab

Setiap komponen harus memiliki tanggung jawab yang jelas.

Contoh:
- `Navbar.jsx` bertanggung jawab atas navigasi.
- `Hero.jsx` menampilkan bagian utama halaman beranda.
- `SolutionSelector.jsx` menangani pemilihan larutan.
- `LampIndicator.jsx` menampilkan kondisi lampu.
- `QuizQuestion.jsx` menampilkan pertanyaan dan pilihan jawaban.
- `calculateScore.js` menghitung skor kuis.

Jangan menggabungkan seluruh antarmuka, data, perhitungan, dan logika interaksi ke dalam satu komponen besar.

### 4.2 Prinsip Komponen

- Buat komponen yang dapat digunakan kembali apabila memang diperlukan oleh beberapa bagian.
- Gunakan props dengan nama yang jelas.
- Gunakan nama variabel yang menggambarkan tujuannya.
- Hindari fungsi yang terlalu panjang.
- Pisahkan fungsi perhitungan dari tampilan jika memungkinkan.
- Hindari duplikasi logika.
- Hindari membuat abstraksi yang terlalu kompleks untuk kebutuhan sederhana.
- Gunakan `key` yang stabil ketika menampilkan daftar elemen menggunakan `.map()`.

### 4.3 Pengelolaan State

- Gunakan `useState` untuk mengelola interaksi lokal.
- Gunakan `useEffect` hanya ketika perlu menyinkronkan komponen dengan sistem eksternal atau proses di luar perhitungan render biasa.
- Hindari state yang sebenarnya dapat dihitung dari data yang sudah tersedia.
- Pastikan perubahan pilihan larutan memperbarui visualisasi dan penjelasan secara konsisten.
- Pastikan jawaban kuis tetap tersimpan ketika pengguna berpindah soal.
- Pastikan fitur reset mengembalikan state yang relevan ke kondisi awal.

### 4.4 Penanganan Error

- Jangan mengabaikan error yang muncul di console browser.
- Validasi input jika diperlukan.
- Tangani data kosong dengan baik.
- Hindari tampilan kosong tanpa penjelasan jika sebuah fitur mengalami kegagalan.
- Jangan menutupi error dengan menghapus fungsi yang bermasalah tanpa memahami penyebabnya.
- Jika belum dapat memperbaiki suatu error, jelaskan penyebab yang diketahui dan batasan yang masih tersisa.

---

## 5. BATASAN DAN PERLINDUNGAN KODE YANG SUDAH ADA

Bagian ini WAJIB dipatuhi oleh Agent AI.

### 5.1 Dilarang Menghapus Kode Tanpa Izin

Agent AI TIDAK BOLEH menghapus kode lama tanpa persetujuan eksplisit pengguna.

Aturan ini mencakup:
- File dan folder yang sudah ada.
- Komponen React yang sedang digunakan.
- Fungsi dan logika bisnis.
- Styling yang sudah diterapkan.
- Fitur yang sudah berfungsi.
- Dependensi yang masih digunakan.
- Konfigurasi proyek.

Jika suatu kode dianggap tidak diperlukan, duplikat, atau menghambat pengembangan:

1. Identifikasi kode yang bermasalah.
2. Jelaskan alasan perubahan.
3. Tentukan dampak terhadap fitur lain.
4. Minta persetujuan sebelum menghapus atau menggantinya.

Jangan menganggap bahwa kode yang terlihat tidak digunakan pasti aman untuk dihapus.

### 5.2 Hindari Penulisan Ulang Tanpa Kebutuhan

- Jangan menulis ulang seluruh file hanya untuk mengubah satu bagian kecil.
- Jangan mengganti struktur proyek yang masih berfungsi tanpa alasan teknis yang kuat.
- Jangan menghapus fitur lama ketika menambahkan fitur baru.
- Pertahankan nama props, fungsi, dan struktur data yang sudah menjadi bagian dari integrasi, kecuali perubahan memang diperlukan dan disetujui.
- Lakukan perubahan sekecil mungkin untuk mencapai tujuan.

### 5.3 Lindungi Konfigurasi dan Dependensi

Jangan mengubah `package.json`, file lock, `vite.config.js`, atau konfigurasi Tailwind CSS secara sembarangan.

Sebelum menambahkan dependensi:
1. Pastikan fitur memang membutuhkannya.
2. Periksa apakah teknologi yang sudah digunakan dapat menyelesaikan kebutuhan tersebut.
3. Pertimbangkan ukuran bundle dan kompleksitas tambahan.
4. Jelaskan alasan penambahan dependensi jika berdampak pada struktur proyek.

Jangan menghapus dependensi hanya karena tidak langsung terlihat digunakan.

### 5.4 Laporan Perubahan

Setelah menyelesaikan tugas, jelaskan secara ringkas:
- File yang dibuat.
- File yang diubah.
- Fitur yang ditambahkan atau diperbaiki.
- Pengujian yang dijalankan.
- Error atau keterbatasan yang belum terselesaikan.

Jangan mengklaim suatu fitur sudah berfungsi apabila belum diperiksa.

---

## 6. ATURAN RESPONSIVITAS

Seluruh halaman wajib responsif di perangkat ponsel, tablet, dan laptop.

Gunakan pendekatan mobile-first.

### 6.1 Breakpoint Tailwind CSS

Gunakan breakpoint sesuai kebutuhan:

- `sm:` untuk layar kecil yang lebih lebar.
- `md:` untuk tablet dan layout menengah.
- `lg:` untuk laptop atau desktop.
- `xl:` untuk layar lebar.

Jangan bergantung pada satu ukuran layar saja.

### 6.2 Layout

- Hindari lebar tetap yang menyebabkan overflow.
- Gunakan container dengan lebar maksimum yang sesuai.
- Gunakan Flexbox atau CSS Grid sesuai kebutuhan.
- Pastikan gambar tidak keluar dari container.
- Pastikan tabel dapat dibaca di layar kecil.
- Gunakan padding dan spacing yang konsisten.
- Pastikan teks tidak terpotong.
- Pastikan tidak muncul horizontal scrolling pada halaman secara keseluruhan, kecuali pada komponen yang memang dirancang untuk digulir secara horizontal.

### 6.3 Interaksi Mobile

- Tombol harus nyaman disentuh.
- Menu navigasi harus berfungsi pada layar kecil.
- Simulasi harus tetap dapat digunakan tanpa mouse.
- Kartu dan panel tidak boleh terlalu padat.
- Pilihan jawaban kuis harus mudah dipilih.
- Kontrol simulasi harus tetap terlihat dan mudah dijangkau.

### 6.4 Pengujian Responsivitas

Setiap fitur baru wajib diperiksa pada:
1. Tampilan ponsel.
2. Tampilan tablet atau ukuran menengah.
3. Tampilan laptop atau desktop.

Jangan menyatakan fitur responsif hanya karena class Tailwind sudah menggunakan breakpoint.

---

## 7. ATURAN DESAIN DAN KONSISTENSI UI

Gunakan desain yang bersih, modern, ramah siswa, dan bertema sains.

### 7.1 Palet Warna

Gunakan warna desain yang telah ditentukan dalam `PRD.md`.

Palet acuan:

- Primary: `#38BDF8`
- Primary Dark: `#0284C7`
- Background: `#F8FAFC`
- Surface: `#FFFFFF`
- Text Primary: `#0F172A`
- Text Secondary: `#475569`
- Border: `#E2E8F0`
- Success: `#16A34A`
- Warning: `#D97706`
- Error: `#DC2626`

Jangan menambahkan banyak warna baru tanpa alasan desain yang jelas.

### 7.2 Konsistensi Komponen

- Tombol dengan fungsi serupa harus memiliki gaya yang konsisten.
- Jarak antarelemen mengikuti pola yang konsisten.
- Judul halaman harus memiliki hierarki tipografi yang jelas.
- Card menggunakan radius dan border yang seragam.
- Hover dan focus state harus jelas.
- Animasi harus halus dan tidak mengganggu pembelajaran.

### 7.3 Aksesibilitas

- Gunakan elemen HTML semantik.
- Pastikan seluruh fungsi penting dapat diakses dengan keyboard.
- Pertahankan indikator fokus yang terlihat.
- Berikan label pada tombol ikon.
- Gunakan teks alternatif pada gambar informatif.
- Jangan menggunakan warna sebagai satu-satunya pembeda status.
- Pastikan kontras teks memadai.
- Hormati pengaturan `prefers-reduced-motion`.

---

## 8. STANDAR KOMENTAR, BAHASA, DAN NOTASI

### 8.1 Bahasa

- Gunakan Bahasa Indonesia untuk teks antarmuka website.
- Gunakan Bahasa Indonesia untuk komentar penjelasan pada kode.
- Gunakan istilah teknis yang sesuai dengan konteks pemrograman.
- Gunakan penamaan variabel dan fungsi dalam Bahasa Inggris yang jelas dan konsisten.
- Pertahankan istilah kimia berdasarkan kaidah yang benar.

### 8.2 Komentar Kode

Berikan komentar singkat dalam Bahasa Indonesia pada logika yang rumit, tidak langsung jelas, atau berpotensi membingungkan pengembang berikutnya.

Komentar terutama diperlukan pada:
- Perhitungan skor.
- Perubahan state yang memiliki beberapa kondisi.
- Logika pergantian jenis larutan.
- Mekanisme animasi yang tidak sederhana.
- Penanganan kasus khusus.
- Algoritma atau keputusan implementasi yang tidak langsung terlihat.

Jangan menambahkan komentar pada setiap baris kode secara otomatis. Komentar harus menjelaskan alasan atau perilaku yang penting, bukan mengulang kode yang sudah jelas.

Contoh yang disarankan:

    // Mengubah indeks jawaban menjadi skor berdasarkan kunci jawaban.
    const isCorrect = selectedAnswer === question.correctAnswer;

    // Mengembalikan simulasi ke keadaan awal sebelum percobaan baru.
    setIsRunning(false);

Hindari komentar yang tidak informatif seperti:

    // Membuat variabel
    const count = 0;

### 8.3 Penamaan

Gunakan konvensi berikut:

- Komponen React: `PascalCase`
- Fungsi dan variabel: `camelCase`
- Konstanta: `UPPER_SNAKE_CASE` jika sesuai untuk konstanta global
- Nama file komponen: `PascalCase.jsx`
- Nama file utilitas: `camelCase.js`
- Nama class Tailwind: gunakan secara konsisten dalam JSX.

Contoh:

    function SolutionSelector() {
      const [selectedSolution, setSelectedSolution] = useState("strong");

      return (
        <section>
          {/* Menampilkan pilihan larutan kepada pengguna. */}
        </section>
      );
    }

### 8.4 Format Kode

- Gunakan indentasi yang konsisten.
- Pisahkan bagian kode dengan struktur yang jelas.
- Hindari ekspresi ternary bertingkat yang sulit dibaca.
- Pecah fungsi yang terlalu kompleks menjadi fungsi-fungsi yang lebih kecil.
- Hindari penggunaan `any` jika proyek menggunakan TypeScript di masa mendatang.
- Jangan meninggalkan kode debug, `console.log`, atau komentar TODO tanpa alasan yang jelas ketika tugas dinyatakan selesai.

---

## 9. ATURAN KHUSUS MATERI KIMIA

Karena Chemora Lab merupakan website pembelajaran kimia, seluruh implementasi visual dan penjelasan harus mendukung ketepatan konsep ilmiah.

### 9.1 Ketepatan Konsep

- Bedakan elektrolit kuat, elektrolit lemah, dan non-elektrolit secara benar.
- Jelaskan bahwa elektrolit dapat menghantarkan arus karena adanya ion bergerak.
- Bedakan disosiasi senyawa ionik dan ionisasi zat molekuler.
- Gunakan rumus kimia dan persamaan reaksi secara benar.
- Jangan menyamakan kelarutan dengan kemampuan menghantarkan listrik.
- Jangan menyatakan bahwa semua larutan air merupakan elektrolit kuat.

### 9.2 Aturan Simulasi

Simulasi menggunakan tiga kondisi:

1. Elektrolit kuat, contoh NaCl(aq).
2. Elektrolit lemah, contoh CH₃COOH(aq).
3. Non-elektrolit, contoh larutan gula.

Representasi visual:
- Elektrolit kuat: lampu terang dan banyak ion bergerak.
- Elektrolit lemah: lampu redup dalam model kualitatif serta sebagian ion.
- Non-elektrolit: lampu mati dan molekul netral.

Lampu berada di bagian luar wadah sebagai bagian rangkaian. Elektroda atau paku dicelupkan ke larutan.

Jangan membuat simulasi terlihat seperti alat ukur konduktivitas yang akurat secara numerik apabila fitur tersebut tidak benar-benar diimplementasikan.

Jumlah partikel pada layar merupakan representasi konseptual, bukan ukuran langsung konsentrasi atau derajat ionisasi.

### 9.3 Aturan Materi dan Kuis

- Pastikan contoh zat sesuai dengan kategori ilmiahnya.
- Pastikan jawaban benar memiliki pembahasan yang tepat.
- Hindari soal dengan dua opsi yang sama-sama benar.
- Jangan menggunakan penjelasan yang bertentangan dengan materi.
- Jika menemukan ketidakakuratan pada konten, identifikasi masalah dan perbaiki sesuai ruang lingkup tugas.

---

## 10. ATURAN ANIMASI DAN INTERAKSI

- Gunakan CSS transitions atau animasi yang ringan jika sudah mencukupi.
- Jangan menambahkan library animasi hanya untuk efek sederhana.
- Jangan menjalankan animasi terus-menerus jika tidak diperlukan.
- Hindari animasi yang membuat pengguna sulit membaca konten.
- Pastikan animasi tidak menghalangi tombol atau kontrol.
- Pastikan status visual selalu sesuai dengan state aplikasi.
- Hentikan atau sesuaikan animasi ketika pengguna memilih larutan lain atau mereset simulasi.
- Hormati `prefers-reduced-motion`.

Setiap elemen interaktif harus memberikan respons yang jelas ketika digunakan.

Dilarang membuat tombol dekoratif yang terlihat aktif tetapi tidak memiliki fungsi.

Jika suatu fitur belum tersedia, jangan menampilkannya seolah-olah sudah berfungsi.

---

## 11. KEAMANAN DAN PRIVASI

- Jangan menambahkan pengumpulan data pribadi siswa tanpa kebutuhan dan persetujuan yang sesuai.
- Jangan menyimpan rahasia atau API key di kode frontend.
- Jangan menambahkan dependensi atau skrip eksternal yang tidak diperlukan.
- Hindari menampilkan informasi internal yang sensitif.
- Jika fitur penyimpanan progres ditambahkan, jelaskan data apa yang disimpan dan di mana data tersebut disimpan.
- Jangan menambahkan backend atau database tanpa kebutuhan yang disetujui.

---

## 12. ALUR KERJA AGENT AI

Untuk setiap tugas pengembangan, ikuti urutan berikut.

### Tahap 1 — Memahami Tugas

- Baca instruksi pengguna.
- Periksa bagian `PRD.md` yang relevan.
- Identifikasi komponen dan file yang berkaitan.
- Tentukan hasil yang diharapkan.

### Tahap 2 — Memeriksa Kode yang Ada

- Periksa struktur folder.
- Baca file yang akan diubah.
- Cari penggunaan komponen atau fungsi terkait.
- Pastikan perubahan tidak merusak fitur yang telah ada.

### Tahap 3 — Membuat Rencana Perubahan

- Tentukan file yang perlu dibuat.
- Tentukan file yang perlu dimodifikasi.
- Pilih solusi paling sederhana yang memenuhi kebutuhan.
- Hindari perubahan yang tidak terkait dengan tugas.

### Tahap 4 — Implementasi

- Ikuti struktur komponen yang sudah ada.
- Buat komponen modular.
- Pertahankan fitur lama.
- Terapkan desain responsif.
- Berikan komentar pada logika yang kompleks.
- Pastikan setiap tombol dan interaksi memiliki perilaku yang benar.

### Tahap 5 — Verifikasi

- Periksa import dan export.
- Periksa penggunaan props.
- Periksa state dan conditional rendering.
- Periksa responsivitas.
- Periksa console untuk error yang relevan.
- Jalankan lint atau tes yang tersedia.
- Jalankan build produksi jika lingkungan memungkinkan.

### Tahap 6 — Laporan

Sampaikan ringkasan:
1. Apa yang dikerjakan.
2. File apa saja yang dibuat atau diubah.
3. Bagaimana fitur bekerja.
4. Pengujian apa yang sudah dijalankan.
5. Masalah apa yang masih tersisa.

Jangan mengklaim bahwa pengujian berhasil jika perintah pengujian belum benar-benar dijalankan.

---

## 13. PRIORITAS PENGEMBANGAN

Gunakan urutan prioritas berikut agar pengembangan tetap terarah.

### Prioritas P0 — Wajib

- Fondasi React dan Vite.
- Tailwind CSS.
- Navigasi utama.
- Beranda.
- Halaman materi.
- Simulasi elektrolit kuat, lemah, dan non-elektrolit.
- Kuis dengan skor otomatis.
- Pembahasan jawaban.
- Responsivitas dasar.

### Prioritas P1 — Penyempurnaan

- Animasi antarkomponen.
- Peningkatan visualisasi partikel.
- Peningkatan aksesibilitas.
- Penanganan kasus khusus.
- Optimasi performa.

### Prioritas P2 — Pengembangan Lanjutan

- Penyimpanan progres.
- Akun siswa dan guru.
- Dashboard guru.
- Database nilai.
- Integrasi LMS.

Jangan mulai mengembangkan fitur P2 sebelum fitur wajib P0 berfungsi, kecuali pengguna secara eksplisit meminta prioritas berbeda.

---

## 14. DEFINITION OF DONE

Suatu tugas hanya dapat dinyatakan selesai apabila:

- [ ] Implementasi sesuai dengan permintaan pengguna.
- [ ] Implementasi tidak bertentangan dengan `PRD.md`.
- [ ] Kode lama yang tidak terkait tetap dipertahankan.
- [ ] Komponen memiliki tanggung jawab yang jelas.
- [ ] Tidak ada tombol utama yang tidak berfungsi.
- [ ] Tampilan responsif pada ponsel dan laptop.
- [ ] Tidak ada error baru yang diketahui dan dibiarkan tanpa penjelasan.
- [ ] Komentar tersedia pada logika yang rumit jika diperlukan.
- [ ] Materi dan visualisasi kimia tetap akurat.
- [ ] Pengujian yang relevan telah dijalankan atau keterbatasannya dijelaskan.
- [ ] Ringkasan perubahan diberikan kepada pengguna.

---

## 15. PRINSIP UTAMA

Agent AI harus bekerja dengan prinsip berikut:

1. Pahami sebelum mengubah.
2. Pertahankan sebelum mengganti.
3. Jangan menghapus kode lama tanpa izin.
4. Buat solusi modular dan mudah dipelihara.
5. Utamakan fungsi sebelum dekorasi.
6. Jaga responsivitas pada semua ukuran layar.
7. Pastikan materi kimia akurat.
8. Hindari dependensi yang tidak perlu.
9. Uji sebelum menyatakan selesai.
10. Jelaskan perubahan secara jujur dan ringkas.

Tujuan akhir adalah menghasilkan Chemora Lab yang stabil, responsif, mudah dikembangkan, serta efektif mendukung pembelajaran Larutan Elektrolit dan Non-Elektrolit.

---
