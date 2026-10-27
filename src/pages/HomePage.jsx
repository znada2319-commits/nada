import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ConceptIntro from '../components/home/ConceptIntro';
import FeatureCards from '../components/home/FeatureCards';
import QuickComparison from '../components/home/QuickComparison';
import LearningObjectives from '../components/home/LearningObjectives';
import Button from '../components/ui/Button';
import { ArrowRight, Play, BookOpen, CheckCircle2 } from 'lucide-react';

export default function HomePage({ setActivePage }) {
  return (
    <div className="space-y-0">
      {/* 1. Interactive Hero Section */}
      <HeroSection setActivePage={setActivePage} />

      {/* 2. Visual Concept Introduction (Ion Bergerak vs Molekul Netral) */}
      <ConceptIntro setActivePage={setActivePage} />

      {/* 3. Core Feature Cards */}
      <FeatureCards setActivePage={setActivePage} />

      {/* 4. Quick Comparison of 3 Solution Types */}
      <QuickComparison setActivePage={setActivePage} />

      {/* 5. Curriculum Learning Objectives */}
      <LearningObjectives setActivePage={setActivePage} />

      {/* 6. Pre-footer CTA Callout */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Siap Mencoba Eksperimen Laboratorium Sendiri?
          </h2>
          <p className="text-base sm:text-lg text-cyan-50 max-w-2xl mx-auto leading-relaxed">
            Pilih larutan uji, sambungkan saklar, dan amati nyala lampu serta pergerakan partikel ion secara langsung di simulasi laboratorium virtual.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                setActivePage('simulasi');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              icon={Play}
              iconPosition="left"
              className="bg-slate-900 text-white hover:bg-slate-950 shadow-xl"
            >
              Buka Simulasi Lab Virtual
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setActivePage('kuis');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              icon={CheckCircle2}
              iconPosition="left"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm"
            >
              Uji Kemampuan di Kuis Formatif
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
