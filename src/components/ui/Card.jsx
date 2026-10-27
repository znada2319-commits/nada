import React from 'react';

export default function Card({
  children,
  className = '',
  hover = true,
  glow = false,
  ...props
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/90 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 ${
        hover ? 'hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1 hover:border-cyan-300/60' : ''
      } ${
        glow ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/10' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
