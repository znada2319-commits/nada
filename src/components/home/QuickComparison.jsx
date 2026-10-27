import React, { useState } from 'react';
import { Sparkles, Lightbulb, Check, ChevronRight } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function QuickComparison({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    {
      id: 'strong',
      title: 'Elektrolit Kuat',
      formula: 'NaCl(aq), HCl(aq), NaOH(aq)',
      bulb: 'Menyala Terang 💡',
      bulbStyle: 'text-amber-500 bg-amber-50 border-amber-200',
      bubbles: 'Banyak Gelembung Gas 🫧🫧',
      ionization: 'α ≈ 1 (Terionisasi / terdisosiasi 100%)',
      particles: 'Banyak ion bebas bergerak (Na⁺ & Cl⁻)',
      borderAccent: 'border-cyan-300 hover:border-cyan-500',
      tag: 'Daya Hantar Kuat',
      tagColor: 'bg-cyan-100 text-cyan-800'
    },
    {
      id: 'weak',
      title: 'Elektrolit Lemah',
      formula: 'CH₃COOH(aq), NH₃(aq), HF(aq)',
      bulb: 'Menyala Redup 🕯️',
      bulbStyle: 'text-orange-500 bg-orange-50 border-orange-200',
      bubbles: 'Sedikit Gelembung Gas 🫧',
      ionization: '0 < α < 1 (Terionisasi sebagian kecil ~1%)',
      particles: 'Sedikit ion bebas + dominan molekul netral',
      borderAccent: 'border-amber-300 hover:border-amber-500',
      tag: 'Daya Hantar Lemah',
      tagColor: 'bg-amber-100 text-amber-800'
    },
    {
      id: 'none',
      title: 'Non-Elektrolit',
      formula: 'C₁₂H₂₂O₁₁(gula), CO(NH₂)₂(urea)',
      bulb: 'Mati / Tidak Menyala ❌',
      bulbStyle: 'text-slate-500 bg-slate-100 border-slate-200',
      bubbles: 'Tidak Ada Gelembung 🚫',
      ionization: 'α = 0 (Tidak terionisasi sama sekali)',
      particles: 'Hanya molekul netral tanpa ion terlarut',
      borderAccent: 'border-slate-300 hover:border-slate-500',
      tag: 'Tidak Menghantarkan',
      tagColor: 'bg-slate-100 text-slate-800'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-slate-100/60 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 block mb-2">
              Ringkasan Karakteristik
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Tiga Kategori Larutan Berdasarkan Daya Hantar Listrik
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActivePage('materi')}
            icon={ChevronRight}
            iconPosition="right"
            className="text-cyan-700 hover:text-cyan-800 font-semibold"
          >
            Lihat Tabel Teori Lengkap
          </Button>
        </div>

        {/* 3 Solution Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Card
              key={cat.id}
              className={`p-6 border-2 transition-all duration-300 ${cat.borderAccent} bg-white flex flex-col justify-between`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${cat.tagColor}`}>
                    {cat.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-semibold">SMA-XI</span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs font-mono text-cyan-700 bg-cyan-50/80 px-2.5 py-1 rounded-lg inline-block mb-5 border border-cyan-100">
                  {cat.formula}
                </p>

                {/* Characteristics List */}
                <div className="space-y-3 text-xs mb-6">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 font-medium">Kondisi Lampu:</span>
                    <span className={`font-bold px-2 py-0.5 rounded-md border ${cat.bulbStyle}`}>
                      {cat.bulb}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 font-medium">Gelembung Gas:</span>
                    <span className="font-semibold text-slate-800">
                      {cat.bubbles}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 font-medium">Derajat Ionisasi:</span>
                    <span className="font-mono font-semibold text-cyan-800">
                      {cat.ionization}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block mb-1 font-medium">Keberadaan Partikel:</span>
                    <span className="font-semibold text-slate-800 block leading-relaxed">
                      {cat.particles}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setActivePage('simulasi')}
                className="w-full py-2.5 text-xs font-bold text-cyan-700 bg-cyan-50 hover:bg-cyan-100 rounded-xl transition-colors border border-cyan-200/80 text-center"
              >
                Uji {cat.title} di Lab Virtual →
              </button>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
