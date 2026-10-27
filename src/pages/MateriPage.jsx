import React, { useState } from 'react';
import { BookOpen, Sparkles, ArrowRight, Play, CheckCircle2, ChevronRight, Zap, Atom } from 'lucide-react';
import { materialSections } from '../data/materials';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function MateriPage({ setActivePage }) {
  const [activeTab, setActiveTab] = useState(materialSections[0].id);

  const currentSection = materialSections.find((s) => s.id === activeTab) || materialSections[0];

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100 text-cyan-800 border border-cyan-200 mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          Modul Teori Kimia SMA
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Larutan Elektrolit & Non-Elektrolit
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600">
          Pelajari konsep ilmiah, mekanisme pembentukan ion, derajat ionisasi, serta perbedaan kualitatif daya hantar listrik.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar Nav */}
        <div className="lg:col-span-4 sticky top-24 space-y-2">
          <div className="p-2 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-2">
              Daftar Submateri
            </h3>
            {materialSections.map((sec, idx) => {
              const isActive = sec.id === activeTab;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveTab(sec.id)}
                  className={`w-full text-left px-3.5 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-50 text-cyan-800 border border-cyan-200 shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  <span className="truncate">{sec.title}</span>
                  <span className="text-xs font-normal text-slate-400 ml-2 shrink-0">{sec.badge}</span>
                </button>
              );
            })}
          </div>

          {/* Quick CTA to Simulation */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg space-y-3">
            <h4 className="font-extrabold text-base flex items-center gap-2">
              <Play className="w-4 h-4 fill-current" />
              Uji Teori Ini di Lab!
            </h4>
            <p className="text-xs text-cyan-100 leading-relaxed">
              Langsung amati perbedaan nyala lampu dan gerakan ion kation/anion di simulator laboratorium virtual.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setActivePage('simulasi');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full bg-slate-900 text-white hover:bg-slate-950 text-xs"
            >
              Buka Simulasi Lab →
            </Button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-8">
          <Card className="p-6 sm:p-10 border-slate-200 bg-white shadow-sm space-y-8">
            {/* Title & Badge */}
            <div className="border-b border-slate-100 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100 text-cyan-800">
                  {currentSection.badge}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {currentSection.title}
              </h2>
              <p className="text-base text-cyan-700 font-medium mt-2 bg-cyan-50/70 p-3 rounded-xl border border-cyan-100">
                💡 {currentSection.summary}
              </p>
            </div>

            {/* Standard Text Content */}
            {currentSection.content && (
              <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                {currentSection.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="whitespace-pre-line leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* Comparison Table if present */}
            {currentSection.tableData && (
              <div className="space-y-4">
                <h4 className="text-base font-bold text-slate-900">
                  Tabel Perbedaan Sifat Larutan
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm">
                    <thead className="bg-slate-50 text-slate-700 font-bold">
                      <tr>
                        <th className="px-4 py-3.5 text-left">Aspek Perbandingan</th>
                        <th className="px-4 py-3.5 text-left text-cyan-700">Elektrolit Kuat</th>
                        <th className="px-4 py-3.5 text-left text-amber-700">Elektrolit Lemah</th>
                        <th className="px-4 py-3.5 text-left text-slate-600">Non-Elektrolit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {currentSection.tableData.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="px-4 py-3 font-semibold text-slate-900 bg-slate-50/30">
                            {row.aspect}
                          </td>
                          <td className="px-4 py-3 text-cyan-900 font-medium">{row.strong}</td>
                          <td className="px-4 py-3 text-amber-900 font-medium">{row.weak}</td>
                          <td className="px-4 py-3 text-slate-600">{row.none}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Daily Life Cards if present */}
            {currentSection.cards && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentSection.cards.map((c, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-100 text-cyan-800">
                      {c.type}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">{c.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Key takeaway alert box */}
            {currentSection.takeaway && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Poin Kunci Konseptual
                  </h4>
                  <p className="text-sm font-medium text-emerald-900 mt-1">
                    {currentSection.takeaway}
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Nav between sections */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const currIdx = materialSections.findIndex((s) => s.id === activeTab);
                  if (currIdx > 0) setActiveTab(materialSections[currIdx - 1].id);
                }}
                disabled={materialSections.findIndex((s) => s.id === activeTab) === 0}
              >
                ← Submateri Sebelumnya
              </Button>

              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  const currIdx = materialSections.findIndex((s) => s.id === activeTab);
                  if (currIdx < materialSections.length - 1) {
                    setActiveTab(materialSections[currIdx + 1].id);
                  } else {
                    setActivePage('simulasi');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                {materialSections.findIndex((s) => s.id === activeTab) === materialSections.length - 1
                  ? 'Coba Simulasi Lab →'
                  : 'Submateri Selanjutnya →'}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
