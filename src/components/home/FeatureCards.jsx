import React from 'react';
import { BookOpen, Play, CheckCircle2, ArrowRight, Sparkles, Layers, Sliders, Award } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function FeatureCards({ setActivePage }) {
  const features = [
    {
      id: 'materi',
      title: 'Materi Interaktif',
      badge: 'Teori & Konsep',
      colorBadge: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      icon: BookOpen,
      iconBg: 'from-cyan-500 to-blue-600',
      description:
        'Penjelasan terstruktur mengenai konsep larutan, mekanisme disosiasi senyawa ionik, ionisasi kovalen polar, dan tabel perbedaan lengkap.',
      highlights: [
        'Tabel komparasi 3 kategori larutan',
        'Persamaan reaksi disosiasi & ionisasi',
        'Contoh aplikasi elektrolit dalam kehidupan nyata'
      ],
      ctaText: 'Baca Materi Teori',
      page: 'materi'
    },
    {
      id: 'simulasi',
      title: 'Simulasi Lab Virtual',
      badge: 'Eksperimen Interaktif',
      colorBadge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: Play,
      iconBg: 'from-emerald-500 to-teal-600',
      description:
        'Uji daya hantar listrik larutan NaCl, asam asetat (cuka), dan gula pasir dengan rangkaian listrik virtual lengkap dengan elektroda tercelup dan lampu.',
      highlights: [
        'Visualisasi elektroda tercelup dalam wadah',
        'Pergerakan mikroskopis ion dan gelembung gas',
        'Interpretasi ilmiah instan untuk tiap zat'
      ],
      ctaText: 'Mulai Uji Larutan',
      page: 'simulasi'
    },
    {
      id: 'kuis',
      title: 'Kuis Evaluasi Kimia',
      badge: 'Uji Pemahaman',
      colorBadge: 'bg-purple-100 text-purple-800 border-purple-200',
      icon: CheckCircle2,
      iconBg: 'from-purple-500 to-indigo-600',
      description:
        '10 butir soal pilihan ganda interaktif dengan sistem skoring otomatis berbasis standar kompetensi SMA dan pembahasan lengkap tiap butir soal.',
      highlights: [
        'Skor langsung 0–100 dan persentase',
        'Pembahasan detail untuk setiap jawaban',
        'Dapat diulang tanpa batas waktu'
      ],
      ctaText: 'Kerjakan Kuis Sekarang',
      page: 'kuis'
    }
  ];

  return (
    <section className="py-14 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-100/80 text-cyan-800 border border-cyan-200/60 mb-3">
            <Layers className="w-3.5 h-3.5" />
            Fitur Utama Pembelajaran
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Semua yang Kamu Butuhkan untuk Menguasai Materi Larutan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Kombinasi teori ilmiah mendalam, visualisasi eksperimen virtual, dan evaluasi pemahaman formatif dalam satu website.
          </p>
        </div>

        {/* 3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <Card
                key={feat.id}
                className="p-7 sm:p-8 flex flex-col justify-between group hover:border-cyan-400/80 relative"
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feat.iconBg} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${feat.colorBadge}`}>
                      {feat.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {feat.description}
                  </p>

                  {/* Feature Key Highlights */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-8">
                    {feat.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setActivePage(feat.page)}
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full justify-between group-hover:border-cyan-500 group-hover:bg-cyan-50/70 group-hover:text-cyan-800"
                >
                  <span>{feat.ctaText}</span>
                </Button>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
