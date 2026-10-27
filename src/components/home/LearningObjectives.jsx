import React from 'react';
import { Target, CheckCircle2, Award, ArrowRight, Compass } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function LearningObjectives({ setActivePage }) {
  const objectives = [
    {
      num: '01',
      title: 'Konsep Dasar Larutan',
      desc: 'Mampu menjelaskan pengertian larutan, zat terlarut, pelarut, serta definisi larutan elektrolit dan non-elektrolit dengan benar.'
    },
    {
      num: '02',
      title: 'Mekanisme Pembentukan Ion',
      desc: 'Membedakan elektrolit kuat dan lemah berdasarkan derajat ionisasi (α) serta mekanisme disosiasi ionik versus ionisasi kovalen polar.'
    },
    {
      num: '03',
      title: 'Peran Ion Bergerak',
      desc: 'Menghubungkan keberadaan ion bermuatan yang bebas bergerak dengan kemampuan menghantarkan arus listrik melalui medan listrik.'
    },
    {
      num: '04',
      title: 'Interpretasi Eksperimen Virtual',
      desc: 'Menginterpretasikan hasil uji kualitatif berupa nyala terang, redup, atau padamnya lampu serta kemunculan gelembung gas di elektroda.'
    },
    {
      num: '05',
      title: 'Aplikasi dalam Kehidupan Nyata',
      desc: 'Mengidentifikasi dan mengelompokkan bahan sehari-hari (air garam, cuka, sirup gula, oralit, air aki) ke dalam kategori yang tepat.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading and Motivation */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-900/60 text-cyan-300 border border-cyan-700/50">
                <Target className="w-3.5 h-3.5" />
                Capaian Pembelajaran (CP)
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Tujuan Pembelajaran Siswa SMA
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Setelah mempelajari materi dan menyelesaikan simulasi di website ElektroLab, siswa diharapkan menguasai 5 capaian kompetensi esensial berikut:
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Evaluasi Terpadu</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Uji pemahamanmu dengan 10 butir soal kuis formatif di akhir pembelajaran.</p>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setActivePage('kuis')}
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Langsung Coba Kuis Evaluasi
                </Button>
              </div>
            </div>

            {/* Right Column: 5 Objectives list */}
            <div className="lg:col-span-7 space-y-3">
              {objectives.map((obj) => (
                <div
                  key={obj.num}
                  className="p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-start gap-4 group"
                >
                  <span className="text-sm font-black text-cyan-400 font-mono px-2 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800/60 shrink-0">
                    {obj.num}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {obj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
