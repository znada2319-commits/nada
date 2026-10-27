import React, { useState, useEffect } from 'react';
import { FlaskConical, Atom, BookOpen, Play, CheckCircle2, Menu, X, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar({ activePage, setActivePage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Daftar item navigasi utama yang ditampilkan di bilah navbar desktop dan menu seluler
  const navItems = [
    { id: 'beranda', label: 'Beranda', icon: FlaskConical },
    { id: 'materi', label: 'Materi Elektrolit', icon: BookOpen },
    { id: 'simulasi', label: 'Simulasi Lab', icon: Play },
    { id: 'kuis', label: 'Kuis', icon: CheckCircle2 },
  ];

  /**
   * Menangani pemilihan menu navigasi di Navbar:
   * 1. Mengubah state halaman aktif ke halaman yang dipilih pengguna.
   * 2. Menutup dropdown menu pada layar seluler jika sedang terbuka.
   * 3. Menggulirkan posisi layar kembali ke paling atas secara halus (smooth scroll).
   * 
   * @param {string} pageId - ID halaman yang dituju ('beranda' | 'materi' | 'simulasi' | 'kuis')
   */
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/70 backdrop-blur-xs border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1"
            aria-label="Kembali ke Beranda ElektroLab"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              <FlaskConical className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-cyan-900 to-blue-900 bg-clip-text text-transparent">
                  Elektro<span className="text-cyan-500">Lab</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-cyan-100 text-cyan-800 rounded-md">
                  SMA
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">Larutan Elektrolit Virtual</p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60" aria-label="Navigasi Utama">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                    isActive
                      ? 'bg-white text-cyan-600 shadow-sm border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-500' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick('materi')}
              icon={ArrowRight}
              iconPosition="right"
              className="shadow-cyan-500/20"
            >
              Mulai Belajar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 transition-colors"
              aria-label={isMobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-50 text-cyan-700 font-semibold border border-cyan-200'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => handleNavClick('materi')}
                icon={ArrowRight}
                iconPosition="right"
              >
                Mulai Belajar Sekarang
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
