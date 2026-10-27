import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none';

  const variants = {
    primary: 'bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 focus-visible:ring-cyan-500 border border-cyan-400/30',
    secondary: 'bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white shadow-md shadow-slate-900/20 focus-visible:ring-slate-900',
    outline: 'border-2 border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/50 text-slate-700 hover:text-cyan-700 focus-visible:ring-cyan-500 bg-white/80 backdrop-blur-sm',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 focus-visible:ring-slate-400',
    success: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 focus-visible:ring-emerald-500',
    amber: 'bg-amber-500 hover:bg-amber-600 text-amber-950 font-semibold shadow-md shadow-amber-500/20 focus-visible:ring-amber-500',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
