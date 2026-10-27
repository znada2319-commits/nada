import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import MateriPage from './pages/MateriPage';
import SimulasiPage from './pages/SimulasiPage';
import KuisPage from './pages/KuisPage';

/**
 * Komponen Utama Aplikasi ElektroLab
 * 
 * Mengelola navigasi tingkat atas dan tata letak aplikasi (Layout),
 * menghubungkan komponen navigasi (Navbar), konten modul halaman aktif,
 * serta bagian penutup (Footer).
 */
export default function App() {
  // State untuk menyimpan halaman aktif yang sedang dibuka pengguna.
  // Nilai default adalah 'beranda'.
  const [activePage, setActivePage] = useState('beranda');

  /**
   * Fungsi pengendali navigasi utama aplikasi:
   * 1. Memvalidasi bahwa target halaman terdaftar dalam daftar halaman resmi.
   * 2. Memperbarui state activePage untuk menampilkan komponen halaman yang sesuai.
   * 3. Menggulirkan posisi layar (viewport) kembali ke bagian paling atas secara halus (smooth scroll).
   * 
   * @param {string} pageId - ID halaman yang dituju ('beranda' | 'materi' | 'simulasi' | 'kuis')
   */
  const handleNavigate = (pageId) => {
    // Validasi daftar halaman yang diizinkan untuk mencegah state tidak valid
    const validPages = ['beranda', 'materi', 'simulasi', 'kuis'];
    
    if (validPages.includes(pageId)) {
      setActivePage(pageId);

      // Memastikan tampilan langsung berpindah ke bagian atas layar dengan transisi yang nyaman bagi pengguna
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white font-sans antialiased">
      {/* Bilah Navigasi Atas (Navbar) terhubung dengan state halaman aktif dan pengendali navigasi */}
      <Navbar activePage={activePage} setActivePage={handleNavigate} />

      {/* Kontainer Konten Utama Halaman dengan transisi animasi halus saat berpindah menu */}
      <main className="flex-1" id="main-content">
        <div key={activePage} className="animate-fade-in">
          {/* Halaman 1: Beranda / Landing Page interaktif */}
          {activePage === 'beranda' && <HomePage setActivePage={handleNavigate} />}

          {/* Halaman 2: Modul Materi Teori Larutan Elektrolit & Non-Elektrolit */}
          {activePage === 'materi' && <MateriPage setActivePage={handleNavigate} />}

          {/* Halaman 3: Laboratorium Virtual Simulasi Uji Daya Hantar Listrik */}
          {activePage === 'simulasi' && <SimulasiPage setActivePage={handleNavigate} />}

          {/* Halaman 4: Kuis Formatif Pilihan Ganda & Pembahasan */}
          {activePage === 'kuis' && <KuisPage setActivePage={handleNavigate} />}
        </div>
      </main>

      {/* Bagian Penutup (Footer) dengan tautan navigasi langsung ke seluruh modul */}
      <Footer setActivePage={handleNavigate} />
    </div>
  );
}
