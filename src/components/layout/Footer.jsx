import React from 'react';
import { FlaskConical, Heart, Sparkles, BookOpen, Play, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const currentYear = new Date().getFullYear();

  /**
   * Menangani navigasi antar modul melalui tautan cepat pada bagian footer.
   * Mengubah halaman aktif dan menggulirkan viewport ke posisi teratas dengan transisi halus.
   * 
   * @param {string} pageId - ID modul/halaman yang dituju ('beranda' | 'materi' | 'simulasi' | 'kuis')
   */
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white/80 backdrop-blur-sm text-slate-600 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <FlaskConical className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Elektro<span className="text-cyan-500">Lab</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Media pembelajaran kimia interaktif berbasis web untuk siswa dan guru Kimia SMA/MA.
              Memvisualisasikan konsep partikel mikroskopis larutan elektrolit dan non-elektrolit melalui simulasi virtual laboratorium dan kuis formatif terpadu.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                <ShieldCheck className="w-3.5 h-3.5" />
                Selaras Kurikulum Merdeka Kimia Fase F
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Modul Pembelajaran
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('beranda')}
                  className="hover:text-cyan-600 transition-colors flex items-center gap-2"
                >
                  <span>Beranda</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('materi')}
                  className="hover:text-cyan-600 transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Materi & Teori Ionik</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('simulasi')}
                  className="hover:text-cyan-600 transition-colors flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Simulasi Lab Virtual</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('kuis')}
                  className="hover:text-cyan-600 transition-colors flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Kuis Formatif (10 Soal)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Materi Kimia Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Topik Pembahasan
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                Disosiasi Senyawa Ionik (NaCl)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Ionisasi Parsial Asam Cuka (CH₃COOH)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                Molekul Netral Non-Elektrolit (Sukrosa)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Migrasi Ion Menuju Elektroda
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} ElektroLab Indonesia. Dibuat untuk tujuan media edukasi sains interaktif.</p>
          <p className="flex items-center gap-1.5">
            <span>Dirancang dengan dedikasi untuk edukasi kimia</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
