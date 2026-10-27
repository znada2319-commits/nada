import React from 'react';
import { HelpCircle, ArrowRight, Zap, Check, X, ShieldAlert, Sparkles, Orbit } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function ConceptIntro({ setActivePage }) {
  return (
    <section className="py-14 sm:py-20 bg-white border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Teka-Teki Kimia Larutan
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Mengapa Air Garam Menghantarkan Listrik, Namun Air Gula Tidak?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Keduanya sama-sama larut jernih dalam air, namun memiliki perilaku listrik yang bertolak belakang. Kuncinya terletak pada partikel mikroskopis yang terbentuk di dalam air!
          </p>
        </div>

        {/* Visual Comparison Grid: Ionik vs Molekuler */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Larutan Elektrolit (Ion Bebas Bergerak) */}
          <Card className="p-6 sm:p-8 border-cyan-200/80 bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-200/30 rounded-bl-full pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500 text-white flex items-center justify-center font-bold shadow-md shadow-cyan-500/25">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">Representasi Mikroskopis</span>
                <h3 className="text-xl font-extrabold text-slate-900">Larutan Elektrolit (Mengandung Ion)</h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Ketika senyawa elektrolit (seperti garam dapur NaCl atau asam HCl) dilarutkan dalam air, zat tersebut <strong className="text-slate-800">terurai menjadi kation (+) dan anion (-)</strong> yang bebas bergerak ke segala arah.
            </p>

            {/* Particle Diagram Visual */}
            <div className="p-4 rounded-xl bg-slate-900 text-white mb-6 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 mb-3 border-b border-slate-800">
                <span className="font-mono">Partikel Bermuatan (Ion Bebas)</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Arus Mengalir
                </span>
              </div>
              <div className="h-28 rounded-lg bg-slate-950 flex flex-wrap items-center justify-around p-3 relative overflow-hidden">
                <div className="flex flex-col items-center gap-1 animate-pulse">
                  <span className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shadow-lg shadow-amber-400/40">
                    Na⁺
                  </span>
                  <span className="text-[10px] text-amber-300 font-mono">Kation</span>
                </div>
                <div className="flex flex-col items-center gap-1 animate-pulse">
                  <span className="w-8 h-8 rounded-full bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center shadow-lg shadow-emerald-400/40">
                    Cl⁻
                  </span>
                  <span className="text-[10px] text-emerald-300 font-mono">Anion</span>
                </div>
                <div className="flex flex-col items-center gap-1 animate-pulse">
                  <span className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shadow-lg shadow-amber-400/40">
                    Na⁺
                  </span>
                  <span className="text-[10px] text-amber-300 font-mono">Kation</span>
                </div>
                <div className="flex flex-col items-center gap-1 animate-pulse">
                  <span className="w-8 h-8 rounded-full bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center shadow-lg shadow-emerald-400/40">
                    Cl⁻
                  </span>
                  <span className="text-[10px] text-emerald-300 font-mono">Anion</span>
                </div>
              </div>
              <p className="text-[11px] text-cyan-300/90 text-center mt-2 font-mono">
                Medan listrik menarik Na⁺ ke katoda (-) dan Cl⁻ ke anoda (+)
              </p>
            </div>

            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                <span>Mengalami <strong>disosiasi</strong> (pada senyawa ion) atau <strong>ionisasi</strong> (pada kovalen polar).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                <span>Aliran ion bermuatan menghantarkan muatan listrik antar elektroda.</span>
              </li>
            </ul>
          </Card>

          {/* Card 2: Larutan Non-Elektrolit (Molekul Netral) */}
          <Card className="p-6 sm:p-8 border-slate-300/80 bg-gradient-to-br from-slate-50/50 via-white to-slate-100/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200/40 rounded-bl-full pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-slate-700 text-white flex items-center justify-center font-bold shadow-md shadow-slate-700/20">
                <Orbit className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Representasi Mikroskopis</span>
                <h3 className="text-xl font-extrabold text-slate-900">Larutan Non-Elektrolit (Molekul Netral)</h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Ketika gula pasir (sukrosa) atau urea dilarutkan dalam air, zat tersebut <strong className="text-slate-800">larut sempurna namun tetap berupa molekul netral</strong> tanpa terpecah menjadi ion bermuatan.
            </p>

            {/* Particle Diagram Visual */}
            <div className="p-4 rounded-xl bg-slate-900 text-white mb-6 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 mb-3 border-b border-slate-800">
                <span className="font-mono">Partikel Tidak Bermuatan (Molekul Netral)</span>
                <span className="text-rose-400 font-semibold flex items-center gap-1">
                  <X className="w-3.5 h-3.5" /> Arus Terputus
                </span>
              </div>
              <div className="h-28 rounded-lg bg-slate-950 flex flex-wrap items-center justify-around p-3 relative overflow-hidden">
                <div className="flex flex-col items-center gap-1">
                  <span className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs border border-slate-700">
                    C₁₂H₂₂O₁₁
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Muatan = 0</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs border border-slate-700">
                    C₁₂H₂₂O₁₁
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Muatan = 0</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs border border-slate-700">
                    C₁₂H₂₂O₁₁
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Muatan = 0</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 text-center mt-2 font-mono">
                Molekul netral tidak tertarik ke kutub elektroda (+ atau -)
              </p>
            </div>

            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">•</span>
                <span>Tidak terjadi pembentukan ion dari zat terlarut (α = 0).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">•</span>
                <span>Tidak ada pembawa muatan bebas, sehingga lampu uji tidak menyala.</span>
              </li>
            </ul>
          </Card>

        </div>

        {/* Action Link to Full Material */}
        <div className="text-center mt-12">
          <Button
            variant="secondary"
            size="md"
            onClick={() => setActivePage('materi')}
            icon={ArrowRight}
            iconPosition="right"
          >
            Pelajari Teori Lengkap & Persamaan Reaksi
          </Button>
        </div>

      </div>
    </section>
  );
}
