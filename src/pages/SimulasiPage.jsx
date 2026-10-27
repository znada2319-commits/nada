import React, { useState } from 'react';
import { Play, RotateCcw, Zap, Sparkles, Lightbulb, Info, AlertTriangle, CheckCircle2, FlaskConical } from 'lucide-react';
import { solutions } from '../data/solutions';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function SimulasiPage({ setActivePage }) {
  const [selectedSolutionId, setSelectedSolutionId] = useState('strong-electrolyte');
  const [isRunning, setIsRunning] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  const activeSolution = solutions.find((s) => s.id === selectedSolutionId) || solutions[0];

  const handleSelectSolution = (solId) => {
    setSelectedSolutionId(solId);
    setIsRunning(false);
    setHasResult(false);
  };

  const handleStartTest = () => {
    setIsRunning(true);
    // Simulate test completion
    setTimeout(() => {
      setHasResult(true);
      setIsRunning(false);
    }, 600);
  };

  const handleReset = () => {
    setIsRunning(false);
    setHasResult(false);
  };

  const isLightActive = hasResult && activeSolution.bulbState !== 'off';
  const isBright = hasResult && activeSolution.bulbState === 'bright';
  const isDim = hasResult && activeSolution.bulbState === 'dim';

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
          <Play className="w-3.5 h-3.5 fill-current" />
          Laboratorium Kimia Virtual
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Simulasi Uji Daya Hantar Listrik
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600">
          Celupkan dua elektroda ke dalam larutan uji, aktifkan rangkaian tertutup, dan amati respons lampu indikator serta gerak partikel ion.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Control Panel */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6 border-slate-200 bg-white space-y-5">
            <h3 className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Panel Kontrol Uji</span>
              <span className="text-xs font-mono text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded">
                v1.0
              </span>
            </h3>

            {/* Solution Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Pilih Larutan Uji:
              </label>
              <div className="space-y-2">
                {solutions.map((sol) => {
                  const isSelected = sol.id === selectedSolutionId;
                  return (
                    <button
                      key={sol.id}
                      onClick={() => handleSelectSolution(sol.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-50/70 text-cyan-950 font-bold shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold">{sol.label}</div>
                        <div className="text-xs text-slate-500 font-mono mt-0.5">{sol.name}</div>
                      </div>
                      <span className="text-xs font-mono px-2 py-1 rounded bg-white/80 border border-slate-200">
                        {sol.compound}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={handleStartTest}
                disabled={isRunning}
                icon={Play}
                iconPosition="left"
                className="w-full"
              >
                {isRunning ? 'Menguji...' : hasResult ? 'Uji Ulang' : 'Mulai Uji'}
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={handleReset}
                icon={RotateCcw}
                iconPosition="left"
                className="w-full"
              >
                Reset
              </Button>
            </div>

            {/* Instruction tip */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-cyan-600" /> Petunjuk Pengujian:
              </p>
              <p>
                Tekan tombol <strong>Mulai Uji</strong> untuk mengalirkan arus listrik dari sumber tegangan ke dua batang elektroda.
              </p>
            </div>
          </Card>

          {/* Quick Scientific Note according to PRD 6.2 */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 space-y-1.5">
            <h4 className="font-bold flex items-center gap-1.5 text-amber-950">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Catatan Representasi Ilmiah:
            </h4>
            <p className="leading-relaxed">
              Lampu berada di luar wadah sebagai bagian dari rangkaian tertutup. Dua batang elektroda (karbon/logam) dicelupkan ke larutan. Simulasi ini bersifat kualitatif konseptual.
            </p>
          </div>
        </div>

        {/* Right Column: Virtual Lab Apparatus & Scientific Explanation */}
        <div className="lg:col-span-8 space-y-6">
          <Card className="p-6 sm:p-8 bg-slate-900 text-white border-slate-800 shadow-2xl relative overflow-hidden">
            
            {/* Header info bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-slate-300 font-mono">
                  Sampel Aktif: <strong className="text-white">{activeSolution.name}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded-md border border-cyan-800">
                  {hasResult ? (isLightActive ? 'Rangkaian Tertutup: Arus Mengalir' : 'Rangkaian Tertutup: Tidak Mengalir') : 'Rangkaian Siap'}
                </span>
              </div>
            </div>

            {/* Lab Apparatus Visual Container */}
            <div className="h-80 sm:h-96 bg-slate-950 rounded-2xl border border-slate-800/80 p-6 flex flex-col justify-between relative overflow-hidden">
              
              {/* TOP: Circuit Wires, Battery (DC), & Lightbulb OUTSIDE the beaker */}
              <div className="flex items-center justify-around z-20">
                {/* DC Battery representation */}
                <div className="flex flex-col items-center">
                  <div className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 flex items-center gap-2 text-xs font-mono">
                    <span className="text-rose-400 font-bold">+</span>
                    <span className="text-slate-300">Baterai DC</span>
                    <span className="text-cyan-400 font-bold">-</span>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1">Sumber Tegangan</span>
                </div>

                {/* External Indicator Lightbulb */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    {/* Glow effect */}
                    {isBright && (
                      <div className="absolute -inset-6 bg-amber-400/50 rounded-full blur-xl animate-pulse"></div>
                    )}
                    {isDim && (
                      <div className="absolute -inset-3 bg-amber-400/25 rounded-full blur-md"></div>
                    )}

                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                        isBright
                          ? 'bg-amber-300 text-amber-950 border-amber-200 shadow-[0_0_35px_rgba(251,191,36,0.9)] scale-110'
                          : isDim
                          ? 'bg-amber-600/80 text-amber-200 border-amber-500 shadow-[0_0_15px_rgba(251,191,36,0.4)]'
                          : 'bg-slate-800 text-slate-500 border-slate-700'
                      }`}
                    >
                      <Lightbulb className={`w-8 h-8 ${isBright ? 'stroke-[2.5]' : ''}`} />
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold mt-2">
                    {hasResult ? (
                      isBright ? '💡 Menyala Terang' : isDim ? '🕯️ Menyala Redup' : '❌ Lampu Mati'
                    ) : (
                      'Lampu Siap'
                    )}
                  </span>
                </div>
              </div>

              {/* Connecting circuit wires */}
              <div className="w-full flex justify-around px-16 relative -mb-3 z-10 pointer-events-none">
                <div className={`w-1 h-12 transition-colors duration-300 ${isLightActive ? 'bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]' : 'bg-slate-700'}`}></div>
                <div className={`w-1 h-12 transition-colors duration-300 ${isLightActive ? 'bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]' : 'bg-slate-700'}`}></div>
              </div>

              {/* BOTTOM: Chemistry Beaker with submerged electrodes & floating particles */}
              <div className="relative h-48 sm:h-56 rounded-b-3xl border-2 border-t-0 border-cyan-400/40 bg-slate-900/60 overflow-hidden flex flex-col justify-end">
                
                {/* Two Submerged Metal Electrodes */}
                <div className="absolute top-0 inset-x-0 flex justify-around px-16 h-36 z-10 pointer-events-none">
                  {/* Positive Anode */}
                  <div className="w-4 bg-gradient-to-b from-slate-400 via-slate-500 to-slate-700 rounded-b shadow-lg flex flex-col items-center justify-between pb-1.5">
                    <span className="text-[10px] font-black text-slate-900 bg-slate-200 px-1 rounded-full">+</span>
                    <span className="text-[8px] font-mono text-slate-300">Anoda</span>
                  </div>
                  {/* Negative Cathode */}
                  <div className="w-4 bg-gradient-to-b from-slate-400 via-slate-500 to-slate-700 rounded-b shadow-lg flex flex-col items-center justify-between pb-1.5">
                    <span className="text-[10px] font-black text-slate-900 bg-slate-200 px-1 rounded-full">-</span>
                    <span className="text-[8px] font-mono text-slate-300">Katoda</span>
                  </div>
                </div>

                {/* Liquid container fill */}
                <div
                  className="w-full h-40 relative transition-colors duration-500 overflow-hidden"
                  style={{
                    backgroundColor: activeSolution.liquidColor,
                    borderTop: `2px solid ${activeSolution.borderLiquid}`,
                  }}
                >
                  {/* Bubbles on electrodes if test executed and gas is produced */}
                  {hasResult && activeSolution.hasGasBubbles && (
                    <>
                      <div className="absolute left-[26%] bottom-3 flex flex-col items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-white/90 animate-bubble-1"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-white/80 animate-bubble-2"></span>
                        {activeSolution.bubbleRate === 'high' && (
                          <span className="w-2 h-2 rounded-full bg-white/90 animate-bubble-3"></span>
                        )}
                      </div>
                      <div className="absolute right-[26%] bottom-3 flex flex-col items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-white/90 animate-bubble-2"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-white/80 animate-bubble-1"></span>
                        {activeSolution.bubbleRate === 'high' && (
                          <span className="w-2 h-2 rounded-full bg-white/90 animate-bubble-3"></span>
                        )}
                      </div>
                    </>
                  )}

                  {/* Microscopic particles display */}
                  <div className="absolute inset-0 p-3 flex flex-wrap items-center justify-around gap-2 opacity-95">
                    {activeSolution.particles.map((p) => {
                      const isMigrating = hasResult;
                      return (
                        <span
                          key={p.id}
                          className={`inline-flex items-center justify-center text-xs font-black px-2 py-0.5 rounded-full shadow-md transition-all duration-1000 ${
                            p.color
                          } ${
                            isMigrating && p.type === 'cation'
                              ? 'translate-x-6 scale-105'
                              : isMigrating && p.type === 'anion'
                              ? '-translate-x-6 scale-105'
                              : ''
                          }`}
                        >
                          {p.label}
                        </span>
                      );
                    })}
                  </div>

                  <div className="absolute bottom-1.5 right-3 text-[10px] font-mono text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                    Gelas Kimia 250 mL
                  </div>
                </div>
              </div>
            </div>

            {/* Scientific Explanation Card below apparatus */}
            <div className="mt-6 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Interpretasi Ilmiah Hasil Pengujian
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeSolution.degreeOfIonization}
                </span>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed">
                {hasResult
                  ? activeSolution.explanation
                  : 'Tekan tombol "Mulai Uji" di panel sebelah kiri untuk melihat reaksi pergerakan ion dan nyala lampu indikator.'}
              </p>

              {hasResult && (
                <div className="pt-2 border-t border-slate-800 text-xs font-mono text-cyan-300 flex items-center gap-2">
                  <span>Persamaan Reaksi:</span>
                  <code className="bg-slate-900 px-2 py-1 rounded text-cyan-200">
                    {activeSolution.equation}
                  </code>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
