import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, RotateCcw, ArrowRight, ArrowLeft, Award, BookOpen, Check, X, Sparkles } from 'lucide-react';
import { questions } from '../data/questions';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function KuisPage({ setActivePage }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIdx];

  const handleSelectOption = (optionIndex) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentIdx(0);
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate score
  const correctCount = questions.reduce((count, q) => {
    return answers[q.id] === q.correctAnswer ? count + 1 : count;
  }, 0);
  const score = Math.round((correctCount / totalQuestions) * 100);

  const answeredCount = Object.keys(answers).length;
  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-800 border border-purple-200 mb-3">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Evaluasi Pembelajaran Kimia SMA
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Kuis Formatif: Larutan Elektrolit
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Uji pemahaman konsepmu melalui 10 soal terstruktur lengkap dengan pembahasan.
        </p>
      </div>

      {!isSubmitted ? (
        /* Quiz Active Screen */
        <Card className="p-6 sm:p-10 border-slate-200 bg-white space-y-6">
          {/* Progress Bar & Counter */}
          <div className="space-y-2 pb-4 border-b border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-100">
                Soal {currentIdx + 1} dari {totalQuestions}
              </span>
              <span className="text-slate-500 font-medium">
                {answeredCount} dari {totalQuestions} terjawab
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-cyan-500 transition-all duration-300 rounded-full"
                style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question topic & statement */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Topik: {currentQuestion.topic}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {currentQuestion.question}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-3 pt-2">
            {currentQuestion.options.map((opt, optIdx) => {
              const isSelected = answers[currentQuestion.id] === optIdx;
              return (
                <button
                  key={optIdx}
                  type="button"
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                    isSelected
                      ? 'border-cyan-500 bg-cyan-50/70 text-cyan-950 font-semibold ring-2 ring-cyan-500/20'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 border transition-colors ${
                      isSelected
                        ? 'bg-cyan-500 text-white border-cyan-500'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    {optionLetters[optIdx]}
                  </span>
                  <span className="text-sm pt-0.5 leading-relaxed">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Question Navigator Dots */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4 pb-2">
            {questions.map((q, idx) => {
              const isAnswered = answers[q.id] !== undefined;
              const isCurrent = idx === currentIdx;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                    isCurrent
                      ? 'bg-cyan-600 text-white ring-2 ring-cyan-600/30'
                      : isAnswered
                      ? 'bg-cyan-100 text-cyan-800'
                      : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                  }`}
                  aria-label={`Pindah ke soal ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrev}
              disabled={currentIdx === 0}
              icon={ArrowLeft}
              iconPosition="left"
            >
              Sebelumnya
            </Button>

            {currentIdx < totalQuestions - 1 ? (
              <Button
                variant="primary"
                size="sm"
                onClick={handleNext}
                icon={ArrowRight}
                iconPosition="right"
              >
                Berikutnya
              </Button>
            ) : (
              <Button
                variant="success"
                size="sm"
                onClick={handleSubmit}
                icon={CheckCircle2}
                iconPosition="right"
              >
                Selesaikan Kuis
              </Button>
            )}
          </div>
        </Card>
      ) : (
        /* Quiz Result & Review Screen */
        <div className="space-y-8">
          {/* Result Summary Card */}
          <Card className="p-8 sm:p-10 border-slate-200 bg-white text-center space-y-6">
            <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-cyan-100 text-cyan-700 shadow-inner">
              <Award className="w-10 h-10" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Hasil Evaluasi Kuis
              </p>
              <div className="text-5xl sm:text-6xl font-black text-slate-900 mt-2 font-mono">
                {score}<span className="text-2xl text-slate-400">/100</span>
              </div>
              <p className="text-sm font-semibold text-cyan-700 mt-2">
                {correctCount} dari {totalQuestions} soal dijawab dengan benar
              </p>
            </div>

            {/* Motivational message according to PRD 7.7 */}
            <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-700">
              {score >= 80 ? (
                <span>🎉 <strong>Luar biasa!</strong> Kamu sudah menguasai sebagian besar konsep larutan elektrolit dan non-elektrolit dengan sangat baik.</span>
              ) : score >= 60 ? (
                <span>👍 <strong>Cukup baik!</strong> Kamu sudah memahami dasar konsepnya. Tinjau kembali pembahasan di bawah untuk memperdalam materi.</span>
              ) : (
                <span>💪 <strong>Terus berlatih!</strong> Pelajari kembali materi modul teori, lalu ulangi kuis untuk hasil yang lebih maksimal.</span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={handleRestart}
                icon={RotateCcw}
                iconPosition="left"
              >
                Ulangi Kuis
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  setActivePage('materi');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                icon={BookOpen}
                iconPosition="left"
              >
                Pelajari Kembali Materi
              </Button>
            </div>
          </Card>

          {/* Detailed Question Review List */}
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold text-slate-900">
              Pembahasan Jawaban Detail
            </h3>

            {questions.map((q, idx) => {
              const userAnswer = answers[q.id];
              const isCorrect = userAnswer === q.correctAnswer;
              return (
                <Card
                  key={q.id}
                  className={`p-6 border ${
                    isCorrect ? 'border-emerald-200 bg-emerald-50/20' : 'border-rose-200 bg-rose-50/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-bold text-slate-500 font-mono">
                      Soal #{idx + 1} • {q.topic}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isCorrect ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                      {isCorrect ? 'Jawaban Benar' : 'Jawaban Kurang Tepat'}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-4">
                    {q.question}
                  </h4>

                  <div className="space-y-2 text-xs sm:text-sm mb-4">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Jawaban Kamu:</span>
                      <span className={`font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {userAnswer !== undefined ? `${optionLetters[userAnswer]}. ${q.options[userAnswer]}` : 'Tidak dijawab'}
                      </span>
                    </div>

                    {!isCorrect && (
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                        <span className="text-emerald-800 font-medium">Kunci Jawaban Benar:</span>
                        <span className="font-bold text-emerald-900">
                          {optionLetters[q.correctAnswer]}. {q.options[q.correctAnswer]}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Scientific Explanation */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                    <p className="font-bold text-slate-900">Pembahasan Ilmiah:</p>
                    <p className="leading-relaxed">{q.explanation}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
