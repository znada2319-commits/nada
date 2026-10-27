import React, { useState } from 'react';
import { ArrowRight, Play, Zap, Sparkles, Lightbulb, Activity, Check, RefreshCw, Beaker } from 'lucide-react';
import Button from '../ui/Button';
import { solutions } from '../../data/solutions';

export default function HeroSection({ setActivePage }) {
  const [selectedSolutionId, setSelectedSolutionId] = useState('strong-electrolyte');
  const [isSwitchClosed, setIsSwitchClosed] = useState(true);

  const activeSolution = solutions.find((s) => s.id === selectedSolutionId) || solutions[0];

  const isLightOn = isSwitchClosed && activeSolution.bulbState !== 'off';
  const isBright = isSwitchClosed && activeSolution.bulbState === 'bright';
  const isDim = isSwitchClosed && activeSolution.bulbState === 'dim';

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative background glows & chemistry grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-200/40 via-blue-100/30 to-transparent blur-3xl rounded-full"></div>
        <div className="absolute top-48 right-10 w-72 h-72 bg-emerald-200/30 blur-2xl rounded-full"></div>
        <div className="absolute top-64 left-10 w-72 h-72 bg-amber-200/25 blur-2xl rounded-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-300/60 text-cyan-900 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping"></span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Simulasi Kimia SMA Kelas XI • Kurikulum Merdeka</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Kenali Rahasia{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Larutan
              </span>{' '}
              di Sekitar Kita!
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              Jelajahi dunia <strong className="text-slate-800 font-semibold">larutan elektrolit dan non-elektrolit</strong> melalui penjelasan konsep visual, simulasi laboratorium uji daya hantar listrik interaktif, dan kuis evaluasi formatif.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setActivePage('materi')}
                icon={ArrowRight}
                iconPosition="right"
                className="shadow-xl shadow-cyan-500/25 group"
              >
                <span>Mulai Belajar Teori</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => setActivePage('simulasi')}
                icon={Play}
                iconPosition="left"
                className="hover:border-cyan-400 group"
              >
                <span>Buka Lab Virtual</span>
              </Button>
            </div>

            {/* Quick Micro-stats / Key highlights */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 max-w-lg">
              <div>
                <p className="text-2xl font-extrabold text-cyan-600">3</p>
                <p className="text-xs font-medium text-slate-500 mt-0.5">Kategori Larutan</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-blue-600">Virtual</p>
                <p className="text-xs font-medium text-slate-500 mt-0.5">Uji Daya Hantar</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-emerald-600">100%</p>
                <p className="text-xs font-medium text-slate-500 mt-0.5">Gratis & Tanpa Login</p>
              </div>
            </div>
          </div>

          {/* Right Hero Visual: Interactive Mini Laboratory Simulator */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-400/30 via-slate-200/50 to-blue-500/20 shadow-2xl backdrop-blur-md">
              <div className="rounded-[22px] bg-slate-900 text-white p-5 sm:p-6 shadow-inner relative overflow-hidden">
                
                {/* Lab Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-mono text-slate-400 ml-2">preview-lab.v1</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/60 font-mono">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>Uji Interaktif</span>
                  </div>
                </div>

                {/* Solution Selector Tabs inside Hero */}
                <div className="space-y-1 mb-4">
                  <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Pilih Larutan Sampel:
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
                    {solutions.map((sol) => {
                      const isSelected = sol.id === selectedSolutionId;
                      return (
                        <button
                          key={sol.id}
                          onClick={() => setSelectedSolutionId(sol.id)}
                          className={`px-2 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            isSelected
                              ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 scale-100 font-bold'
                              : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                          }`}
                        >
                          <div className="truncate">{sol.compound}</div>
                          <div className="text-[10px] opacity-75 font-normal truncate">{sol.label.split(' ')[0]}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Lab Apparatus Scene */}
                <div className="relative h-64 bg-slate-950/90 rounded-2xl border border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
                  
                  {/* Top: Circuit wires, Switch & External Light Bulb */}
                  <div className="flex items-center justify-between px-2 pt-1 z-10">
                    {/* Switch Control */}
                    <button
                      onClick={() => setIsSwitchClosed(!isSwitchClosed)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                        isSwitchClosed
                          ? 'bg-emerald-950/80 border-emerald-600 text-emerald-400'
                          : 'bg-rose-950/80 border-rose-600 text-rose-400'
                      }`}
                      title="Klik untuk membuka/menutup saklar"
                    >
                      <span className={`w-2 h-2 rounded-full ${isSwitchClosed ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`}></span>
                      <span>Saklar: {isSwitchClosed ? 'ON' : 'OFF'}</span>
                    </button>

                    {/* Light Bulb (Located OUTSIDE beaker as per PRD Section 6.2) */}
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        {/* Glow halo when turned on */}
                        {isBright && (
                          <div className="absolute -inset-4 bg-amber-400/60 rounded-full blur-md animate-pulse"></div>
                        )}
                        {isDim && (
                          <div className="absolute -inset-2 bg-amber-400/25 rounded-full blur-sm"></div>
                        )}

                        {/* Lightbulb housing */}
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                            isBright
                              ? 'bg-amber-300 text-amber-950 border-amber-200 shadow-[0_0_25px_rgba(251,191,36,0.9)] scale-110'
                              : isDim
                              ? 'bg-amber-600/70 text-amber-200 border-amber-500 shadow-[0_0_12px_rgba(251,191,36,0.4)]'
                              : 'bg-slate-800 text-slate-500 border-slate-700'
                          }`}
                        >
                          <Lightbulb className={`w-6 h-6 ${isBright ? 'stroke-[2.5]' : ''}`} />
                        </div>
                      </div>
                      <span className="text-[10px] font-mono mt-1 text-slate-400">
                        {isSwitchClosed ? (
                          isBright ? '💡 Menyala Terang' : isDim ? '🕯️ Menyala Redup' : '❌ Lampu Padam'
                        ) : (
                          'Saklar Terbuka'
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Circuit Wires connecting to electrodes */}
                  <div className="w-full flex justify-around px-8 relative -mb-2 z-10 pointer-events-none">
                    <div className="w-0.5 h-7 bg-cyan-500/80 shadow-[0_0_8px_rgba(56,189,248,0.5)]"></div>
                    <div className="w-0.5 h-7 bg-cyan-500/80 shadow-[0_0_8px_rgba(56,189,248,0.5)]"></div>
                  </div>

                  {/* Chemistry Beaker with submerged electrodes & floating particles */}
                  <div className="relative h-36 rounded-b-2xl border-2 border-t-0 border-cyan-400/40 bg-slate-900/60 overflow-hidden flex flex-col justify-end">
                    
                    {/* Two submerged metal electrodes */}
                    <div className="absolute top-0 inset-x-0 flex justify-around px-8 h-24 z-10 pointer-events-none">
                      {/* Anode / Positif */}
                      <div className="w-3 bg-gradient-to-b from-slate-400 to-slate-600 rounded-b shadow flex flex-col items-center justify-between pb-1">
                        <span className="text-[9px] font-bold text-slate-900">+</span>
                      </div>
                      {/* Katode / Negatif */}
                      <div className="w-3 bg-gradient-to-b from-slate-400 to-slate-600 rounded-b shadow flex flex-col items-center justify-between pb-1">
                        <span className="text-[9px] font-bold text-slate-900">-</span>
                      </div>
                    </div>

                    {/* Liquid fill in beaker */}
                    <div
                      className="w-full h-28 relative transition-colors duration-500 overflow-hidden"
                      style={{
                        backgroundColor: activeSolution.liquidColor,
                        borderTop: `2px solid ${activeSolution.borderLiquid}`,
                      }}
                    >
                      {/* Gas bubbles around electrodes if strong/weak electrolyte and switch is on */}
                      {isSwitchClosed && activeSolution.hasGasBubbles && (
                        <>
                          <div className="absolute left-[26%] bottom-2 flex flex-col items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-bubble-1"></span>
                            <span className="w-2 h-2 rounded-full bg-white/70 animate-bubble-2"></span>
                            {activeSolution.bubbleRate === 'high' && (
                              <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-bubble-3"></span>
                            )}
                          </div>
                          <div className="absolute right-[26%] bottom-2 flex flex-col items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-bubble-2"></span>
                            <span className="w-2 h-2 rounded-full bg-white/70 animate-bubble-1"></span>
                            {activeSolution.bubbleRate === 'high' && (
                              <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-bubble-3"></span>
                            )}
                          </div>
                        </>
                      )}

                      {/* Moving particles (cations, anions, molecules) */}
                      <div className="absolute inset-0 p-2 flex flex-wrap items-center justify-around gap-1.5 opacity-90">
                        {activeSolution.particles.slice(0, 8).map((p, idx) => (
                          <span
                            key={p.id}
                            className={`inline-flex items-center justify-center text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-xs transition-transform duration-700 ${
                              p.color
                            } ${
                              isSwitchClosed && p.type === 'cation'
                                ? 'translate-x-3 duration-1000'
                                : isSwitchClosed && p.type === 'anion'
                                ? '-translate-x-3 duration-1000'
                                : ''
                            }`}
                          >
                            {p.label}
                          </span>
                        ))}
                      </div>

                      {/* Liquid Meniscus label */}
                      <div className="absolute bottom-1 right-2 text-[9px] font-mono text-slate-300/80 bg-slate-900/60 px-1.5 rounded">
                        {activeSolution.name.split('(')[0]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick takeaway summary footer */}
                <div className="mt-3 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>
                    <span className="text-slate-300 truncate">
                      {activeSolution.category}: <span className="text-white font-medium">{activeSolution.keyTakeaway.split('→')[0]}</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setActivePage('simulasi')}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold text-[11px] shrink-0 underline decoration-cyan-500/50"
                  >
                    Buka Lab Penuh →
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
